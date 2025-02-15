import React, { useContext } from 'react'
import "./Home.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import { CategoryContext } from '../Products/CategoryProvider';


import { bannerImg, productImg1, settings, settings1 } from '../DataPass/Data'

export default function Home() {
  const { category,setSubcategory  } = useContext(CategoryContext);
  const{  setProducts} = useContext(CategoryContext);
  


  const [index, setIndex] = React.useState(0)
  const Previous = () => {
    if (index === 0) {
      setIndex(bannerImg.length - 1)
    } else {
      setIndex(index - 1)
    }
  }
  const Next = () => {
    if (index === bannerImg.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }

  }
  
  return (
    <>

      {/* Banner Section */}
      <div className='flex relative overflow-hidden  '>
        <div className="">
          <img className='' src={bannerImg[index]} alt="" />
        </div>

        <div className='flex h-full w-full items-center justify-between absolute'>
          <button onClick={Previous} className='bg-white'>
            <svg className="h-10 w-10 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button onClick={Next} className='bg-white'>
            <svg className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Category Section */}
      <section className='category border-b-[1px] border-gray-300 py-1'>
        <h2 className='text-center font-Poppins text-4xl py-3 object-contain'>Category</h2>

        <div className='text-black w-full m-auto py-5'>
          <Slider {...settings}>
            {category.map((i, index) => (

              <div key={i.name} className=' '>
                <div className='flex justify-center items-center'>
                  <Link to={i.link} onClick={() => setSubcategory(i.subcategories? i.subcategories : [])} >
                    <img className='rounded-full object-cover border-2 border-blue-500' src={i.img} alt="" />
                  </Link>
                </div>
                <div className='flex justify-center text-lg'>
                  <p >{i.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section>
        {/* new Products section */}

        <div className='lg:pl-12 bg-white pt-12 pb-5 shadow border-b border-gray-300 text-nowrap'>
          <h2 className=' font-Poppins font-medium text-4xl '>New Products</h2>
          <div className='flex justify-between mb-6 border-b border-gray-300'>

            <span className='p-1 text-gray-500'>special</span>
            <Link to={'products/section/1/new-product'}>
              <span className='text-[#14949d] font-medium p-1 pe-6'>view more</span>
            </Link>
          </div>


          <Slider {...settings1}>
            {category[4]?.products?.map((j) => (
              <div key={j.name} className='flex justify-center items-center group'>
                <div className=' text-center border border-gray-300 rounded-md '>
                  <div className='flex justify-center items-center h-64'>
                    <span className='text-xs self-start  bg-[#14949d] p-1 rounded-r-md text-white relative left-0 z-10 top-0'>{j.discount} OFF</span>
                    <Link to={j.link} state={{ name: j.name, img: j.img, price: j.price, discount: j.discount }}>
                      <img className='max-w-48 ' src={j.img} alt="" />
                    </Link>
                    <span className='self-start ml-2 m-1 p-1'>
                      <svg className="h-6 w-6 text-gray-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </span>
                  </div>
                  <div className='flex-col  justify text-lg font-normal items-center bg-white group-hover:bottom-12 transition-transform duration-300 ease-in-out relative z-10 w-full  bottom-10'>
                    <p className='group-hover:text-[#14949d] text-2xl'>{j.name}</p>
                    <p className='p-3'>{j.price}</p>
                    <button className='bg-[#14949d] text-white p-2 rounded-md text-xs  items-center '>
                      <svg className=" inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* 2nd row */}
        <div className=' flex justify-center py-8 border-b border-gray-300 mb-12 shadow-md flex-wrap lg:flex-nowrap text-nowrap'>
          {productImg1.map((j) => (
            <div key={j.name} className='flex justify-center items-center group' >
              <div className=' text-center lg:border-[0.5px] border-gray-300 rounded-md '>
                <div className='flex justify-center items-center h-64'>
                  <span className='text-xs self-start  bg-[#14949d] p-1 rounded-r-md text-white relative left-0 z-10 top-0'>{j.discount}</span>
                  <Link to={j.link1} state={{ name: j.name, img: j.img }} onClick={() => setProducts(j)}>
                  {console.log(j)}
                    <img className='object-contain max-w-44' src={j.img} alt={j.name} />
                  </Link>
                  <span className='self-start ml-2 m-1 p-1'>
                    <svg className="h-6 w-6 text-gray-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </span>
                </div>
                <div className='flex-col  justify text-lg font-normal items-center bg-white group-hover:bottom-12 transition-transform duration-300 ease-in-out relative z-10 w-full  bottom-10'>
                  <p className='group-hover:text-[#14949d] text-2xl'>{j.name}</p>
                  <p className='p-3'>{j.price}</p>
                  <button className='bg-[#14949d] text-white p-2 rounded-md text-xs  items-center '>
                    <svg className=" inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to Cart</button>
                </div>
              </div>
            </div>
          ))}

          <div className='p-5' >
            <p className='text-xl font-medium'> Offer</p>
            <p className=' text-gray-600'>Special offer</p>
            <p className='text-[#14949d] font-medium p-1'>View More</p>
          </div>

        </div>
      </section >


      {/* download section */}
      <section>
        <div className='mb-8 h-52 w-3/4 mx-auto border-[0.5px] border-gray-200 rounded-lg text-black shadow-xl hover:shadow-2xl'>
          <div className='flex justify-center items-center h-full'>
            <div className='text-white'><img src="https://alphasilver.productsalphawizz.com/uploads/booking.png" alt="" /></div>
            <div className='h-full flex flex-col justify-center text-sm font-medium'>
              <h2 className='text-3xl font-semibold'>Download App Now !</h2>
              <p>Use code <span className='font-semibold'>WELCOMEMMT</span> and get <span className='font-semibold'>FLAT 12% OFF*</span>on your first domestic flight booking</p>
            </div>
          </div>
        </div>
      </section>
      <section>


        {/* Our speciality */}
        <div className=' p-10 bg-[#49a6a2]'>
          <div className='flex justify-evenly items-center gap-10 h-full flex-wrap'>
            <div className='flex items-center  space-x-8  lg:p-4 text-white '>
              <div>
                <svg className="h-12 w-12 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />  <line x1="3" y1="9" x2="7" y2="9" /></svg>
              </div>
              <div className=' font-medium text-center'>
                <h4 className='text-xl'>Fast Shipping</h4>
                <p className='text-gray-200 text-sm'> Fast Shipping at your door step.</p>
              </div>
            </div>
            <div className='flex items-center space-x-8 text-white '>
              <div>
                <svg className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="1 4 1 10 7 10" />  <polyline points="23 20 23 14 17 14" />  <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" /></svg>

              </div>
              <div className=' font-medium text-center'>
                <h4 className='text-xl'>Free returnts</h4>
                <p className='text-gray-200 text-sm'>Free return if products are damaged.</p>
              </div>
            </div>
            <div className='flex items-center space-x-8  text-white '>
              <div>
                <svg className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </div>
              <div className=' font-medium text-center'>
                <h4 className='text-xl'>24/7 Support</h4>
                <p className='text-gray-200 text-sm'> 24/7 and 365 days support is available.</p>
              </div>
            </div>
            <div className='flex  items-center space-x-8 text-white '>
              <div>
                <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className=' font-semibold text-center'>
                <h4 className='text-xl'>Seller Login</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>


  )
}
