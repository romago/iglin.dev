// Prerenders the built pages to static HTML, so search engines and AI crawlers get the content
// without running JavaScript; the browser then hydrates it.
// Usage: node scripts/prerender.mjs site       (after `vite build`: dist/index.html, dist/services/index.html)
//        node scripts/prerender.mjs portfolio  (after the portfolio build: dist-portfolio/index.html)
import { readFile, writeFile, rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { build } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(import.meta.dirname, '..')
const targets = {
  site: { home: 'dist/index.html', services: 'dist/services/index.html' },
  portfolio: { portfolio: 'dist-portfolio/index.html' },
}
const target = targets[process.argv[2]]
if (!target) {
  console.error('Usage: node scripts/prerender.mjs site|portfolio')
  process.exit(1)
}

const outDir = resolve(root, 'node_modules/.prerender')
await build({
  configFile: false,
  root,
  // Both sites live at the root of their domains, so absolute asset URLs work on every page.
  base: '/',
  mode: 'production',
  logLevel: 'warn',
  plugins: [react()],
  build: { ssr: 'src/ssr.jsx', outDir, emptyOutDir: true, rollupOptions: { input: 'src/ssr.jsx' } },
})

const { pages } = await import(pathToFileURL(resolve(outDir, 'ssr.js')).href)
const EMPTY_ROOT = '<div id="root"></div>'

for (const [page, file] of Object.entries(target)) {
  const path = resolve(root, file)
  const html = await readFile(path, 'utf8')
  if (!html.includes(EMPTY_ROOT)) throw new Error(`${file}: no empty #root to fill`)
  await writeFile(path, html.replace(EMPTY_ROOT, `<div id="root">${pages[page]()}</div>`))
  console.log(`prerendered ${file}`)
}

await rm(outDir, { recursive: true, force: true })
