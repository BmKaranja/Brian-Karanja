import React from 'react'
import Footer from './Footer'
import AboutMe from './AboutMe'
import Top from './Top'
import SEO from './SEO'

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://brian-karanja.onrender.com/#website",
      "url": "https://brian-karanja.onrender.com/",
      "name": "Byma",
      "description": "Creative full-stack development by Brian Karanja. Pixel-perfect interfaces, robust systems, and digital experiences.",
      "publisher": {
        "@id": "https://brian-karanja.onrender.com/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://brian-karanja.onrender.com/#person",
      "name": "Brian Karanja",
      "url": "https://brian-karanja.onrender.com/",
      "jobTitle": "Creative Full-Stack Developer & Designer",
      "sameAs": [
        "https://github.com/BmKaranja",
        "https://www.linkedin.com/in/b-karanja",
        "https://www.instagram.com/it.s._bryan/"
      ],
      "knowsAbout": [
        "React",
        "JavaScript",
        "TypeScript",
        "TailwindCSS",
        "Flutter",
        "Dart",
        "Firebase",
        "Figma",
        "Git",
        "SQL",
        "UI/UX Design"
      ]
    }
  ]
};

function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <SEO
        title="Creative Full-Stack Development"
        description="Welcome to Byma, the creative developer portfolio of Brian Karanja. Specializing in high-performance React web applications and Flutter mobile experiences."
        keywords="Brian Karanja, Byma, Full-Stack Developer, React, TailwindCSS, Flutter, UI/UX Design, Nairobi, Kenya"
        schemaJson={homeSchema}
      />
      <Top />
      <main id='aboutme'>
        <AboutMe />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
