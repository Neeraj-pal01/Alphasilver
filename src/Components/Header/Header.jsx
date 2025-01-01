import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

export default function Header() {
  return (
    <>
      <Navbar />
      <ul className=' lg:flex hidden justify-around items-center bg-[#49a6a2] py-1 text-white font-Poppins font-normal text-lg '>

        <li className='pe-24 border-r-2 border-white'><Link>
        <span>
          <svg class="inline h-6 w-7  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </span>
          See All</Link></li>
        <li><Link>Clothing</Link></li>
        <li><Link>Electronics</Link></li>
        <li><Link>Home & Kitchen</Link></li>
        <li><Link>Beauty & Personal Care</Link></li>
        <li><Link>Toys & Games</Link></li>
        <li><Link>Grocery & Gourmet Food</Link></li>
        <li><Link> Books</Link></li>
      </ul>
    </>
  )
}
