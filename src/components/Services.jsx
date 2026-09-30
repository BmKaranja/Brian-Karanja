import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCode, FaMobileAlt, FaPalette } from 'react-icons/fa'
import SEO from './SEO'
import { breadcrumb, graph, organization, ORG_ID, webPage } from '../seo/schema'
import ProposalRequestModal from './ProposalRequestModal'
import PageShell from './layout/PageShell'
import PageHeading from './layout/PageHeading'
import Reveal from './home/Reveal'
import { btnPrimary, btnSecondary, whatsappLink } from './home/contact'




const services = [
  {
    icon: FaCode,
    title: 'Web Development',
    text: 'Production-grade web applications built for performance, scalability, and user delight. Modern frameworks, best practices, and obsessive attention to detail.',
    points: ['React & TailwindCSS Expert', 'Full-Stack Architecture', 'SEO & Performance Optimized'],
    to: '/projects/websites',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile Apps',
    text: 'Cross-platform mobile experiences that feel native. iOS and Android apps built with Flutter for efficiency without compromising design quality.',
    points: ['Flutter Expert', 'Smooth Animations', 'Offline Functionality'],
  },
  {
    icon: FaPalette,
    title: 'UI/UX Design',
    text: 'User-centric design systems that balance beauty with function. Every pixel serves a purpose—creating interfaces that users love.',
    points: ['Design Systems', 'Prototyping & Testing', 'Brand Identity'],
    to: '/projects/designs',
  },
]

const packages = [
  {
    label: 'Package 1',
    title: 'The "Digital Business Card"',
    blurb: 'Perfect for small shops, bakeries, or service businesses looking to build instant trust online.',
    price: 'KSh 10,000',
    priceNote: 'One-Time Development Fee',
    description: 'A sleek, modern, one-page website designed to give your business an official online home. Perfect for linking to your WhatsApp Business, Instagram, or TikTok bio so customers know you are the real deal.',
    features: [
      '1 Seamless Scrolling Page (Home, Services, Contact)',
      'Fully optimized for mobile & desktop',
      'Direct WhatsApp/Email click-to-chat',
      'Basic Google Maps & contact details',
      'Ready in 1 Week',
    ],
    note: 'Note: Client covers domain registration (approx. KSh 1,000)',
    message: "Hi! I'm interested in the KSh 10,000 Digital Business Card package for my business.",
  },
  {
    label: 'Package 2',
    title: 'The "Essential Growth"',
    popular: true,
    blurb: 'Perfect for businesses that need space to showcase a portfolio of work, standard packages, or distinct services.',
    price: 'KSh 20,000',
    priceNote: 'One-Time Development Fee',
    description: 'A complete multi-page website that allows you to deep-dive into what makes your business special, display high-quality galleries of your work, and structure your service options clearly.',
    features: [
      'Up to 4 Dedicated Pages (Home, About, Gallery, Contact)',
      'Everything included in the KSh 10k tier',
      'Interactive photo galleries or pricing tables',
      'Advanced contact & quote request forms',
      'Basic on-page SEO setup for Google visibility',
      'Ready in 2-3 Weeks',
    ],
    message: "Hi! I'm interested in the KSh 20,000 Essential Growth package for my business.",
  },
  {
    label: 'Package 3',
    title: 'The "Smart Business" System',
    blurb: 'Perfect for businesses looking to automate bookings, securely collect client data, or run a custom portal.',
    price: 'KSh 35,000',
    priceNote: 'One-Time Development Fee',
    description: 'A high-performance web application backed by a secure cloud database. Ideal if you want to store customer registrations, manage automated booking requests, or display dynamic business data.',
    features: [
      '5+ Pages with Secure Cloud Database Integration',
      'Everything included in the KSh 20k tier',
      'Custom booking request or client sign-up management',
      'Secure database setup for client interactions',
      'M-Pesa integration',
      '14 Days of post-launch technical support',
      'Ready in 3-5 Weeks',
    ],
    message: "Hi! I'm interested in the KSh 35,000 Smart Business System package for my business.",
  },
]

const enterpriseFeatures = [
  'Custom industry architecture',
  'Supabase database engineering',
  'API integrations (M-Pesa, CRM)',
  'Advanced semantic SEO',
  'Formal SLA & priority support',
]

