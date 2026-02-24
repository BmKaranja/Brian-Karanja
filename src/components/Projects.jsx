import React from 'react'
import NavBar from './NavBar'

function Projects() {
  return (
    <div className='flex flex-col gap-10'>
      <NavBar/>
      <section>
        <hr style={{width:'100vw'}} className='text-gray-600'></hr>
      </section>
    </div>
  )
}

export default Projects
