import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 경로 설정을 위해 필요함

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  server: {
    port: 3000,
    open: true, // 자동으로 브라우저 열기
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
