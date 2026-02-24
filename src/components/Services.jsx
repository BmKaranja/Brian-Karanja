import React from 'react'
import NavBar from './NavBar'

function Services() {
  return (
    <div className='flex flex-col gap-10'>
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
      </div>
    </div>
  )
}

export default Services
