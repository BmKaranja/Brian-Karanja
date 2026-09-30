import React from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

function Pcards({ title, description, link, image }) {
  return (
    <article className='flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors hover:border-accent'>
      <img
        src={image || '/pexels-cesar-gaviria-232160-36571389.jpg'}
        alt={`${title} screenshot`}
        width='640'
        height='400'
        loading='lazy'
        decoding='async'
        className='aspect-[16/10] w-full border-b border-line object-cover object-top'
      />
      <div className='flex flex-1 flex-col p-5'>
        <h2 className='mb-2 font-display text-lg font-medium'>{title}</h2>
        <p className='mb-5 line-clamp-5 flex-1 text-sm leading-relaxed text-muted'>{description}</p>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-accent'
        >
          View project <FaArrowUpRightFromSquare size={12} aria-hidden='true' />
          <span className='sr-only'> — {title}</span>
        </a>
      </div>
    </article>
  )
}

export default Pcards