const steps = [
  { title: '1. Choose Your Tier', text: 'Select the package that fits your current business scale.' },
  { title: '2. Send Your Materials', text: 'Drop your logo, photos, and basic business details over WhatsApp or email.' },
  { title: '3. Launch & Scale', text: 'I handle the entire build and deployment. Within days, your business is officially live and ready for customers.' },
]

const maintenance = [
  {
    label: 'Maintenance 1',
    title: 'The Basic Care Plan',
    blurb: 'Small local landing pages (The 5k sites)',
    price: 'KSh 2,500',
    features: [
      'Monthly security checks & database backups',
      'Small content updates (phone number, price, announcements)',
      'Hosting monitoring (keeping your site live)',
    ],
  },
  {
    label: 'Maintenance 2',
    title: 'The Growth Support Plan',
    blurb: 'Active businesses with database systems (Supabase users)',
    price: 'KSh 5,000',
    features: [
      'Everything in Basic Care',
      'Up to 2 hours of dedicated dev time per month',
      'Database optimization & account management checks',
      'Priority support (24-hour response time)',
    ],
  },
]

// Answer-first wording: the first sentence stands alone as the answer (for snippets and AI answers).
// Prices and timelines mirror the packages above — update both together.
const faqs = [
  {
    question: "What services does Byma Solutions offer?",
    answer: "Byma Solutions offers three services: web development, mobile app development, and UI/UX design. Websites and web apps are built with React, TypeScript, and TailwindCSS; mobile apps for iOS and Android with Flutter and Dart; and interfaces and design systems in Figma."
  },
  {
    question: "How much does a website cost with Byma Solutions?",
    answer: "Websites start at KSh 10,000 for a one-page site, KSh 20,000 for a site of up to 4 pages, and KSh 35,000 for a web app with a cloud database and M-Pesa integration. Each is a one-time development fee; domain registration (about KSh 1,000) is paid by the client. Larger systems are quoted individually."
  },
  {
    question: "How long does it take to build a website?",
    answer: "A one-page site is ready in about 1 week, a multi-page site in 2–3 weeks, and a database-backed web app in 3–5 weeks."
  },
  {
    question: "Does Byma Solutions offer website maintenance?",
    answer: "Yes. The Basic Care Plan (KSh 2,500 per month) covers security checks, backups, small content updates, and hosting monitoring. The Growth Support Plan (KSh 5,000 per month) adds up to 2 hours of development time a month and priority support with a 24-hour response time."
  },
  {
    question: "Where is Byma Solutions based?",
    answer: "Byma Solutions is based in Nairobi, Kenya, and works with businesses across Kenya. Projects are coordinated over WhatsApp and email."
  },
  {
    question: "What technical stack does Byma Solutions use?",
    answer: "Byma Solutions builds with React, TypeScript, JavaScript, TailwindCSS, Flutter, Dart, Firebase, Supabase, and SQL, and designs in Figma."
  },
  {
    question: "How does Byma Solutions make websites fast and easy to find on Google and AI search?",
    answer: "Every page is pre-rendered to static HTML with structured data (JSON-LD), so Google and AI assistants can read it without running JavaScript. Sites also use semantic HTML, small bundles, and an llms.txt summary for AI crawlers."
  },
  {
    question: "Is Byma Solutions available for freelance or full-time work?",
    answer: "Yes. Byma Solutions takes on freelance projects and consulting, and is open to select full-time roles. Get in touch on WhatsApp or LinkedIn to discuss details."
  }
]

