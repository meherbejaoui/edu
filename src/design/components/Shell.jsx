import Label from "./Label.jsx";

export function GameChrome({ backHref = "../", title, kicker, children }) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <main
        style={{
          maxWidth: "var(--content-width)",
          margin: "0 auto",
          padding: "clamp(24px, 5vw, 56px) clamp(18px, 5vw, 28px) 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <a
            href={backHref}
            className="eg-focus"
            style={{
              fontFamily: "var(--sans)",
              fontSize: 13.5,
              color: "var(--muted)",
              textDecoration: "none",
            }}
          >
            ← all games
          </a>
          {kicker && <Label>{kicker}</Label>}
        </div>
        {children}
      </main>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer
      style={{
        maxWidth: "var(--content-width-wide)",
        margin: "0 auto",
        padding: "0 clamp(18px, 5vw, 28px) 56px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 8,
      }}
    >
      <span style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--faint)" }}>
        Games by Meher Bejaoui, built with Claude
      </span>
      <a
        href="https://meherbejaoui.com"
        className="eg-focus"
        style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--faint)", textDecoration: "none" }}
      >
        meherbejaoui.com ↗
      </a>
    </footer>
  );
}
