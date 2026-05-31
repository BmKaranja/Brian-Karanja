import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCode, FaLinkedin, FaMobileAlt, FaPalette } from 'react-icons/fa'

function Services() {
  return (
    <div className='flex flex-col gap-10' style={{ background: 'var(--background-color)', minHeight: '100vh' }}>
      <NavBar/>
      <div>
        <hr className='text-gray-600'></hr>
        <section className='sec-intro'>
          <article>
            <p className='font mb-2' id='cap'>WHAT WE BUILD</p>
            <h1 className='text-7xl'>
              Digital products<span className='color'> crafted</span> with precision
            </h1>
            <p className='mt-5 pr-20'>
              Prismlabs specializes in building pixel-perfect interfaces, scalable systems, and elegant solutions. 
              From concept to launch—clean code, thoughtful design, measurable impact.
            </p>
          </article>
        </section>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-10' >
          <article className='mycards'>
            <div className='p-2 w-12'>
              <FaCode size={30} color='#00ff00'/>
            </div>
            <h2 className='font'>Web Development</h2>
            <p>Production-grade web applications built for performance, scalability, and user delight. Modern frameworks, best practices, and obsessive attention to detail.</p>
            <div className='mt-5'>
              <p><span style={{color:'#00ff00'}}>✓ </span>React & TailwindCSS Expert </p>
              <p><span style={{color:'#00ff00'}}>✓ </span>Full-Stack Architecture</p>
              <p><span style={{color:'#00ff00'}}>✓ </span>SEO & Performance Optimized</p>
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
              Cross-platform mobile experiences that feel native. iOS and Android apps built with Flutter for efficiency without compromising design quality.
            </p>
            <div className='mt-5'>
              <p><span style={{color:'#00ff00'}}>✓ </span>Flutter Expert </p>
              <p><span style={{color:'#00ff00'}}>✓ </span>Smooth Animations</p>
              <p><span style={{color:'#00ff00'}}>✓ </span>Offline Functionality</p>
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
            <p>User-centric design systems that balance beauty with function. Every pixel serves a purpose—creating interfaces that users love.</p>
            <div className='mt-5'>
              <p><span style={{color:'#00ff00'}}>✓ </span>Design Systems </p>
              <p><span style={{color:'#00ff00'}}>✓ </span>Prototyping & Testing </p>
              <p><span style={{color:'#00ff00'}}>✓ </span>Brand Identity</p>
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
          <p>I'm available for freelance work and select full-time opportunities. Let's build something extraordinary together.</p>
          <span>
            <a href='https://www.linkedin.com/in/b-karanja' className='link p-10' id='btn4' target='_blank' rel='noopener noreferrer'>Let's Talk<FaLinkedin></FaLinkedin></a>
            <a href='https://drive.google.com/file/d/1yFLi32q3UE26ZRoLQrjitQNEfz7fpoIe/view?usp=sharing' target='_blank' id='btn3' ><span>Resume </span><FaArrowRight color='white'/></a>
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