import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom';
import '../styles.css'; 
const NavBar = () => {

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -250; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const scrollWidthOffset2 = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const scrollWidthOffset3 = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -350; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  return (
    <BrowserRouter>
    <div id='#' className='navBar'>
      <header class="text-white-400 body-font fixed w-full z-50 bg-white ">
        <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <Link to='#' class="flex title-font font-medium items-center text-black md:mb-0">
            <span class="ml-28 font-medium text-xl">Design Your Dream</span>
            </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
             <Link to='#projects' scroll={el => scrollWidthOffset2(el)} class="mr-5 font-display max-w-sm text-l font-bold leading-tight">
              <span className='link link-underline link-underline-black text-black'>
                Projects
              </span>
            </Link> 
            <Link to='#services' scroll={el => scrollWidthOffset2(el)} class="mr-5 font-display max-w-sm text-l font-bold leading-tight">
              <span className='link link-underline link-underline-black text-black'>
                Services
              </span>
            </Link>
            <Link to='#features' scroll={el => scrollWidthOffset(el)} class="mr-5 font-display max-w-sm text-l font-bold leading-tight">
              <span className='link link-underline link-underline-black text-black'>
                Features
              </span>
            </Link>
            <Link to='#testimonials' smooth scroll={el => scrollWidthOffset3(el)} class="mr-5 font-display max-w-sm text-l font-bold leading-tight">
              <span className='link link-underline link-underline-black text-black'>
                Testimonials
              </span>
            </Link>
            <Link to='#about' class="mr-5 font-display max-w-sm text-l font-bold leading-tight">
              <span className='link link-underline link-underline-black text-black'>
                About Us
              </span>
            </Link>
          </nav>

        </div>
      </header>


    </div> </BrowserRouter>
  )
}

export default NavBar