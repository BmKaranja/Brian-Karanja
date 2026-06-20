import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div id='grid1'>
      <div className='name'>
        <Link to='/' style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontFamily: 'monospace',
            fontSize: '14px',
            color: '#00ff00',
            fontWeight: 700,
            letterSpacing: '2px'
          }}>◇</span>
          BYMA
        </Link>
      </div>
      {/* Internal navigation */}
      <div className='grid-items1'>
        <NavLink to='/Services' className='nav-items nv-1'>Services</NavLink>
        <NavLink to='/projects' className='nav-items nv-1' style={{ paddingLeft: '2vh' }}>Projects</NavLink>
        <NavLink to='/WorkLog' className='nav-items nv-1 vline' style={{ paddingLeft: '2vh' }}>DevLog</NavLink>
        <a href='https://github.com/BmKaranja' className='nav-items nv-2' target='_blank' rel='noopener noreferrer'>GitHub</a>
        <a href='https://www.linkedin.com/in/b-karanja' className='nav-items nv-2' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        <a href='https://www.instagram.com/it.s._bryan/' className='nav-items nv-2' target='_blank' rel='noopener noreferrer'>Instagram</a>
      </div>
    </div>
  )
}

export default NavBar