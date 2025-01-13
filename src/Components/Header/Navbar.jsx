import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar({ categories }) {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Extract all products from the categories tree
  const extractProducts = (categories) => {
    const products = [];
    categories.forEach((category) => {
      if (category.products) {
        products.push(...category.products);
      }
      if (category.subcategories) {
        category.subcategories.forEach((sub) => {
          if (sub.products) {
            products.push(...sub.products);
          }
        });
      }
    });
    return products;
  };

  // Extract all products once from the categories
  const allProducts = extractProducts(categories);

  // Handle search input
  const searchHandler = (event) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);

    // Filter products based on the search term
    if (value === "") {
      setFilteredProducts([]);
    } else {
      const matches = allProducts.filter((product) =>
        product.name.toLowerCase().includes(value)
      );
      setFilteredProducts(matches);
    }
  };

  return (
    <>
      <div className="p-3 flex justify-between w-full items-center">
        <div className="flex items-center lg:w-auto w-1/2 justify-between">
          <div className="lg:hidden inline">
            <svg
              className="inline h-6 w-7 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <img
            className="max-w-32 hover:scale-105"
            src="../assests/LogoImg/Logo.png"
            alt=""
          />
          <div className="relative">
            <input
              className="lg:inline hidden ml-5 font-medium font-Poppins rounded-xl pl-4 py-2 border border-gray-300 pe-96"
              placeholder="Search for the products"
              type="text"
              value={search}
              onChange={searchHandler}
            />
            

            {/* Search Results Dropdown */}
            {filteredProducts.length > 0 && (
              <div className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 w-[40%] lg:left-[20%]">
                {filteredProducts.map((product, index) => (
                  <Link
                    to={product.link}
                    state={{ name: product.name, img: product.img, price: product.price, discount: product.discount }}
                    key={index}
                    className="block p-4 hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-12 h-12 rounded-md mr-4"
                      />
                      <div>
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-sm text-gray-500">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* No Results Found */}
            {search && filteredProducts.length === 0 && (
              <div className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 w-[40%] lg:left-[20%]">
                <p className="p-4 text-center text-gray-500">
                  No results found.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-3 pe-10 items-center">
          <button className="lg:block hidden border font-medium border-[#14949d] text-[#14949d] font-Poppins,sans-serif rounded-md p-1 hover:bg-[#14949d] hover:text-white">
            <NavLink to="Login">Login</NavLink>
          </button>
          <span className="lg:inline hidden">
            <svg
              className="h-6 w-6 text-[#14949d]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#14949d"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </span>
          <span>
            <svg
              className="h-6 w-6 text-[#14949d]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#14949d"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}
