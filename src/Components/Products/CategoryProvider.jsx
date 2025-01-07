import React, { createContext, useState } from 'react';

// Create the context
export const CategoryContext = createContext();

// Create a provider component
export const CategoryProvider = ({ children }) => {
  const [categoryState, setCategoryState] = useState([null,null]);

  return (
    <CategoryContext.Provider value={{ categoryState, setCategoryState }}>
      {children}
    </CategoryContext.Provider>
  );
};