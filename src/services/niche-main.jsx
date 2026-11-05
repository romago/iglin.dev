import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '../index.css'
import '../lib/analytics'
import NichePage from './NichePage.jsx'
import { findNichePage, nichePages } from './pages'

// Live pages are /services/<slug>/; on the dev server the template is /services/page/?p=<slug>.
const fromPath = window.location.pathname.split('/').filter(Boolean)[1]
const slug = findNichePage(fromPath)?.slug || new URLSearchParams(window.location.search).get('p') || nichePages[0].slug

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <NichePage slug={slug} />
  </StrictMode>
)

if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
