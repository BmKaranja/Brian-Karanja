// Runs after `vite build` + the SSR build of src/entry-server.jsx.
// Writes one static HTML file per route (real content + per-page <head>) so crawlers
// that don't execute JavaScript still see each page, then generates sitemap.xml.
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, routes, SITE_URL } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

// Tags each page supplies itself; the template's homepage defaults are removed first.
const pageTags = [
  /<title>[\s\S]*?<\/title>\s*/,
  /<meta\s+name="description"[\s\S]*?\/>\s*/,
  /<meta\s+name="keywords"[\s\S]*?\/>\s*/,
  /<link\s+rel="canonical"[^>]*>\s*/,
  /<meta\s+(?:property|name)="(?:og|twitter):[^"]+"[\s\S]*?\/>\s*/g,
]

for (const route of routes) {
  const { html, head } = render(route.path)
  if (!head) throw new Error(`No <SEO> rendered for ${route.path}`)

  let page = template
  for (const re of pageTags) page = page.replace(re, '')
  page = page
    .replace('</head>', `${head}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root" data-route="${route.path}">${html}</div>`)

  const out = route.path === '/' ? path.join(dist, 'index.html') : path.join(dist, route.path, 'index.html')
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, page)
  console.log(`prerendered ${route.path}`)
}

// sitemap.xml — lastmod from the last commit touching each route's source files.
const today = new Date().toISOString().slice(0, 10)
const lastmod = (sources) => {
  try {
    const iso = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...sources], { cwd: root, encoding: 'utf8' }).trim()
    return iso ? iso.slice(0, 10) : today
  } catch {
    return today
  }
}

const urls = routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${lastmod(r.sources)}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join('\n')

fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
console.log(`sitemap.xml: ${routes.length} urls`)

fs.rmSync(ssrDir, { recursive: true, force: true })
