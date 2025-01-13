import React from 'react'
import ProductsNav from './ProductsNav'
import { useLocation } from 'react-router-dom';

export default function Details() {
  const location = useLocation();
  const { name, img, price, discount} = location.state
  console.log(name)
  return (
    <>
        {/* <ProductsNav name='Products Listing'  /> */}
        <div className='text-4xl min-h-40 text-center '>

        <h1 className=''> name : {name}</h1>
        <p>price : {price}</p>
        <p>discount : {discount}</p>
        <img src={img} alt="" />
        </div>

    </>
  )
}
