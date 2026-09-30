// Single list of indexable routes. Used by the build-time prerender script
// (one static HTML file per route) and to generate sitemap.xml.
// `sources` are the files whose last git commit date becomes the sitemap lastmod.

export const SITE_URL = 'https://www.byma.co.ke'

export const routes = [
  { path: '/', changefreq: 'monthly', priority: '1.0', sources: ['src/components/Home.jsx', 'src/components/home'] },
  { path: '/Services', changefreq: 'monthly', priority: '0.9', sources: ['src/components/Services.jsx'] },
  { path: '/Projects', changefreq: 'weekly', priority: '0.8', sources: ['src/components/Projects.jsx', 'src/data/projectdata.json'] },
  { path: '/projects/websites', changefreq: 'weekly', priority: '0.7', sources: ['src/components/Websites.jsx', 'src/data/projectdata.json'] },
  { path: '/projects/mobile', changefreq: 'weekly', priority: '0.7', sources: ['src/components/Mobile.jsx', 'src/data/projectdata.json'] },
  { path: '/projects/designs', changefreq: 'weekly', priority: '0.7', sources: ['src/components/Designs.jsx', 'src/data/projectdata.json'] },
  { path: '/AboutMe', changefreq: 'monthly', priority: '0.6', sources: ['src/components/AboutMe.jsx'] },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3', sources: ['src/components/PrivacyPolicy.jsx'] },
]
