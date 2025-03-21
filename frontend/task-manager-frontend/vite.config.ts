import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
    , tailwindcss()
  ],
  server: {
    host: '0.0.0.0', // Listen on all interfaces
    port: 3000,      // Optionally specify the port (default is 3000)
    watch: {
      usePolling: true
    }
  },
})
