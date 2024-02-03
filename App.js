import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Education from './components/Education'
import Contact from './components/Contact'
import Home from './components/Home'




function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Intro></Intro>
      <Education></Education>
      <Contact></Contact>
  
    </div>
  )
}

export default App