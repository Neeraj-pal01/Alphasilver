import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { data, RouterProvider } from 'react-router-dom'
import {Route} from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Header from './Components/Header/Header.jsx'
import Category from './Components/Pages/Category.jsx'
import Clothing from './Components/Products/Clothing.jsx'
import Home from './Components/Pages/Home.jsx'
import Login from './Components/Pages/Login.jsx'
import Products from './Components/Pages/Products.jsx'
import Details from './Components/Products/details.jsx'


const Router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='categories' element={<Category/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='products/details' element={<Details/>}/>
      <Route path='products/category/clothing' element={<Clothing/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>,
)
