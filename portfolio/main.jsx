import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import '../src/lib/analytics'
import Portfolio from '../src/portfolio/Portfolio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)
