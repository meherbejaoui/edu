import Label from "../../../design/components/Label.jsx";
import Button from "../../../design/components/Button.jsx";
import Card from "../../../design/components/Card.jsx";

export default function Headlines({ decision, onFaceHeat }) {
  return (
    <div style={{ maxWidth: 880, margin: "0 auto", padding: "44px 0 60px" }}>
      <div style={{ textAlign: "center", marginBottom: 26 }}>
        <Label color="var(--anr-anchor)">the next morning</Label>
        <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(26px, 5vw, 40px)", fontWeight: 400, margin: "8px 0 6px", color: "var(--ink)" }}>
          One decision. Two stories.
        </h3>
        <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.6 }}>
          You did one thing. Watch what it becomes in different rooms — this is the machine that most public
          arguments are actually about.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 18 }}>
        {[decision.lens1, decision.lens2].map((lens, i) => (
          <Card key={i} accent={i === 0 ? "var(--anr-lens1)" : "var(--anr-lens2)"} style={{ minHeight: 170 }}>
            <Label color="var(--faint)">{lens.where}</Label>
            <p style={{ fontFamily: "var(--serif)", fontSize: 19.5, fontWeight: 500, lineHeight: 1.45, margin: "10px 0 0", color: "var(--ink)" }}>
              {lens.text}
            </p>
          </Card>
        ))}
      </div>
      <p style={{ textAlign: "center", color: "var(--muted)", fontSize: 15.5, fontStyle: "italic", margin: "24px auto 26px", maxWidth: 540 }}>
        Both of these are written by people who saw a fraction of what you just saw. Neither is lying. Neither is
        the whole truth.
      </p>
      <div style={{ textAlign: "center" }}>
        <Button onClick={onFaceHeat}>Now face the heat</Button>
      </div>
    </div>
  );
}
