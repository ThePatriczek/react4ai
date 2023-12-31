import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./app") }],
  },
});
