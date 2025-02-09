import axios from 'axios';
import React, { createContext, useEffect, useState, useTransition } from 'react';
import '../../App.css'



// Create the context
export const CategoryContext = createContext();

// Create a provider component
export const CategoryProvider = ({ children }) => {
  const [subcategory, setSubcategory] = useState([]);
  const[products , setProducts] = useState([]);
  const [category , setCategory] = useState([]);
  const [isPending , startTransition]= useTransition();

  useEffect(() => {
    startTransition(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://alphasilver-1.onrender.com/api/data");
          console.log("response.data.categories", response.data.categories);
          setCategory(response.data.categories);
        } catch (error) {
          console.log("we got error", error);
        }
      };
      fetchData();
    });
  }, []);
  if(isPending) return <div className='loader'></div>
  return (
    <CategoryContext.Provider value={{ category, subcategory, setSubcategory,products , setProducts }}>
      {children}
    </CategoryContext.Provider>
  );
};