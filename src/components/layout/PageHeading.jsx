import React from 'react'

// Shared page intro: eyebrow label, the page's single <h1>, and a short intro.
function PageHeading({ eyebrow, title, children, id = 'page-title' }) {
  return (
    <section
      aria-labelledby={id}
      className='border-b border-line bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,255,0,0.08),transparent),linear-gradient(to_bottom,#0d1117,#0a0d12)]'
    >
      <div className='mx-auto max-w-6xl px-5 py-14 sm:py-20'>
        {eyebrow && (
          <p className='mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent'>{eyebrow}</p>
        )}
        <h1
          id={id}
          className='max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl'
        >
          {title}
        </h1>
        {children && <p className='mt-5 max-w-2xl text-lg leading-relaxed text-muted'>{children}</p>}
      </div>
    </section>
  )
}

export default PageHeading
