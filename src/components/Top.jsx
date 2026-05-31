import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import NavBar from './NavBar'

function Top() {
  return (
    <div id='top'>
      <div>
        <NavBar/>
      </div>
      <section id='sec-1'>
        <div className='w-2xl h-96 intro'>      
          <h1>Prismlabs</h1>
          <p style={{fontWeight: 500, color: '#888', marginTop: '12px'}}>
            Creative full-stack development. Pixel-perfect interfaces, robust systems, and digital experiences that solve real problems.
          </p>
          <p className='CTA' style={{marginTop: '32px'}}>Ready to build something exceptional?</p>
          <div className='flex gap-10 mt-5'>
            <a 
              href='https://drive.google.com/file/d/1yFLi32q3UE26ZRoLQrjitQNEfz7fpoIe/view?usp=sharing' 
              target='_blank'
              rel='noopener noreferrer'
              id='btn1' 
              style={{ background: 'var(--background-color)' }}
            >
              <span>Resume</span>
              <FaArrowRight color='white'/>
            </a>
            <Link to='/projects' id='btn2'>
              View Work
              <FaArrowRight color='black'/>
            </Link>
          </div>
        </div>  
        {/* Geometric hero visual instead of portrait */}
        <div 
          style={{
            height: '33vh',
            marginTop: '15vh',
            width: '400px',
            background: 'linear-gradient(135deg, rgba(0,255,0,0.1) 0%, rgba(0,255,0,0.05) 50%, transparent 100%)',
            border: '1px solid rgba(0,255,0,0.2)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Animated prism visual */}
          <svg 
            viewBox="0 0 200 200" 
            style={{ 
              width: '200px', 
              height: '200px',
              filter: 'drop-shadow(0 0 20px rgba(0,255,0,0.3))'
            }}
          >
            {/* Prism shape */}
            <polygon 
              points="100,20 160,140 40,140" 
              fill="none" 
              stroke="#00ff00" 
              strokeWidth="2"
              style={{ animation: 'spin 20s linear infinite' }}
            />
            {/* Inner refraction lines */}
            <line x1="100" y1="20" x2="100" y2="140" stroke="#00ff00" strokeWidth="1" opacity="0.5"/>
            <line x1="100" y1="20" x2="40" y2="140" stroke="#00ff00" strokeWidth="1" opacity="0.5"/>
            <line x1="100" y1="20" x2="160" y2="140" stroke="#00ff00" strokeWidth="1" opacity="0.5"/>
            {/* Center point */}
            <circle cx="100" cy="80" r="4" fill="#00ff00"/>
          </svg>
          <style>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>       
      </section>
    </div>
  )
}

export default Top