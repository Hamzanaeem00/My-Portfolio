import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../../Pages/About/About'
import Projects from '../../../Pages/Projects/Projects'
import Skills from '../../../Pages/Skills/Skills'
import Exprience from '../../../Pages/Experience/Exprience'
import Contact from '../../../Pages/Contact/Contact'



const Routing = () => {
  return (
    <div>
       <Routes>
            <Route path="/" element = {<About />} ></Route>
            <Route path="/projects" element = {<Projects />} ></Route>
            <Route path="/skills" element = {<Skills />} ></Route>
            <Route path="/experience" element = {<Exprience />} ></Route>
            <Route path="/contact" element = {<Contact />} ></Route>

        </Routes>
    </div>
  )
}

export default Routing

