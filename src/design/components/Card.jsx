export default function Card({ as: As = "div", accent, interactive, style, className = "", children, ...props }) {
  return (
    <As
      type={As === "button" ? "button" : undefined}
      className={`${interactive ? "eg-focus eg-card" : ""} ${className}`}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--hair)",
        borderLeft: accent ? `4px solid ${accent}` : undefined,
        borderRadius: "var(--radius-lg)",
        padding: "18px 20px",
        textAlign: "left",
        cursor: interactive ? "pointer" : undefined,
        position: "relative",
        width: As === "button" ? "100%" : undefined,
        font: As === "button" ? "inherit" : undefined,
        color: "inherit",
        textDecoration: As === "a" ? "none" : undefined,
        display: As === "a" ? "block" : undefined,
        ...style,
      }}
      {...props}
    >
      {children}
    </As>
  );
}
