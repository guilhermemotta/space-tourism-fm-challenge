import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/space-tourism-fm-challenge/",
  plugins: [react()],
});
