import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import NavBar from './NavBar'

function Top() {
  return (
    <div id='top'>
      <div>
        <NavBar />
      </div>
      <section id='sec-1'>
        <div className='w-2xl h-96 intro'>
          <h1>Byma</h1>
          <p style={{ fontWeight: 500, color: '#888', marginTop: '12px' }}>
            Creative full-stack development. Pixel-perfect interfaces, robust systems, and digital experiences that solve real problems.
          </p>
          <p className='CTA' style={{ marginTop: '32px' }}>Ready to build something exceptional?</p>
          <div className='flex gap-10 mt-5'>
            <a
              href='https://drive.google.com/file/d/1yFLi32q3UE26ZRoLQrjitQNEfz7fpoIe/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              id='btn1'
              style={{ background: 'var(--neutralDark)' }}
            >
              <span>Resume</span>
              <FaArrowRight color='white' />
            </a>
            <Link to='/projects' id='btn2'>
              View Work
              <FaArrowRight color='black' />
            </Link>
          </div>
        </div>
        {/* BYMA Geometric Wordmark Logo */}
        <div
          style={{
            height: '33vh',
            marginTop: '15vh',
            width: '400px',
            background: 'linear-gradient(135deg, rgba(0,255,0,0.05) 0%, rgba(0,255,0,0.02) 50%, transparent 100%)',
            border: '1px solid rgba(0,255,0,0.15)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <svg
            viewBox="0 0 380 120"
            style={{
              width: '320px',
              height: '100px',
              filter: 'drop-shadow(0 0 25px rgba(0,255,0,0.3))'
            }}
          >
            <defs>
              <linearGradient id="bymaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ff00" stopOpacity="1" />
                <stop offset="100%" stopColor="#00ff00" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* B */}
            <g>
              <rect x="10" y="15" width="28" height="90" fill="url(#bymaGradient)" />
              <path d="M 38 15 Q 65 15 65 38 Q 65 55 38 58 L 38 15 Z" fill="url(#bymaGradient)" />
              <path d="M 38 58 Q 70 58 70 82 Q 70 105 38 105 L 38 58 Z" fill="url(#bymaGradient)" />
              {/* Circular dots in B */}
              <circle cx="28" cy="35" r="6" fill="#090C11" />
              <circle cx="28" cy="82" r="6" fill="#090C11" />
            </g>

            {/* Y */}
            <g>
              <path d="M 85 15 L 110 55 L 135 15" stroke="url(#bymaGradient)" strokeWidth="14" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="105" y="55" width="10" height="50" fill="url(#bymaGradient)" />
            </g>

            {/* M */}
            <g>
              <rect x="155" y="15" width="14" height="90" fill="url(#bymaGradient)" />
              <path d="M 155 15 L 185 55 L 215 15" stroke="url(#bymaGradient)" strokeWidth="14" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="216" y="15" width="14" height="90" fill="url(#bymaGradient)" />
            </g>

            {/* A */}
            <g>
              <path d="M 250 105 L 275 15 L 300 105" stroke="url(#bymaGradient)" strokeWidth="14" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="260" y1="75" x2="290" y2="75" stroke="url(#bymaGradient)" strokeWidth="12" strokeLinecap="round" />
              {/* Circular dot in A */}
              <circle cx="305" cy="45" r="6" fill="#090C11" />
            </g>
          </svg>

          <style>{`
            @keyframes glowPulse {
              0%, 100% { filter: drop-shadow(0 0 25px rgba(0,255,0,0.3)); }
              50% { filter: drop-shadow(0 0 35px rgba(0,255,0,0.5)); }
            }
            svg {
              animation: glowPulse 3s ease-in-out infinite;
            }
          `}</style>
        </div>
      </section>
    </div>
  )
}

export default Top