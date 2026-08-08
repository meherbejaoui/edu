import { useState } from "react";
import Label from "../../../design/components/Label.jsx";
import Button from "../../../design/components/Button.jsx";
import Card from "../../../design/components/Card.jsx";

export default function PressureEnvelope({ pressure, onOpen }) {
  const [opened, setOpened] = useState(false);
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        background: "rgba(20, 20, 24, 0.72)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      {opened ? (
        <div style={{ width: "min(580px, 94vw)", maxHeight: "90vh", overflowY: "auto" }}>
          <Card accent="var(--anr-push)">
            <Label color="var(--anr-push)">◤ pressure — {pressure.from}</Label>
            <p style={{ fontSize: 17.5, lineHeight: 1.68, margin: "12px 0 0", fontWeight: 500, color: "var(--ink)" }}>
              {pressure.text}
            </p>
            <div style={{ borderTop: "1px solid var(--hair)", margin: "18px 0" }} />
            <p style={{ fontSize: 15.5, fontStyle: "italic", color: "var(--muted)", margin: "0 0 20px" }}>{pressure.note}</p>
            <div style={{ textAlign: "right" }}>
              <Button onClick={onOpen}>Face the decision</Button>
            </div>
          </Card>
        </div>
      ) : (
        <button
          className="eg-focus"
          aria-label="Open the pressure envelope"
          onClick={() => setOpened(true)}
          style={{
            background: "linear-gradient(160deg, var(--anr-push), color-mix(in srgb, var(--anr-push) 60%, black))",
            border: "1px solid var(--anr-push)",
            borderRadius: "var(--radius)",
            width: "min(460px, 92vw)",
            padding: "48px 34px",
            cursor: "pointer",
            transform: "rotate(-1deg)",
            boxShadow: "0 30px 70px rgba(0,0,0,.5)",
            textAlign: "center",
          }}
        >
          <div style={{ borderTop: "2px dashed rgba(255,255,255,.6)", borderBottom: "2px dashed rgba(255,255,255,.6)", padding: "20px 0", margin: "0 0 18px" }}>
            <div style={{ fontFamily: "var(--sans)", color: "#ffe1dd", fontSize: 13, letterSpacing: "0.3em" }}>pressure</div>
            <div style={{ fontFamily: "var(--serif)", color: "#fff", fontSize: 28, fontWeight: 700, marginTop: 6 }}>
              A red envelope
            </div>
            <div style={{ fontFamily: "var(--sans)", color: "#ffe1dd", fontSize: 12.5, letterSpacing: "0.08em", marginTop: 8 }}>
              {pressure.from}
            </div>
          </div>
          <div style={{ fontFamily: "var(--sans)", color: "#fff0ee", fontSize: 15, fontWeight: 700, letterSpacing: "0.05em" }}>
            tap to open — you cannot un-know it
          </div>
        </button>
      )}
    </div>
  );
}
