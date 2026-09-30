import React from 'react'
import PageHeading from './layout/PageHeading'

function PIntro() {
  return (
    <PageHeading eyebrow='Portfolio' title={<>Work from <span className='text-accent'>Byma</span></>}>
      A showcase of projects built with intentionality. Each one represents careful planning, thoughtful design,
      and clean execution, delivering real solutions to real problems.
    </PageHeading>
  )
}

export default PIntro
