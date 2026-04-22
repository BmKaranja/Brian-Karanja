import React from 'react'
import Pcards from './Pcards'
import PIntro from './PIntro'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const projectsData = [
  { title: 'StayPay', description: 'A sleek, high-contrast property management platform designed for the modern rental ecosystem. It bridges the gap between landlords and tenants.', link: 'https://github.com/BmKaranja/StayPay-1.git', category: 'mobile' },
];

function Mobile() {
  return (
    <div className='flex flex-col gap-10 overflow-hidden'>
      <PIntro/>
      <nav className='flex flex-row gap-5 ml-10 mt-10'>
        <NavLink to='/projects' id='p-nav1'>All Work</NavLink>
        <NavLink to='/projects/websites' className='p-nav'>Websites</NavLink>
        <NavLink to='/projects/mobile' className='p-nav'>Mobile Apps</NavLink>
      </nav>
      <section className='px-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectsData.map((project, index) => (
            <Pcards key={index} {...project} />
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
