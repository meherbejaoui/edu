// Static, readable HTML for each page's empty React mount point.
//
// Every page in this site is a client-rendered React app: the HTML that ships
// is `<div id="root"></div>` plus a script. Anything that reads the page
// without running JavaScript (some crawlers, link previewers, reader modes, a
// browser with scripts blocked) therefore sees a title and nothing else, even
// though the games contain tens of thousands of words of writing.
//
// This Vite plugin fills that gap at build time. For each entry page it writes
// a plain-HTML description of what the page holds into `#root`: what the game
// is, how it plays, and every case it contains. When the app's script runs,
// React's first render replaces the contents of `#root`, so players see the
// game exactly as before.
//
// The text is generated from the same data modules the games read (cases.js,
// packs.js, landing/content.js), so adding or editing a case updates this
// page text on the next build with nothing to keep in sync by hand. The only
// copy duplicated here is the short framing text from each game's title
// screen, marked below; update it here if those screens are reworded.

import { CASES as ANCHOR_CASES } from "../src/games/anchor-room/cases.js";
import { PACKS as ANCHOR_PACKS } from "../src/games/anchor-room/packs.js";
import { CASES as INTERPRETER_CASES } from "../src/games/the-interpreter/cases.js";
import { GAMES, LANDING_INTRO } from "../src/landing/content.js";

const MOUNT = '<div id="root"></div>';

const esc = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Scoped under .sf so nothing here can touch the app once it mounts. Colours
// and fonts come from design/tokens.css, which the built page links in <head>,
// so the fallback follows the same light/dark theme as the games.
const STYLE = `<style>
.sf{max-width:var(--content-width,720px);margin:0 auto;padding:clamp(24px,5vw,56px) clamp(18px,5vw,28px) 64px;font-family:var(--sans,system-ui,sans-serif);color:var(--ink,#23262b);line-height:1.62}
.sf-wide{max-width:var(--content-width-wide,1000px)}
.sf a{color:inherit}
.sf-crumbs,.sf-foot{font-size:.875rem;color:var(--muted,#54595f)}
.sf-crumbs a,.sf-foot a{color:inherit;text-decoration:none}
.sf-label{display:block;margin-top:clamp(20px,5vw,48px);font-size:11px;letter-spacing:.14em;text-transform:uppercase;font-weight:600;color:var(--faint,#676c72)}
.sf h1{font-family:var(--serif,Georgia,serif);font-size:var(--text-display,2.5rem);font-weight:400;line-height:1.05;letter-spacing:-.01em;margin:10px 0 0}
.sf h2{font-family:var(--serif,Georgia,serif);font-size:1.5rem;font-weight:400;margin:2.5rem 0 .5rem}
.sf h3{font-family:var(--serif,Georgia,serif);font-size:1.2rem;font-weight:700;margin:1.75rem 0 .25rem}
.sf h4{font-size:1rem;font-weight:700;margin:1.25rem 0 .15rem}
.sf p{margin:.5rem 0}
.sf .sf-lede{font-size:17px;color:var(--muted,#54595f);max-width:640px;margin-top:18px}
.sf .sf-meta{font-size:.875rem;color:var(--faint,#676c72)}
.sf-foot{margin-top:3rem;padding-top:1rem;border-top:1px solid var(--hair,#d3d5d8)}
</style>`;

function crumbs(current) {
  const tail = current
    ? ` / <a href="../">edu</a> / <span>${esc(current)}</span>`
    : " / <span>edu</span>";
  return `<nav class="sf-crumbs" aria-label="Breadcrumb"><a href="https://www.meherbejaoui.com/">meherbejaoui.com</a>${tail}</nav>`;
}

const REPO = "https://github.com/meherbejaoui/edu";

function footer() {
  return `<footer class="sf-foot">
<p>Games by Meher Bejaoui, built with Claude. <a href="https://www.meherbejaoui.com/">meherbejaoui.com</a> · <a href="${REPO}">Source</a> · Code <a href="${REPO}/blob/main/LICENSE">GPLv3</a> · Content <a href="${REPO}/blob/main/LICENSE-CONTENT.md">CC BY-NC-SA 4.0</a></p>
<p>These games are interactive and need JavaScript to play. This page lists what each one contains.</p>
</footer>`;
}

// ---------------------------------------------------------------- landing --

function anchorPackList() {
  return ANCHOR_PACKS.filter((pack) => pack.id !== "full")
    .map((pack) => {
      const titles = pack.ids
        .map((id) => ANCHOR_CASES.find((c) => c.id === id))
        .filter(Boolean)
        .map((c) => esc(c.title))
        .join(", ");
      return `<li><strong>${esc(pack.name)}</strong> (${esc(pack.tagline)}). ${esc(pack.desc)} Cases: ${titles}.</li>`;
    })
    .join("\n");
}

function interpreterCaseList() {
  return INTERPRETER_CASES.map(
    (c) =>
      `<li><strong>${esc(c.title)}</strong> (${esc(c.kicker)}): ${esc(c.partyA.name)}, ${esc(c.partyA.role)}, and ${esc(c.partyB.name)}, ${esc(c.partyB.role)}.</li>`
  ).join("\n");
}

