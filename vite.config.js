import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
  build: {
    sourcemap: false,
    rolldownOptions: {
      input: {
        main: 'index.html',
        sps: 'design-proposals/completa/index.html',
      },
      treeshake: false,
    },
  },
})
