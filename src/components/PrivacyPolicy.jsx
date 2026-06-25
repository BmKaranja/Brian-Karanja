import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import SEO from './SEO'

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy",
  "url": "https://brian-karanja.onrender.com/privacy-policy",
  "publisher": {
    "@type": "Person",
    "name": "Brian Karanja Maina"
  }
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{
        fontFamily: "'Lexend', sans-serif",
        fontSize: '22px',
        fontWeight: 600,
        color: '#fff',
        marginBottom: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>
        <span style={{ color: '#00ff00' }}>//</span> {title}
      </h2>
      <div style={{ color: '#888', fontSize: '15px', lineHeight: '1.8' }}>
        {children}
      </div>
    </div>
  )
}

function PrivacyPolicy() {
  return (
    <div className='flex flex-col gap-10' style={{ background: 'var(--background-color)', minHeight: '100vh' }}>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Byma — how Brian Karanja Maina collects, uses, and protects your data."
        keywords="Privacy Policy, Byma, Brian Karanja Maina, data protection"
        schemaJson={privacySchema}
      />
      <NavBar />

      <section style={{ padding: '0 5vw' }}>
        <hr className='text-gray-600' />
        <article style={{ marginTop: '40px', marginBottom: '20px' }}>
          <p className='font mb-2' id='cap'>LEGAL</p>
          <h1 style={{
            fontFamily: "'Lexend', sans-serif",
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            color: '#fff',
          }}>
            Privacy <span className='color'>Policy</span>
          </h1>
          <p style={{ color: '#666', fontSize: '13px', fontFamily: 'monospace', marginTop: '10px' }}>
            Last updated: June 25, 2026
          </p>
        </article>
      </section>

      <section style={{ padding: '0 5vw 60px 5vw', maxWidth: '800px' }}>

        <Section title="Who We Are">
          <p>
            This website ("Byma") is operated by Brian Karanja Maina, a solo full-stack developer
            and designer based in Nairobi, Kenya. For any privacy-related questions, you can
            reach out via:
          </p>
          <ul style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li><span style={{ color: '#00ff00' }}>Email:</span> bymasolns@gmail.com</li>
            <li><span style={{ color: '#00ff00' }}>Phone / WhatsApp:</span> +254 773 852 135</li>
          </ul>
        </Section>

        <Section title="What Information We Collect">
          <p>We collect information in the following ways:</p>
          <ul style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><span style={{ color: '#00ff00' }}>✓</span> Messages sent via WhatsApp click-to-chat links</li>
            <li><span style={{ color: '#00ff00' }}>✓</span> Details submitted through our Proposal Request form (company/brand name, project type, estimated budget, timeline, and project description), which are formatted into a message and sent to us via WhatsApp click-to-chat — this data is not stored on our servers or any database, it is only transmitted directly to WhatsApp on submission</li>
            <li><span style={{ color: '#00ff00' }}>✓</span> Usage data collected automatically via Google Analytics (pages visited, device type, approximate location, time on site)</li>
            <li><span style={{ color: '#00ff00' }}>✓</span> For clients using custom systems we build (e.g. booking platforms), data is stored securely via Supabase under that specific project's own terms</li>
          </ul>
        </Section>

        <Section title="How We Use Your Information">
          <p>
            Information collected is used solely to respond to enquiries, scope and deliver quotes,
            manage active projects, and understand how visitors use this site so we can
            improve it. We do not sell or rent your personal data to third parties.
          </p>
        </Section>

        <Section title="Google Analytics">
          <p>
            This site uses Google Analytics to understand visitor behaviour. Google Analytics
            uses cookies and collects anonymised/aggregated usage data. You can opt out of
            Google Analytics tracking using the{' '}
            
              <a href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00ff00' }}>
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>
        </Section>

        <Section title="Data Storage & Security">
          <p>
            Client project data (where applicable) is stored using Supabase, a secure
            cloud database provider. Proposal request form details are not stored by us in any
            database — they pass directly to WhatsApp at the moment of submission. Reasonable
            technical measures are taken to protect your information, but no method of
            transmission over the internet is 100% secure.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p>
            We may communicate with you via WhatsApp (Meta) when you initiate contact
            through a "Start a Chat" link or submit our Proposal Request form. WhatsApp's
            own privacy policy governs how that platform handles your message data.
          </p>
        </Section>

        <Section title="Your Rights">
          <p>
            Under Kenya's Data Protection Act, 2019, you have the right to access,
            correct, or request deletion of your personal data held by us. To exercise
            these rights, contact us using the details above.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            This policy may be updated occasionally to reflect changes in how this site
            or its services operate. Continued use of the site after changes constitutes
            acceptance of the revised policy.
          </p>
        </Section>

      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default PrivacyPolicy