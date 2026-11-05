import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { services } from './src/services/packages.js'
import { homeGraph, servicesGraph, toJsonLd } from './src/seo/schema.js'

// Inlines each page's schema.org JSON-LD into its HTML, so crawlers see it without running JavaScript.
const jsonLd = {
  name: 'json-ld',
  transformIndexHtml(html, ctx) {
    const data = ctx.filename.endsWith('services/index.html') ? servicesGraph(services) : homeGraph()
    return html.replace('</head>', `    <script type="application/ld+json">${toJsonLd(data)}</script>\n  </head>`)
  },
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), jsonLd],
  // Two pages: the home page and the fixed-price packages at /services/.
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        services: resolve(import.meta.dirname, 'services/index.html'),
      },
    },
  },
})
