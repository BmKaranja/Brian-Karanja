import React, { useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import logdata from '../data/logdata.json'
import SEO from './SEO'

const workLogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Byma DevLog",
  "description": "A digital garden recording my technical journey, architectural decisions, and daily learnings in frontend and mobile engineering.",
  "publisher": {
    "@type": "Person",
    "name": "Brian Karanja"
  },
  "blogPost": logdata.map((log) => ({
    "@type": "BlogPosting",
    "headline": `Update on ${log.project}`,
    "description": log.description,
    "datePublished": log.date,
    "author": {
      "@type": "Person",
      "name": "Brian Karanja"
    },
    "url": log.link
  }))
};

// ─── Tag Badge ────────────────────────────────────────────────────────────────
function Tag({ label }) {
  return (
    <span style={{
      background: '#1a1f25',
      border: '1px solid #2a2f35',
      color: '#aaa',
      fontSize: '11px',
      padding: '3px 10px',
      borderRadius: '4px',
      fontFamily: 'monospace',
    }}>
      #{label}
    </span>
  )
}

// ─── Timeline Card ────────────────────────────────────────────────────────────
function LogCard({ entry }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#111417',
        border: `1px solid ${hovered ? '#2a3a2a' : '#1e2228'}`,
        borderRadius: '8px',
        padding: '24px',
        maxWidth: '380px',
        width: '100%',
        transition: 'all 400ms',
        boxShadow: hovered ? '0 0 20px rgba(0,255,0,0.08)' : 'none',
      }}
    >
      <h2 style={{
        fontFamily: 'monospace', fontSize: '17px', fontWeight: 600,
        color: '#fff', marginBottom: '12px', lineHeight: 1.4,
      }}>
        {entry.project}
      </h2>
      <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>
        {entry.description}
      </p>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
        {entry.tags.map(tag => <Tag key={tag} label={tag} />)}
      </div>
      <a
        href={entry.link}
        target='_blank'
        rel='noopener noreferrer'
        style={{
          color: '#00ff00', fontSize: '12px', fontFamily: 'monospace',
          display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none',
        }}
      >
        VIEW_COMMIT →
      </a>
    </div>
  )
}

// ─── Meta Label (date + first tag) ───────────────────────────────────────────
function MetaLabel({ entry, align }) {
  return (
    <div style={{ textAlign: align === 'right' ? 'right' : 'left' }}>
      <p style={{ color: '#00ff00', fontFamily: 'monospace', fontSize: '13px', marginBottom: '4px' }}>
        {entry.date}
      </p>
      <p style={{ color: '#666', fontSize: '13px' }}>{entry.tags[0]}</p>
    </div>
  )
}

// ─── Single Timeline Row ──────────────────────────────────────────────────────
function TimelineEntry({ entry, index }) {
  const isRight = index % 2 === 0
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 1fr', alignItems: 'start' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '32px', paddingTop: '8px' }}>
        {!isRight ? <LogCard entry={entry} /> : <MetaLabel entry={entry} align='right' />}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '12px', zIndex: 1 }}>
        <div style={{
          width: '14px', height: '14px', borderRadius: '50%',
          border: '2px solid #00ff00', background: '#090C11',
          boxShadow: '0 0 10px rgba(0,255,0,0.4)', flexShrink: 0,
        }} />
      </div>
      <div style={{ paddingLeft: '32px', paddingTop: '8px' }}>
        {isRight ? <LogCard entry={entry} /> : <MetaLabel entry={entry} align='left' />}
      </div>
    </div>
  )
}

