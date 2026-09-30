/* eslint-disable react-refresh/only-export-components -- build-time entry, never hot-reloaded */
// Build-time render entry, used only by scripts/prerender.mjs (never shipped to the browser).
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'
import { HeadContext, headTags } from './seo/head'

export { routes, SITE_URL } from './seo/routes'

export function render(url) {
  let meta = null
  const html = renderToString(
    <StrictMode>
      <HeadContext.Provider value={(m) => { meta = m }}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HeadContext.Provider>
    </StrictMode>,
  )
  return { html, head: meta ? headTags(meta) : null }
}
