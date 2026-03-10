import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Pcards({ image, title, description, link }) {
  console.log('image:', image); // Add this line to check the value of the image prop
  if (!image || !title || !description || !link) {
    console.error('All props are required in Pcards component');
    return null;
  }

  return (
    <div>
      <img src={image} alt={title} />
      <article>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} className='h-10' target='_blank'>View Project</a>
      </article>
    </div>
  )
}

export default Pcards
