import React from 'react'
import "./Home.css"


export default function Home() {

  const bannerImg = ["../assests/bannerImg/banner1.png", "../assests/bannerImg/banner2.png", "../assests/bannerImg/banner3.png"]
  const categoryImg = ["../assests/categoryImg/category1.png", "../assests/categoryImg/category2.png", 
     "../assests/categoryImg/category3.png", "../assests/categoryImg/category4.png", "../assests/categoryImg/category5.png",
     "../assests/categoryImg/category6.png", "../assests/categoryImg/category7.png", "../assests/categoryImg/category8.png", "../assests/categoryImg/category9.png", "../assests/categoryImg/category10.png", "../assests/categoryImg/category11.png", "../assests/categoryImg/category12.png"]
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
      <div className='flex relative overflow-hidden '>
        <div className="">
          <img src={bannerImg[index]} alt="" className=' ' />
        </div>

        <div className='flex h-full w-full items-center justify-between absolute'>
          <button onClick={Previous} className='bg-white'>
            <svg class="h-10 w-10 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button onClick={Next} className='bg-white'>
            <svg class="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Category Section */}
      <section className='category'>
        <h2 className='text-center font-Poppins text-4xl py-5 '>Category</h2>
        <div className='flex justify-around relative overflow-hidden text-center'>
          <div className='flex h-full w-full items-center justify-between absolute'>
            <button onClick={Previous} className=' bg-[#49a6a2] p-1 rounded-full'>
              <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button onClick={Next} className='bg-[#49a6a2] p-1 rounded-full'>
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div>
            <img className='rounded-full max-w-32 border-2 border-blue-500' src={categoryImg[0]} alt="" />
            <p>Clothing</p>
          </div>
          <div>
            <img className='rounded-full max-w-32 border-2 border-blue-500' src={categoryImg[1]} alt="" />
            <p>Clothing</p>
          </div>
          <div>
            <img className='rounded-full max-w-32 border-2 border-blue-500' src={categoryImg[2]} alt="" />
            <p>Clothing</p>
          </div>
          <div>
            <img className='rounded-full max-w-32 border-2 border-blue-500' src={categoryImg[3]} alt="" />
            <p>Clothing</p>
          </div>
          <div>
            <img className='rounded-full max-w-32 border-2 border-blue-500' src={categoryImg[4]} alt="" />
            <p>Clothing</p>
          </div>
          <div>
            <img className='rounded-full max-w-32 border-2 border-blue-500' src={categoryImg[5]} alt="" />
            <p>Clothing</p>
          </div>
          <div>
            <img className='rounded-full max-w-32 border-2 border-blue-500' src={categoryImg[6]} alt="" />
            <p>Clothing</p>
          </div>
          <div>
            <img className='rounded-full max-w-32 border-2 border-blue-500' src={categoryImg[7]} alt="" />
            <p>Clothing</p>
          </div>
          <div>
            <img className='rounded-full max-w-32 border-2 border-blue-500' src={categoryImg[8]} alt="" />
            <p>Clothing</p>
          </div>
          <div>
            <img className='rounded-full max-w-32 border-2 border-blue-500' src={categoryImg[9]} alt="" />
            <p>Clothing</p>
          </div>
          <div>
            <img className='rounded-full max-w-32 border-2 border-blue-500' src={categoryImg[10]} alt="" />
            <p>Clothing</p>
          </div>
          <div>
            <img className='rounded-full max-w-32 border-2 border-blue-500' src={categoryImg[11]} alt="" />
            <p>Clothing</p>
          </div>
          

        </div>
      </section>
    </>


  )
}
