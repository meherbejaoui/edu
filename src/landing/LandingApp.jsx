import Label from "../design/components/Label.jsx";
import { SiteFooter } from "../design/components/Shell.jsx";
import KofiButton from "../design/components/KofiButton.jsx";

const games = [
  {
    href: "anchor-room/",
    icon: "⚓",
    title: "The Anchor Room",
    tag: "11 cases",
    hook:
      "An interactive decision game about leadership, pressure, and the choices beneath the surface of public debate.",
    cta: "Play the game →",
  },
  {
    href: "the-interpreter/",
    icon: "🗣️",
    title: "The Interpreter",
    tag: "3 cases",
    hook:
      "A text-based decision game about the moral act of translation. Two people who can no longer reach each other — every line passes through you.",
    cta: "Play the game →",
  },
];

const h1 = {
  fontFamily: "var(--serif)",
  fontSize: "clamp(36px, 7vw, 60px)",
  lineHeight: 1.05,
  margin: 0,
  color: "var(--ink)",
  fontWeight: 400,
  letterSpacing: "-0.01em",
};

export default function LandingApp() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
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
          Short, text-based games about the choices people make under pressure —
          in a boardroom, at a negotiation table, between two people who no
          longer speak the same language. No right answers, only the one you
          can live with.
        </p>

        <div id="game-cards">
          {games.map((g) => (
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
