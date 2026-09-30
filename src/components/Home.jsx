import React from 'react'
import SEO from './SEO'
import SiteHeader from './layout/SiteHeader'
import Hero from './home/Hero'
import ServicesStrip from './home/ServicesStrip'
import FeaturedProjects from './home/FeaturedProjects'
import AboutStack from './home/AboutStack'
import ContactCta from './home/ContactCta'
import SiteFooter from './layout/SiteFooter'

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.byma.co.ke/#website",
      "url": "https://www.byma.co.ke/",
      "name": "Byma Solutions",
      "description": "Creative full-stack development and UI/UX design by Byma Solutions. Pixel-perfect interfaces, robust systems, and digital experiences.",
      "publisher": {
        "@id": "https://www.byma.co.ke/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.byma.co.ke/#organization",
      "name": "Byma Solutions",
      "url": "https://www.byma.co.ke/",
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
    <div className='min-h-screen bg-bg font-sans text-fg'>
      <SEO
        title="Creative Full-Stack Development"
        description="Welcome to Byma Solutions, a creative development and design studio. Specializing in high-performance React web applications, Flutter mobile experiences, and custom UI/UX design."
        keywords="Byma Solutions, Full-Stack Development, React, TailwindCSS, Flutter, UI/UX Design, Web Development, Nairobi, Kenya"
        schemaJson={homeSchema}
      />
      <SiteHeader />
      <main id='main'>
        <Hero />
        <ServicesStrip />
        <FeaturedProjects />
        <AboutStack />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}

export default Home
