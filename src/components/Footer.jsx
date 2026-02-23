import React from 'react'

function Footer() {
  return (
    <div>
      <hr style={{width:'100vw'}} className='mt-20'></hr>
      <section className='footer'>
        <p>
          ©2026 Brian Karanja
        </p>
        <article>
          <a href='https://github.com/BmKaranja'className='nav-items nv-2' target='_blank' rel='noopener noreferrer'>GitHub</a>
          <a href='https://www.linkedin.com/in/b-karanja'className='nav-items nv-2' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
          <a href='https://www.instagram.com/it.s._bryan/' className='nav-items nv-2'target='_blank' rel='noopener noreferrer'>Instagram</a>          
        </article>
      </section>
    </div>
  )
}

export default Footer
