import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// During dev, proxy API requests to the Node server
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:4000'
    }
  }
})