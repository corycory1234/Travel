import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@/sass/helpers/_mixins.scss" as*`
  //     }
  //   }
  // },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  base: "/Travel/",
})
