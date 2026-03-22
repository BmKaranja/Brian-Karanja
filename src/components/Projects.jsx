import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Pcards from './Pcards'
import PIntro from './PIntro'
import { NavLink } from 'react-router-dom'

function Projects() {
  return (
    <div className='flex flex-col gap-10 overflow-hidden'>
      <PIntro/>
      <nav className='flex flex-row gap-5 ml-10 mt-10'>
        <NavLink to='/#' id='p-nav'>All Work</NavLink>
        <NavLink to='/projects/websites' className='p-nav'>Websites</NavLink>
        <NavLink to='/projects/mobile' className='p-nav'>Mobile Apps</NavLink>
      </nav>
      <section>
        <article className='projects'>
          <Pcards
            image='/me.jpg'
            title='Project 1'
            description='desc'
            link='https://github.com/BmKaranja'
          />
          <Pcards
            image='/me.jpg'
            title='Project 1'
            description='desc'
            link='google.com'
          />
          <Pcards
            image='/me.jpg'
            title='Project 1'
            description='desc'
            link='google.com'
          />
        </article>
        <article className='projects mt-5'>
          <Pcards
            image='/me.jpg'
            title='Project 1'
            description='desc'
            link='google.com'
          />
          <Pcards
            image='/me.jpg'
            title='Project 1'
            description='desc'
            link='google.com'
          />
          <Pcards
            image='/me.jpg'
            title='Project 1'
            description='desc'
            link='google.com'
          />
        </article>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
export default Projects
