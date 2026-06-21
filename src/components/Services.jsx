import React, { useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCode, FaLinkedin, FaMobileAlt, FaPalette } from 'react-icons/fa'
import SEO from './SEO'

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "Byma",
      "image": "https://brian-karanja.onrender.com/me.png",
      "description": "Professional Web Development, Mobile App Development, and UI/UX Design services.",
      "url": "https://brian-karanja.onrender.com/Services",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "KE"
      },
      "provider": {
        "@type": "Person",
        "name": "Brian Karanja"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Byma offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Byma specializes in Web Development (React, TypeScript, TailwindCSS), Mobile Application Development (Flutter, Dart), and UI/UX Design (Figma, prototyping, custom design systems)."
          }
        },
        {
          "@type": "Question",
          "name": "What technical stack does Brian Karanja specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brian Karanja specializes in HTML5, CSS3, JavaScript, TypeScript, React, TailwindCSS, Flutter, Dart, Firebase, SQL, Figma, and Git."
          }
        },
        {
          "@type": "Question",
          "name": "How does Byma ensure high performance and SEO/GEO optimization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We focus on clean semantic HTML, dynamic JSON-LD structured schema data, optimized bundle sizes, and custom LLM crawler-friendly configurations (like llms.txt)."
          }
        },
        {
          "@type": "Question",
          "name": "Is Brian Karanja available for freelance or full-time opportunities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, I am open to freelance projects, consulting, and select full-time roles. Get in touch via LinkedIn or GitHub to discuss details."
          }
        }
      ]
    }
  ]
};

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div style={{
      borderBottom: '1px solid #1e2228',
      padding: '20px 0',
      transition: 'all 300ms'
    }}>
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          color: '#fff',
          fontFamily: 'monospace',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          padding: '8px 0',
        }}
      >
        <span>{question}</span>
        <span style={{
          color: '#00ff00',
          transition: 'transform 300ms',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          fontSize: '20px',
          fontWeight: 300
        }}>＋</span>
      </button>
      <div style={{
        maxHeight: isOpen ? '160px' : '0',
        overflow: 'hidden',
        transition: 'max-height 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease',
        opacity: isOpen ? 1 : 0
      }}>
        <p style={{
          color: '#888',
          fontSize: '14.5px',
          lineHeight: '1.7',
          padding: '8px 0 16px 0',
          margin: 0
        }}>
          {answer}
        </p>
      </div>
    </div>
  )
}

