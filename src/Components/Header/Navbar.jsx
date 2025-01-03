import React from 'react'
import { NavLink } from 'react-router-dom'

// import searchIcon from '../assests/Icons/search.png'

export default function Navbar() {
  return (
    <>
      <div className='p-3 flex justify-between w-full items-center'>
        <div className='flex items-center lg:w-auto w-1/2 justify-between'>
          <div className='lg:hidden inline'>
          <svg className="inline h-6 w-7  text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          </div>
          <img className='max-w-32' src="../assests/LogoImg/Logo.png" alt="" />
          <input className='lg:inline hidden ml-5 font-medium font-Poppins rounded-xl pl-4 py-2 border border-gray-300 pe-96' placeholder='Search for the products' type="text" />
          <span className='absolute lg:inline hidden top-6 left-1/3 pl-36'>{/* searchIcon*/}
            <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>

        <div className='flex gap-3 pe-10 items-center'>
          <button className='lg:block hidden border font-medium border-[#14949d] text-[#14949d] font-Poppins,sans-serif rounded-md p-1 hover:bg-[#14949d] hover:text-white'><NavLink to='Login'>Login</NavLink></button>
          <span className='lg:inline hidden'>
            <svg className="h-6 w-6 text-[#14949d] " fill="none" viewBox="0 0 24 24" stroke="#14949d">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </span>
          <span>
            <svg className="h-6 w-6 text-[#14949d] " fill="none" viewBox="0 0 24 24" stroke="#14949d">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </span>
        </div>
      </div>
    </>
  )
}
