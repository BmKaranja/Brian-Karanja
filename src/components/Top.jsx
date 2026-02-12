import React from 'react'
import NavBar from './navBar'
import { Link } from 'react-router'
import { FaArrowRight } from 'react-icons/fa'
import { MdHeight } from 'react-icons/md'

function Top() {
  return (
    <div id='top'>
      <div>
      <NavBar/>
      </div>
      <section id='sec-1'>
        <div className='w-2xl h-96 intro'>      
          <h1>Hi, I'm <span className='name'>Brian</span></h1>
          <p style={{fontWeight:50}}>I'm a a frontend and mobile developer, based in Kenya, passionate about crafting branded, functional, and visually engaging experiences.  </p>
          <p className='CTA'>Ready to elevate your digital experience?</p>
          <div className='flex gap-10 mt-5'>
            <Link to='/AboutMe' id='btn1' ><span>About Me </span><FaArrowRight color='white'/></Link>
            <Link to='/Projects' id='btn2'>Projects <FaArrowRight color='black'/></Link>
          </div>
        </div>  
        <img src='sifi wallpaper.png'></img>    
        </section>
    </div>
  )
}

export default Top
