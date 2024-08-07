import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // @/xxxx => src/xxxx
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".vue", ".json"],
  },
});
