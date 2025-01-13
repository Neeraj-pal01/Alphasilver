import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CategoryContext } from '../Products/CategoryProvider';
import { categoryVariety, categoryVariety1 } from '../DataPass/Data';

export default function DynamicCategory() {
  const location = useLocation();
  const { subcategory } = useContext(CategoryContext); 
  const {setProducts}=useContext(CategoryContext)
  // const [name, setName] = useState(categoryState[0]);
  const [bool, setBool] = useState(true);
  const [index1, setIndex] = useState(-1);

  // Synchronize local state with context state
  useEffect(() => {
    setBool(true); // Reset bool if necessary
  }, [index1]);
  return (
    <>
      <div className="bg-blue-300 h-24 flex items-center mb-10">
        <div className="w-3/4 m-auto">
          <div className="flex justify-between">
            <h2 className="text-xl font-sans text-gray-700 font-semibold">{(subcategory.name)}</h2>
            <p className="text-sm">
              <Link to={'/home'}>Home</Link>/ <Link to={'/categories'}>Category</Link>/ <span className="text-gray-700">Products</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-3/4 h-full m-auto border-[-0.5px] border-gray-300 shadow-md py-4 mb-10">
        <div className={bool ? "m-10" : "flex"}>
          {bool || <div className='border-[0.7px] border-gray-300 w-1/3 pt-5'>
            <div className='flex items-center justify-around font-semibold'>
              <h3>Size</h3>
              <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
            </div>
          </div>
          }
          {bool && <div className="m-10">
            <h3 className="text-2xl font-semibold">{subcategory.name} Category</h3>
          </div>}
          <div className={bool ? "flex border-[-0.7px] border-gray-300 shadow-md gap-10 p-5" : " grid gap-5 grid-cols-3 w-full"}>
            {bool && index1 !== 4  ? (
              subcategory.map((i) => (
                <div key={i.name} className="flex flex-col text-center">
                  <Link
                    to={i.link}
                    state={i.products}
                    onClick={() => {
                        setBool(!bool);
                        setIndex(i.id);
                    }}
                  >
                    <img
                      className="hover:scale-105 max-w-48 w-32 h-32 rounded-full border-[3px] object-cover border-[#14949d]"
                      src={i.img}
                      alt={i.name}
                    />
                  </Link>
                  <p>{i.name}</p>
                </div>
              ))
            ) :
              (
                subcategory[index1]?.products?.map((j, index) => (
                  <>
                    { 
                      index === 0 && (
                        <>
                          <div className='flex justify-around items-center font-semibold col-span-3'key={j.name}>
                            <div className=''>
                              <label for="cars">Sort By:</label>
                              <select className='p-2 font-light' name="cars" id="cars">
                                <option value="volvo">Relevence</option>
                                <option value="saab">Top Rated</option>
                                <option value="opel">Newest First</option>
                                <option value="audi">Oldest first</option>
                                <option value="audi">Price Low to High</option>
                                <option value="audi">Price High to Low</option>
                              </select>
                            </div>
                            <div>
                              <label for="cars">Show:</label>
                              <select name="cars" id="cars">
                                <option value="volvo">12</option>
                                <option value="saab">16</option>
                                <option value="opel">20</option>
                                <option value="audi">24</option>
                              </select>
                            </div>
                          </div>
                          <div className='col-span-3 items-center'>
                            <h3 className='text-2xl font-semibold'>Products</h3>
                          </div>
                        </>
                      )
                    }
                    <div className='items-center justify-center'>
                      <div key={j.name} className='grid grid-cols-3 '>
                        <Link to={j.link} state={{name:j.name,img:j.img}} onClick={()=>setProducts(j[index])}>
                        <img src={j.img} alt={j.name} className='' />
                        </Link>
                      </div>
                    </div>
                  </>
                ))
              )}
          </div>
        </div>
      </div>
    </>
  );
}
