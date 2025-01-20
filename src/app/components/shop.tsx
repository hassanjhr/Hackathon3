"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Product1 from "@/app/assets/p1.png";
import Product2 from "@/app/assets/p2.png";
import Product3 from "@/app/assets/p3.png";
import Product4 from "@/app/assets/p4.png";
import Product5 from "@/app/assets/p5.png";
import Product6 from "@/app/assets/p6.png";
import Product7 from "@/app/assets/p7.png";
import Product8 from "@/app/assets/p8.png";
import Product9 from "@/app/assets/p9.png";
import Product10 from "@/app/assets/p10.png";
import Product11 from "@/app/assets/p11.png";
import Product12 from "@/app/assets/p12.png";

const products = [
  { id: 1, title: "Vel elit euismod", price: "$26.00", sale: "$46.00", image: Product1, link: "/product/1" },
  { id: 2, title: "Ultricies condimentum imperdiet", price: "$26.00", sale: "$46.00", image: Product2, link: "/product/2" },
  { id: 3, title: "Vitae suspendisse sed", price: "$26.00", sale: "$46.00", image: Product3, link: "/product/3" },
  { id: 4, title: "Sed at fermentum", price: "$26.00", sale: "$46.00", image: Product4, link: "/product/4" },
  { id: 5, title: "Fusce pellentesque at", price: "$26.00", sale: "$46.00", image: Product5, link: "/product/5" },
  { id: 6, title: "Vestibulum magna laoreet", price: "$26.00", sale: "$46.00", image: Product6, link: "/product/6" },
  { id: 7, title: "Sollicitudin amet orci", price: "$26.00", sale: "$46.00", image: Product7, link: "/product/7" },
  { id: 8, title: "Ultrices mauris sit", price: "$26.00", sale: "$46.00", image: Product8, link: "/product/8" },
  { id: 9, title: "Pellentesque condimentum ac", price: "$26.00", sale: "$46.00", image: Product9, link: "/product/9" },
  { id: 10, title: "Cras scelerisque velit", price: "$26.00", sale: "$46.00", image: Product10, link: "/product/10" },
  { id: 11, title: "Lectus vulputate faucibus", price: "$26.00", sale: "$46.00", image: Product11, link: "/product/11" },
  { id: 12, title: "Purus risus, ut", price: "$26.00", sale: "$46.00", image: Product12, link: "/product/12" },
];

const Shop = () => {
  return (
    <div className="bg-white py-10">
      <div className=" py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Header Section */}
          <h2 className="text-2xl font-bold text-[#151875] mb-4">
            Ecommerce Accesories & Fashion item
          </h2>
          <p className="text-sm text-[#151875] mb-8">
            About 9,620 results (0.62 seconds)
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between mb-10 gap-4">
            <div className="flex items-center gap-4">
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
            <div className="flex items-center gap-4">
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
            <div className="flex items-center gap-4">
              <label htmlFor="view" className="text-sm text-[#151875]">
                View:
              </label>
              <div className="flex gap-2">
                <button className="w-[24px] h-[24px] border border-gray-300 rounded flex items-center justify-center text-sm text-[#151875] hover:bg-[#FB2E86] hover:text-white">
                  ◻
                </button>
                <button className="w-[24px] h-[24px] border border-gray-300 rounded flex items-center justify-center text-sm text-[#151875] hover:bg-[#FB2E86] hover:text-white">
                  ▤
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link href={product.link} key={product.id}>
                <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center text-center cursor-pointer transform transition-transform hover:scale-105">
                  <div className="p-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="h-[150px] w-auto"
                    />
                  </div>
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-medium text-[#151875] mb-1">
                      {product.title}
                    </h3>
                    <div className="flex justify-center gap-2 mb-1">
                      <span className="text-[#FB2E86] font-medium">
                        {product.price}
                      </span>
                      <span className="text-gray-400 line-through">
                        {product.sale}
                      </span>
                    </div>
                    <div className="flex gap-1 justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#9877E7]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#FB2E86]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#3DDAFD]"></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
