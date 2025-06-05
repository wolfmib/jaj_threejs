// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@react-three/drei', '@react-three/fiber']
  },
  server: {
    host: true,
    port: 5173
  }
})
