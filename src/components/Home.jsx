import React from 'react'
import SEO from './SEO'
import { graph, organization, webPage, website } from '../seo/schema'
import SiteHeader from './layout/SiteHeader'
import Hero from './home/Hero'
import ServicesStrip from './home/ServicesStrip'
import FeaturedProjects from './home/FeaturedProjects'
import AboutStack from './home/AboutStack'
import ContactCta from './home/ContactCta'
import SiteFooter from './layout/SiteFooter'

const homeSchema = graph(
  website,
  organization,
  webPage('WebPage', '/', 'Byma Solutions — Web, Mobile & UI/UX Studio in Nairobi', organization.description),
)

function Home() {
  return (
    <div className='min-h-screen bg-bg font-sans text-fg'>
      <SEO
        path='/'
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
