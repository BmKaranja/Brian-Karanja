import { createContext } from 'react'
import { SITE_URL } from './routes'

// During the build-time prerender (src/entry-server.jsx) a collector is provided here;
// components/SEO reports its props synchronously so the static HTML gets the right <head>.
export const HeadContext = createContext(null)

export const DEFAULT_IMAGE = `${SITE_URL}/me.jpg`

export const formatTitle = (title) =>
  title ? `${title} | BYMA Solutions` : 'BYMA Solutions | Creative Full-Stack Development'

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Static <head> markup for one page, used by scripts/prerender.mjs.
export function headTags({ title, description, keywords, ogImage, ogType = 'website', path, schemaJson }) {
  const t = formatTitle(title)
  const url = `${SITE_URL}${path}`
  const image = ogImage || DEFAULT_IMAGE
  return [
    `<title>${esc(t)}</title>`,
    description && `<meta name="description" content="${esc(description)}" />`,
    keywords && `<meta name="keywords" content="${esc(keywords)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${esc(ogType)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(t)}" />`,
    description && `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(t)}" />`,
    description && `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    schemaJson &&
      `<script id="seo-schema-jsonld" type="application/ld+json">${JSON.stringify(schemaJson).replace(/</g, '\u003c')}</script>`,
  ]
    .filter(Boolean)
    .map((tag) => `  ${tag}`)
    .join('\n')
}
