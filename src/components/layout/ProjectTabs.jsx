import React from 'react'
import { NavLink } from 'react-router-dom'

const tabClass = ({ isActive }) =>
  `inline-flex min-h-11 items-center rounded-md border px-4 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
    isActive
      ? 'border-accent text-accent'
      : 'border-line text-muted hover:border-accent hover:text-fg'
  }`

function ProjectTabs({ showMobile = false }) {
  return (
    <nav aria-label='Project categories' className='mx-auto flex max-w-6xl flex-wrap gap-2 px-5 pt-10'>
      <NavLink to='/Projects' end className={tabClass}>All Work</NavLink>
      <NavLink to='/projects/websites' end className={tabClass}>Websites</NavLink>
      {showMobile && (
        <NavLink to='/projects/mobile' end className={tabClass}>Mobile Apps</NavLink>
      )}
      <NavLink to='/projects/designs' end className={tabClass}>Designs</NavLink>
    </nav>
  )
}

export default ProjectTabs
