import Label from "../../../design/components/Label.jsx";
import Button from "../../../design/components/Button.jsx";
import Card from "../../../design/components/Card.jsx";

export default function Brief({ chapter, caseLabel, onBegin }) {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 0 80px" }}>
      <Label color="var(--anr-anchor)">{caseLabel}</Label>
      <h2
        style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(32px, 6vw, 52px)",
          fontWeight: 400,
          margin: "10px 0 26px",
          color: "var(--ink)",
        }}
      >
        {chapter.title}
      </h2>
      <Card accent="var(--anr-anchor)">
        <Label color="var(--faint)">briefing · {chapter.role.toUpperCase()}</Label>
        <p style={{ fontSize: 17.5, lineHeight: 1.75, margin: "12px 0 0", color: "var(--ink)" }}>{chapter.setting}</p>
        <div style={{ borderTop: "1px solid var(--hair)", margin: "20px 0" }} />
        <p style={{ fontFamily: "var(--serif)", fontSize: 21, fontWeight: 500, fontStyle: "italic", margin: 0, color: "var(--anr-push)" }}>
          {chapter.question}
        </p>
      </Card>
      <div style={{ marginTop: 30, textAlign: "right" }}>
        <Button onClick={onBegin}>Begin listening</Button>
      </div>
    </div>
  );
}
