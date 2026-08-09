import { useState } from "react";
import Label from "./Label.jsx";
import Button from "./Button.jsx";

function readTheme() {
  return typeof document !== "undefined" ? document.documentElement.dataset.theme || "system" : "system";
}

const THEME_META = {
  system: { icon: "◐", label: "Auto" },
  light: { icon: "☀", label: "Light" },
  dark: { icon: "☾", label: "Dark" },
};

export function SiteHeader({ crumbs = [] }) {
  const [theme, setTheme] = useState(readTheme);
  const meta = THEME_META[theme] || THEME_META.system;

  function handleToggle() {
    if (typeof window !== "undefined" && typeof window.__eduToggleTheme === "function") {
      setTheme(window.__eduToggleTheme());
    }
  }

  return (
    <div
      style={{
        maxWidth: "var(--content-width-wide)",
        margin: "0 auto",
        padding: "clamp(14px, 3vw, 20px) clamp(18px, 5vw, 28px) 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap",
      }}
    >
      <nav
        aria-label="Breadcrumb"
        style={{
          fontFamily: "var(--sans)",
          fontSize: "var(--text-small)",
          color: "var(--muted)",
        }}
      >
        <a href="https://www.meherbejaoui.com/" className="eg-focus" style={{ color: "var(--muted)", textDecoration: "none" }}>
          meherbejaoui.com
        </a>
        <span aria-hidden="true" style={{ color: "var(--hair)", margin: "0 6px" }}>
          /
        </span>
        <a href="/" className="eg-focus" style={{ color: "var(--muted)", textDecoration: "none" }}>
          edu
        </a>
        {crumbs.map((c, i) => (
          <span key={i}>
            <span aria-hidden="true" style={{ color: "var(--hair)", margin: "0 6px" }}>
              /
            </span>
            <span style={{ color: "var(--faint)" }}>{c.label}</span>
          </span>
        ))}
      </nav>
      <Button
        type="button"
        variant="ghost"
        aria-label="Toggle colour theme"
        onClick={handleToggle}
        style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
      >
        <span aria-hidden="true">{meta.icon}</span>
        <span>{meta.label}</span>
      </Button>
    </div>
  );
}

export function GameChrome({ backHref = "../", title, kicker, children }) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <SiteHeader crumbs={title ? [{ label: title }] : []} />
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
      <a
        href="https://github.com/meherbejaoui/edu"
        className="eg-focus"
        style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--faint)", textDecoration: "none" }}
      >
        Source
      </a>
      <span style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--faint)" }}>
        Code <a href="/LICENSE" className="eg-focus" style={{ color: "var(--faint)" }}>GPLv3</a> · Content{" "}
        <a href="/LICENSE-CONTENT.md" className="eg-focus" style={{ color: "var(--faint)" }}>CC BY-NC-SA 4.0</a>
      </span>
    </footer>
  );
}
