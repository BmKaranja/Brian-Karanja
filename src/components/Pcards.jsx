import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Pcards(image, title , description , link) {
  return (
    <div className='p-card'>
      <img src={image}/>
      <article>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target='_blank' id='btn1' ><span>View</span><FaArrowRight color='white'/></a>
      </article>
    </div>
  )
}

export default Pcards
