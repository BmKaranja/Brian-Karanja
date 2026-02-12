import React from 'react'
import Footer from './Footer'
import AboutMe from './AboutMe'
import Top from './Top'

function Home() {
  return (
    <div>
      <Top/>
      <main>
        <AboutMe/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
