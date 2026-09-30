import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Reveal from './Reveal'
import { CONTACT_LINK, RESUME_LINK, btnPrimary, btnSecondary } from './contact'

function ContactCta() {
  return (
    <Reveal as='section' aria-labelledby='contact-title'>
      <div className='mx-auto max-w-6xl px-5 py-20 text-center sm:py-24'>
        <h2
          id='contact-title'
          className='mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl'
        >
          Have a project in mind?
        </h2>
        <p className='mx-auto mt-4 max-w-xl text-muted'>
          Tell us what you need and we will reply with a plan and a quote.
        </p>
        <div className='mt-8 flex flex-wrap justify-center gap-3'>
          <a href={CONTACT_LINK} target='_blank' rel='noopener noreferrer' className={btnPrimary}>
            <FaWhatsapp size={16} aria-hidden='true' /> Message on WhatsApp
          </a>
          <a href={RESUME_LINK} target='_blank' rel='noopener noreferrer' className={btnSecondary}>
            View resume
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default ContactCta