function landing() {
  const cards = GAMES.map(
    (g) => `<a class="game-card" href="${esc(g.href)}">
<div class="game-card-icon">${esc(g.icon)}</div>
<span class="game-card-tag">${esc(g.tag)}</span>
<div class="game-card-title">${esc(g.title)}</div>
<div class="game-card-desc">${esc(g.hook)}</div>
<div class="game-card-cta">${esc(g.cta)}</div>
</a>`
  ).join("\n");

  return `${STYLE}
<div class="sf sf-wide">
${crumbs()}
<main>
<span class="sf-label">decision games</span>
<h1>Edu</h1>
<p class="sf-lede">${esc(LANDING_INTRO)}</p>
<div id="game-cards">
${cards}
</div>
<h2>The Anchor Room</h2>
<p>${ANCHOR_CASES.length} cases in three packs. In each one you are handed a decision, a short time to listen to the people it affects, and a private push from someone with power over you. Then you choose, and face the people you did not pick.</p>
<ul>
${anchorPackList()}
</ul>
<p><a href="anchor-room/">Read the cases and play The Anchor Room</a></p>
<h2>The Interpreter</h2>
<p>${INTERPRETER_CASES.length} cases. Two people can no longer speak to each other directly, and every line passes through you. For each line you choose one of three ways to carry it across.</p>
<ul>
${interpreterCaseList()}
</ul>
<p><a href="the-interpreter/">Read the cases and play The Interpreter</a></p>
</main>
${footer()}
</div>`;
}

// ------------------------------------------------------------ anchor room --

function anchorRoom() {
  const packs = ANCHOR_PACKS.filter((pack) => pack.id !== "full")
    .map((pack) => {
      const cases = pack.ids
        .map((id) => ANCHOR_CASES.find((c) => c.id === id))
        .filter(Boolean)
        .map(
          (c) => `<h4>${esc(c.title)}</h4>
<p>${esc(c.role)} ${esc(c.setting)}</p>
<p><em>${esc(c.question)}</em></p>
<p class="sf-meta">${c.stakeholders.length} people you can hear from · ${c.decisions.length} possible decisions</p>`
        )
        .join("\n");
      return `<h3>${esc(pack.name)}: ${esc(pack.tagline)}</h3>
<p>${esc(pack.desc)}</p>
${cases}`;
    })
    .join("\n");

  // The intro paragraph and the four rules repeat the game's own title
  // screen (src/games/anchor-room/screens/Title.jsx).
  return `${STYLE}
<div class="sf">
${crumbs("The Anchor Room")}
<main>
<span class="sf-label">a game of public decisions</span>
<h1>The Anchor Room</h1>
<p class="sf-lede">Every public decision you've ever argued about online looked simple from the outside. Tonight, you're on the inside — where the pressure is personal, the data is quiet, and every choice is a loss to someone.</p>
<h2>Rules of the chamber</h2>
<p><strong>There are no right answers.</strong> There are only forces — the Pushes that move you, and the Anchors that hold you.</p>
<p><strong>The loudest voice is rarely the whole story.</strong> You'll have limited time to listen. Who you don't hear becomes your blind spot.</p>
<p><strong>After every choice, you face the people you didn't pick.</strong> That part isn't optional. It never is.</p>
<p><strong>Leave whenever you like.</strong> After any case, you can continue — or close the docket and receive your Leadership Signature, built from every case you played.</p>
<h2>How a case plays</h2>
<p>You read a brief, then choose which of the people involved to hear before time runs out. Some come to you; others only speak if you go to them. A private message arrives from someone with power over you. You decide, read how two different rooms describe your decision, and then explain yourself to the people you did not choose. Each case ends with what happened later and a debrief of the pushes you felt, the anchors you held, and the voices you never heard.</p>
<h2>The ${ANCHOR_CASES.length} cases</h2>
${packs}
<p><a href="../">All games</a></p>
</main>
${footer()}
</div>`;
}

// ------------------------------------------------------------ interpreter --

function interpreter() {
  const cases = INTERPRETER_CASES.map(
    (c) => `<h3>${esc(c.title)}</h3>
<p class="sf-meta">${esc(c.kicker)} · ${esc(c.partyA.name)}, ${esc(c.partyA.role)} · ${esc(c.partyB.name)}, ${esc(c.partyB.role)} · ${c.beats.length} lines to carry</p>
<p>${esc(c.intro)}</p>`
  ).join("\n");

  // The intro paragraph and "How it works" repeat the game's own screens
  // (src/games/the-interpreter/screens/Title.jsx and Intro.jsx).
  return `${STYLE}
<div class="sf">
${crumbs("The Interpreter")}
<main>
<span class="sf-label">a game about carrying words across</span>
<h1>The Interpreter</h1>
<p class="sf-lede">Two people who can no longer reach each other. Every line passes through you. You choose the words. You will not be told which choice is right, because there isn't one — only the one you can live with once you've heard where it lands.</p>
<h2>How it works</h2>
<p>Each line, you choose one of three ways to carry it across. The three are never labeled — pick by ear, the way you would in the chair. You have <strong>three reads</strong>: spend one to sense what a person actually means underneath their words. The room has a temperature. You'll feel it move.</p>
<p class="sf-meta">${INTERPRETER_CASES.length} cases · about 10 minutes each · nothing is saved</p>
<h2>The ${INTERPRETER_CASES.length} cases</h2>
${cases}
<p><a href="../">All games</a></p>
</main>
${footer()}
</div>`;
}

// ----------------------------------------------------------------- plugin --

const PAGES = [
  { match: /(^|\/)anchor-room\/index\.html$/, render: anchorRoom },
  { match: /(^|\/)the-interpreter\/index\.html$/, render: interpreter },
  { match: /(^|\/)index\.html$/, render: landing },
];

export default function staticFallback() {
  return {
    name: "edu-static-fallback",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        const page = PAGES.find((p) => p.match.test(ctx.path));
        if (!page) return html;
        if (!html.includes(MOUNT)) {
          throw new Error(
            `static-fallback: ${ctx.path} has no ${MOUNT} to fill. ` +
              "Keep the mount point empty in the source HTML."
          );
        }
        return html.replace(MOUNT, `<div id="root">${page.render()}</div>`);
      },
    },
  };
}
