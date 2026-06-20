import React from 'react'
import Pcards from './Pcards'
import PIntro from './PIntro'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import projectdata from '../data/projectdata.json'
import SEO from './SEO'

const mobileApps = projectdata.filter((project)=>project.category==='mobile')

const mobileSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Byma Mobile App Projects",
  "description": "Featured cross-platform iOS and Android mobile applications built with Flutter and Dart.",
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
    <div className='flex flex-col gap-10' style={{ background: 'var(--background-color)', minHeight: '100vh' }}>
      <SEO 
        title="Mobile Apps"
        description="Browse cross-platform mobile apps engineered by Brian Karanja / Byma using Flutter and Dart. Fast, native performance and clean UI/UX design."
        keywords="Mobile App Development, Flutter apps, iOS and Android, StayPay mobile, Dart, Cross-platform"
        schemaJson={mobileSchema}
      />
      <PIntro/>
      <nav className='flex flex-row gap-5 ml-10 mt-10'>
        <NavLink to='/Projects' className='p-nav'>All Work</NavLink>
        <NavLink to='/projects/websites' className='p-nav'>Websites</NavLink>
        <NavLink to='/projects/mobile' id='p-nav1' style={{color:'#00ff00'}}>Mobile Apps</NavLink>
      </nav>
      <section className='px-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {mobileApps.map((project) => (
            <Pcards key={project.link} {...project} />
          ))}
        </div>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Mobile
