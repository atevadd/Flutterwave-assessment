import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                @use "@/scss/abstracts/_variables.scss" as *;
                @use "@/scss/abstracts/_mixins.scss" as *;
                @use "@/scss/abstracts/_animations.scss" as *;
                @use "@/scss/layout/_grid.scss" as *;
              `,
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
