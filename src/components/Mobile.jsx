import React from 'react'
import Pcards from './Pcards'
import PIntro from './PIntro'
import PageShell from './layout/PageShell'
import ProjectTabs from './layout/ProjectTabs'
import projectdata from '../data/projectdata.json'
import SEO from './SEO'

const mobileApps = projectdata.filter((project)=>project.category==='mobile')

const mobileSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Byma Solutions Mobile App Projects",
  "description": "Featured cross-platform iOS and Android mobile applications built by Byma Solutions with Flutter and Dart.",
  "numberOfItems": mobileApps.length,
  "itemListElement": mobileApps.map((p, idx) => ({
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

function Mobile() {
  return (
    <PageShell>
      <SEO 
        title="Mobile Apps"
        description="Browse cross-platform mobile apps engineered by Byma Solutions using Flutter and Dart. Fast, native performance and clean UI/UX design."
        keywords="Mobile App Development, Flutter apps, iOS and Android, StayPay mobile, Dart, Cross-platform"
        schemaJson={mobileSchema}
      />
      <PIntro />
      <ProjectTabs showMobile />
      <section aria-label='Projects' className='mx-auto max-w-6xl px-5 py-10 sm:py-14'>
        <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {mobileApps.map((project) => (
            <li key={project.link + project.title}>
              <Pcards {...project} />
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  )
}

export default Mobile
