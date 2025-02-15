import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        preserveModulesRoot: 'src'
      }
    }
  }
})
