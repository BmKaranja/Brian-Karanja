import React from 'react'

function WorkLogCard({title, description, link, image, pb_date}) {
  return (
    <div className='Log_card'>
      <img 
        src={image || '/pexels-cesar-gaviria-232160-36571389.jpg'} 
        alt={title} 
        loading='lazy' 
        className="w-full object-cover"
      />
      <section className='pb-30'>
        <p className='mb-5'>{pb_date}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={link} className='pt-20'>View Project</a>
      </section>
    </div>
  )
}

export default WorkLogCard
