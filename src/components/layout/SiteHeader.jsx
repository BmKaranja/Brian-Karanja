import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { CONTACT_LINK } from '../home/contact'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/Services', label: 'Services' },
  { to: '/Projects', label: 'Projects' },
]

const linkClass = ({ isActive }) =>
  `flex min-h-11 items-center rounded-md px-3 text-sm transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent ${
    isActive ? 'text-accent' : 'text-fg'
  }`

function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-5 py-3'>
        <Link
          to='/'
          className='flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-fg focus-visible:outline-2 focus-visible:outline-accent'
        >
          <img src='/favicon.svg' alt='' width='32' height='32' className='size-8' />
          <span>Byma<span className='text-accent'> Solutions</span></span>
        </Link>

        <nav aria-label='Primary' className='hidden items-center gap-1 md:flex'>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <a
            href={CONTACT_LINK}
            target='_blank'
            rel='noopener noreferrer'
            className='ml-3 inline-flex min-h-11 items-center rounded-md bg-accent px-4 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
          >
            Get in touch
          </a>
        </nav>

        <button
          type='button'
          className='inline-flex size-11 items-center justify-center rounded-md text-fg hover:text-accent focus-visible:outline-2 focus-visible:outline-accent md:hidden'
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls='mobile-nav'
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaXmark size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {open && (
        <nav
          id='mobile-nav'
          aria-label='Primary mobile'
          className='border-t border-line bg-bg px-5 pb-4 md:hidden'
        >
          <ul className='flex flex-col py-2'>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={linkClass} onClick={() => setOpen(false)}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href={CONTACT_LINK}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex min-h-11 w-full items-center justify-center rounded-md bg-accent px-4 text-sm font-semibold text-accent-ink'
          >
            Get in touch
          </a>
        </nav>
      )}
    </header>
  )
}

export default SiteHeader
