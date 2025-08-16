
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: "https://cipr-api.panhayuthoeun.codes",
        changeOrigin: true,
        headers: {
          Accept: 'application/json',
          "Content-Type" : 'application/json',
        }
      }
    }
  }
});
