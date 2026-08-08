import { useMemo } from "react";
import Label from "../../../design/components/Label.jsx";
import Button from "../../../design/components/Button.jsx";
import Card from "../../../design/components/Card.jsx";
import Chip from "../../../design/components/Chip.jsx";
import { bucketOf, analyze, pushesAndAnchors } from "../engine.js";

const h2 = {
  fontFamily: "var(--serif)",
  fontSize: "clamp(26px, 5vw, 34px)",
  color: "var(--ink)",
  fontWeight: 400,
  margin: 0,
  lineHeight: 1.15,
};

function Stat({ n, of, label, color }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--serif)", fontSize: 28, color, lineHeight: 1 }}>
        {n}
        <span style={{ fontSize: 16, color: "var(--faint)" }}>{of === "—" ? "" : ` / ${of}`}</span>
      </div>
      <div style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--muted)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

export default function Debrief({ kase, result, onReplay, onOtherRooms }) {
  const a = useMemo(() => analyze(result.log), [result]);
  const pa = useMemo(() => pushesAndAnchors(a), [a]);
  const bucket = bucketOf(result.heat, result.driftA, result.driftB);
  const beats = result.log.filter((e) => e.kind === "beat");
  const hinge = beats.find((e) => e.hinge);

  const catWord = (c) => (c === "F" ? "faithful" : c === "S" ? "softened" : "sharpened");
  const sideName = a.side === "A" ? kase.partyA.name : a.side === "B" ? kase.partyB.name : null;
  const otherName = a.side === "A" ? kase.partyB.name : kase.partyA.name;

  const bucketLine = {
    RUPTURE: "You kept the words true and let the heat rise. Nothing was smoothed — and nothing was hidden.",
    FALSEPEACE: "You kept the room calm, and the calm was built on two different understandings of what happened.",
    MESS: "The words drifted and the heat climbed at once — by the end, they were no longer in the same conversation.",
    UNDERSTANDING: "You carried the words close to true and let the room find its own level. Rare, and it costs the carrier something.",
  }[bucket];

  return (
    <div>
      <div style={{ marginBottom: 6 }}>
        <Label>your fingerprint on the room</Label>
      </div>
      <h2 style={h2}>What you did without deciding to</h2>
      <p style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.65, color: "var(--ink)", marginTop: 10 }}>{bucketLine}</p>

      {/* the tally — first time the categories are named */}
      <Card style={{ marginTop: 20 }}>
        <Label>the count</Label>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px", marginTop: 12 }}>
          <Stat n={a.faithful} of={a.total} label="carried faithfully" color="var(--ink)" />
          <Stat n={a.softeningTotal} of={a.total} label="softened" color="var(--ir-cool)" />
          <Stat n={a.sharpeningTotal} of={a.total} label="sharpened" color="var(--ir-hot)" />
          <Stat n={a.sideActions} of="—" label="secret pleas honored" color="var(--muted)" />
        </div>
        <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--hair)" }}>
          {sideName ? (
            <p style={{ fontFamily: "var(--serif)", fontSize: 18, lineHeight: 1.6, color: "var(--ink)", margin: 0 }}>
              You softened{" "}
              <strong style={{ color: a.side === "A" ? "var(--ir-a)" : "var(--ir-b)" }}>{sideName}</strong> and
              sharpened <strong style={{ color: a.side === "A" ? "var(--ir-b)" : "var(--ir-a)" }}>{otherName}</strong> more
              often than the reverse. Without ever deciding to take a side, you took one — you made {sideName} sound
              more reasonable than the room did, and {otherName} harder.
            </p>
          ) : (
            <p style={{ fontFamily: "var(--serif)", fontSize: 18, lineHeight: 1.6, color: "var(--ink)", margin: 0 }}>
              You held the two of them at roughly equal weight. Neither could later say you'd carried the other
              more gently — which is its own kind of choice, and its own kind of exposure.
            </p>
          )}
        </div>
      </Card>

      {/* the hinge callout */}
      {hinge && (
        <div style={{ marginTop: 22 }}>
          <Label>the line that decided the most</Label>
          <div
            style={{
              marginTop: 10,
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 8,
              borderLeft: "3px solid var(--ir-hot)",
              paddingLeft: 16,
            }}
          >
            <div>
              <span style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--faint)" }}>what was said</span>
              <p style={{ fontFamily: "var(--serif)", fontSize: 16.5, lineHeight: 1.5, color: "var(--ink)", margin: "3px 0 0" }}>
                {hinge.src}
              </p>
            </div>
            <div>
              <span style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--faint)" }}>
                what you carried — {catWord(hinge.cat)}
              </span>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 16.5,
                  lineHeight: 1.5,
                  color: "var(--muted)",
                  margin: "3px 0 0",
                  fontStyle: "italic",
                }}
              >
                {hinge.carried}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Pushes & Anchors — Anchor Room kinship */}
      <div style={{ marginTop: 26, display: "grid", gap: 16 }}>
        <div>
          <Label>the pushes on you</Label>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
            {pa.pushes.map((p, k) => (
              <Chip key={k} color="var(--ir-hot)">
                {p}
              </Chip>
            ))}
          </div>
        </div>
        <div>
          <Label>the anchors you held</Label>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
            {pa.anchors.map((p, k) => (
              <Chip key={k} color="var(--ir-b)">
                {p}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <Card style={{ marginTop: 26 }}>
        <p style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.6, fontStyle: "italic", color: "var(--muted)", margin: 0 }}>
          There was no faithful chair to sit in. Every word you moved, you shaped — the gentle ones as much as the
          sharp ones. The only question the room ever asked you was whose reality would travel intact. Tonight,
          this was your answer.
        </p>
      </Card>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 26 }}>
        <Button onClick={onReplay}>Sit this room again</Button>
        <Button variant="secondary" onClick={onOtherRooms}>
          Other rooms
        </Button>
      </div>
    </div>
  );
}
