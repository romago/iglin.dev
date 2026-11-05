import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { services } from './src/services/packages.js'
import { homeGraph, servicesGraph, toJsonLd } from './src/seo/schema.js'

// Inlines each page's schema.org JSON-LD into its HTML, so crawlers see it without running JavaScript.
const jsonLd = {
  name: 'json-ld',
  transformIndexHtml(html, ctx) {
    // Niche pages get their JSON-LD per page in scripts/prerender.mjs.
    if (ctx.filename.endsWith('services/page/index.html')) return html
    const data = ctx.filename.endsWith('services/index.html') ? servicesGraph(services) : homeGraph()
    return html.replace('</head>', `    <script type="application/ld+json">${toJsonLd(data)}</script>\n  </head>`)
  },
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), jsonLd],
  // The home page, the packages at /services/ and the template for the niche pages at /services/<slug>/.
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        services: resolve(import.meta.dirname, 'services/index.html'),
        niche: resolve(import.meta.dirname, 'services/page/index.html'),
      },
    },
  },
})
