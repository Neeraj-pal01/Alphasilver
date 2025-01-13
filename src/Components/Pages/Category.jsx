import React, { useContext } from 'react'

import { categoryImg, categoryVariety } from '../DataPass/Data'
import {  Link } from 'react-router-dom'
import { CategoryContext } from '../Products/CategoryProvider'

export default function Category() {
  const { category } = useContext(CategoryContext);
    console.log("data is",category)
    console.log("data [0]",category[0])
  const {  setSubcategory } = useContext(CategoryContext);
  // const categoryImg1 = [...categoryImg, { img: '../assests/categoryPageImg/ayurved.png', name: 'Ayurvedic Products' }, { img: '../assests/categoryPageImg/babyCare.png', name: 'Baby Care' }]
  return (
    <>
      <div>
        <h1 className="pt-10 pb-4 text-gray-700 text-center text-3xl font-semibold">Category</h1>
        <div className="lg:w-4/5 m-auto shadow-lg border-t-[0.5px] border-gray-200">
          <div className="text-black w-full py-5 flex font-medium">
            <div className="grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full">
              {category.map((i,index) => {
                
                return (
                  <div
                    key={i.name}
                    className="mx-auto text-center justify-between justify-items-center my-10"
                  >
                     <Link
                      to={i.link}
                    >
                      <img onClick={() => setSubcategory(i.subcategories)}
                        className="hover:scale-105 max-w-48 w-32 h-32 rounded-full border-[3px] object-cover border-[#14949d]"
                        src={i.img}
                        alt={i.name}
                      />
                    </Link>
                    <p>{i.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