// ─── Grid Card ────────────────────────────────────────────────────────────────
function GridCard({ entry }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#111417',
        border: `1px solid ${hovered ? '#00ff0033' : '#1e2228'}`,
        borderRadius: '10px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transition: 'all 400ms',
        boxShadow: hovered ? '0 0 20px rgba(0,255,0,0.08)' : 'none',
      }}
    >
      <p style={{ color: '#00ff00', fontFamily: 'monospace', fontSize: '12px' }}>{entry.date}</p>
      <h2 style={{ fontFamily: 'monospace', fontSize: '16px', fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>
        {entry.project}
      </h2>
      <p style={{ color: '#888', fontSize: '13px', lineHeight: 1.7, flexGrow: 1 }}>
        {entry.description}
      </p>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {entry.tags.map(tag => <Tag key={tag} label={tag} />)}
      </div>
      <a
        href={entry.link}
        target='_blank'
        rel='noopener noreferrer'
        style={{
          color: '#00ff00', fontSize: '12px', fontFamily: 'monospace',
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          textDecoration: 'none', marginTop: '4px',
        }}
      >
        VIEW_COMMIT →
      </a>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
function WorkLog() {
  const [showAll, setShowAll] = useState(false)
  const timelineEntries = logdata.slice(0, 4)

  return (
    <div className='flex flex-col gap-10' style={{ background: 'var(--background-color)', minHeight: '100vh' }}>
      <SEO 
        title="Development WorkLog & Timeline"
        description="Follow Brian Karanja's coding updates, technical logs, architectural design changes, and commit history for projects like StayPay and Wincer's Cake House."
        keywords="DevLog, Brian Karanja timeline, software engineering commits, web development logs, Flutter engineering journal"
        schemaJson={workLogSchema}
      />
      <NavBar />
      <section><hr style={{ borderColor: '#222' }} /></section>

      {/* Header */}
      <section style={{ paddingLeft: '5vw', paddingRight: '5vw' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          border: '1px solid #333', borderRadius: '20px', padding: '4px 14px', marginBottom: '24px',
        }}>
          <span style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#00ff00', display: 'inline-block', boxShadow: '0 0 6px #00ff00',
          }} />
          <span style={{ color: '#00ff00', fontSize: '11px', letterSpacing: '2px', fontFamily: 'monospace' }}>
            SYSTEM STATUS: ONLINE
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(52px, 8vw, 96px)', fontWeight: 700, lineHeight: 1,
          fontFamily: 'monospace', letterSpacing: '-2px', color: '#fff', marginBottom: '20px',
        }}>
          Work<span style={{ color: '#00ff00' }}>Log_</span>
        </h1>

        <p style={{ color: '#888', maxWidth: '520px', fontSize: '15px', lineHeight: 1.7 }}>
          A digital garden recording my technical journey, architectural decisions,
          and daily learnings in frontend and mobile engineering.
        </p>
      </section>

      {/* Timeline View */}
      {!showAll && (
        <section style={{ position: 'relative', padding: '0 5vw', marginTop: '20px', marginBottom: '40px' }}>
          <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px',
            background: 'linear-gradient(to bottom, transparent, #2a2a2a 5%, #2a2a2a 95%, transparent)',
            transform: 'translateX(-50%)', zIndex: 0,
          }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {timelineEntries.map((entry, i) => (
              <TimelineEntry key={entry.id} entry={entry} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* Grid View */}
      {showAll && (
        <section style={{ padding: '0 5vw', marginBottom: '40px' }}>
          <p style={{ color: '#555', fontFamily: 'monospace', fontSize: '12px', marginBottom: '24px', letterSpacing: '1px' }}>
            ALL_COMMITS — {logdata.length} entries
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {logdata.map(entry => (
              <GridCard key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
      )}

      {/* Toggle Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
        <button
          onClick={() => setShowAll(prev => !prev)}
          style={{
            background: 'transparent', border: '1px solid #444', color: '#fff',
            padding: '14px 40px', fontFamily: 'monospace', fontSize: '13px',
            letterSpacing: '2px', cursor: 'pointer', borderRadius: '4px', transition: 'all 400ms',
          }}
          onMouseEnter={e => {
            e.target.style.borderColor = '#00ff00'
            e.target.style.color = '#00ff00'
            e.target.style.boxShadow = '0 0 16px rgba(0,255,0,0.15)'
          }}
          onMouseLeave={e => {
            e.target.style.borderColor = '#444'
            e.target.style.color = '#fff'
            e.target.style.boxShadow = 'none'
          }}
        >
          {showAll ? 'SHOW_TIMELINE()' : 'LOAD_ARCHIVED_LOGS()'}
        </button>
      </div>

      <footer><Footer /></footer>
    </div>
  )
}

export default WorkLog