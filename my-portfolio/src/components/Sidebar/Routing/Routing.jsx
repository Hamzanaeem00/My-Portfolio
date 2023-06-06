import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from '../../../Pages/Projects/Projects'
import Skills from '../../../Pages/Skills/Skills'
import Exprience from '../../../Pages/Experience/Exprience'
import Contact from '../../../Pages/Contact/Contact'
import Home from '../../../Pages/Home/Home'
import About from '../../../Pages/About/About'



const Routing = () => {
  return (
    <div>
       <Routes>
            <Route path="/" element = {<Home />} ></Route>
            <Route path="/projects" element = {<Projects />} ></Route>
            <Route path="/skills" element = {<Skills />} ></Route>
            <Route path="/experience" element = {<Exprience />} ></Route>
            <Route path="/contact" element = {<Contact />} ></Route>
            <Route path="/about" element = {<About />} ></Route>


        </Routes>
    </div>
  )
}

export default Routing

