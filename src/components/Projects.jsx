import React from 'react'
import PageShell from './layout/PageShell'
import ProjectTabs from './layout/ProjectTabs'
import Pcards from './Pcards'
import PIntro from './PIntro'
import projectdata from '../data/projectdata.json'
import SEO from './SEO'

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Byma Solutions Projects Portfolio",
  "description": "Featured software engineering, web development, and mobile app projects by Byma Solutions.",
  "numberOfItems": projectdata.length,
  "itemListElement": projectdata.map((p, idx) => ({
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

function Projects() {
  return (
    <PageShell>
      <SEO 
        title="Featured Projects"
        description="Browse the technical projects, web applications, and mobile products engineered by Byma Solutions. Built with React, Flutter, and Firebase."
        keywords="Byma Solutions projects, web apps, StayPay, Tenga and Thrive, Oakwood Academy, Flutter applications, React portfolio"
        schemaJson={projectsSchema}
      />
      <PIntro />
      <ProjectTabs />
      <section aria-label='Projects' className='mx-auto max-w-6xl px-5 py-10 sm:py-14'>
        <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {projectdata.map((project) => (
            <li key={project.link + project.title}>
              <Pcards {...project} />
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  )
}

export default Projects
