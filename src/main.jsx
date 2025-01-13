import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Category from './Components/Pages/Category.jsx';
import Home from './Components/Pages/Home.jsx';
import Login from './Components/Pages/Login.jsx';
import Products from './Components/Pages/Products.jsx';
import Details from './Components/Products/Details.jsx';
import DynamicCategory from './Components/Products/DynamicCategory.jsx';
import { CategoryProvider } from './Components/Products/CategoryProvider';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="categories" element={<Category />} />
      <Route path="products" element={<Products />} />
      <Route path="products/details/:type" element={<Details />} />
      <Route path="products/category/:type" element={<DynamicCategory />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoryProvider> {/* Wrap with the context provider */}
      <RouterProvider router={Router} />
    </CategoryProvider>
  </StrictMode>
);
