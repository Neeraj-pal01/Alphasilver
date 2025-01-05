import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
export default function Footer() {
  return (
    <>
      <footer className='bg-[#1f2237] text-white font-Poppins'>

        <div className='flex items-center justify-evenly border-b border-gray-400 flex-wrap'>

          <div className='lg:w-auto w-full'>
            <img className='max-w-48 m-auto pt-7 lg:p-0 hover:scale-110' src="../assests/LogoImg/Logo.png" alt="" />
          </div>
          <div className='flex flex-col items-center gap-y-5 p-12'>
            <div className='self-start'>
              <h3 className='text-2xl font-semibold'>Get to know us</h3>
              <span className='w-16 pt-3 block border-b-2 border-[#14949d] '></span>
            </div>
            <ul className='grid grid-cols-2 items-center  gap-y-2 gap-x-20'>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/categories">
                <li>Category</li>
              </Link>
              <Link to="/products">
                <li>Products</li>
              </Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
              <Link to="/register">
                <li>Register</li>
              </Link>
              <Link to="/about-us">
                <li>About Us</li>
              </Link>
              <Link to="/contact-us">
                <li>Contact Us</li>
              </Link>
              <Link to="/sellers">
                <li>Sellers</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className='text-2xl font-semibold'>Connect with us</h3>

            <div className='list-none flex gap-5 pt-3'>
              <Link>
                <li className='rounded-full p-3  bg-blue-700'>
                  <svg className="h-5 w-5 " viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </li>
              </Link>
              <Link>
                <li className='rounded-full p-3  bg-[#14949d]'>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                </li>
              </Link>
              <Link>
                <li className='rounded-full p-3  bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500'>
                  <svg className="h-5 w-5 text-white " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </li>
              </Link>
              <Link>
                <li className='rounded-full p-3  bg-red-600'>
                  <svg className="h-5 w-5 text-white stroke-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                </li>
              </Link>
            </div>
            <div className='flex gap-5 pt-5'>
              <Link><img className='max-w-32 hover:scale-110' src="../assests/downloadImg/playStore.png" /></Link>
              <Link><img className='max-w-32 hover:scale-110' src="../assests/downloadImg/appStore.png" /></Link>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-evenly flex-wrap py-2'>
          <p className='text-center py-3'>Copyright © 2025, All Rights Reserved Alpha Platinum Private Limited</p>
          <div className='md:flex hidden gap-x-8 list-none '>
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/terms-conditions"}><li>Terms & Conditions</li></Link>
            <Link to={"/privacy-policy"}><li>Privacy Policy</li></Link>
            <Link to={"/about-us"}><li>About Us</li></Link>
            <Link to={"/contact-us"}><li>Contact Us</li></Link>
          </div>
        </div>

      </footer>
    </>
  )
}
