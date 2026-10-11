// Landing-page copy, kept as plain data so two things can read it:
// LandingApp.jsx (what visitors see once the app mounts) and
// build/static-fallback.js (the same text written into index.html at build
// time, for readers and crawlers that do not run JavaScript).
export const LANDING_INTRO =
  "Short, text-based games about the choices people make under pressure — " +
  "in a boardroom, at a negotiation table, between two people who no " +
  "longer speak the same language. No right answers, only the one you " +
  "can live with.";

export const GAMES = [
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
