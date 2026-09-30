import React, { useEffect, useRef, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { btnPrimary, whatsappLink } from './home/contact'

const fieldClass =
  'w-full rounded-md border border-line bg-bg px-3 py-2.5 text-sm text-fg placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent'

const labelClass = 'mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted'

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

function ProposalRequestModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  })
  const dialogRef = useRef(null)
  const firstFieldRef = useRef(null)
  const onCloseRef = useRef(onClose)
  useEffect(() => {
    onCloseRef.current = onClose
  })

  // Move focus into the dialog on open, restore it on close, close on Escape, trap Tab.
  useEffect(() => {
    if (!isOpen) return
    const previouslyFocused = document.activeElement
    firstFieldRef.current?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onCloseRef.current()
        return
      }
      if (e.key !== 'Tab' || !dialogRef.current) return
      const items = dialogRef.current.querySelectorAll(FOCUSABLE)
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const buildMessage = () => {
    return [
      `Hi! I'd like to request a proposal for the Corporate & Custom Systems package.`,
      ``,
      `Company/Brand: ${form.company || 'N/A'}`,
      `Project type: ${form.projectType || 'N/A'}`,
      `Estimated budget: ${form.budget || 'N/A'}`,
      `Timeline: ${form.timeline || 'N/A'}`,
      `Brief description: ${form.description || 'N/A'}`,
    ].join('\n')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = buildMessage()
    const url = whatsappLink(message)
    window.open(url, '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <div
      onClick={onClose}
      className='fixed inset-0 z-[1100] flex items-center justify-center bg-bg/85 p-5 backdrop-blur-sm'
    >
      <form
        ref={dialogRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby='proposal-title'
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className='relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg border border-line bg-surface p-7 sm:p-8'
      >
        <button
          type='button'
          onClick={onClose}
          aria-label='Close'
          className='absolute right-3 top-3 inline-flex size-11 items-center justify-center rounded-md text-muted hover:text-fg focus-visible:outline-2 focus-visible:outline-accent'
        >
          <FaTimes size={16} aria-hidden='true' />
        </button>

        <p className='mb-2 font-mono text-xs uppercase tracking-[0.2em] text-accent'>Request proposal</p>
        <h2 id='proposal-title' className='mb-6 font-display text-xl font-semibold'>
          A few details before we talk
        </h2>

        <div className='mb-6 flex flex-col gap-4'>
          <div>
            <label htmlFor='proposal-company' className={labelClass}>Company / Brand</label>
            <input
              id='proposal-company'
              ref={firstFieldRef}
              className={fieldClass}
              value={form.company}
              onChange={handleChange('company')}
              placeholder='e.g. My Company'
              required
            />
          </div>

          <div>
            <label htmlFor='proposal-type' className={labelClass}>Project type</label>
            <select
              id='proposal-type'
              className={fieldClass}
              value={form.projectType}
              onChange={handleChange('projectType')}
              required
            >
              <option value="">Select one...</option>
              <option value="New custom web system">New custom web system</option>
              <option value="Database / booking system">Database / booking system</option>
              {/*<option value="API integration (M-Pesa, CRM, etc.)">API integration (M-Pesa, CRM, etc.)</option>*/}
              <option value="Full enterprise platform">Full enterprise platform</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>

          <div>
            <label htmlFor='proposal-budget' className={labelClass}>Estimated budget</label>
            <select
              id='proposal-budget'
              className={fieldClass}
              value={form.budget}
              onChange={handleChange('budget')}
              required
            >
              <option value="">Select a range...</option>
              <option value="KSh 50,000 - 100,000">KSh 50,000 - 100,000</option>
              <option value="KSh 100,000 - 250,000">KSh 100,000 - 250,000</option>
              <option value="KSh 250,000+">KSh 250,000+</option>
              <option value="Not sure / need guidance">Not sure / need guidance</option>
            </select>
          </div>

          <div>
            <label htmlFor='proposal-timeline' className={labelClass}>Timeline</label>
            <select
              id='proposal-timeline'
              className={fieldClass}
              value={form.timeline}
              onChange={handleChange('timeline')}
              required
            >
              <option value="">Select one...</option>
              <option value="ASAP / under 1 month">ASAP / under 1 month</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3+ months">3+ months</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label htmlFor='proposal-description' className={labelClass}>Brief description</label>
            <textarea
              id='proposal-description'
              className={`${fieldClass} min-h-20 resize-y`}
              value={form.description}
              onChange={handleChange('description')}
              placeholder='What problem are you trying to solve?'
              required
            />
          </div>
        </div>

        <button type='submit' className={`${btnPrimary} w-full`}>
          Send to WhatsApp
        </button>
      </form>
    </div>
  )
}

export default ProposalRequestModal
