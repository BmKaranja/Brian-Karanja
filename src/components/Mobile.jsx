import React from 'react'
import Pcards from './Pcards'
import PIntro from './PIntro'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import projectdata from '../data/projectdata.json'

function Mobile() {
  const mobileProjects = projectdata.filter(project => project.category === 'mobile');

  return (
    <div className='flex flex-col gap-10' style={{ background: 'var(--background-color)', minHeight: '100vh' }}>
      <PIntro/>
      <nav className='flex flex-row gap-5 ml-10 mt-10'>
        <NavLink to='/projects' id='p-nav1'>All Work</NavLink>
        <NavLink to='/projects/websites' className='p-nav'>Websites</NavLink>
        <NavLink to='/projects/mobile' className='p-nav'>Mobile Apps</NavLink>
      </nav>
      <section className='px-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {mobileProjects.map((project) => (
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