function Services() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Byma offer?",
      answer: "Byma specializes in Web Development (React, TypeScript, TailwindCSS), Mobile Application Development (Flutter, Dart), and UI/UX Design (Figma, prototyping, custom design systems)."
    },
    {
      question: "What technical stack does Brian Karanja specialize in?",
      answer: "Brian Karanja specializes in HTML5, CSS3, JavaScript, TypeScript, React, TailwindCSS, Flutter, Dart, Firebase, SQL, Figma, and Git."
    },
    {
      question: "How does Byma ensure high performance and SEO/GEO optimization?",
      answer: "We focus on clean semantic HTML, dynamic JSON-LD structured schema data, optimized bundle sizes, and custom LLM crawler-friendly configurations (like llms.txt)."
    },
    {
      question: "Is Brian Karanja available for freelance or full-time opportunities?",
      answer: "Yes, I am open to freelance projects, consulting, and select full-time roles. Get in touch via LinkedIn or GitHub to discuss details."
    }
  ];

  return (
    <div className='flex flex-col gap-10' style={{ background: 'var(--background-color)', minHeight: '100vh' }}>
      <SEO
        title="Services & Capabilities"
        description="Explore the range of design and engineering services offered by Byma. From responsive web development (React/TypeScript) to mobile applications (Flutter) and UI/UX design."
        keywords="Web Development, React developer, Flutter app development, UI/UX Design, Figma, Freelance developer, Nairobi, Kenya"
        schemaJson={servicesSchema}
      />
      <NavBar />
      <div>
        <hr className='text-gray-600'></hr>
        <section className='sec-intro'>
          <article>
            <p className='font mb-2' id='cap'>WHAT WE BUILD</p>
            <h1 className='text-7xl'>
              Digital products<span className='color'> crafted</span> with precision
            </h1>
            <p className='mt-5 pr-20'>
              Byma specializes in building pixel-perfect interfaces, scalable systems, and elegant solutions.
              From concept to launch—clean code, thoughtful design, measurable impact.
            </p>
          </article>
        </section>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-10' >
          <article className='mycards'>
            <div className='p-2 w-12'>
              <FaCode size={30} color='#00ff00' />
            </div>
            <h2 className='font'>Web Development</h2>
            <p>Production-grade web applications built for performance, scalability, and user delight. Modern frameworks, best practices, and obsessive attention to detail.</p>
            <div className='mt-5'>
              <p><span style={{ color: '#00ff00' }}>✓ </span>React & TailwindCSS Expert </p>
              <p><span style={{ color: '#00ff00' }}>✓ </span>Full-Stack Architecture</p>
              <p><span style={{ color: '#00ff00' }}>✓ </span>SEO & Performance Optimized</p>
            </div>
            <Link to='/Projects' className='color font link'>
              View Projects <span className='pl-1'>
                <FaArrowRight />
              </span>
            </Link>
          </article>
          <article className='mycards'>
            <div className='p-2 w-12'>
              <FaMobileAlt size={30} color='#00ff00' />
            </div>
            <h2 className='font'>Mobile Apps</h2>
            <p>
              Cross-platform mobile experiences that feel native. iOS and Android apps built with Flutter for efficiency without compromising design quality.
            </p>
            <div className='mt-5'>
              <p><span style={{ color: '#00ff00' }}>✓ </span>Flutter Expert </p>
              <p><span style={{ color: '#00ff00' }}>✓ </span>Smooth Animations</p>
              <p><span style={{ color: '#00ff00' }}>✓ </span>Offline Functionality</p>
            </div>
            <Link to='/Projects' className='color font link'>
              View Projects <span className='pl-1'>
                <FaArrowRight />
              </span>
            </Link>
          </article>
          <article className='mycards'>
            <div className='p-2 w-12'>
              <FaPalette size={30} color='#00ff00' />
            </div>
            <h2 className='font'>UI/UX Design</h2>
            <p>User-centric design systems that balance beauty with function. Every pixel serves a purpose—creating interfaces that users love.</p>
            <div className='mt-5'>
              <p><span style={{ color: '#00ff00' }}>✓ </span>Design Systems </p>
              <p><span style={{ color: '#00ff00' }}>✓ </span>Prototyping & Testing </p>
              <p><span style={{ color: '#00ff00' }}>✓ </span>Brand Identity</p>
            </div>
            <Link to='/Projects' className='color font link'>
              View Projects <span className='pl-1'>
                <FaArrowRight />
              </span>
            </Link>
          </article>
        </section>

        {/* Pricing/Packages Section */}
        <section style={{ padding: '80px 5vw 40px 5vw', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p className='font mb-2' id='cap'>PRICING & PACKAGES</p>
            <h2 style={{
              fontFamily: "'Lexend', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '16px'
            }}>
              Streamlined Digital Solutions for Your Business
            </h2>
            <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '16px', lineHeight: '1.6' }}>
              No confusing tech talk. No hidden hourly fees. Just beautiful, functional websites built to help your local business grow and look professional online.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Package 1 */}
            <article style={{ background: '#111417', border: '1px solid #1e2228', borderRadius: '8px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: 'monospace', color: '#00ff00', fontSize: '14px', letterSpacing: '1px', marginBottom: '16px' }}>PACKAGE 1</h3>
              <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>The "Digital Business Card"</h2>
              <p style={{ color: '#888', fontSize: '14px', marginBottom: '24px', minHeight: '60px' }}>
                Perfect for small shops, bakeries, or service businesses looking to build instant trust online.
              </p>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '32px', fontWeight: 700, color: '#fff' }}>KSh 10,000</span>
                <span style={{ color: '#666', fontSize: '12px', display: 'block', marginTop: '4px' }}>One-Time Development Fee</span>
              </div>
              <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '24px', lineHeight: '1.6' }}>
                A sleek, modern, one-page website designed to give your business an official online home. Perfect for linking to your WhatsApp Business, Instagram, or TikTok bio so customers know you are the real deal.
              </p>
              <ul style={{ color: '#888', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', flexGrow: 1 }}>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> 1 Seamless Scrolling Page (Home, Services, Contact)</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> Fully optimized for mobile & desktop</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> Direct WhatsApp/Email click-to-chat</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> Basic Google Maps & contact details</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> Ready in 1 Week</li>
              </ul>
              <p style={{ color: '#666', fontSize: '12px', fontStyle: 'italic', marginBottom: '24px' }}>Note: Client covers domain registration (approx. KSh 1,000)</p>
              <a
                href={`https://wa.me/254795972904?text=${encodeURIComponent("Hi! I'm interested in the KSh 10,000 Digital Business Card package for my business.")}`}
                target="_blank" rel="noopener noreferrer"
                style={{ background: 'transparent', border: '1px solid #00ff00', color: '#00ff00', padding: '12px', textAlign: 'center', borderRadius: '4px', fontFamily: 'monospace', fontWeight: 600, transition: 'all 300ms' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#00ff00'; e.currentTarget.style.color = '#000'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#00ff00'; }}
              >
                START A CHAT
              </a>
            </article>

            {/* Package 2 (Most Popular) */}
            <article style={{ background: '#111417', border: '2px solid #00ff00', borderRadius: '8px', padding: '32px', display: 'flex', flexDirection: 'column', position: 'relative', transform: 'scale(1.02)' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#00ff00', color: '#000', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', fontFamily: 'monospace' }}>
                MOST POPULAR
              </div>
              <h3 style={{ fontFamily: 'monospace', color: '#00ff00', fontSize: '14px', letterSpacing: '1px', marginBottom: '16px' }}>PACKAGE 2</h3>
              <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>The "Essential Growth"</h2>
              <p style={{ color: '#888', fontSize: '14px', marginBottom: '24px', minHeight: '60px' }}>
                Perfect for businesses that need space to showcase a portfolio of work, standard packages, or distinct services.
              </p>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '32px', fontWeight: 700, color: '#fff' }}>KSh 20,000</span>
                <span style={{ color: '#666', fontSize: '12px', display: 'block', marginTop: '4px' }}>One-Time Development Fee</span>
              </div>
              <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '24px', lineHeight: '1.6' }}>
                A complete multi-page website that allows you to deep-dive into what makes your business special, display high-quality galleries of your work, and structure your service options clearly.
              </p>
              <ul style={{ color: '#888', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', flexGrow: 1 }}>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> Up to 4 Dedicated Pages (Home, About, Gallery, Contact)</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> Everything included in the KSh 5k tier</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> Interactive photo galleries or pricing tables</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> Advanced contact & quote request forms</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> Basic on-page SEO setup for Google visibility</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> Ready in 2-3 Weeks</li>
              </ul>
              <a
                href={`https://wa.me/254795972904?text=${encodeURIComponent("Hi! I'm interested in the KSh 20,000 Essential Growth package for my business.")}`}
                target="_blank" rel="noopener noreferrer"
                style={{ background: '#00ff00', border: '1px solid #00ff00', color: '#000', padding: '12px', textAlign: 'center', borderRadius: '4px', fontFamily: 'monospace', fontWeight: 600, transition: 'all 300ms' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#00ff00'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#00ff00'; e.currentTarget.style.color = '#000'; }}
              >
                START A CHAT
              </a>
            </article>

            {/* Package 3 */}
            <article style={{ background: '#111417', border: '1px solid #1e2228', borderRadius: '8px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: 'monospace', color: '#00ff00', fontSize: '14px', letterSpacing: '1px', marginBottom: '16px' }}>PACKAGE 3</h3>
              <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>The "Smart Business" System</h2>
              <p style={{ color: '#888', fontSize: '14px', marginBottom: '24px', minHeight: '60px' }}>
                Perfect for businesses looking to automate bookings, securely collect client data, or run a custom portal.
              </p>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '32px', fontWeight: 700, color: '#fff' }}>KSh 35,000</span>
                <span style={{ color: '#666', fontSize: '12px', display: 'block', marginTop: '4px' }}>One-Time Development Fee</span>
              </div>
              <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '24px', lineHeight: '1.6' }}>
                A high-performance web application backed by a secure cloud database. Ideal if you want to store customer registrations, manage automated booking requests, or display dynamic business data.
              </p>
              <ul style={{ color: '#888', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', flexGrow: 1 }}>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> 5+ Pages with Secure Cloud Database Integration</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> Everything included in the KSh 12k tier</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> Custom booking request or client sign-up management</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> Secure database setup for client interactions</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> 14 Days of post-launch technical support</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#00ff00' }}>✓</span> Ready in 3-5 Weeks</li>
              </ul>
              <a
                href={`https://wa.me/254795972904?text=${encodeURIComponent("Hi! I'm interested in the KSh 35,000 Smart Business System package for my business.")}`}
                target="_blank" rel="noopener noreferrer"
                style={{ background: 'transparent', border: '1px solid #00ff00', color: '#00ff00', padding: '12px', textAlign: 'center', borderRadius: '4px', fontFamily: 'monospace', fontWeight: 600, transition: 'all 300ms' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#00ff00'; e.currentTarget.style.color = '#000'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#00ff00'; }}
              >
                START A CHAT
              </a>
            </article>
          </div>

          {/* Section Footer (The Trust Builder) */}
          <div style={{ marginTop: '60px', background: '#090C11', border: '1px solid #1e2228', borderRadius: '8px', padding: '40px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '28px' }}>💡</span> How It Works
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div>
                <h4 style={{ color: '#00ff00', fontWeight: 600, marginBottom: '8px' }}>1. Choose Your Tier</h4>
                <p style={{ color: '#888', fontSize: '14.5px', lineHeight: '1.6' }}>Select the package that fits your current business scale.</p>
              </div>
              <div>
                <h4 style={{ color: '#00ff00', fontWeight: 600, marginBottom: '8px' }}>2. Send Your Materials</h4>
                <p style={{ color: '#888', fontSize: '14.5px', lineHeight: '1.6' }}>Drop your logo, photos, and basic business details over WhatsApp or email.</p>
              </div>
              <div>
                <h4 style={{ color: '#00ff00', fontWeight: 600, marginBottom: '8px' }}>3. Launch & Scale</h4>
                <p style={{ color: '#888', fontSize: '14.5px', lineHeight: '1.6' }}>I handle the entire build and deployment. Within days, your business is officially live and ready for customers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section for AEO / GEO optimizations */}
        <section style={{ padding: '80px 5vw 40px 5vw', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
            <span style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              letterSpacing: '3px',
              color: '#00ff00',
              border: '1px solid #00ff00',
              borderRadius: '20px',
              padding: '4px 14px',
            }}>
              FAQ / ANSWERS
            </span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, #1e2228, transparent)' }} />
          </div>

          <h2 style={{
            fontFamily: "'Lexend', sans-serif",
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '32px'
          }}>
            Frequently Asked <span style={{ color: '#00ff00' }}>Questions</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQIndex === index}
                onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
              />
            ))}
          </div>
        </section>

        <section className='cta'>
          <h2>Have a project in mind?</h2>
          <p>I'm available for freelance work and select full-time opportunities. Let's build something extraordinary together.</p>
          <span>
            <a href='https://www.linkedin.com/in/b-karanja' className='link p-10' id='btn4' target='_blank' rel='noopener noreferrer'>Let's Talk<FaLinkedin></FaLinkedin></a>
            <a href='https://drive.google.com/file/d/1yFLi32q3UE26ZRoLQrjitQNEfz7fpoIe/view?usp=sharing' target='_blank' id='btn3' ><span>Resume </span><FaArrowRight color='white' /></a>
          </span>
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Services