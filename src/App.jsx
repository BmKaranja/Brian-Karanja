import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import WorkLog from './components/WorkLog'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/WorkLog' element={<WorkLog/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/AboutMe' element={<AboutMe/>}></Route>
      </Routes>
    </div>
  )
}

export default App
