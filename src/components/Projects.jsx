import React from 'react'
import Footer from './Footer'
import Pcards from './Pcards'
import PIntro from './PIntro'
import { NavLink } from 'react-router-dom'

const projectsData = [
  { title: 'Tenga and Thrive', description: 'Tenga & Thrive is an e-commerce hub for intentional living, offering curated products across tech, fashion, and home designed with clarity, style, and purpose', link: 'https://tenga-and-thrive.onrender.com', category: 'mobile' },
  { title: 'My Porfolio', description: 'This website is a high-fidelity Developer Portfolio designed with a "Cyber-Editorial" aesthetic. It targets a modern, tech-forward audience by blending high-performance engineering vibes with sleek, professional design.', link: 'https://brian-karanja.onrender.com', category: 'mobile' },
  { title: 'Oakwood Web', description: 'Oakwood Academy is a fictional academic institution created as a project concept, featuring a welcoming digital platform for its 2025 "academic" year', link: 'https://oakwood-web.onrender.com', category: 'mobile' },
  { title: 'StayPay', description: 'A sleek, high-contrast property management platform designed for the modern rental ecosystem. It bridges the gap between landlords and tenants.', link: 'https://github.com/BmKaranja/StayPay-1.git', category: 'mobile' },
  { title: 'Restaurant', description:'A clean, responsive site showcasing a restaurant’s menu, ambiance, and contact details. Built with HTML and JavaScript, it highlights user‑friendly navigation and a modern design for an engaging dining experience.',link:'https://github.com/BmKaranja/Restaurant.git',category:'website'},

];

function Projects() {
  return (
    <div className='flex flex-col gap-10 overflow-hidden'>
      <PIntro/>
      <nav className='flex flex-row gap-5 ml-10 mt-10'>
        <NavLink to='#' id='p-nav1' style={{color:'#00ff00'}}>All Work</NavLink>
        <NavLink to='/projects/websites' className='p-nav'>Websites</NavLink>
        <NavLink to='/projects/mobile' className='p-nav'>Mobile Apps</NavLink>
      </nav>
      <section className='px-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectsData.map((project) => (
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
