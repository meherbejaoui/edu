export default function Meter({ label, value, color, word, reduced, width = 120 }) {
  return (
    <div
      role="status"
      aria-label={word ? `${label} ${word}` : `${label} ${value}`}
      style={{ display: "flex", alignItems: "center", gap: 10, opacity: 0.85 }}
    >
      <span
        style={{
          fontFamily: "var(--sans)",
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--faint)",
        }}
      >
        {label}
      </span>
      <div
        style={{
          position: "relative",
          width,
          height: 3,
          background: "var(--hair)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: `${Math.max(0, Math.min(100, value))}%`,
            background: color,
            transition: reduced ? "none" : "width 500ms ease, background 500ms ease",
          }}
        />
      </div>
      {word && (
        <span
          style={{
            fontFamily: "var(--serif)",
            fontSize: 13,
            fontStyle: "italic",
            color,
            minWidth: 62,
          }}
        >
          {word}
        </span>
      )}
    </div>
  );
}
