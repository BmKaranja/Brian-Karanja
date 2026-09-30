// Shared JSON-LD building blocks. Every page links back to one Organization
// node by @id so search and answer engines see a single, consistent entity.
import { SITE_URL } from './routes'

export const ORG_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

export const organization = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': ORG_ID,
  name: 'Byma Solutions',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon-192x192.png`,
  image: `${SITE_URL}/me.jpg`,
  description:
    'Byma Solutions is a web, mobile and UI/UX design studio in Nairobi, Kenya that builds React web applications, Flutter mobile apps and custom design systems.',
  foundingDate: '2025',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  areaServed: [
    { '@type': 'City', name: 'Nairobi' },
    { '@type': 'Country', name: 'Kenya' },
  ],
  // TODO(owner): add "telephone" / "contactPoint" once the canonical WhatsApp number is confirmed,
  // and "email" if there is a public contact address.
  sameAs: [
    'https://github.com/BmKaranja',
    'https://www.linkedin.com/in/b-karanja',
    'https://www.instagram.com/it.s._bryan/',
  ],
  knowsAbout: [
    'Web development',
    'Mobile app development',
    'UI/UX design',
    'React',
    'TypeScript',
    'TailwindCSS',
    'Flutter',
    'Dart',
    'Firebase',
    'Supabase',
    'Figma',
  ],
}

export const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: 'Byma Solutions',
  inLanguage: 'en',
  publisher: { '@id': ORG_ID },
}

// crumbs: [{ name, path }] after Home, e.g. [{ name: 'Projects', path: '/Projects' }]
export const breadcrumb = (crumbs) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: `${SITE_URL}${c.path}`,
  })),
})

// A WebPage node tied to the site and organization.
export const webPage = (type, path, name, description) => ({
  '@type': type,
  '@id': `${SITE_URL}${path}#webpage`,
  url: `${SITE_URL}${path}`,
  name,
  description,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
})

export const graph = (...nodes) => ({ '@context': 'https://schema.org', '@graph': nodes })

// Portfolio pages: an ItemList of projects.
export const projectList = (name, description, projects) => ({
  '@type': 'ItemList',
  name,
  description,
  numberOfItems: projects.length,
  itemListElement: projects.map((p, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    item: {
      '@type': 'CreativeWork',
      name: p.title,
      description: p.description,
      ...(p.link && { url: p.link }),
      ...(p.image && { image: p.image.startsWith('http') ? p.image : `${SITE_URL}${p.image}` }),
      creator: { '@id': ORG_ID },
    },
  })),
})
