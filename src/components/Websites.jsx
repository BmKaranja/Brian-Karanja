import React from 'react'
import Pcards from './Pcards'
import PIntro from './PIntro'
import PageShell from './layout/PageShell'
import ProjectTabs from './layout/ProjectTabs'
import projectdata from '../data/projectdata.json'
import SEO from './SEO'
import { breadcrumb, graph, projectList, webPage } from '../seo/schema'

const websites = projectdata.filter((project)=>project.category==='website')

const websiteSchema = graph(
  webPage('CollectionPage', '/projects/websites', 'Byma Solutions Web Development Projects', 'Featured production-grade web applications built by Byma Solutions with React, TailwindCSS, and JavaScript.'),
  projectList('Byma Solutions Web Development Projects', 'Featured production-grade web applications built by Byma Solutions with React, TailwindCSS, and JavaScript.', websites),
  breadcrumb([{ name: 'Projects', path: '/Projects' }, { name: 'Websites', path: '/projects/websites' }]),
)

function Websites() {
  return (
    <PageShell>
      <SEO
        path='/projects/websites'
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
