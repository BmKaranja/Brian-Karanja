import React from 'react'
import PageShell from './layout/PageShell'
import ProjectTabs from './layout/ProjectTabs'
import Pcards from './Pcards'
import PIntro from './PIntro'
import projectdata from '../data/projectdata.json'
import SEO from './SEO'
import { breadcrumb, graph, projectList, webPage } from '../seo/schema'

const projectsSchema = graph(
  webPage('CollectionPage', '/Projects', 'Byma Solutions Projects Portfolio', 'Featured software engineering, web development, and mobile app projects by Byma Solutions.'),
  projectList('Byma Solutions Projects Portfolio', 'Featured software engineering, web development, and mobile app projects by Byma Solutions.', projectdata),
  breadcrumb([{ name: 'Projects', path: '/Projects' }]),
)

function Projects() {
  return (
    <PageShell>
      <SEO
        path='/Projects'
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
