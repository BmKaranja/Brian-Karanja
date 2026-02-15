import React from 'react'
import { FaCss3, FaDatabase, FaFigma, FaGit, FaHtml5, FaJs, FaPaintRoller, FaPalette, FaPlug, FaReact } from 'react-icons/fa'
import { FaFlutter, FaMessage, FaPadlet } from 'react-icons/fa6'

function AboutMe() {
  return (
    <div className='h-200'>
      <section className='me'>
        <img src='me.jpg'alt='Brian K. Maina'></img>
        <article className='skills'>
          <h2 style={{color:'#00ff00'}}>EXPERTISE</h2>
          <hr className='w-120 text' style={{color:'#888888'}}></hr>
          <div className='mt-5'>
            <h4>FRONTEND SYSTEMS</h4>
            <section className='flex flex-wrap gap-5 mt-3'>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-lg flex flex-row p-5 gap-1' style={{borderRadius:'10px'}}>
                  <FaHtml5 color='#00ff00' size={30}/>
                  HTML
                </span>
              </span>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-lg flex flex-row p-5 gap-1' style={{borderRadius:'10px'}}>
                <FaCss3 color='#00ff00' size={30}/>
                CSS
              </span>
              </span>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-lg flex flex-row p-5 gap-1' style={{borderRadius:'10px'}}>
                <FaJs color='#00ff00' size={30}/>
                JS
              </span>
              </span>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-lg flex flex-row p-5 gap-1' style={{borderRadius:'10px'}}>
                <FaReact color='#00ff00' size={30}/>
                React
              </span>
              </span>
            </section>
            <section className='flex flex-wrap gap-5 mt-3 mb-5'>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-lg flex flex-row p-5 gap-1' style={{borderRadius:'10px'}}>
                <FaFlutter color='#00ff00' size={30}/>
                Flutter
              </span>
              </span>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-lg flex flex-row p-5 gap-1' style={{borderRadius:'10px'}}>
                <FaPalette color='#00ff00' size={30}/>
                Tailwind Css
              </span>
              </span>
            </section>
            <h4 >DESIGN & PRODUCTIVITY</h4>
            <section className='flex flex-wrap gap-5 mt-3'>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-lg flex flex-row p-5 gap-1' style={{borderRadius:'10px'}}>
                  <FaFigma color='#00ff00' size={30}/>
                  Figma
                </span>
              </span>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-lg flex flex-row p-5 gap-1' style={{borderRadius:'10px'}}>
                  <FaGit color='#00ff00' size={30}/>
                  Git
                </span>
              </span>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-lg flex flex-row p-5 gap-1' style={{borderRadius:'10px'}}>
                  <FaPlug color='#00ff00' size={30}/>
                  API Integration
                </span>
              </span>
            </section>
            <h4 className='mt-3'>EXTRAS</h4>
            <section className='flex flex-wrap gap-5 mt-3'>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-lg flex flex-row p-5 gap-1' style={{borderRadius:'10px'}}>
                  <FaMessage color='#00ff00' size={30}/>
                  Communication Skills
                </span>
              </span>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-lg flex flex-row p-5 gap-1' style={{borderRadius:'10px'}}>
                  <FaDatabase color='#00ff00' size={30}/>
                  SQL
                </span>
              </span>
            </section>
          </div>
        </article>
      </section>
    </div>
  )
}

export default AboutMe
