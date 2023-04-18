import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
const isDev = process.env.NODE_ENV === "development";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"), // 根路径
      "@": path.resolve(__dirname, "src"), // src 路径
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    open: true,
  },
});
