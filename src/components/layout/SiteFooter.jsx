import React from 'react'
import { Link } from 'react-router-dom'
import { SOCIALS } from '../home/contact'

const linkClass =
  'inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent'

function SiteFooter() {
  return (
    <footer className='border-t border-line'>
      <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 pb-24 pt-6 sm:pb-6'>
        <p className='text-sm text-muted'>© 2026 Byma Solutions. All rights reserved.</p>
        <nav aria-label='Footer' className='flex flex-wrap gap-x-5'>
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target='_blank' rel='noopener noreferrer' className={linkClass}>
              {s.label}
            </a>
          ))}
          <Link to='/privacy-policy' className={linkClass}>
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default SiteFooter
