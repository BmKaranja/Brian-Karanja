import React from 'react'
import Footer from './Footer'
import Pcards from './Pcards'
import PIntro from './PIntro'
import { NavLink } from 'react-router-dom'
import projectdata from '../data/projectdata.json'
function Projects() {
  return (
    <div className='flex flex-col gap-10' style={{ background: 'var(--background-color)', minHeight: '100vh' }}>
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
