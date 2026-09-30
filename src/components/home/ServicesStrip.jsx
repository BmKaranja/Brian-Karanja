import React from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaMobileScreen, FaPenRuler, FaArrowRight } from 'react-icons/fa6'
import Reveal from './Reveal'

const services = [
  {
    icon: FaCode,
    title: 'Web development',
    text: 'React web applications, e-commerce and business systems with admin dashboards.',
  },
  {
    icon: FaMobileScreen,
    title: 'Mobile apps',
    text: 'Cross-platform apps built with Flutter for Android and iOS.',
  },
  {
    icon: FaPenRuler,
    title: 'UI/UX design',
    text: 'Interface design and prototypes in Figma, from wireframe to handoff.',
  },
]

function ServicesStrip() {
  return (
    <Reveal as='section' aria-labelledby='services-title' className='border-b border-line'>
      <div className='mx-auto max-w-6xl px-5 py-16 sm:py-20'>
        <div className='mb-10 flex flex-wrap items-end justify-between gap-4'>
          <h2
            id='services-title'
            className='font-display text-2xl font-semibold tracking-tight sm:text-3xl'
          >
            What we do
          </h2>
          <Link
            to='/Services'
            className='inline-flex min-h-11 items-center gap-2 text-sm text-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-accent'
          >
            Services and pricing <FaArrowRight size={12} aria-hidden='true' />
          </Link>
        </div>
        <ul className='grid gap-4 md:grid-cols-3'>
          {services.map((s) => {
            const Icon = s.icon
            return (
              <li key={s.title}>
                <Link
                  to='/Services'
                  className='block h-full rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-accent'
                >
                  <Icon className='mb-4 text-accent' size={22} aria-hidden='true' />
                  <h3 className='mb-2 font-display text-lg font-medium'>{s.title}</h3>
                  <p className='text-sm leading-relaxed text-muted'>{s.text}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Reveal>
  )
}

export default ServicesStrip
