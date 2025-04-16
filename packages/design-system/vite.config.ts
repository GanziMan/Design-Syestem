// vite.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
  plugins: [react(), vanillaExtractPlugin()],
});
