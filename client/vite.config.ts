import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import svgrPlugin from 'vite-plugin-svgr';


// No backend calls: simple Vite React config
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
  ],
});
