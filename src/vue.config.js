import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        secure: false
      },
      // '/login': {
      //   target: 'http://127.0.0.1:5000',
      //   changeOrigin: true,
      //   secure: false
      // }
    }
  }
});
