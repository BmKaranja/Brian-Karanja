import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Pcards({ title, description, link, image }) {
  return (
    <div className='project-divs group overflow-hidden transition-all duration-300 hover:shadow-xl'>
      {console.log(`Pcards for "${title}" received image prop: "${image}"`)}
      <div 
        className="project-image transition-transform duration-500 group-hover:scale-105" 
        style={{ 
          height: "20vh", 
          backgroundImage: `url(${image || '/pexels-cesar-gaviria-232160-36571389.jpg'})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat" 
        }}
      ></div>
      <article className='p-6 flex flex-col gap-2'>
        <h2 className='text-xl font-bold tracking-tight'>{title}</h2>
        <p className='text-gray-400 line-clamp-5 leading-relaxed'>{description}</p>
        <a href={link} className='color font flex items-center gap-2 mt-2 w-fit hover:gap-3 transition-all' target='_blank' rel='noopener noreferrer'>
          View Project <FaArrowRight size={14} className='transition-transform' />
        </a>
      </article>
    </div>
  )
}

export default Pcards
