import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No backend calls: simple Vite React config
export default defineConfig({
  plugins: [react()]
})
