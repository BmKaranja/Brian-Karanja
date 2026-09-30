import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import projects from '../../data/projectdata.json'
import Reveal from './Reveal'

const FEATURED = ['Salio', 'Wincer Cake House', 'Law Firm Design']

const featured = FEATURED.map((t) => projects.find((p) => p.title === t)).filter(Boolean)

const summarize = (text) => {
  const first = text.split('. ')[0].trim()
  return first.endsWith('.') ? first : `${first}.`
}

function FeaturedProjects() {
  return (
    <Reveal as='section' aria-labelledby='projects-title' className='border-b border-line'>
      <div className='mx-auto max-w-6xl px-5 py-16 sm:py-20'>
        <div className='mb-10 flex flex-wrap items-end justify-between gap-4'>
          <h2
            id='projects-title'
            className='font-display text-2xl font-semibold tracking-tight sm:text-3xl'
          >
            Selected work
          </h2>
          <Link
            to='/Projects'
            className='inline-flex min-h-11 items-center gap-2 text-sm text-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-accent'
          >
            All projects <FaArrowRight size={12} aria-hidden='true' />
          </Link>
        </div>

        <ul className='grid gap-6 md:grid-cols-3'>
          {featured.map((p) => (
            <li key={p.title}>
              <article className='flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors hover:border-accent'>
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  width='640'
                  height='400'
                  loading='lazy'
                  decoding='async'
                  className='aspect-[16/10] w-full border-b border-line object-cover object-top'
                />
                <div className='flex flex-1 flex-col p-5'>
                  <h3 className='mb-2 font-display text-lg font-medium'>{p.title}</h3>
                  <p className='mb-5 flex-1 text-sm leading-relaxed text-muted'>
                    {summarize(p.description)}
                  </p>
                  <a
                    href={p.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-accent'
                  >
                    Visit site <FaArrowUpRightFromSquare size={12} aria-hidden='true' />
                    <span className='sr-only'> — {p.title}</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

export default FeaturedProjects
