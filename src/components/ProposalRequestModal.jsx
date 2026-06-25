import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

function ProposalRequestModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  })

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
    const url = `https://wa.me/2547973852135?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    onClose()
  }

  const inputStyle = {
    width: '100%',
    background: '#0e1117',
    border: '1px solid #1e2228',
    borderRadius: '4px',
    color: '#fff',
    padding: '10px 12px',
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
  }

  const labelStyle = {
    display: 'block',
    color: '#888',
    fontSize: '12px',
    fontFamily: 'monospace',
    letterSpacing: '0.5px',
    marginBottom: '6px',
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(9,12,17,0.85)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
      }}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        style={{
          background: '#111417',
          border: '1px solid #1e2228',
          borderRadius: '8px',
          padding: '32px',
          width: '100%',
          maxWidth: '480px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            color: '#666',
            cursor: 'pointer',
            padding: '6px',
          }}
        >
          <FaTimes size={16} />
        </button>

        <h3
          style={{
            fontFamily: 'monospace',
            color: '#00ff00',
            fontSize: '13px',
            letterSpacing: '1px',
            marginBottom: '8px',
          }}
        >
          REQUEST PROPOSAL
        </h3>
        <h2 style={{ color: '#fff', fontSize: '22px', fontWeight: 600, marginBottom: '24px' }}>
          A few details before we talk
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          <div>
            <label style={labelStyle}>COMPANY / BRAND</label>
            <input
              style={inputStyle}
              value={form.company}
              onChange={handleChange('company')}
              placeholder="e.g. My Company"
              required
            />
          </div>

          <div>
            <label style={labelStyle}>PROJECT TYPE</label>
            <select
              style={inputStyle}
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
            <label style={labelStyle}>ESTIMATED BUDGET</label>
            <select
              style={inputStyle}
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
            <label style={labelStyle}>TIMELINE</label>
            <select
              style={inputStyle}
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
            <label style={labelStyle}>BRIEF DESCRIPTION</label>
            <textarea
              style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
              value={form.description}
              onChange={handleChange('description')}
              placeholder="What problem are you trying to solve?"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            background: '#00ff00',
            border: '1px solid #00ff00',
            color: '#000',
            padding: '14px',
            textAlign: 'center',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '1px',
            cursor: 'pointer',
            minHeight: '44px',
          }}
        >
          SEND TO WHATSAPP
        </button>
      </form>
    </div>
  )
}

export default ProposalRequestModal