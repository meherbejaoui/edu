import Label from "../../../design/components/Label.jsx";
import Button from "../../../design/components/Button.jsx";
import Card from "../../../design/components/Card.jsx";

const h2 = {
  fontFamily: "var(--serif)",
  fontSize: "clamp(26px, 5vw, 34px)",
  color: "var(--ink)",
  fontWeight: 400,
  margin: 0,
  lineHeight: 1.15,
};

export default function Intro({ kase, onBegin, onBack }) {
  return (
    <div>
      <button
        onClick={onBack}
        className="eg-focus"
        style={{
          fontFamily: "var(--sans)",
          fontSize: 13.5,
          color: "var(--muted)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        ← other rooms
      </button>
      <div style={{ marginTop: 20, marginBottom: 6 }}>
        <Label>{kase.kicker}</Label>
      </div>
      <h2 style={h2}>{kase.title}</h2>
      <div style={{ display: "flex", gap: 22, margin: "16px 0 4px", flexWrap: "wrap" }}>
        <span style={{ fontFamily: "var(--sans)", fontSize: 14, color: "var(--ir-a)", fontWeight: 600 }}>
          {kase.partyA.name} <span style={{ color: "var(--muted)", fontWeight: 400 }}>· {kase.partyA.role}</span>
        </span>
        <span style={{ fontFamily: "var(--sans)", fontSize: 14, color: "var(--ir-b)", fontWeight: 600 }}>
          {kase.partyB.name} <span style={{ color: "var(--muted)", fontWeight: 400 }}>· {kase.partyB.role}</span>
        </span>
      </div>
      <p style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.7, color: "var(--ink)", marginTop: 18 }}>
        {kase.intro}
      </p>
      <Card style={{ marginTop: 22 }}>
        <Label>how it works</Label>
        <p style={{ fontFamily: "var(--sans)", fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)", margin: "8px 0 0" }}>
          Each line, you choose one of three ways to carry it across. The three are
          never labeled — pick by ear, the way you would in the chair. You have
          <strong style={{ color: "var(--ink)" }}> three reads</strong>: spend one to sense
          what a person actually means underneath their words. The room has a
          temperature. You'll feel it move.
        </p>
      </Card>
      <Button onClick={onBegin} style={{ marginTop: 28 }}>
        Begin
      </Button>
    </div>
  );
}
