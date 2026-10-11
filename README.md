# edu

Short, text-based decision games — [meherbejaoui.com/edu](https://meherbejaoui.com/edu).

Currently live: **The Anchor Room** (leadership under public pressure) and
**The Interpreter** (the moral act of translation).

## Development

```
pnpm install
pnpm dev       # local dev server
pnpm build     # production build to dist/
pnpm preview   # serve the production build locally
```

Deploys to GitHub Pages automatically on push to `main` via
`.github/workflows/deploy.yml`.

## Page text without JavaScript

The games are client-rendered, so on their own the built pages would ship an
empty `<div id="root">`. At build time, `build/static-fallback.js` (a small
Vite plugin) writes a plain-HTML description into that mount point: what each
game is, how it plays, and every case it contains. It is generated from the
same `cases.js` and `packs.js` the games read, so it stays current without
any upkeep. React replaces it as soon as the app mounts; readers and crawlers
that do not run JavaScript get real text instead of a blank page.

## License

This repository is dual-licensed:

- **Code** (components, engine logic, build configuration) — [GNU GPLv3](LICENSE)
- **Game content** (case writing, dialogue, choices, outcomes — everything
  in `src/games/*/cases.js`, `packs.js`, `archetypes.js`) —
  [CC BY-NC-SA 4.0](LICENSE-CONTENT.md)
