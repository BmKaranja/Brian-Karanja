import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Pcards({ image, title, description, link }) {
  

  return (
    <div className='project-divs'>
      <div className="project-image" style={{ height: "30vh", backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></div>
      <article>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} className='h-10' target='_blank'>View Project</a>
      </article>
    </div>
  )
}

export default Pcards
