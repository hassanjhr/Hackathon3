"use client";

import React from "react";
import Image from "next/image";
import { FaStar, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import Product1 from "@/app/assets/sl1.png";
import Product2 from "@/app/assets/sl2.png";
import Product3 from "@/app/assets/sl3.png";
import Product4 from "@/app/assets/sl4.png";
import Product5 from "@/app/assets/sl5.png";
import Product6 from "@/app/assets/sl6.png";
import Product7 from "@/app/assets/sl7.png";

const products = [
  { id: 1, title: "Accumsan tincidunt", price: "$26.00", sale: "$52.00", image: Product1 },
  { id: 2, title: "In nulla", price: "$26.00", sale: "$52.00", image: Product2 },
  { id: 3, title: "Vel sem", price: "$26.00", sale: "$52.00", image: Product3 },
  { id: 4, title: "Porttitor cum", price: "$26.00", sale: "$52.00", image: Product4 },
  { id: 5, title: "Nunc in", price: "$26.00", sale: "$52.00", image: Product5 },
  { id: 6, title: "Vitae facilisis", price: "$26.00", sale: "$52.00", image: Product6 },
  { id: 7, title: "Curabitur lectus", price: "$26.00", sale: "$52.00", image: Product7 },
];

const ShopList = () => {
  return (
    <div className="bg-white py-10 ">
      <div className="max-w-[1200px] mx-auto px-4 ">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-[22px] font-bold text-[#151875] mb-2">
            Ecommerce Accesories & Fashion item
          </h2>
          <p className="text-sm sm:text-[12px]  text-[#8A8FB9] mb-6">
            About 9,620 results (0.62 seconds)
          </p>
          <div className="flex flex-wrap items-center justify-end gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="perPage" className="text-sm text-[#151875]">
                Per Page:
              </label>
              <input
                type="number"
                id="perPage"
                className="border border-gray-300 rounded px-2 py-1 text-sm w-[60px]"
                placeholder="10"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="sortBy" className="text-sm text-[#151875]">
                Sort By:
              </label>
              <select
                id="sortBy"
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option>Best Match</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="view" className="text-sm text-[#151875]">
                View:
              </label>
              <div className="flex gap-2">
                <button className="w-[30px] h-[30px] border border-gray-300 rounded flex items-center justify-center text-sm text-[#151875] hover:bg-[#FB2E86] hover:text-white">
                  ◻
                </button>
                <button className="w-[30px] h-[30px] border border-gray-300 rounded flex items-center justify-center text-sm text-[#151875] hover:bg-[#FB2E86] hover:text-white">
                  ▤
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="space-y-8   ">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg flex flex-col lg:flex-row items-center lg:items-start gap-4 p-4"
            >
              <Image
                src={product.image}
                alt={product.title}
                className="w-full sm:h-[254px] lg:w-[300px] h-auto object-cover rounded-md"
              />
              <div className="flex-1">
                <div className="flex gap-4 items-center">
                    <h3 className="text-md sm:text-[19px] font-bold text-[#151875] mb-2">
                  {product.title}
                  
                </h3>
                
                <div className="flex justify-center lg:justify-start gap-1">
      <div className="w-3 h-3 rounded-full bg-[#DE9034]"></div>
      <div className="w-3 h-3 rounded-full bg-[#E60584]"></div>
      <div className="w-3 h-3 rounded-full bg-[#5E37FF]"></div>
    </div>

                </div>
                <div className="flex items-center gap-4 text-sm sm:text-[15px] mb-[20px]">
                  <span className="text-[#111C85] font-semibold">
                    {product.price}
                  </span>
                  <span className="text-[#FF2AAA] line-through text-sm sm:text-[15px] font-semibold">
                    {product.sale}
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#FFC416] text-sm" />
                    ))}
                  </div>
                  
                </div>
                <p className="text-sm sm:text-[17px] text-[#151875] mb-[50px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in pharetra non in justo.
                </p>
                
                <div className="flex gap-2 mt-4 lg:mt-0">
                <button className="p-2 rounded-full border border-gray-300  ">
                  <FaHeart className="text-[#535399] bg-white"/>
                </button>
                <button className="p-2 rounded-full border border-gray-300">
                  <FaShoppingCart  className="text-[#535399] bg-white"/>
                </button>
                <button className="p-2 rounded-full border border-gray-300 ">
                  <FaSearch className="text-[#535399] bg-white"/>
                </button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopList;
