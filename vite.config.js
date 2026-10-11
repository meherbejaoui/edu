import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import staticFallback from "./build/static-fallback.js";

export default defineConfig({
  base: "./",
  // staticFallback writes readable HTML into each page's #root at build
  // time (see build/static-fallback.js); React replaces it when it mounts.
  plugins: [react(), staticFallback()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        anchorRoom: resolve(__dirname, "anchor-room/index.html"),
        theInterpreter: resolve(__dirname, "the-interpreter/index.html"),
      },
    },
  },
});
