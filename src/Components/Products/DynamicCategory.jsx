import React, { useContext } from 'react';
import { useParams } from "react-router-dom";


import { Link } from 'react-router-dom';
import { CategoryContext } from '../Products/CategoryProvider';
import { categoryVariety } from '../DataPass/Data';


export default function DynamicCategory() {
  const { categoryState } = useContext(CategoryContext);


  return (
    <>
      <div className="bg-blue-300 h-24 flex items-center mb-10">
        <div className="w-3/4 m-auto">
          <div className="flex justify-between">
            <h2 className="text-xl font-sans text-gray-700 font-semibold">{categoryState[0].toUpperCase()}</h2>
            <p className="text-sm">
              <Link to={'/home'}>Home</Link>/ <Link to={'/categories'}>Category</Link>/ <span className="text-gray-700">Products</span>
            </p>
          </div>
        </div>
      </div>

      <div className='w-3/4 h-full m-auto border-[-0.5px] border-gray-300 shadow-md py-4 mb-10'>
        <div className=' m-10'>
          <div className='m-10'>
            <h3 className='text-2xl font-semibold'>{categoryState[0]}  Category</h3>
          </div>
          <div className='flex border-[-0.7px] border-gray-300 shadow-md gap-10 p-5'>

            {categoryVariety[categoryState[1]].map((i) => (
              <div key={i.name} className=" flex flex-col text-center" >
                <Link to={i.link}>
                  <img
                    className="hover:scale-105 max-w-48 w-32 h-32 rounded-full border-[3px] object-cover border-[#14949d]"
                    src={i.img}
                    alt={i.name}
                  />
                </Link>
                <p>{i.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
