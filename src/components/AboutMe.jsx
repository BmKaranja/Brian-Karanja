import React, { useRef, useEffect, useState } from 'react'
import {
  FaCss3, FaDatabase, FaFigma, FaGit,
  FaHtml5, FaJs, FaReact, FaArrowRight
} from 'react-icons/fa'
import { FaFlutter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const skills = [
  {
    category: 'FRONTEND SYSTEMS',
    items: [
      { icon: <FaHtml5 />, label: 'HTML5' },
      { icon: <FaCss3 />, label: 'CSS3' },
      { icon: <FaJs />, label: 'JavaScript' },
      { icon: <FaReact />, label: 'React' },
      { icon: <FaFlutter />, label: 'Flutter' },
    ],
  },
  {
    category: 'TOOLING & DESIGN',
    items: [
      { icon: <FaFigma />, label: 'Figma' },
      { icon: <FaGit />, label: 'Git' },
      { icon: <FaDatabase />, label: 'SQL' },
    ],
  },
]

const stats = [
  { value: '5+', label: 'Projects Shipped' },
  { value: '2+', label: 'Years Building' },
  { value: '8', label:'Technologies Mastered' },
]

function SkillChip({ icon, label }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        background: hovered ? 'rgba(0,255,0,0.08)' : '#0e1117',
        border: `1px solid ${hovered ? '#00ff00' : '#1e2228'}`,
        borderRadius: '4px',
        fontSize: '13px',
        fontFamily: 'monospace',
        color: hovered ? '#00ff00' : '#aaa',
        transition: 'all 300ms',
        cursor: 'default',
        letterSpacing: '0.5px',
      }}
    >
      <span style={{ fontSize: '16px', color: '#00ff00' }}>{icon}</span>
      {label}
    </span>
  )
}

function AboutMe() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        padding: '10vh 5vw',
        background: 'var(--background-color)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 700ms ease, transform 700ms ease',
      }}
    >
      {/* Section header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '60px' }}>
        <span style={{
          fontFamily: 'monospace',
          fontSize: '11px',
          letterSpacing: '3px',
          color: '#00ff00',
          border: '1px solid #00ff00',
          borderRadius: '20px',
          padding: '4px 14px',
        }}>
          ABOUT.ME
        </span>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, #1e2228, transparent)' }} />
        <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#333' }}>v2.0</span>
      </div>

      {/* Main two-column layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)',
        gap: '6vw',
        alignItems: 'start',
      }}>

        {/* LEFT — profile photo + stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Photo frame */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: 0,
              border: '1px solid #00ff00',
              borderRadius: '4px',
              transform: 'translate(10px, 10px)',
              opacity: 0.25,
            }} />
            <div
              style={{
                height: '50vh',
                minHeight: '320px',
                background: `url('/me.jpg') center/cover no-repeat`,
                borderRadius: '4px',
                border: '1px solid #1e2228',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* green scan-line overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, transparent 80%, rgba(0,255,0,0.05) 100%)',
                pointerEvents: 'none',
              }} />
              {/* bottom badge */}
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px',
                background: 'rgba(9,12,17,0.85)',
                border: '1px solid #1e2228',
                borderRadius: '4px',
                padding: '8px 14px',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: '#00ff00',
                letterSpacing: '1.5px',
              }}>
                BRIAN K. MAINA — KE
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: '#1e2228',
            border: '1px solid #1e2228',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            {stats.map((s) => (
              <div key={s.label} style={{
                background: '#090C11',
                padding: '20px 12px',
                textAlign: 'center',
              }}>
                <p style={{
                  fontFamily: 'monospace',
                  fontSize: '26px',
                  fontWeight: 700,
                  color: '#00ff00',
                  margin: 0,
                  lineHeight: 1,
                }}>{s.value}</p>
                <p style={{
                  fontSize: '10px',
                  color: '#555',
                  letterSpacing: '1px',
                  marginTop: '6px',
                  fontFamily: 'monospace',
                }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — bio + skills + CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

          {/* Headline */}
          <div>
            <h1 style={{
              fontFamily: "'Lexend', sans-serif",
              fontSize: 'clamp(36px, 4vw, 58px)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#fff',
              margin: 0,
            }}>
              Crafting digital<br />
              <span style={{ color: '#00ff00' }}>experiences</span><br />
              with precision.
            </h1>
          </div>

          {/* Bio */}
          <p style={{
            fontSize: '15px',
            lineHeight: 1.8,
            color: '#888',
            borderLeft: '3px solid #00ff00',
            paddingLeft: '20px',
            margin: 0,
          }}>
            Frontend engineer specializing in React, Flutter, and TailwindCSS. I treat
            Git not just as version control but as a communication tool — clean commits,
            structured branches, and collaborative workflows that keep teams aligned and
            codebases maintainable.
          </p>

          {/* Skill groups */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {skills.map((group) => (
              <div key={group.category}>
                <p style={{
                  fontFamily: 'monospace',
                  fontSize: '10px',
                  letterSpacing: '2.5px',
                  color: '#444',
                  marginBottom: '12px',
                }}>
                  {group.category}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {group.items.map((s) => (
                    <SkillChip key={s.label} icon={s.icon} label={s.label} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', paddingTop: '8px' }}>
            <a
              href="https://drive.google.com/file/d/1yFLi32q3UE26ZRoLQrjitQNEfz7fpoIe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                background: 'transparent',
                border: '1px solid #333',
                color: '#fff',
                fontFamily: 'monospace',
                fontSize: '13px',
                letterSpacing: '1.5px',
                borderRadius: '4px',
                transition: 'all 400ms',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#00ff00'
                e.currentTarget.style.color = '#00ff00'
                e.currentTarget.style.boxShadow = '0 0 16px rgba(0,255,0,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#333'
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              VIEW_CV <FaArrowRight size={12} />
            </a>
            <Link
              to="/Projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                background: '#00ff00',
                border: '1px solid #00ff00',
                color: '#090C11',
                fontFamily: 'monospace',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                borderRadius: '4px',
                transition: 'all 400ms',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#00ff00'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#00ff00'
                e.currentTarget.style.color = '#090C11'
              }}
            >
              PROJECTS <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile: stack columns */}
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default AboutMe