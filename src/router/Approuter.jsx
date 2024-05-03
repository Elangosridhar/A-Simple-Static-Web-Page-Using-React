import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from '../Module/Home/Home'
import Blog from '../Component/Blog/Blog'
import About from '../Component/About/About'
import Contact from '../Component/Contact/Contact'
import Allfile from '../Main/Allfile'

export default function Approuter() {
  return (
    <BrowserRouter>
     <Routes>
         <Route element={<Allfile/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
            <Route path='blog' element={<Blog/>}></Route>
         </Route>
     </Routes>
    </BrowserRouter>
  )
}
