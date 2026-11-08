// Prerenders the built pages to static HTML, so search engines and AI crawlers get the content
// without running JavaScript; the browser then hydrates it.
// Usage: node scripts/prerender.mjs site       (after `vite build`: home, /services/, every /services/<slug>/, sitemap)
//        node scripts/prerender.mjs portfolio  (after the portfolio build: dist-portfolio/index.html)
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { build } from 'vite'
import react from '@vitejs/plugin-react'
import { findPackage } from '../src/services/packages.js'

const root = resolve(import.meta.dirname, '..')
const target = process.argv[2]
if (!['site', 'portfolio'].includes(target)) {
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
const ssr = await import(pathToFileURL(resolve(outDir, 'ssr.js')).href)

const EMPTY_ROOT = '<div id="root"></div>'
const fill = (html, body, file) => {
  if (!html.includes(EMPTY_ROOT)) throw new Error(`${file}: no empty #root to fill`)
  return html.replace(EMPTY_ROOT, `<div id="root">${body}</div>`)
}
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

async function prerender(file, body) {
  const path = resolve(root, file)
  await writeFile(path, fill(await readFile(path, 'utf8'), body, file))
  console.log(`prerendered ${file}`)
}

if (target === 'portfolio') {
  await prerender('dist-portfolio/index.html', ssr.pages.portfolio())
} else {
  await prerender('dist/index.html', ssr.pages.home())
  await prerender('dist/services/index.html', ssr.pages.services())

  // Niche pages: one built template, copied per page with its own head, JSON-LD and content.
  // Drafts are published with noindex and left out of the sitemap until Roman approves them.
  // The footer links come from src/services/nav.js; it must list exactly the published pages.
  const published = ssr.nichePages.filter((p) => !p.draft).map((p) => p.slug).sort().join(',')
  const inFooter = ssr.nicheNav.map((p) => p.slug).sort().join(',')
  if (published !== inFooter) {
    throw new Error(`src/services/nav.js does not match the published niche pages.\n  published: ${published}\n  footer:    ${inFooter}`)
  }

  const templateFile = resolve(root, 'dist/services/page/index.html')
  const template = await readFile(templateFile, 'utf8')
  for (const page of ssr.nichePages) {
    const url = `https://iglin.dev/services/${page.slug}/`
    const offer = page.offer.kind === 'package' ? findPackage(page.offer.service, page.offer.package) : null
    const head = [
      `<title>${esc(page.metaTitle)}</title>`,
      `<meta name="description" content="${esc(page.metaDescription)}" />`,
      `<meta property="og:title" content="${esc(page.metaTitle)}" />`,
      `<meta property="og:description" content="${esc(page.metaDescription)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<link rel="canonical" href="${url}" />`,
      page.draft ? '<meta name="robots" content="noindex" />' : '',
      `<script type="application/ld+json">${ssr.toJsonLd(ssr.nicheGraph(page, offer))}</script>`,
    ].filter(Boolean).join('\n    ')
    const html = template
      .replace(/\s*<!-- Template[\s\S]*?-->/, '')
      .replace(/<meta name="description" content="" \/>\s*<meta property="og:title" content="" \/>\s*<meta property="og:description" content="" \/>/, '')
      .replace(/<title>.*?<\/title>/, head)
    const file = `dist/services/${page.slug}/index.html`
    await mkdir(resolve(root, `dist/services/${page.slug}`), { recursive: true })
    await writeFile(resolve(root, file), fill(html, ssr.pages.niche(page.slug), file))
    console.log(`prerendered ${file}${page.draft ? ' (draft, noindex)' : ''}`)
  }
  await rm(resolve(root, 'dist/services/page'), { recursive: true, force: true })

  // Sitemap of everything that should be indexed.
  const today = new Date().toISOString().slice(0, 10)
  const urls = [
    'https://iglin.dev/',
    'https://iglin.dev/services/',
    ...ssr.nichePages.filter((p) => !p.draft).map((p) => `https://iglin.dev/services/${p.slug}/`),
    'https://portfolio.iglin.dev/',
  ]
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`
  await writeFile(resolve(root, 'dist/sitemap.xml'), sitemap)
  console.log(`wrote dist/sitemap.xml (${urls.length} URLs)`)
}

await rm(outDir, { recursive: true, force: true })
