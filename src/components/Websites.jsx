import React from 'react'
import Pcards from './Pcards'
import PIntro from './PIntro'
import PageShell from './layout/PageShell'
import ProjectTabs from './layout/ProjectTabs'
import projectdata from '../data/projectdata.json'
import SEO from './SEO'

const websites = projectdata.filter((project)=>project.category==='website')

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Byma Solutions Web Development Projects",
  "description": "Featured production-grade web applications built by Byma Solutions with React, TailwindCSS, and JavaScript.",
  "numberOfItems": websites.length,
  "itemListElement": websites.map((p, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "item": {
      "@type": "CreativeWork",
      "name": p.title,
      "description": p.description,
      "url": p.link,
      "image": p.image
    }
  }))
};

function Websites() {
  return (
    <PageShell>
      <SEO 
        title="Websites & Web Apps"
        description="Explore the web development projects built by Byma Solutions. Production-grade web applications optimized for speed, responsiveness, and clean UX."
        keywords="Web Development, React websites, E-commerce hubs, Byma Solutions, Nairobi Developer"
        schemaJson={websiteSchema}
      />
      <PIntro />
      <ProjectTabs />
      <section aria-label='Projects' className='mx-auto max-w-6xl px-5 py-10 sm:py-14'>
        <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {websites.map((project) => (
            <li key={project.link + project.title}>
              <Pcards {...project} />
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  )
}

export default Websites
