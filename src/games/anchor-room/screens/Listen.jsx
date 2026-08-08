import { useState } from "react";
import Label from "../../../design/components/Label.jsx";
import Button from "../../../design/components/Button.jsx";
import Card from "../../../design/components/Card.jsx";
import { CONVERSATIONS_ALLOWED } from "../engine.js";

export default function Listen({ chapter, consulted, onConsult, onProceed }) {
  const [open, setOpen] = useState(null);
  const remaining = CONVERSATIONS_ALLOWED - consulted.length;
  const openStakeholder = chapter.stakeholders.find((s) => s.id === open);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "44px 0 90px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <h3 style={{ fontFamily: "var(--serif)", fontSize: 31, fontWeight: 400, margin: 0, color: "var(--ink)" }}>
          The Listening Phase
        </h3>
        <div
          style={{
            fontFamily: "var(--sans)",
            color: remaining <= 0 ? "var(--anr-push)" : "var(--anr-anchor)",
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "0.05em",
          }}
        >
          conversations left: {remaining}
        </div>
      </div>
      <p style={{ color: "var(--muted)", fontSize: 16.5, lineHeight: 1.65, maxWidth: 660, marginTop: 10 }}>
        {chapter.listenIntro}
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, marginTop: 26 }}>
        {chapter.stakeholders.map((s) => {
          const heard = consulted.includes(s.id);
          const locked = !heard && remaining <= 0;
          return (
            <Card
              as="button"
              key={s.id}
              interactive={!locked}
              disabled={locked}
              onClick={() => {
                if (!heard) onConsult(s.id);
                setOpen(s.id);
              }}
              style={{
                background: heard ? "var(--surface-raised)" : "var(--surface)",
                borderColor: heard ? "var(--anr-anchor)" : "var(--hair)",
                opacity: locked ? 0.45 : 1,
                cursor: locked ? "not-allowed" : "pointer",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                {s.loud && !heard && (
                  <span
                    aria-hidden="true"
                    style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--anr-push)", display: "inline-block" }}
                  />
                )}
                <span style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: s.loud ? 19 : 17, color: "var(--ink)" }}>
                  {s.name}
                </span>
              </div>
              <div style={{ fontFamily: "var(--sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", marginTop: 4, color: "var(--faint)", textTransform: "uppercase" }}>
                {s.role} {s.loud ? "· demanding to see you" : "· waiting quietly"}
              </div>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, margin: "10px 0 0", fontStyle: "italic", color: "var(--muted)" }}>
                {s.teaser}
              </p>
              <div
                style={{
                  fontFamily: "var(--sans)",
                  marginTop: 12,
                  fontSize: 12.5,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  color: heard ? "var(--anr-quiet)" : locked ? "var(--faint)" : "var(--anr-anchor)",
                }}
              >
                {heard ? "✓ heard — review notes" : locked ? "no time left" : "▸ take the meeting"}
              </div>
            </Card>
          );
        })}
      </div>

      {openStakeholder && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 55,
            background: "rgba(20, 20, 24, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 18,
          }}
          onClick={() => setOpen(null)}
        >
          <div style={{ width: "min(580px, 94vw)", maxHeight: "88vh", overflowY: "auto" }} onClick={(e) => e.stopPropagation()}>
            <Card accent="var(--anr-anchor)">
              <Label color="var(--faint)">conversation notes</Label>
              <div style={{ fontFamily: "var(--serif)", fontSize: 26, fontWeight: 700, margin: "6px 0 2px", color: "var(--ink)" }}>
                {openStakeholder.name}
              </div>
              <div style={{ fontFamily: "var(--sans)", fontSize: 12.5, letterSpacing: "0.08em", color: "var(--faint)", textTransform: "uppercase" }}>
                {openStakeholder.role}
              </div>
              <div style={{ borderTop: "1px solid var(--hair)", margin: "14px 0" }} />
              <p style={{ fontSize: 17, lineHeight: 1.72, margin: 0, color: "var(--ink)" }}>{openStakeholder.insight}</p>
              <div style={{ marginTop: 20, textAlign: "right" }}>
                <Button onClick={() => setOpen(null)}>Close notes</Button>
              </div>
            </Card>
          </div>
        </div>
      )}

      <div style={{ marginTop: 34, display: "flex", justifyContent: "flex-end", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
        {remaining > 0 && (
          <span style={{ fontFamily: "var(--sans)", color: "var(--faint)", fontSize: 13.5 }}>
            You may proceed early — unheard voices stay unheard.
          </span>
        )}
        <Button onClick={onProceed}>Proceed{remaining > 0 ? " anyway" : ""}</Button>
      </div>
    </div>
  );
}
