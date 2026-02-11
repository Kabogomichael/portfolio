import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import type { Mode } from '../components/NavBar'

function AppRoutes({darkMode}:Mode) {
  return (
    <Routes>
        <Route path='/' element={<Hero  darkMode={darkMode}   />} />
        <Route path='about' element={<About   darkMode={darkMode}  />} />
        <Route path='contact' element={<Contact  darkMode={darkMode}   />} />
        <Route path='projects' element={<Projects  darkMode={darkMode}  />} />
        <Route path='skills' element={<Skills  darkMode={darkMode}    />} />
    </Routes>
  )
}

export default AppRoutes