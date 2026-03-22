import React from 'react'
import NavBar from './NavBar'

function WorkLog() {
  return (
    <div className='flex flex-col gap-10'>
      <NavBar/>
      <section>
        <hr style={{width:'100vw'}} className='text-gray-600'></hr>
      </section>
      <section>
        <article  className='worklog-intro'>
        <p className='mt-5 pr-20' style={{color:'#00ff00'}}>Sysem Initiaized // Status : online</p>
        <h1>WORK LOG:</h1>
        <h2 style={{color:'#00ff00'}}>TERMINAL MODE</h2>
        </article>
        <article>
          <p>Last Update: </p>
        </article>
      </section>
    </div>
  )
}

export default WorkLog
