import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Portfolio for portfolio.iglin.dev: separate entry and public dir,
// so no contact info (projects.md, llms.txt) leaks into this build.
export default defineConfig({
  root: 'portfolio',
  base: './',
  publicDir: 'public',
  plugins: [react()],
  build: {
    outDir: '../dist-portfolio',
    emptyOutDir: true,
  },
})
