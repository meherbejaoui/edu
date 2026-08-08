import Label from "../../../design/components/Label.jsx";
import Button from "../../../design/components/Button.jsx";
import Card from "../../../design/components/Card.jsx";
import { bucketOf } from "../engine.js";

export default function Aftermath({ kase, result, onNext }) {
  const bucket = bucketOf(result.heat, result.driftA, result.driftB);
  const out = kase.outcomes[bucket];
  return (
    <div>
      <div style={{ marginBottom: 6 }}>
        <Label>the room, after</Label>
      </div>
      {/* confrontation */}
      <Card accent="var(--ink)" style={{ marginTop: 8 }}>
        <div style={{ marginBottom: 8 }}>
          <Label color={out.confront.from === "A" ? "var(--ir-a)" : "var(--ir-b)"}>
            {out.confront.from === "A" ? kase.partyA.name : kase.partyB.name} · to you
          </Label>
        </div>
        <p style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.65, color: "var(--ink)", margin: 0 }}>
          {out.confront.line}
        </p>
      </Card>

      {/* time jump */}
      <div style={{ marginTop: 24, marginBottom: 6 }}>
        <Label>some years on</Label>
      </div>
      <p style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.72, color: "var(--ink)" }}>{out.jump}</p>

      <Button onClick={onNext} style={{ marginTop: 28 }}>
        The debrief
      </Button>
    </div>
  );
}
