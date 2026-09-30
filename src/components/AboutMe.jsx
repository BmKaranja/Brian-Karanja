import React from 'react'
import PageShell from './layout/PageShell'
import PageHeading from './layout/PageHeading'
import Reveal from './home/Reveal'
import ContactCta from './home/ContactCta'

const skills = [
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Flutter'] },
  { category: 'Tooling & design', items: ['Figma', 'Git', 'SQL', 'Supabase'] },
]

const stats = [
  { value: '5+', label: 'Projects Delivered' },
  { value: '2+', label: 'Years Building' },
]

function AboutMe() {
  return (
    <PageShell>
      <PageHeading
        eyebrow='About Byma · 2025–present'
        title={<>Refract ideas <span className='text-accent'>into code</span> and design.</>}
      >
        Byma Solutions is a creative development and design studio specializing in React, Flutter, and full-stack development.
        We focus on building products with clean architecture, thoughtful UX, and maintainable code.
        Every project is crafted with precision and shipped with confidence.
      </PageHeading>

      <Reveal as='section' aria-labelledby='about-stack-title' className='border-b border-line'>
        <div className='mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2'>
          <div>
            <h2
              id='about-stack-title'
              className='mb-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl'
            >
              Experience
            </h2>
            <dl className='grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line'>
              {stats.map((s) => (
                <div key={s.label} className='bg-surface p-6'>
                  <dd className='font-display text-3xl font-semibold text-accent'>{s.value}</dd>
                  <dt className='mt-1 text-sm text-muted'>{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className='mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted'>Tech stack</h3>
            <div className='space-y-5'>
              {skills.map((group) => (
                <div key={group.category}>
                  <p className='mb-2 text-sm font-medium text-fg'>{group.category}</p>
                  <ul className='flex flex-wrap gap-2'>
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className='rounded-md border border-line bg-surface px-3 py-1.5 text-sm text-muted'
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <ContactCta />
    </PageShell>
  )
}

export default AboutMe
