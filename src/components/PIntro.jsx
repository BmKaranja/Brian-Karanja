import React from 'react'
import NavBar from './NavBar'
import { NavLink } from 'react-router-dom'

function PIntro() {
  return (
    <div className='flex flex-col gap-10 overflow-hidden'>
      <NavBar/>
        <section className='overflow-hidden'>
            <hr style={{width:'100vw'}} className='text-gray-600'></hr>
            <article className='prj-intro overflow-hidden'>
                <h1 className='text-7xl mt-10' style={{fontWeight:550}}>Featured <span className='color'>Projects</span></h1>
                <p className='mt-5 pr-20'>This is where creativity meets precision. Each project reflects my passion for building elegant, scalable solutions—whether it’s crafting luxury-inspired user interfaces, designing reusable components for seamless workflows, or transforming complex ideas into clear, interactive experiences.</p>
            </article>
        </section>      
    </div>
  )
}

export default PIntro
