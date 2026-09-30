import React from 'react'
import Reveal from './Reveal'

const stack = [
  { group: 'Frontend', items: ['React', 'JavaScript', 'HTML5 / CSS3', 'Tailwind CSS'] },
  { group: 'Mobile', items: ['Flutter', 'Dart'] },
  { group: 'Backend and data', items: ['Supabase', 'Firebase', 'SQL'] },
  { group: 'Design and tooling', items: ['Figma', 'Git'] },
]

function AboutStack() {
  return (
    <Reveal as='section' aria-labelledby='about-title' className='border-b border-line'>
      <div className='mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2'>
        <div>
          <h2
            id='about-title'
            className='mb-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl'
          >
            About Byma
          </h2>
          <p className='mb-4 leading-relaxed text-muted'>
            Byma Solutions is a development and design studio based in Nairobi. We build
            products with clean architecture, considered UX and code that is easy to
            maintain.
          </p>
          <p className='leading-relaxed text-muted'>
            Recent work includes an offline-first point-of-sale system for retailers with
            unreliable connectivity, and e-commerce platforms with admin dashboards for
            local businesses.
          </p>
        </div>

        <div>
          <h3 className='mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted'>
            Tech stack
          </h3>
          <dl className='space-y-5'>
            {stack.map(({ group, items }) => (
              <div key={group}>
                <dt className='mb-2 text-sm font-medium text-fg'>{group}</dt>
                <dd>
                  <ul className='flex flex-wrap gap-2'>
                    {items.map((item) => (
                      <li
                        key={item}
                        className='rounded-md border border-line bg-surface px-3 py-1.5 text-sm text-muted'
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Reveal>
  )
}

export default AboutStack
