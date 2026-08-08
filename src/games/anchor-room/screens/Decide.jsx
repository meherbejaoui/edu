import Label from "../../../design/components/Label.jsx";
import Card from "../../../design/components/Card.jsx";

export default function Decide({ chapter, onChoose }) {
  return (
    <div style={{ maxWidth: 940, margin: "0 auto", padding: "44px 0 60px" }}>
      <Label color="var(--anr-push)">decision point</Label>
      <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(26px, 4.5vw, 38px)", fontWeight: 400, margin: "14px 0 8px", color: "var(--ink)" }}>
        {chapter.decisionPrompt}
      </h3>
      <p style={{ fontFamily: "var(--sans)", color: "var(--faint)", fontSize: 13.5, letterSpacing: "0.05em", margin: "0 0 26px" }}>
        none of these is safe. choose the loss you can defend.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 18 }}>
        {chapter.decisions.map((d) => (
          <Card as="button" key={d.id} interactive onClick={() => onChoose(d)} style={{ display: "flex", flexDirection: "column" }}>
            <Label color="var(--faint)">option {d.id}</Label>
            <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 700, margin: "6px 0 10px", lineHeight: 1.15, color: "var(--ink)" }}>
              {d.title}
            </div>
            <p style={{ fontSize: 15.5, lineHeight: 1.62, margin: 0, flex: 1, color: "var(--muted)" }}>{d.body}</p>
            <div style={{ fontFamily: "var(--sans)", marginTop: 16, fontSize: 12.5, letterSpacing: "0.06em", color: "var(--anr-push)", fontWeight: 600 }}>
              ▸ commit — no take-backs
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
