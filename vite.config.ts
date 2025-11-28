import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/lib/components"),
      "@icons": path.resolve(__dirname, "src/lib/icons"),
      "@lib": path.resolve(__dirname, "src/lib"),
    },
  },
  server: {
    port: 3000,
  },
});
