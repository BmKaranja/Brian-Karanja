import React from 'react'
import Footer from './Footer'
import Pcards from './Pcards'
import PIntro from './PIntro'
import { NavLink } from 'react-router-dom'
import projectdata from '../data/projectdata.json'
import SEO from './SEO'

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Byma Projects Portfolio",
  "description": "Featured software engineering, web development, and mobile app projects by Brian Karanja.",
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
    <div className='flex flex-col gap-10' style={{ background: 'var(--background-color)', minHeight: '100vh' }}>
      <SEO 
        title="Featured Projects"
        description="Browse the technical projects, web applications, and mobile products engineered by Brian Karanja / Byma. Built with React, Flutter, and Firebase."
        keywords="Brian Karanja projects, web apps, StayPay, Tenga and Thrive, Oakwood Academy, Flutter applications, React portfolio"
        schemaJson={projectsSchema}
      />
      <PIntro/>
      <nav className='flex flex-row gap-5 ml-10 mt-10'>
        <NavLink to='#' id='p-nav1' style={{color:'#00ff00'}}>All Work</NavLink>
        <NavLink to='/projects/websites' className='p-nav'>Websites</NavLink>
        <NavLink to='/projects/mobile' className='p-nav'>Mobile Apps</NavLink>
      </nav>
      <section className='px-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectdata.map((project) => (
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

export default Projects
