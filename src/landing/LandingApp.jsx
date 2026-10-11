import Label from "../design/components/Label.jsx";
import { SiteFooter, SiteHeader } from "../design/components/Shell.jsx";
import KofiButton from "../design/components/KofiButton.jsx";
import { GAMES, LANDING_INTRO } from "./content.js";

const h1 = {
  fontFamily: "var(--serif)",
  fontSize: "var(--text-display)",
  lineHeight: 1.05,
  margin: 0,
  color: "var(--ink)",
  fontWeight: 400,
  letterSpacing: "-0.01em",
};

export default function LandingApp() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <SiteHeader />
      <main
        style={{
          maxWidth: "var(--content-width-wide)",
          margin: "0 auto",
          padding: "clamp(32px, 6vw, 72px) clamp(18px, 5vw, 28px) 40px",
        }}
      >
        <Label>decision games</Label>
        <h1 style={{ ...h1, marginTop: 10 }}>Edu</h1>
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--muted)",
            maxWidth: 640,
            margin: "18px 0 0",
          }}
        >
          {LANDING_INTRO}
        </p>

        <div id="game-cards">
          {GAMES.map((g) => (
            <a className="game-card" key={g.href} href={g.href}>
              <div className="game-card-icon">{g.icon}</div>
              <span className="game-card-tag">{g.tag}</span>
              <div className="game-card-title">{g.title}</div>
              <div className="game-card-desc">{g.hook}</div>
              <div className="game-card-cta">{g.cta}</div>
            </a>
          ))}
        </div>
      </main>
      <SiteFooter />
      <KofiButton />
    </div>
  );
}
