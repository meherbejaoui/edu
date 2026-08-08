import Label from "../../../design/components/Label.jsx";
import Button from "../../../design/components/Button.jsx";
import Card from "../../../design/components/Card.jsx";

export default function Later({ entry, onNext }) {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "44px 0 60px" }}>
      <Card>
        <Label color="var(--faint)">how it landed</Label>
        <p style={{ fontSize: 16.5, lineHeight: 1.7, margin: "10px 0 0", color: "var(--ink)" }}>{entry.heat.verdict}</p>
      </Card>
      <Card accent="var(--anr-anchor)" style={{ marginTop: 22 }}>
        <Label color="var(--anr-push)">◇ time passes</Label>
        <p style={{ fontSize: 17, lineHeight: 1.75, margin: "10px 0 0", fontWeight: 500, color: "var(--ink)" }}>{entry.decision.later}</p>
      </Card>
      <div style={{ marginTop: 28, textAlign: "right" }}>
        <Button onClick={onNext}>See what moved you</Button>
      </div>
    </div>
  );
}
