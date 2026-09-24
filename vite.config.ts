import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const runtimePort = (() => {
  const value = process.env.AI_WORKFLOW_STUDIO_PORT

  if (value === undefined || !/^\d+$/.test(value)) {
    return 8787
  }

  const port = Number(value)

  return Number.isInteger(port) && port >= 1 && port <= 65_535
    ? port
    : 8787
})()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': `http://127.0.0.1:${runtimePort}`,
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@shared': fileURLToPath(new URL('./shared', import.meta.url)),
    },
  },
})
