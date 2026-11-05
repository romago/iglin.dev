import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '../src/index.css'
import '../src/lib/analytics'
import Portfolio from '../src/portfolio/Portfolio.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <Portfolio />
  </StrictMode>
)

// Production HTML is prerendered (scripts/prerender.mjs), so hydrate it; the dev server serves an empty root.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
