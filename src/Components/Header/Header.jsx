import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

export default function Header() {
  return (
    <>
      <Navbar />
      <ul className=' lg:flex hidden justify-around items-center bg-[#49a6a2] py-[0.5px] text-white font-Poppins font-normal text-lg border-b-2'>

        <li className='pe-24 py-2 border-r-2 border-white'><Link to={'/categories'}>
          <span>
            <svg className="inline h-6 w-7  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </span>
          See All</Link></li>
        <li className='hover:underline hover:scale-105'><Link to={'products/category/clothing'}>Clothing</Link></li>
        <li className='hover:underline hover:scale-105'><Link to={'products/category/electronics'}>Electronics</Link></li>
        <li className='hover:underline hover:scale-105'><Link to={'products/category/home-kitchen'}>Home & Kitchen</Link></li>
        <li className='hover:underline hover:scale-105'><Link to={'products/category/beauty-personal-care'}>Beauty & Personal Care</Link></li>
        <li className='hover:underline hover:scale-105'><Link to={'products/category/toys-games'}>Toys & Games</Link></li>
        <li className='hover:underline hover:scale-105'><Link to={'products/category/grocery-gourmet-food'}>Grocery & Gourmet Food</Link></li>
        <li className='hover:underline hover:scale-105'><Link to={'products/category/books'}> Books</Link></li>
      </ul>
    </>
  )
}
