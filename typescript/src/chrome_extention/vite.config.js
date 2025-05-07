import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig(() => ({
  root: "./src",
  build: {
    outDir: "./dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.ts"),
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
}));