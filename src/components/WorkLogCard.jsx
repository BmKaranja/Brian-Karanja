import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function WorkLogCard({ date, title, description, tags, link }) {
  return (
    <div className='Log_card'>
      <section>
        <p className='mb-2' style={{ color: '#00ff00', fontSize: '13px', fontFamily: 'monospace' }}>{date}</p>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        <p className='mb-4'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: '#1a1f25',
                border: '1px solid #2a2f35',
                color: '#aaa',
                fontSize: '11px',
                padding: '3px 10px',
                borderRadius: '4px',
                fontFamily: 'monospace',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='color font flex items-center gap-2 w-fit hover:gap-3 transition-all'
        >
          View Project <FaArrowRight size={13} />
        </a>
      </section>
    </div>
  )
}

export default WorkLogCard