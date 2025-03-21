import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/AuFile_FE/" : "/",
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Listen on all interfaces
    port: 5173, // Ensure the port is correct
  },
}));
