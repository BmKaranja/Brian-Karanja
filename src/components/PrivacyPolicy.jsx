import React from 'react'
import SEO from './SEO'
import { breadcrumb, graph, webPage } from '../seo/schema'
import PageShell from './layout/PageShell'
import PageHeading from './layout/PageHeading'

const privacySchema = graph(
  webPage('WebPage', '/privacy-policy', 'Privacy Policy', 'How Byma Solutions collects, uses, and protects your data.'),
  breadcrumb([{ name: 'Privacy Policy', path: '/privacy-policy' }]),
)

const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-')

function Section({ title, children }) {
  const id = `policy-${slug(title)}`
  return (
    <section aria-labelledby={id} className='mb-10'>
      <h2 id={id} className='mb-3.5 flex items-center gap-2.5 font-display text-xl font-semibold'>
        <span className='text-accent' aria-hidden='true'>//</span> {title}
      </h2>
      <div className='leading-relaxed text-muted'>{children}</div>
    </section>
  )
}

function PrivacyPolicy() {
  return (
    <PageShell>
      <SEO
        path='/privacy-policy'
        title="Privacy Policy"
        description="Privacy Policy for Byma Solutions — how Byma Solutions collects, uses, and protects your data."
        keywords="Privacy Policy, Byma Solutions, data protection"
        schemaJson={privacySchema}
      />

      <PageHeading eyebrow='Legal' title={<>Privacy <span className='text-accent'>Policy</span></>}>
        Last updated: June 25, 2026
      </PageHeading>

      <div className='mx-auto max-w-3xl px-5 py-14'>

        <Section title="Who We Are">
          <p>
            This website ("Byma Solutions") is operated by Byma Solutions, a creative development
            and design studio based in Nairobi, Kenya. For any privacy-related questions, you can
            reach out via:
          </p>
          <ul className='mt-3 flex flex-col gap-1.5'>
            <li><span className='text-accent'>Email:</span> bymasolns@gmail.com</li>
            <li><span className='text-accent'>Phone / WhatsApp:</span> +254 773 852 135</li>
          </ul>
        </Section>

        <Section title="What Information We Collect">
          <p>We collect information in the following ways:</p>
          <ul className='mt-3 flex flex-col gap-2.5'>
            <li><span className='text-accent'>✓</span> Messages sent via WhatsApp click-to-chat links</li>
            <li><span className='text-accent'>✓</span> Details submitted through our Proposal Request form (company/brand name, project type, estimated budget, timeline, and project description), which are formatted into a message and sent to us via WhatsApp click-to-chat — this data is not stored on our servers or any database, it is only transmitted directly to WhatsApp on submission</li>
            <li><span className='text-accent'>✓</span> Usage data collected automatically via Google Analytics (pages visited, device type, approximate location, time on site)</li>
            <li><span className='text-accent'>✓</span> For clients using custom systems we build (e.g. booking platforms), data is stored securely via Supabase under that specific project's own terms</li>
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
            
              <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className='text-accent underline underline-offset-2 hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-accent'
            >
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
      </div>
    </PageShell>
  )
}

export default PrivacyPolicy
