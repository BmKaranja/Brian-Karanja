import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Websites from './components/Websites'
import Mobile from './components/Mobile'
import { FaWhatsapp } from 'react-icons/fa'
import { whatsappLink } from './components/home/contact'
import PrivacyPolicy from './components/PrivacyPolicy'
import Designs from './components/Designs'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/WorkLog' element={<Navigate to='/' replace />}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/AboutMe' element={<AboutMe/>}></Route>
        <Route path='/projects/websites' element={<Websites/>}></Route>
        <Route path='/projects/mobile' element={<Mobile/>}></Route>
        <Route path='/projects/designs' element={<Designs/>}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
      
      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink('Hello BYMA, I would like to know more about your services')} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 10px rgba(0, 255, 0, 0.2)',
          zIndex: 1000,
          transition: 'transform 0.3s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Chat with Byma on WhatsApp"
      >
        <FaWhatsapp size={35} />
      </a>
    </div>
  )
}

export default App
