import React from 'react'
import { FaArrowRight, FaCss3, FaDatabase, FaFigma, FaGit, FaHtml5, FaJs, FaPaintRoller, FaPalette, FaPlug, FaReact } from 'react-icons/fa'
import { FaFlutter, FaMessage, FaPadlet } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function AboutMe() {

  return (
    <div>
      <section className='me'>
        <img src='me.jpg'alt='Brian K. Maina'></img>
        <article className='skills'>
          <h2 style={{color:'#00ff00'}}>EXPERTISE</h2>
          <hr className='w-120 text' style={{color:'#888888'}}></hr>
          <div className='mt-5'>
            <h4>FRONTEND SYSTEMS</h4>
            <section className='flex flex-wrap gap-5 mt-3'>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-1xl flex flex-row p-3 gap-1' style={{borderRadius:'10px'}}>
                  <FaHtml5 color='#00ff00' size={25}/>
                  HTML
                </span>
              </span>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-1xl flex flex-row p-3 gap-1' style={{borderRadius:'10px'}}>
                <FaCss3 color='#00ff00' size={25}/>
                CSS
              </span>
              </span>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-1xl flex flex-row p-3 gap-1' style={{borderRadius:'10px'}}>
                <FaJs color='#00ff00' size={25}/>
                JS
              </span>
              </span>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-1xl flex flex-row p-3 gap-1' style={{borderRadius:'10px'}}>
                <FaReact color='#00ff00' size={25}/>
                React
              </span>
              </span>
            </section>
            <section className='flex flex-wrap gap-5 mt-3 mb-5'>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-1xl flex flex-row p-3 gap-1' style={{borderRadius:'10px'}}>
                <FaFlutter color='#00ff00' size={25}/>
                Flutter
              </span>
              </span>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-1xl flex flex-row p-3 gap-1' style={{borderRadius:'10px'}}>
                <FaPalette color='#00ff00' size={25}/>
                Tailwind Css
              </span>
              </span>
            </section>
            <h4 >DESIGN & PRODUCTIVITY</h4>
            <section className='flex flex-wrap gap-5 mt-3'>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-1xl flex flex-row p-3 gap-1' style={{borderRadius:'10px'}}>
                  <FaFigma color='#00ff00' size={25}/>
                  Figma
                </span>
              </span>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-1xl flex flex-row p-3 gap-1' style={{borderRadius:'10px'}}>
                  <FaGit color='#00ff00' size={25}/>
                  Git
                </span>
              </span>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-1xl flex flex-row p-3 gap-1' style={{borderRadius:'10px'}}>
                  <FaPlug color='#00ff00' size={25}/>
                  API Integration
                </span>
              </span>
            </section>
            <h4 className='mt-3'>EXTRAS</h4>
            <section className='flex flex-wrap gap-5 mt-3'>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-1xl flex flex-row p-3 gap-1' style={{borderRadius:'10px'}}>
                  <FaMessage color='#00ff00' size={25}/>
                  Communication Skills
                </span>
              </span>
              <span className='skill' style={{borderRadius:'10px'}}>
                <span className='text-1xl flex flex-row p-3 gap-1' style={{borderRadius:'10px'}}>
                  <FaDatabase color='#00ff00' size={25}/>
                  SQL
                </span>
              </span>
            </section>
          </div>
        </article>
      </section>
      <section>
        <article className='my-sum'>
          <h1>
            Crafting digital <span style={{color:'#00ff00'}}>experiences</span> with precision.
          </h1>
          <p>
            I’m a frontend engineer with strong skills not only in frameworks like Flutter, React, and TailwindCSS, but also in version control and collaboration using Git and GitHub. I’m comfortable managing branches, handling pull requests, and resolving merge conflicts, which allows me to maintain clean, organized codebases and contribute effectively in team environments. I use Git to track changes methodically, ensuring that every iteration is documented and reversible, while GitHub serves as my platform for collaboration, code reviews, and showcasing projects. Whether it’s setting up CI/CD workflows, managing issues, or writing clear commit messages, I treat Git and GitHub as essential tools for both productivity and professional presentation. This combination of frontend expertise and disciplined version control makes me adaptable, reliable, and ready to deliver polished solutions in collaborative projects.  
          </p>
          <div className='flex gap-10 mt-5'>
            <a target='_blank' href='https://drive.google.com/file/d/1yFLi32q3UE26ZRoLQrjitQNEfz7fpoIe/view?usp=sharing' id='btn1' >
              <span>See CV </span>
             <FaArrowRight color='white'/>
            </a>
            <Link to='/Projects' id='btn2'>
              Projects            
              <FaArrowRight color='black'/>
            </Link>
          </div>
        </article>
      </section>
    </div>
  )
}

export default AboutMe
