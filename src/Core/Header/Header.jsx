import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
   <header>
      <nav className=' max-w-[70rem] w-full px-4 py-6 mx-auto flex justify-between'>
         <div>
           <a href='' className=' bg-clip-text text-transparent bg-gradient-to-r from-gray-500  to-black text-2xl font-bold'>Lo<span className=' bg-clip-text font-bold text-transparent bg-gradient-to-r from-black to-gray-500' >go</span></a>  
         </div>
         <div className=' hidden md:flex gap-5'>
           <Link to={'/'} className='text-gray-400 text-sm hover:text-indigo-500 '>Home</Link>
           <Link to={'/about'}  href="" className=' text-gray-400 text-sm hover:text-indigo-500 '>About Us</Link>
           <Link to={"/contact"}  className=' text-gray-400 text-sm hover:text-indigo-500 '>Contact Us</Link>
           <Link to={"/blog"}  className=' text-gray-400 text-sm hover:text-indigo-500 '>Blog</Link>
         </div>
         <div className=' md:hidden lg:hidden'>
           <FontAwesomeIcon icon={faBars} className=" text-indigo-500" />
        </div>
      </nav>
   </header>
  )
}
