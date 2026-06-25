import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <hr className='mt-20'></hr>
      <section className='footer'>
        <p style={{ fontFamily: 'monospace', fontSize: '13px' }}>
          © 2026 Byma. All rights reserved.
        </p>
        <article>
          <a href='https://github.com/BmKaranja' className='nav-items nv-2' target='_blank' rel='noopener noreferrer'>GitHub</a>
          <a href='https://www.linkedin.com/in/b-karanja' className='nav-items nv-2' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
          <a href='https://www.instagram.com/it.s._bryan/' className='nav-items nv-2' target='_blank' rel='noopener noreferrer'>Instagram</a>
          <Link to='/privacy-policy' className='nav-items nv-2'>Privacy Policy</Link>
        </article>
      </section>
    </div>
  )
}

export default Footer