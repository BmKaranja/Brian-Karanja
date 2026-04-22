import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheck, FaCode, FaLinkedin, FaMobileAlt, FaPalette } from 'react-icons/fa'

function Services() {
  return (
    <div className='flex flex-col gap-10 overflow-hidden'>
      <NavBar/>
      <div>
        <hr style={{width:'100vw'}} className='text-gray-600'></hr>
        <section className='sec-intro'>
          <article>
            <p className='font mb-2'id='cap'>CAPABILITIES</p>
            <h1 className='text-7xl'>
              Crafting <span className='color'>digital experience </span>through code and design
            </h1>
            <p className='mt-5 pr-20'>
              I specialize in creating visually appealing and user-friendly
              websites and applications that deliver exceptional user experiences.
            </p>
          </article>
        </section>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-10' >
          <article className='mycards'>
            <div className='p-2 w-12'>
              <FaCode size={30} color='#00ff00'/>
            </div>
            <h2 className='font'>Web Development</h2>
            <p>Custom web applications built with modern frameworks. Emphasis on speed, SEO, and exceptional user experience across all devices.</p>
            <div className='mt-5'>
              <p><span style={{color:'#00ff00'}}>✓ </span>React & TailwindCss Expert </p>
              <p><span style={{color:'#00ff00'}}>✓ </span>HTML, CSS & JS Expert</p>
              <p><span style={{color:'#00ff00'}}>✓ </span>Git Workflows</p>
            </div>
            <Link to='/Projects' className='color font link'>
              View Projects <span  className='pl-1'>
                <FaArrowRight/>
              </span>
            </Link>
          </article>
          <article className='mycards'>
            <div className='p-2 w-12'>
              <FaMobileAlt size={30} color='#00ff00'/>
            </div>
            <h2 className='font'>Mobile Apps</h2>
            <p>
                Native-feel mobile experiences for iOS and Android. Cross-platform efficiency without compromising performance or design.
            </p>
            <div className='mt-5'>
              <p><span style={{color:'#00ff00'}}>✓ </span>Flutter Expert </p>
              <p><span style={{color:'#00ff00'}}>✓ </span>Smooth Animtions</p>
              <p><span style={{color:'#00ff00'}}>✓ </span>Offlne Functionality</p>
            </div>
            <Link to='/Projects' className='color font link'>
              View Projects <span  className='pl-1'>
                <FaArrowRight/>
              </span>
            </Link>
          </article>
          <article className='mycards'>
            <div className='p-2 w-12'>
              <FaPalette size={30} color='#00ff00'/>
            </div>
            <h2 className='font'>UI/UX Design</h2>
            <p>User-centric design systems that solve problems. Combines aesthetic beauty with functional clarity to delight users.</p>
            <div className='mt-5'>
              <p><span style={{color:'#00ff00'}}>✓ </span>Design Systems </p>
              <p><span style={{color:'#00ff00'}}>✓ </span>Prototyping </p>
              <p><span style={{color:'#00ff00'}}>✓ </span>Branding Identity</p>
            </div>
            <Link to='/Projects' className='color font link'>
              View Projects <span className='pl-1'>
                <FaArrowRight/>
              </span>
            </Link>
          </article>
        </section>
        <section className='cta'>
          <h2>Have a project in mind?</h2>
          <p>I am currently available freelance work and full-time opprortunities.Let's build something amazing together</p>
          <span>
            <a href='https://www.linkedin.com/in/b-karanja'className='link p-10' id='btn4' target='_blank' rel='noopener noreferrer'>Let's Chat<FaLinkedin></FaLinkedin></a>
            <a href='https://drive.google.com/file/d/1yFLi32q3UE26ZRoLQrjitQNEfz7fpoIe/view?usp=sharing' target='_blank' id='btn3' ><span>See CV </span><FaArrowRight color='white'/></a>
          </span> 
        </section>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Services
