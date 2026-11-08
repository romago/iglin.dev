// Server entry for scripts/prerender.mjs: renders each page to HTML at build time.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import Services from './services/Services.jsx'
import Portfolio from './portfolio/Portfolio.jsx'
import NichePage from './services/NichePage.jsx'
export { nichePages } from './services/pages.js'
export { nicheNav } from './services/nav.js'
export { nicheGraph, toJsonLd } from './seo/schema.js'

const render = (page) => renderToString(<StrictMode>{page}</StrictMode>)

export const pages = {
  home: () => render(<App />),
  services: () => render(<Services />),
  portfolio: () => render(<Portfolio />),
  niche: (slug) => render(<NichePage slug={slug} />),
}
