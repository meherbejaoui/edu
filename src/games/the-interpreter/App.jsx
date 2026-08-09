import { useState, useEffect } from "react";
import { CASES } from "./cases.js";
import { GameChrome, SiteFooter } from "../../design/components/Shell.jsx";
import KofiButton from "../../design/components/KofiButton.jsx";
import Title from "./screens/Title.jsx";
import CaseSelect from "./screens/CaseSelect.jsx";
import Intro from "./screens/Intro.jsx";
import Play from "./screens/Play.jsx";
import Reconstruct from "./screens/Reconstruct.jsx";
import Aftermath from "./screens/Aftermath.jsx";
import Debrief from "./screens/Debrief.jsx";

export default function TheInterpreter() {
  const [screen, setScreen] = useState("title"); // title|select|intro|play|reconstruct|aftermath|debrief
  const [caseId, setCaseId] = useState(null);
  const [result, setResult] = useState(null);
  const [done, setDone] = useState([]);
  const [reduced, setReduced] = useState(false);
  const [runId, setRunId] = useState(0); // bump to start a fresh play session

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const m = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReduced(m.matches);
      const h = (e) => setReduced(e.matches);
      m.addEventListener ? m.addEventListener("change", h) : m.addListener(h);
      return () => {
        m.removeEventListener ? m.removeEventListener("change", h) : m.removeListener(h);
      };
    }
  }, []);

  const kase = CASES.find((c) => c.id === caseId);

  function finishPlay(r) {
    setResult(r);
    setScreen("reconstruct");
  }

  if (screen === "title") {
    return (
      <GameChrome title="The Interpreter">
        <Title onStart={() => setScreen("select")} />
        <SiteFooter />
        <KofiButton />
      </GameChrome>
    );
  }

  return (
    <GameChrome title="The Interpreter" kicker={kase && screen !== "select" ? kase.title : "The Interpreter"}>
      {screen === "select" && <CaseSelect done={done} onPick={(id) => { setCaseId(id); setScreen("intro"); }} />}
      {screen === "intro" && kase && (
        <Intro kase={kase} onBack={() => setScreen("select")} onBegin={() => { setRunId((r) => r + 1); setScreen("play"); }} />
      )}
      {screen === "play" && kase && <Play key={`${caseId}-${runId}`} kase={kase} onFinish={finishPlay} reduced={reduced} />}
      {screen === "reconstruct" && kase && result && (
        <Reconstruct kase={kase} result={result} reduced={reduced} onNext={() => setScreen("aftermath")} />
      )}
      {screen === "aftermath" && kase && result && (
        <Aftermath
          kase={kase}
          result={result}
          reduced={reduced}
          onNext={() => {
            if (!done.includes(caseId)) setDone([...done, caseId]);
            setScreen("debrief");
          }}
        />
      )}
      {screen === "debrief" && kase && result && (
        <Debrief
          kase={kase}
          result={result}
          reduced={reduced}
          onReplay={() => {
            setResult(null);
            setRunId((r) => r + 1);
            setScreen("play");
          }}
          onOtherRooms={() => {
            setResult(null);
            setScreen("select");
          }}
        />
      )}
      <SiteFooter />
    </GameChrome>
  );
}
