import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [reactPlugin(), svgr({ svgrOptions: { icon: true } })],
});
