import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import { CategoryContext } from '../Products/CategoryProvider'
import { categoryImg } from '../DataPass/Data'




export default function Header() {
    const { category,setSubcategory } = useContext(CategoryContext);
  return (
    <>
      <Navbar categories={category} />
      <ul className=' lg:flex hidden justify-around items-center bg-[#49a6a2] py-[0.5px] text-white font-Poppins font-normal text-lg border-b-2'>

        <li className='pe-24 py-2 border-r-2 border-white'><Link to={'/categories'}>
          <span>
            <svg className="inline h-6 w-7  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </span>
          See All</Link></li>
        {category.slice(0,7).map((i,index)=>(
       <Link key={i.name} to={i.link} onClick={() => setSubcategory(i.subcategories? i.subcategories : [])}> <li  className='hover:underline hover:scale-105'>{i.name}</li></Link>
        ))}
        
      </ul>
    </>
  )
}