const servicesSchema = graph(
  organization,
  webPage('WebPage', '/Services', 'Services & Pricing — Byma Solutions', 'Web development, mobile app development, and UI/UX design services from Byma Solutions in Nairobi, with fixed website packages from KSh 10,000.'),
  ...services.map((s) => ({
    '@type': 'Service',
    name: s.title,
    description: s.text,
    serviceType: s.title,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Kenya' },
  })),
  {
    '@type': 'OfferCatalog',
    name: 'Website packages',
    itemListElement: packages.map((p) => ({
      '@type': 'Offer',
      name: p.title.replace(/"/g, ''),
      description: p.description,
      price: p.price.replace(/[^0-9]/g, ''),
      priceCurrency: 'KES',
      seller: { '@id': ORG_ID },
    })),
  },
  {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  },
  breadcrumb([{ name: 'Services', path: '/Services' }]),
)

const badge =
  'absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-accent-ink'

function CheckList({ items }) {
  return (
    <ul className='flex flex-col gap-3 text-sm text-muted'>
      {items.map((item) => (
        <li key={item} className='flex gap-2'>
          <span className='text-accent' aria-hidden='true'>✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function SectionIntro({ id, eyebrow, title, children }) {
  return (
    <div className='mx-auto mb-12 max-w-2xl text-center'>
      <p className='mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent'>{eyebrow}</p>
      <h2 id={id} className='font-display text-2xl font-semibold tracking-tight sm:text-4xl'>{title}</h2>
      {children && <p className='mt-4 leading-relaxed text-muted'>{children}</p>}
    </div>
  )
}

function FAQItem({ id, question, answer, isOpen, onClick }) {
  return (
    <div className='border-b border-line'>
      <h3>
        <button
          type='button'
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className='flex min-h-11 w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-medium text-fg hover:text-accent focus-visible:outline-2 focus-visible:outline-accent'
        >
          <span>{question}</span>
          <span
            aria-hidden='true'
            className={`text-xl text-accent transition-transform ${isOpen ? 'rotate-45' : ''}`}
          >
            ＋
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role='region'
        aria-labelledby={`${id}-button`}
        className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className='overflow-hidden'>
          <p className='pb-5 text-sm leading-relaxed text-muted'>{answer}</p>
        </div>
      </div>
    </div>
  )
}

function Services() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null)
  const [showProposalModal, setShowProposalModal] = useState(false)

  return (
    <PageShell>
      <SEO
        path='/Services'
        title="Services & Capabilities"
        description="Explore the range of design and engineering services offered by Byma. From responsive web development (React/TypeScript) to mobile applications (Flutter) and UI/UX design."
        keywords="Web Development, React developer, Flutter app development, UI/UX Design, Figma, Freelance developer, Nairobi, Kenya"
        schemaJson={servicesSchema}
      />

      <PageHeading
        eyebrow='What we build'
        title={<>Digital products <span className='text-accent'>crafted</span> with precision</>}
      >
        Byma specializes in building pixel-perfect interfaces, scalable systems, and elegant solutions.
        From concept to launch—clean code, thoughtful design, measurable impact.
      </PageHeading>

      {/* Capabilities */}
      <Reveal as='section' aria-label='Capabilities' className='border-b border-line'>
        <div className='mx-auto max-w-6xl px-5 py-16 sm:py-20'>
          <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {services.map((s) => {
              const Icon = s.icon
              return (
                <li key={s.title}>
                  <article className='flex h-full flex-col rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent'>
                    <Icon className='mb-4 text-accent' size={26} aria-hidden='true' />
                    <h2 className='mb-2 font-display text-xl font-medium'>{s.title}</h2>
                    <p className='mb-5 text-sm leading-relaxed text-muted'>{s.text}</p>
                    <div className='mb-5 flex-1'>
                      <CheckList items={s.points} />
                    </div>
                    {s.to && (
                      <Link
                        to={s.to}
                        className='inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-accent'
                      >
                        View projects <FaArrowRight size={12} aria-hidden='true' />
                        <span className='sr-only'> — {s.title}</span>
                      </Link>
                    )}
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </Reveal>

      {/* Pricing */}
      <Reveal as='section' aria-labelledby='pricing-title' className='border-b border-line'>
        <div className='mx-auto max-w-6xl px-5 py-16 sm:py-20'>
          <SectionIntro id='pricing-title' eyebrow='Pricing & packages' title='Streamlined Digital Solutions for Your Business'>
            No confusing tech talk. No hidden hourly fees. Just beautiful, functional websites built to help your local business grow and look professional online.
          </SectionIntro>

          <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {packages.map((p) => (
              <li key={p.label}>
                <article
                  className={`relative flex h-full flex-col rounded-lg border bg-surface p-7 ${p.popular ? 'border-accent' : 'border-line'}`}
                >
                  {p.popular && <span className={badge}>Most popular</span>}
                  <p className='mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent'>{p.label}</p>
                  <h3 className='mb-2 font-display text-xl font-medium'>{p.title}</h3>
                  <p className='mb-5 text-sm leading-relaxed text-muted'>{p.blurb}</p>
                  <p className='mb-1 font-display text-3xl font-semibold'>{p.price}</p>
                  <p className='mb-5 text-xs text-muted'>{p.priceNote}</p>
                  <p className='mb-5 text-sm leading-relaxed text-muted'>{p.description}</p>
                  <div className='mb-6 flex-1'>
                    <CheckList items={p.features} />
                  </div>
                  {p.note && <p className='mb-5 text-xs italic text-muted'>{p.note}</p>}
                  <a
                    href={whatsappLink(p.message)}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${p.popular ? btnPrimary : btnSecondary} w-full`}
                  >
                    Start a chat
                    <span className='sr-only'> about {p.title}</span>
                  </a>
                </article>
              </li>
            ))}
          </ul>

          {/* Enterprise */}
          <article className='relative mt-14 grid gap-10 rounded-lg border border-accent bg-surface p-7 sm:p-8 lg:grid-cols-2'>
            <span className={badge}>Enterprise</span>
            <div>
              <p className='mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent'>Package 4</p>
              <h3 className='mb-4 font-display text-2xl font-medium'>Corporate &amp; Custom Systems</h3>
              <p className='mb-6 leading-relaxed text-muted'>
                Bespoke enterprise solution engineered for high-performance infrastructure, advanced security, and seamless integrations tailored to your industry prestige.
              </p>
              <p className='font-display text-2xl font-semibold'>Custom Quote</p>
              <p className='mt-1 text-sm text-muted'>Via Detailed Proposal</p>
            </div>
            <div className='flex flex-col gap-6'>
              <div>
                <p className='mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted'>Includes</p>
                <CheckList items={enterpriseFeatures} />
              </div>
              <button type='button' onClick={() => setShowProposalModal(true)} className={btnSecondary}>
                Request proposal
              </button>
              <ProposalRequestModal isOpen={showProposalModal} onClose={() => setShowProposalModal(false)} />
            </div>
          </article>

          {/* How it works */}
          <div className='mt-14 rounded-lg border border-line bg-bg p-7 sm:p-10'>
            <h3 className='mb-6 font-display text-2xl font-medium'>How it works</h3>
            <ol className='grid gap-8 md:grid-cols-3'>
              {steps.map((s) => (
                <li key={s.title}>
                  <h4 className='mb-2 font-medium text-accent'>{s.title}</h4>
                  <p className='text-sm leading-relaxed text-muted'>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>

      {/* Maintenance */}
      <Reveal as='section' aria-labelledby='care-title' className='border-b border-line'>
        <div className='mx-auto max-w-6xl px-5 py-16 sm:py-20'>
          <SectionIntro id='care-title' eyebrow='Ongoing support' title='Ongoing Website Care & Peace-of-Mind'>
            Your website is an investment. We keep it fast, secure, and completely up to date so you can focus on running your business.
          </SectionIntro>
          <ul className='grid gap-6 md:grid-cols-2'>
            {maintenance.map((m) => (
              <li key={m.label}>
                <article className='flex h-full flex-col rounded-lg border border-line bg-surface p-7'>
                  <p className='mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent'>{m.label}</p>
                  <h3 className='mb-2 font-display text-xl font-medium'>{m.title}</h3>
                  <p className='mb-5 text-sm text-muted'>{m.blurb}</p>
                  <p className='mb-1 font-display text-3xl font-semibold'>{m.price}</p>
                  <p className='mb-5 text-xs text-muted'>/ month</p>
                  <CheckList items={m.features} />
                </article>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* FAQ */}
      <Reveal as='section' aria-labelledby='faq-title'>
        <div className='mx-auto max-w-3xl px-5 py-16 sm:py-20'>
          <p className='mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent'>FAQ / Answers</p>
          <h2 id='faq-title' className='mb-8 font-display text-2xl font-semibold tracking-tight sm:text-3xl'>
            Frequently Asked <span className='text-accent'>Questions</span>
          </h2>
          <div className='border-t border-line'>
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                id={`faq-${index}`}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQIndex === index}
                onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </PageShell>
  )
}

export default Services
