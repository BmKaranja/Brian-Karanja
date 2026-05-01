import React from 'react'
import NavBar from './NavBar'
import WorkLogCard from './WorkLogCard'
import Footer from './Footer'

const logdata=[
  {pb_date:'Date',title:'Project Title',description:'Project Description',link:'Project Link',image:'Project Image'},
  {pb_date:'Date',title:'Project Title',description:'Project Description',link:'Project Link',image:'Project Image'},
  {pb_date:'Date',title:'Project Title',description:'Project Description',link:'Project Link',image:'Project Image'},
  {pb_date:'Date',title:'Project Title',description:'Project Description',link:'Project Link',image:'Project Image'},
  {pb_date:'Date',title:'Project Title',description:'Project Description',link:'Project Link',image:'Project Image'},

]
function WorkLog() {
  return (
    <div className='flex flex-col gap-10 overflow-hidden'>
      <NavBar/>
      <section>
        <hr style={{width:'100vw'}} className='text-gray-600'></hr>
      </section>
      <section>
        <article  className='worklog-intro'>
        <h1>WORK LOG:</h1>
        <p className='mt-5 pr-100 pl-2 log-desc'>Welcome to the central repository of my technical journey. This space documents architectural decisions , system optimizations , and deep-dives into complex problem-solving. Its a living database of my work, where I share insights, challenges, and insights from my work.</p>
        </article>
      </section>
      <section className='log-cards'>
        {logdata.map((data, index)=>(
          <WorkLogCard key={index} {...data}/>
        ))}
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default WorkLog
