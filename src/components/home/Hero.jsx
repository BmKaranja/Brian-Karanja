import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import { CONTACT_LINK, btnPrimary, btnSecondary } from './contact'

function Hero() {
  return (
    <section
      aria-labelledby='hero-title'
      className='relative overflow-hidden border-b border-line bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,255,0,0.10),transparent),linear-gradient(to_bottom,#0d1117,#0a0d12)]'
    >
      <div className='mx-auto max-w-6xl px-5 py-20 sm:py-28 lg:py-36'>
        <p className='mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent'>
          Web · Mobile · UI/UX — Nairobi, Kenya
        </p>
        <h1
          id='hero-title'
          className='max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl lg:text-6xl'
        >
          Software and design for businesses that need to work reliably.
        </h1>
        <p className='mt-6 max-w-2xl text-lg leading-relaxed text-muted'>
          Byma Solutions builds web apps, mobile apps and interfaces, from
          offline-capable point-of-sale systems to e-commerce and brand sites.
        </p>
        <div className='mt-10 flex flex-wrap gap-3'>
          <Link to='/Projects' className={btnPrimary}>
            View work <FaArrowRight size={12} aria-hidden='true' />
          </Link>
          <a
            href={CONTACT_LINK}
            target='_blank'
            rel='noopener noreferrer'
            className={btnSecondary}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
