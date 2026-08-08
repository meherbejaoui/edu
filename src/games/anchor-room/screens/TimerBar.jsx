export default function TimerBar({ timeLeft, total }) {
  if (timeLeft == null) return null;
  const pct = Math.max(0, (timeLeft / total) * 100);
  const urgent = timeLeft <= 10;
  return (
    <div
      role="timer"
      aria-live="polite"
      aria-label={`${timeLeft} seconds remaining`}
      style={{ borderTop: "1px solid var(--hair)", background: "var(--surface)" }}
    >
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "10px 20px", display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            fontFamily: "var(--sans)",
            fontSize: 13,
            letterSpacing: "0.08em",
            color: urgent ? "var(--anr-push)" : "var(--faint)",
            whiteSpace: "nowrap",
          }}
        >
          ⏱ pressure clock
        </div>
        <div style={{ flex: 1, height: 8, background: "var(--hair)", borderRadius: 6, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${pct}%`,
              background: urgent ? "var(--anr-push)" : "var(--anr-anchor)",
              transition: "width 1s linear, background 300ms",
            }}
          />
        </div>
        <div style={{ fontFamily: "var(--serif)", fontSize: 20, fontWeight: 700, color: urgent ? "var(--anr-push)" : "var(--ink)", minWidth: 44, textAlign: "right" }}>
          {timeLeft}s
        </div>
      </div>
      {urgent && (
        <div style={{ textAlign: "center", fontFamily: "var(--sans)", fontSize: 12, color: "var(--anr-push)", paddingBottom: 8, letterSpacing: "0.05em" }}>
          if the clock runs out, the room decides for you
        </div>
      )}
    </div>
  );
}
