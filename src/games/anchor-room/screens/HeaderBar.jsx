import Meter from "../../../design/components/Meter.jsx";

export default function HeaderBar({ chapter, caseLabel, steadiness, maxStead, voicesHeard, voicesMax }) {
  if (!chapter) return null;
  const pct = Math.min(100, (steadiness / Math.max(maxStead, 1)) * 100);
  return (
    <div
      style={{
        borderBottom: "1px solid var(--hair)",
        background: "var(--surface)",
        position: "sticky",
        top: 0,
        zIndex: 30,
      }}
    >
      <div style={{ maxWidth: "var(--content-width-wide)", margin: "0 auto", padding: "12px 20px", display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 190 }}>
          <div style={{ fontFamily: "var(--sans)", fontSize: 12, letterSpacing: "0.1em", color: "var(--faint)" }}>the anchor room</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 17, fontWeight: 600, color: "var(--ink)", marginTop: 2 }}>
            {caseLabel} · {chapter.title}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }} title="Conversations taken this case — quiet voices you skip become blind spots">
            <div style={{ fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.08em", color: "var(--faint)", marginBottom: 3, whiteSpace: "nowrap" }}>
              voices heard
            </div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 24, color: "var(--anr-anchor)", fontWeight: 700, lineHeight: 1 }}>
              {voicesHeard}
              <span style={{ color: "var(--faint)", fontSize: 15 }}> / {voicesMax}</span>
            </div>
          </div>
          <div title="Your Center: swings toward Anchored when principles hold your decisions, toward Pushed when pressure does.">
            <Meter label="your center" value={pct} color="var(--anr-anchor)" reduced={false} width={90} />
          </div>
        </div>
      </div>
    </div>
  );
}
