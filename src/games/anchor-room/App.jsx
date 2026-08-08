import { useState, useMemo, useEffect } from "react";
import { CASES } from "./cases.js";
import { computeSteadiness, maxSteadiness, DECIDE_SECONDS, HEAT_SECONDS, CONVERSATIONS_ALLOWED } from "./engine.js";
import { GameChrome, SiteFooter } from "../../design/components/Shell.jsx";
import KofiButton from "../../design/components/KofiButton.jsx";
import HeaderBar from "./screens/HeaderBar.jsx";
import TimerBar from "./screens/TimerBar.jsx";
import Title from "./screens/Title.jsx";
import Docket from "./screens/Docket.jsx";
import Brief from "./screens/Brief.jsx";
import Listen from "./screens/Listen.jsx";
import PressureEnvelope from "./screens/PressureEnvelope.jsx";
import Decide from "./screens/Decide.jsx";
import Headlines from "./screens/Headlines.jsx";
import Heat from "./screens/Heat.jsx";
import Later from "./screens/Later.jsx";
import Debrief from "./screens/Debrief.jsx";
import Signature from "./screens/Signature.jsx";
import Epilogue from "./screens/Epilogue.jsx";

const pad2 = (n) => String(n).padStart(2, "0");

export default function AnchorRoom() {
  const [screen, setScreen] = useState("title");
  const [docketIds, setDocketIds] = useState(null);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [consulted, setConsulted] = useState([]);
  const [log, setLog] = useState([]);
  const [currentDecision, setCurrentDecision] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [blindSpot, setBlindSpot] = useState("");
  const [anchorText, setAnchorText] = useState("");

  const chapters = useMemo(() => (docketIds ? docketIds.map((id) => CASES.find((c) => c.id === id)) : []), [docketIds]);
  const chapter = chapters[chapterIndex];
  const caseLabel = `CASE ${pad2(chapterIndex + 1)} / ${pad2(chapters.length)}`;
  const steadiness = useMemo(() => computeSteadiness(log), [log]);
  const maxStead = maxSteadiness(chapters.length);
  const lastEntry = log[log.length - 1];
  const voicesHeard = ["brief", "listen", "pressure"].includes(screen)
    ? consulted.length
    : lastEntry && lastEntry.chapter === chapter
      ? lastEntry.consulted.length
      : consulted.length;
  const casesRemaining = chapters.length - (chapterIndex + 1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [screen, chapterIndex]);

  useEffect(() => {
    if (!timerEnabled) {
      setTimeLeft(null);
      return;
    }
    if (screen === "decide") setTimeLeft(DECIDE_SECONDS);
    else if (screen === "heat") setTimeLeft(HEAT_SECONDS);
    else {
      setTimeLeft(null);
      return;
    }
    const id = setInterval(() => setTimeLeft((n) => (n == null ? null : Math.max(0, n - 1))), 1000);
    return () => clearInterval(id);
  }, [screen, timerEnabled, chapterIndex]);

  useEffect(() => {
    if (timeLeft !== 0 || !timerEnabled || !chapter) return;
    if (screen === "decide") chooseDecision(chapter.decisions[0], true);
    else if (screen === "heat") chooseHeat(chapter.heats[0], true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  function pickPack(ids) {
    setDocketIds(ids);
    setChapterIndex(0);
    setConsulted([]);
    setLog([]);
    setScreen("brief");
  }

  function goToCase(index) {
    setChapterIndex(index);
    setConsulted([]);
    setCurrentDecision(null);
    setScreen("brief");
  }

  function chooseDecision(decision, auto) {
    setCurrentDecision(decision);
    setLog((prev) => [
      ...prev,
      {
        decision,
        heat: null,
        consulted: [...consulted],
        chapter,
        extraPushes: auto ? ["Decision by default — the clock chose for you"] : [],
      },
    ]);
    setScreen("headlines");
  }

  function chooseHeat(heatOption, auto) {
    setLog((prev) => {
      const next = [...prev];
      const last = { ...next[next.length - 1], heat: heatOption };
      if (auto) last.extraPushes = [...(last.extraPushes || []), "Silence by default — the room spoke first"];
      next[next.length - 1] = last;
      return next;
    });
    setScreen("later");
  }

  function playAgain() {
    setLog([]);
    setBlindSpot("");
    setAnchorText("");
    setDocketIds(null);
    setScreen("title");
    setChapterIndex(0);
    setConsulted([]);
    setTimeLeft(null);
  }

  const showHeader = !["title", "docket", "signature", "epilogue"].includes(screen);
  const showTimer = timerEnabled && (screen === "decide" || screen === "heat");

  return (
    <GameChrome kicker={showHeader ? undefined : "The Anchor Room"}>
      {showHeader && (
        <HeaderBar
          chapter={chapter}
          caseLabel={caseLabel}
          steadiness={steadiness}
          maxStead={maxStead}
          voicesHeard={voicesHeard}
          voicesMax={CONVERSATIONS_ALLOWED}
        />
      )}

      {screen === "title" && (
        <>
          <Title onEnter={() => setScreen("docket")} />
          <KofiButton />
        </>
      )}
      {screen === "docket" && <Docket timerEnabled={timerEnabled} onToggleTimer={setTimerEnabled} onPick={pickPack} />}
      {screen === "brief" && chapter && <Brief chapter={chapter} caseLabel={caseLabel} onBegin={() => setScreen("listen")} />}
      {screen === "listen" && chapter && (
        <Listen
          chapter={chapter}
          consulted={consulted}
          onConsult={(id) => setConsulted((c) => (c.includes(id) ? c : [...c, id]))}
          onProceed={() => setScreen("pressure")}
        />
      )}
      {screen === "pressure" && chapter && (
        <>
          <Listen chapter={chapter} consulted={consulted} onConsult={() => {}} onProceed={() => {}} />
          <PressureEnvelope pressure={chapter.pressure} onOpen={() => setScreen("decide")} />
        </>
      )}
      {screen === "decide" && chapter && <Decide chapter={chapter} onChoose={(d) => chooseDecision(d, false)} />}
      {screen === "headlines" && chapter && currentDecision && (
        <Headlines decision={currentDecision} onFaceHeat={() => setScreen("heat")} />
      )}
      {screen === "heat" && chapter && <Heat chapter={chapter} onChoose={(h) => chooseHeat(h, false)} />}
      {screen === "later" && chapter && lastEntry && lastEntry.heat && <Later entry={lastEntry} onNext={() => setScreen("debrief")} />}
      {screen === "debrief" && chapter && lastEntry && (
        <Debrief
          chapter={chapter}
          entry={lastEntry}
          casesRemaining={casesRemaining}
          onNextCase={() => goToCase(chapterIndex + 1)}
          onCloseDocket={() => setScreen("signature")}
        />
      )}
      {screen === "signature" && (
        <Signature
          log={log}
          casesRemaining={casesRemaining}
          blindSpot={blindSpot}
          onBlindSpot={setBlindSpot}
          anchor={anchorText}
          onAnchor={setAnchorText}
          onOneMoreCase={() => goToCase(chapterIndex + 1)}
          onSeal={() => setScreen("epilogue")}
        />
      )}
      {screen === "epilogue" && <Epilogue blindSpot={blindSpot} anchor={anchorText} onPlayAgain={playAgain} />}

      {showTimer && <TimerBar timeLeft={timeLeft} total={screen === "decide" ? DECIDE_SECONDS : HEAT_SECONDS} />}
      <SiteFooter />
    </GameChrome>
  );
}
