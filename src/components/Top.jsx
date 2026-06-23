import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import NavBar from './NavBar'

function Top() {
  return (
    <div id='top' style={styles.container}>
      {/* Navigation - Fixed at top */}
      <div style={styles.navWrapper}>
        <NavBar />
      </div>

      {/* Centered Hero Content */}
      <section style={styles.heroContent}>
        <h1 style={styles.heading}>Byma</h1>
        
        <p style={styles.subheading}>
          Creative full-stack development. Pixel-perfect interfaces, robust systems, and digital experiences that solve real problems.
        </p>

        <p style={styles.ctaText}>Ready to build something exceptional?</p>

        {/* CTA Buttons */}
        <div style={styles.buttonsContainer}>
          <a
            href='https://drive.google.com/file/d/1yFLi32q3UE26ZRoLQrjitQNEfz7fpoIe/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            style={styles.resumeBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00ff00'
              e.currentTarget.style.color = '#00ff00'
              e.currentTarget.style.boxShadow = '0 0 16px rgba(0,255,0,0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#333'
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <span>Resume</span>
            <FaArrowRight size={14} />
          </a>

          <Link
            to='/projects'
            style={styles.workBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#00ff00'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#00ff00'
              e.currentTarget.style.color = '#090C11'
            }}
          >
            <span>View Work</span>
            <FaArrowRight size={14} />
          </Link>
        </div>
      </section>


      {/* Bottom gradient overlay */}
      <div style={styles.bottomGradient} />

      <style>{`
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(0,255,0,0.25)); }
          50% { filter: drop-shadow(0 0 30px rgba(0,255,0,0.4)); }
        }

        #top svg {
          animation: glowPulse 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          #top {
            padding: 0 20px;
          }
        }
      `}</style>
    </div>
  )
}

// Styles object (prevents syntax errors)
const styles = {
  container: {
    height: '100vh',
    background: `linear-gradient(135deg, rgba(9,12,17,0.75) 0%, rgba(9,12,17,0.85) 100%), url('https://karanjamaina.sirv.com/Images/portfolio/heroimg.jpeg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundOrigin: 'border-box',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },

  navWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },

  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    zIndex: 2,
    maxWidth: '700px',
    padding: '0 20px',
  },

  heading: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: 'clamp(48px, 8vw, 102px)',
    fontWeight: 700,
    color: '#fff',
    margin: '0 0 20px 0',
    letterSpacing: '-1px',
    lineHeight: 1.1,
  },

  subheading: {
    fontWeight: 500,
    color: '#888',
    fontSize: 'clamp(16px, 2.5vw, 20px)',
    lineHeight: 1.6,
    margin: '0 0 32px 0',
    maxWidth: '600px',
  },

  ctaText: {
    fontSize: 'clamp(14px, 1.8vw, 16px)',
    color: '#aaa',
    marginBottom: '24px',
    letterSpacing: '0.5px',
  },

  buttonsContainer: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  resumeBtn: {
    background: 'var(--neutralDark)',
    color: '#fff',
    padding: '12px 28px',
    borderRadius: '5px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 400ms',
    textDecoration: 'none',
    fontFamily: 'monospace',
    fontSize: '14px',
    fontWeight: 600,
    border: '1px solid #333',
    minHeight: '44px',
    cursor: 'pointer',
  },

  workBtn: {
    background: '#00ff00',
    color: '#090C11',
    padding: '12px 28px',
    borderRadius: '5px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 400ms',
    textDecoration: 'none',
    fontFamily: 'monospace',
    fontSize: '14px',
    fontWeight: 700,
    border: '1px solid #00ff00',
    minHeight: '44px',
    cursor: 'pointer',
  },

  logoContainer: {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '80px',
    width: '300px',
    background: 'linear-gradient(135deg, rgba(0,255,0,0.05) 0%, rgba(0,255,0,0.02) 50%, transparent 100%)',
    border: '1px solid rgba(0,255,0,0.15)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },

  svg: {
    width: '200px',
    height: '60px',
  },

  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100px',
    background: 'linear-gradient(to top, rgba(9,12,17,0.9), transparent)',
    zIndex: 0,
  },
}

export default Top