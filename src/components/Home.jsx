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
      "@id": "https://byma.co.ke/#website",
      "url": "https://byma.co.ke/",
      "name": "Byma Solutions",
      "description": "Creative full-stack development and UI/UX design by Byma Solutions. Pixel-perfect interfaces, robust systems, and digital experiences.",
      "publisher": {
        "@id": "https://byma.co.ke/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://byma.co.ke/#organization",
      "name": "Byma Solutions",
      "url": "https://byma.co.ke/",
      "description": "A creative full-stack development and design studio specializing in React, Flutter, and high-performance digital solutions.",
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
        description="Welcome to Byma Solutions, a creative development and design studio. Specializing in high-performance React web applications, Flutter mobile experiences, and custom UI/UX design."
        keywords="Byma Solutions, Full-Stack Development, React, TailwindCSS, Flutter, UI/UX Design, Web Development, Nairobi, Kenya"
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
