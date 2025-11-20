import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      fastRefresh: true
    })
  ],

  base: "./",

  server: {
    strictPort: true,
    port: 5173,
    hmr: {
      protocol: "ws",
      host: "localhost",
      port: 5173
    }
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
      layouts: path.resolve(__dirname, "src/layouts"),
      examples: path.resolve(__dirname, "src/examples"),
      assets: path.resolve(__dirname, "src/assets"),
      context: path.resolve(__dirname, "src/context"),
      routes: path.resolve(__dirname, "src/routes"),
    },
  },
});
