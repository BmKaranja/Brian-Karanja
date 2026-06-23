import React from 'react';
import NavBar from './NavBar';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Top() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id='top'>
      <div>
        <NavBar/>
      </div>
      <section id='sec-1'>
        <div className='w-2xl h-96 intro'>
          <h1>Byma</h1>
          <p style={{ fontWeight: 500, color: '#888', marginTop: '12px' }}>
            Creative full-stack development. Pixel-perfect interfaces, robust systems, and digital experiences that solve real problems.
          </p>
          <p className='CTA' style={{ marginTop: '32px' }}>Ready to build something exceptional?</p>
          <div className='flex gap-10 mt-5' style={{ flexWrap: 'wrap' }}>
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
        className='byma-logo'
        style={{
          height: isMobile ? '25vh' : '33vh',
          marginTop: isMobile ? '0' : '15vh',
          width: isMobile ? '100%' : '400px',
          position: 'relative',
          overflow: 'hidden',
          // zIndex: -1  ← REMOVED
        }}
      >
        <img
          src='src/assets/code.png'
          className='byma-logo-img'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
      </section>
    </div>
  );
}

export default Top;