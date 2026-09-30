import React from 'react'
import Pcards from './Pcards'
import PIntro from './PIntro'
import PageShell from './layout/PageShell'
import ProjectTabs from './layout/ProjectTabs'
import projectdata from '../data/projectdata.json'
import SEO from './SEO'

const designs= projectdata.filter((project)=>project.category==='designs')

const designSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Byma Solutions Design Projects",
  "description": "Featured UI/UX and design projects built by Byma Solutions with modern aesthetics and clean user experience.",
  "numberOfItems": designs.length,
  "itemListElement": designs.map((p, idx) => ({
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

function Designs() {
  return (
    <PageShell>
      <SEO 
        title="Designs"
        description="Explore the Design projects built by Byma Solutions. Luxurious UI/UX designs optimized for speed, responsiveness, and clean UX."
        keywords="Web Development, React designs, E-commerce hubs, Byma Solutions, Nairobi Developer"
        schemaJson={designSchema}
      />
      <PIntro />
      <ProjectTabs />
      <section aria-label='Projects' className='mx-auto max-w-6xl px-5 py-10 sm:py-14'>
        <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {designs.map((project) => (
            <li key={project.link + project.title}>
              <Pcards {...project} />
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  )
}

export default Designs
