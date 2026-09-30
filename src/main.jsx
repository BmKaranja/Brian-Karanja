import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Prerendered pages (scripts/prerender.mjs) mark #root with the route they were rendered for.
// Hydrate only when it matches this URL; anything served via the SPA fallback renders fresh.
const normalize = (p) => p.replace(/\/+$/, '').toLowerCase() || '/'
if (root.dataset.route && normalize(root.dataset.route) === normalize(location.pathname)) {
  hydrateRoot(root, app)
} else {
  root.replaceChildren()
  createRoot(root).render(app)
}
