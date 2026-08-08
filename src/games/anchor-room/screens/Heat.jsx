import Label from "../../../design/components/Label.jsx";
import Card from "../../../design/components/Card.jsx";

export default function Heat({ chapter, onChoose }) {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: "44px 0 60px" }}>
      <Label color="var(--anr-push)">the heat</Label>
      <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(24px, 4.5vw, 36px)", fontWeight: 400, margin: "14px 0 26px", maxWidth: 740, color: "var(--ink)" }}>
        {chapter.heatPrompt}
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(265px, 1fr))", gap: 18 }}>
        {chapter.heats.map((h) => (
          <Card as="button" key={h.id} interactive onClick={() => onChoose(h)}>
            <div style={{ fontFamily: "var(--serif)", fontSize: 19, fontWeight: 700, marginBottom: 8, color: "var(--ink)" }}>{h.title}</div>
            <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, color: "var(--muted)", fontStyle: "italic" }}>{h.body}</p>
            <div style={{ fontFamily: "var(--sans)", marginTop: 14, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.06em", color: "var(--anr-anchor)" }}>
              ▸ say it
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
