import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@designcodeio/threeui/style.css",
        replacement: path.resolve(__dirname, "src/shaders/threeui.css"),
      },
      {
        find: "@designcodeio/threeui",
        replacement: path.resolve(__dirname, "src/index.ts"),
      },
    ],
  },
  server: {
    port: 5173,
    host: true,
  },
});
