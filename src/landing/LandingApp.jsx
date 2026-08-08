import Label from "../design/components/Label.jsx";
import Card from "../design/components/Card.jsx";
import { SiteFooter } from "../design/components/Shell.jsx";

const games = [
  {
    href: "anchor-room/",
    title: "The Anchor Room",
    kicker: "public decisions",
    tag: "11 cases · ~10 min each",
    hook:
      "An interactive decision game about leadership, pressure, and the choices beneath the surface of public debate.",
    accent: "#b08a2e",
  },
  {
    href: "the-interpreter/",
    title: "The Interpreter",
    kicker: "carrying words across",
    tag: "3 cases · ~10 min each",
    hook:
      "A text-based decision game about the moral act of translation. Two people who can no longer reach each other — every line passes through you.",
    accent: "#3e7a80",
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
            fontFamily: "var(--serif)",
            fontSize: 19,
            lineHeight: 1.6,
            color: "var(--muted)",
            maxWidth: 640,
            margin: "18px 0 0",
            fontStyle: "italic",
          }}
        >
          Short, text-based games about the choices people make under pressure —
          in a boardroom, at a negotiation table, between two people who no
          longer speak the same language. No right answers, only the one you
          can live with.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
            marginTop: 44,
          }}
        >
          {games.map((g) => (
            <Card as="a" key={g.href} href={g.href} interactive accent={g.accent} style={{ display: "block" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--serif)", fontSize: 26, color: "var(--ink)" }}>{g.title}</span>
                <Label>{g.kicker}</Label>
              </div>
              <p style={{ fontFamily: "var(--sans)", fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)", margin: "10px 0 0" }}>
                {g.hook}
              </p>
              <div style={{ marginTop: 14 }}>
                <Label color="var(--faint)">{g.tag}</Label>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
