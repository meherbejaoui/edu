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

## License

This repository is dual-licensed:

- **Code** (components, engine logic, build configuration) — [GNU GPLv3](LICENSE)
- **Game content** (case writing, dialogue, choices, outcomes — everything
  in `src/games/*/cases.js`, `packs.js`, `archetypes.js`) —
  [CC BY-NC-SA 4.0](LICENSE-CONTENT.md)
