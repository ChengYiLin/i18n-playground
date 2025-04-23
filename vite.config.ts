import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 3000,
  },
  define: {
    "process.env": {
      VITE_APP_TOLGEE_API_URL: process.env.VITE_APP_TOLGEE_API_URL,
      VITE_APP_TOLGEE_API_KEY: process.env.VITE_APP_TOLGEE_API_KEY, 
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
