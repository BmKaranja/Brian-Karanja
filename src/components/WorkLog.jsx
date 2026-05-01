import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const logdata = [
  {
    pb_date: '2023.10.24',
    category: 'Infrastructure',
    title: 'Optimizing Next.js LCP with Edge Runtime',
    description: "Deep dive into migrating server-side logic to the Edge to minimize latency. Analyzed the impact on Core Web Vitals across globally distributed users.",
    tags: ['#NextJS', '#Vercel', '#Performance'],
    side: 'right',
  },
  {
    pb_date: '2023.09.12',
    category: 'Mobile Dev',
    title: 'Flutter vs React Native in 2024',
    description: "A performance-based comparison between the two giants. Why I'm leaning towards React Native for bridge-less architecture in upcoming projects.",
    tags: ['#Mobile', '#Architecture'],
    side: 'left',
  },
  {
    pb_date: '2023.08.06',
    category: 'Design Systems',
    title: 'Refactoring for Scalable CSS',
    description: 'How we implemented Tailwind CSS across a multi-repo ecosystem. Reducing the bundle size by 40% using JIT and shared configuration files.',
    tags: ['#Tailwind', '#Frontend'],
    side: 'right',
  },
  {
    pb_date: '2023.07.20',
    category: 'New Tech',
    title: 'Exploring Rust for Web Assembly',
    description: 'First steps into high-performance web computation. Implementing a custom image filtering engine in Rust to run in the browser.',
    tags: ['#WASM', '#Rust'],
    side: 'left',
  },
]

function TimelineEntry({ entry }) {
  const isRight = entry.side === 'right'
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 60px 1fr',
      alignItems: 'start',
    }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '32px', paddingTop: '8px' }}>
        {!isRight ? <LogCard entry={entry} /> : <MetaLabel entry={entry} align="right" />}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '12px', zIndex: 1 }}>
        <div style={{
          width: '14px', height: '14px', borderRadius: '50%',
          border: '2px solid #00ff00', background: '#090C11',
          boxShadow: '0 0 10px rgba(0,255,0,0.4)', flexShrink: 0,
        }} />
      </div>
      <div style={{ paddingLeft: '32px', paddingTop: '8px' }}>
        {isRight ? <LogCard entry={entry} /> : <MetaLabel entry={entry} align="left" />}
      </div>
    </div>
  )
}

function MetaLabel({ entry, align }) {
  return (
    <div style={{ textAlign: align === 'right' ? 'right' : 'left' }}>
      <p style={{ color: '#00ff00', fontFamily: 'monospace', fontSize: '13px', marginBottom: '4px' }}>{entry.pb_date}</p>
      <p style={{ color: '#666', fontSize: '13px' }}>{entry.category}</p>
    </div>
  )
}

function LogCard({ entry }) {
  const [hovered, setHovered] = React.useState(false)
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
      <h2 style={{ fontFamily: 'monospace', fontSize: '17px', fontWeight: 600, color: '#fff', marginBottom: '12px', lineHeight: 1.4 }}>
        {entry.title}
      </h2>
      <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>{entry.description}</p>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {entry.tags.map(tag => (
          <span key={tag} style={{
            background: '#1a1f25', border: '1px solid #2a2f35',
            color: '#aaa', fontSize: '11px', padding: '3px 10px',
            borderRadius: '4px', fontFamily: 'monospace',
          }}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

function WorkLog() {
  return (
    <div className='flex flex-col gap-10 overflow-hidden' style={{ background: 'var(--background-color)', minHeight: '100vh' }}>
      <NavBar />
      <section><hr style={{ width: '100vw', borderColor: '#222' }} /></section>

      {/* Header */}
      <section style={{ paddingLeft: '5vw', paddingRight: '5vw' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          border: '1px solid #333', borderRadius: '20px', padding: '4px 14px', marginBottom: '24px',
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ff00', display: 'inline-block', boxShadow: '0 0 6px #00ff00' }} />
          <span style={{ color: '#00ff00', fontSize: '11px', letterSpacing: '2px', fontFamily: 'monospace' }}>SYSTEM STATUS: ONLINE</span>
        </div>

        <h1 style={{ fontSize: 'clamp(52px, 8vw, 96px)', fontWeight: 700, lineHeight: 1, fontFamily: 'monospace', letterSpacing: '-2px', color: '#fff', marginBottom: '20px' }}>
          Work<span style={{ color: '#00ff00' }}>Log_</span>
        </h1>

        <p style={{ color: '#888', maxWidth: '520px', fontSize: '15px', lineHeight: 1.7 }}>
          A digital garden recording my technical journey, architectural decisions, and daily learnings in frontend and mobile engineering.
        </p>
      </section>

      {/* Timeline */}
      <section style={{ position: 'relative', padding: '0 5vw', marginTop: '20px', marginBottom: '60px' }}>
        <div style={{
          position: 'absolute', left: '50%', top: 0, bottom: 0,
          width: '2px', background: 'linear-gradient(to bottom, transparent, #2a2a2a 5%, #2a2a2a 95%, transparent)',
          transform: 'translateX(-50%)', zIndex: 0,
        }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {logdata.map((entry, i) => <TimelineEntry key={i} entry={entry} />)}
        </div>
      </section>

      {/* Load More */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
        <button
          style={{ background: 'transparent', border: '1px solid #444', color: '#fff', padding: '14px 40px', fontFamily: 'monospace', fontSize: '13px', letterSpacing: '2px', cursor: 'pointer', borderRadius: '4px', transition: 'all 400ms' }}
          onMouseEnter={e => { e.target.style.borderColor='#00ff00'; e.target.style.color='#00ff00'; e.target.style.boxShadow='0 0 16px rgba(0,255,0,0.15)' }}
          onMouseLeave={e => { e.target.style.borderColor='#444'; e.target.style.color='#fff'; e.target.style.boxShadow='none' }}
        >
          LOAD_ARCHIVED_LOGS()
        </button>
      </div>

      <footer><Footer /></footer>
    </div>
  )
}

export default WorkLog