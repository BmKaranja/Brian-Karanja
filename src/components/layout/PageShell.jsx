import React from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

function PageShell({ children }) {
  return (
    <div className='min-h-screen bg-bg font-sans text-fg'>
      <SiteHeader />
      <main id='main'>{children}</main>
      <SiteFooter />
    </div>
  )
}

export default PageShell
