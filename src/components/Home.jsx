import React from 'react'
import Footer from './Footer'
import AboutMe from './AboutMe'
import Top from './Top'

function Home() {
  return (
    <div className='overflow-x-hidden' style={{ background: 'var(--background-color)', minHeight: '100vh' }}>
      <Top/>
      <main id='aboutme'>
        <AboutMe/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Home
