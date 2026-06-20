import React from 'react'
import NavBar from './NavBar'

function PIntro() {
  return (
    <div className='flex flex-col gap-10'>
      <NavBar />
      <section className='overflow-hidden'>
        <hr className='text-gray-600'></hr>
        <article className='prj-intro overflow-hidden'>
          <h1 className='text-7xl mt-10' style={{ fontWeight: 550 }}>Work from <span className='color'>Byma</span></h1>
          <p className='mt-5 pr-20'>
            A showcase of projects built with intentionality. Each one represents careful planning, thoughtful design,
            and clean execution—delivering real solutions to real problems.
          </p>
        </article>
      </section>
    </div>
  )
}

export default PIntro