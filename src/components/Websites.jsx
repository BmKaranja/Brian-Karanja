import React from 'react'
import Pcards from './Pcards'
import PIntro from './PIntro'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import projectdata from '../data/projectdata.json'
import SEO from './SEO'

const websites = projectdata.filter((project)=>project.category==='website')

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Byma Web Development Projects",
  "description": "Featured production-grade web applications built with React, TailwindCSS, and JavaScript.",
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
    <div className='flex flex-col gap-10' style={{ background: 'var(--background-color)', minHeight: '100vh' }}>
      <SEO 
        title="Websites & Web Apps"
        description="Explore the web development projects built by Brian Karanja / Byma. Production-grade web applications optimized for speed, responsiveness, and clean UX."
        keywords="Web Development, React websites, E-commerce hubs, Byma Web Apps, Nairobi Developer"
        schemaJson={websiteSchema}
      />
      <PIntro/>
        <nav className='flex flex-row gap-2 md:gap-5 ml-2 md:ml-10 mt-10 flex-wrap'>
          <NavLink 
            to='/Projects'
            end
            className={({ isActive }) => isActive ? 'p-nav-active' : 'p-nav'}
          >
            All Work
          </NavLink>
          <NavLink 
            to='/projects/websites'
            end
            className={({ isActive }) => isActive ? 'p-nav-active' : 'p-nav'}
          >
            Websites
          </NavLink>
          {/*<NavLink 
            to='/projects/mobile'
            end
            className={({ isActive }) => isActive ? 'p-nav-active' : 'p-nav'}
          >
            Mobile Apps
          </NavLink>*/}
          <NavLink 
            to='/projects/designs'
            end
            className={({ isActive }) => isActive ? 'p-nav-active' : 'p-nav'}
          >
            Designs
          </NavLink>
          
        </nav>      
        <section className='px-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {websites.map((project) => (
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

export default Websites
