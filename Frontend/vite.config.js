import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
        `,
      },
    },
  },
});
