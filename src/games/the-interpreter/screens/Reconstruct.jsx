import Label from "../../../design/components/Label.jsx";
import Button from "../../../design/components/Button.jsx";
import { heatColor } from "../engine.js";

const h2 = {
  fontFamily: "var(--serif)",
  fontSize: "clamp(26px, 5vw, 34px)",
  color: "var(--ink)",
  fontWeight: 400,
  margin: 0,
  lineHeight: 1.15,
};

// the two-heard-versions reconstruction — the gap made visible
export default function Reconstruct({ result, onNext }) {
  const beats = result.log.filter((e) => e.kind === "beat");
  return (
    <div>
      <div style={{ marginBottom: 6 }}>
        <Label>before you hear the ending</Label>
      </div>
      <h2 style={h2}>What was said. What was carried.</h2>
      <p style={{ fontFamily: "var(--serif)", fontSize: 18, lineHeight: 1.6, color: "var(--muted)", marginTop: 10, maxWidth: 560 }}>
        Line by line: on the left, what the speaker actually said. On the right,
        what you carried to the other side. Where they part, that is the gap you
        authored.
      </p>

      <div style={{ marginTop: 22, display: "grid", gap: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 24px 1fr", gap: 0, marginBottom: 6 }}>
          <Label>what was said</Label>
          <span />
          <div style={{ textAlign: "right" }}>
            <Label>what was carried</Label>
          </div>
        </div>
        {beats.map((e, k) => {
          const diverged = e.cat !== "F";
          return (
            <div
              key={k}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 24px 1fr",
                gap: 0,
                alignItems: "stretch",
                padding: "10px 0",
                borderTop: "1px solid var(--hair)",
              }}
              className="ir-recon"
            >
              <div style={{ paddingRight: 10, fontFamily: "var(--serif)", fontSize: 15.5, lineHeight: 1.5, color: "var(--ink)" }}>
                {e.src}
              </div>
              <div aria-hidden="true" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: diverged ? heatColor(70) : "var(--hair)",
                  }}
                  title={diverged ? "diverged" : "faithful"}
                />
              </div>
              <div
                style={{
                  paddingLeft: 10,
                  textAlign: "right",
                  fontFamily: "var(--serif)",
                  fontSize: 15.5,
                  lineHeight: 1.5,
                  color: diverged ? "var(--ink)" : "var(--muted)",
                  background: diverged ? (e.speaker === "A" ? "var(--ir-btint)" : "var(--ir-atint)") : "transparent",
                  borderRadius: 6,
                  position: "relative",
                }}
              >
                {e.carried}
              </div>
            </div>
          );
        })}
      </div>

      <Button onClick={onNext} style={{ marginTop: 28 }}>
        See where it landed
      </Button>
    </div>
  );
}
