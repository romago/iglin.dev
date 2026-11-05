import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Portfolio for portfolio.iglin.dev: separate entry and public dir,
// so no contact info (projects.md, llms.txt) leaks into this build.
export default defineConfig({
  root: 'portfolio',
  base: './',
  publicDir: 'public',
  // Read .env.production from the repo root, so the portfolio gets the same VITE_GA_ID.
  envDir: '..',
  plugins: [react()],
  build: {
    outDir: '../dist-portfolio',
    emptyOutDir: true,
  },
})
