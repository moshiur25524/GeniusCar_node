import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://bookory-cc089.firebaseio.com',
        changeOrigin: true,
        secure: false,
        headers: {
          Connection: 'keep-alive',
        },
      }
    }
  }
})