import { useState, useMemo, useRef, useEffect } from "react";
import Label from "../../../design/components/Label.jsx";
import Meter from "../../../design/components/Meter.jsx";
import { clamp, shuffledOrder, heatWord, heatColor, srcFor } from "../engine.js";

function TranscriptLine({ speakerName, receiverName, receiver, text, reduced }) {
  const isB = receiver === "B";
  const color = isB ? "var(--ir-b)" : "var(--ir-a)";
  const tint = isB ? "var(--ir-btint)" : "var(--ir-atint)";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isB ? "flex-end" : "flex-start",
        marginBottom: 12,
        animation: reduced ? "none" : "eg-carry 420ms ease both",
      }}
    >
      <div
        style={{
          maxWidth: "80%",
          background: tint,
          borderLeft: isB ? "none" : `3px solid ${color}`,
          borderRight: isB ? `3px solid ${color}` : "none",
          borderRadius: 8,
          padding: "10px 14px",
        }}
      >
        <div style={{ marginBottom: 3 }}>
          <Label color={color}>
            {speakerName} → {receiverName}
          </Label>
        </div>
        <div style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.5, color: "var(--ink)" }}>{text}</div>
      </div>
    </div>
  );
}

function BeatView({ beat, kase, heat, revealed, reads, onRead, onChoose, seed, reduced }) {
  const speakerIsA = beat.speaker === "A";
  const speaker = speakerIsA ? kase.partyA : kase.partyB;
  const color = speakerIsA ? "var(--ir-a)" : "var(--ir-b)";
  const tint = speakerIsA ? "var(--ir-atint)" : "var(--ir-btint)";
  const src = srcFor(beat, heat);
  const order = useMemo(() => shuffledOrder(seed + 7), [seed]);

  return (
    <div>
      {/* the source line, in the speaker's voice, on the speaker's side */}
      <div style={{ display: "flex", justifyContent: speakerIsA ? "flex-start" : "flex-end", marginBottom: 6 }}>
        <div style={{ maxWidth: "88%" }}>
          <div style={{ marginBottom: 6 }}>
            <Label color={color}>{speaker.name} says</Label>
          </div>
          <div
            style={{
              background: tint,
              borderLeft: speakerIsA ? `3px solid ${color}` : "none",
              borderRight: speakerIsA ? "none" : `3px solid ${color}`,
              borderRadius: 10,
              padding: "14px 18px",
              fontFamily: "var(--serif)",
              fontSize: 21,
              lineHeight: 1.55,
              color: "var(--ink)",
            }}
          >
            {src}
          </div>
        </div>
      </div>

      {/* read affordance / revealed intent */}
      <div style={{ margin: "14px 0 18px" }}>
        {revealed ? (
          <div
            style={{
              borderLeft: "2px solid var(--faint)",
              paddingLeft: 14,
              marginLeft: 2,
              animation: reduced ? "none" : "eg-fadein 300ms ease both",
            }}
          >
            <Label>what you sense underneath</Label>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: 17,
                lineHeight: 1.55,
                color: "var(--muted)",
                margin: "6px 0 0",
              }}
            >
              {beat.intent}
            </p>
          </div>
        ) : (
          <button
            onClick={onRead}
            disabled={reads === 0}
            className="eg-focus"
            style={{
              fontFamily: "var(--sans)",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--muted)",
              background: "transparent",
              border: "1px dashed var(--hair)",
              borderRadius: "var(--radius-sm)",
              padding: "9px 14px",
              opacity: reads === 0 ? 0.4 : 1,
              cursor: reads === 0 ? "not-allowed" : "pointer",
            }}
          >
            {reads === 0 ? "no reads left — go by ear" : "read them  ·  sense what they mean"}
          </button>
        )}
      </div>

      {/* the three renderings — equal weight, shuffled order, unlabeled */}
      <div style={{ marginBottom: 8 }}>
        <Label>carry it across</Label>
      </div>
      <div style={{ display: "grid", gap: 10 }}>
        {order.map((oi) => {
          const r = beat.r[oi];
          return (
            <button
              key={oi}
              onClick={() => onChoose(r)}
              className="eg-focus eg-render"
              style={{
                textAlign: "left",
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "var(--radius-lg)",
                padding: "14px 16px",
                cursor: "pointer",
                fontFamily: "var(--serif)",
                fontSize: 17.5,
                lineHeight: 1.5,
                color: "var(--ink)",
              }}
            >
              {r.t}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PressureView({ pr, kase, onChoose, reduced }) {
  const speaker = pr.from === "A" ? kase.partyA : kase.partyB;
  const color = pr.from === "A" ? "var(--ir-a)" : "var(--ir-b)";
  return (
    <div style={{ animation: reduced ? "none" : "eg-fadein 320ms ease both" }}>
      <div style={{ textAlign: "center", margin: "6px 0 18px" }}>
        <Label color={color}>{speaker.name} — to you alone</Label>
      </div>
      <div
        style={{
          background: "var(--ink)",
          borderRadius: "var(--radius-lg)",
          padding: "20px 22px",
          color: "var(--surface)",
          fontFamily: "var(--serif)",
          fontSize: 19,
          lineHeight: 1.65,
        }}
      >
        {pr.text}
      </div>
      <div style={{ marginTop: 18, marginBottom: 8 }}>
        <Label>you</Label>
      </div>
      <div style={{ display: "grid", gap: 10 }}>
        {pr.options.map((o, k) => (
          <button
            key={k}
            onClick={() => onChoose(o)}
            className="eg-focus eg-render"
            style={{
              textAlign: "left",
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "var(--radius-lg)",
              padding: "14px 16px",
              cursor: "pointer",
              fontFamily: "var(--serif)",
              fontSize: 17.5,
              lineHeight: 1.5,
              color: "var(--ink)",
            }}
          >
            {o.t}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Play({ kase, onFinish, reduced }) {
  const [i, setI] = useState(0); // beat index into the merged sequence
  const [heat, setHeat] = useState(30);
  const [driftA, setDriftA] = useState(0);
  const [driftB, setDriftB] = useState(0);
  const [reads, setReads] = useState(3);
  const [revealed, setRevealed] = useState(false); // read spent on current beat
  const [log, setLog] = useState([]); // choice log
  const [transcript, setTranscript] = useState([]); // carried lines
  const scroller = useRef(null);

  // build the play sequence: beats with a pressure event spliced in
  const sequence = useMemo(() => {
    const chosenPressure = kase.pressures[Math.floor(Math.random() * kase.pressures.length)];
    const seq = [];
    kase.beats.forEach((b, idx) => {
      seq.push({ type: "beat", data: b, idx });
      if (idx === kase.pressureAt) seq.push({ type: "pressure", data: chosenPressure });
    });
    return seq;
  }, [kase]);

  useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [transcript]);

  const node = sequence[i];
  const isLast = i >= sequence.length - 1;

  // computed = {heat, driftA, driftB} carries the post-choice values so the
  // FINAL line's effect is included in the result (avoids reading stale state).
  function advance(extraLog, carried, computed) {
    const nextLog = extraLog ? [...log, extraLog] : log;
    const nextTranscript = carried ? [...transcript, carried] : transcript;
    setLog(nextLog);
    setTranscript(nextTranscript);
    setRevealed(false);
    if (isLast) {
      const fin = computed || { heat, driftA, driftB };
      onFinish({
        heat: fin.heat,
        driftA: fin.driftA,
        driftB: fin.driftB,
        log: nextLog,
        transcript: nextTranscript,
      });
    } else {
      setI(i + 1);
    }
  }

  function chooseRendering(r, beat) {
    const receiver = beat.speaker === "A" ? "B" : "A";
    const newHeat = clamp(heat + r.dh);
    const newDriftA = receiver === "A" ? clamp(driftA + r.dd) : driftA;
    const newDriftB = receiver === "B" ? clamp(driftB + r.dd) : driftB;
    setHeat(newHeat);
    setDriftA(newDriftA);
    setDriftB(newDriftB);
    const speakerName = beat.speaker === "A" ? kase.partyA.name : kase.partyB.name;
    const receiverName = receiver === "A" ? kase.partyA.name : kase.partyB.name;
    const src = srcFor(beat, heat);
    advance(
      { kind: "beat", speaker: beat.speaker, cat: r.c, src, carried: r.t, hinge: !!beat.hinge },
      { speakerName, receiverName, receiver, text: r.t },
      { heat: newHeat, driftA: newDriftA, driftB: newDriftB }
    );
  }

  function choosePressure(opt, pr) {
    const newHeat = clamp(heat + opt.dh);
    // an aside nudges the drift of the party being discussed (the other one)
    const newDriftA = pr.from === "B" ? clamp(driftA + opt.dd) : driftA;
    const newDriftB = pr.from === "A" ? clamp(driftB + opt.dd) : driftB;
    setHeat(newHeat);
    setDriftA(newDriftA);
    setDriftB(newDriftB);
    advance(
      { kind: "pressure", from: pr.from, note: opt.note, chose: opt.t },
      null,
      { heat: newHeat, driftA: newDriftA, driftB: newDriftB }
    );
  }

  function spendRead() {
    if (reads > 0 && !revealed) {
      setReads(reads - 1);
      setRevealed(true);
    }
  }

  const progress = Math.round((i / sequence.length) * 100);

  return (
    <div>
      {/* header: temp + reads + progress */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 14 }}>
        <Meter label="the room" value={heat} color={heatColor(heat)} word={heatWord(heat)} reduced={reduced} />
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Label>reads</Label>
          <div style={{ display: "flex", gap: 4 }} aria-label={`${reads} reads remaining`}>
            {[0, 1, 2].map((n) => (
              <span
                key={n}
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: n < reads ? "var(--ink)" : "transparent",
                  border: `1.5px solid ${n < reads ? "var(--ink)" : "var(--hair)"}`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ height: 2, background: "var(--hair)", borderRadius: 2, marginBottom: 18 }}>
        <div
          style={{
            height: 2,
            width: `${progress}%`,
            background: "var(--faint)",
            borderRadius: 2,
            transition: reduced ? "none" : "width 300ms ease",
          }}
        />
      </div>

      {/* transcript so far */}
      {transcript.length > 0 && (
        <div
          ref={scroller}
          style={{
            maxHeight: 210,
            overflowY: "auto",
            padding: "4px 2px 8px",
            marginBottom: 20,
            borderBottom: "1px dashed var(--hair)",
          }}
          aria-label="what you have carried so far"
        >
          {transcript.map((t, k) => (
            <TranscriptLine key={k} {...t} reduced={reduced} />
          ))}
        </div>
      )}

      {node.type === "beat" ? (
        <BeatView
          beat={node.data}
          kase={kase}
          heat={heat}
          revealed={revealed}
          reads={reads}
          onRead={spendRead}
          onChoose={(r) => chooseRendering(r, node.data)}
          seed={i}
          reduced={reduced}
        />
      ) : (
        <PressureView pr={node.data} kase={kase} onChoose={(o) => choosePressure(o, node.data)} reduced={reduced} />
      )}
    </div>
  );
}
