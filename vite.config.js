import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
    },
  },
  plugins: [react()],
  base: "/YAARVIN/",
  optimizeDeps: {
    esbuildOptions: {
      loader: { ".js": "jsx" },
    },
    include: ["react", "react-dom", "ogl"],
  },
});
