"use client";

import React from "react";
import Image from "next/image";
import chair1 from "@/app/assets/1.png";
import chair2 from "@/app/assets/2.png";
import chair3 from "@/app/assets/3.png";
import chair4 from "@/app/assets/4.png";
import clock from "@/app/assets/clock.png";
import furniture from "@/app/assets/furniture.png";
import chair5 from "@/app/assets/5.png";
import chair6 from "@/app/assets/6.png";
import chair7 from "@/app/assets/7.png";



const TrendingProducts = () => {
  const trendingProducts = [
    { id: 1, name: "Cantilever chair", price: "$26.00", sale: "$40.00", image: chair1 },
    { id: 2, name: "Cantilever chair", price: "$26.00", sale: "$40.00", image: chair2 },
    { id: 3, name: "Cantilever chair", price: "$26.00", sale: "$40.00", image: chair3 },
    { id: 4, name: "Cantilever chair", price: "$26.00", sale: "$40.00", image: chair4 },
  ];

  const featuredCollections = [
    { id: 1, name: "Executive Seat chair", price: "$32.00", image: chair5 },
    { id: 2, name: "Executive Seat chair", price: "$32.00", image: chair6 },
    { id: 3, name: "Executive Seat chair", price: "$32.00", image: chair7 },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#151875] mb-8">
          Trending Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-[350px] w-[270px] max-w-full mx-auto flex flex-col"
            >
              <div className="bg-[#F5F5F7] h-[70%] flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="max-h-full object-contain p-4"
                />
              </div>
              <div className="bg-white px-4 py-6 text-center flex-1">
                <h3 className="text-sm font-bold text-[#151875] truncate">{product.name}</h3>
                <div className="text-sm py-2">
                  <span className="text-[#151875]">{product.price}</span>
                  <span className="text-[#FB2E86] line-through ml-2">{product.sale}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clock Section */}
        {/* <div className="mt-12 flex items-center justify-center">
          <Image src={clock} alt="Clock" className="h-[120px] object-contain" />
        </div> */}

        {/* Offers and Featured Collection Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[80px] mt-10">
          {/* Left Offer */}
          <div className="bg-[#FFF6FB] flex flex-col justify-between p-6 rounded-lg relative h-[270px] w-full lg:w-[400px]">
            <div>
              <h3 className="text-lg lg:text-[26px] font-medium text-[#151875] mb-2">
                23% off in all products
              </h3>
              <a href="#" className="text-[#FB2E86] text-sm font-medium hover:underline">
                Shop Now
              </a>
            </div>
            <Image
              src={clock}
              alt="Clock"
              className="object-contain mt-4 sm:mt-0 sm:absolute right-4 bottom-4 h-[150px]"
            />
          </div>

          {/* Right Offer */}
          <div className="bg-[#F4F0FC] flex flex-col justify-between p-6 rounded-lg relative h-[270px] w-full lg:w-[400px]">
            <div>
              <h3 className="text-lg lg:text-[26px] font-medium text-[#151875] mb-2">
                23% off in all products
              </h3>
              <a href="#" className="text-[#FB2E86] text-sm font-medium hover:underline">
                View Collection
              </a>
            </div>
            <Image
              src={furniture}
              alt="Furniture"
              className="object-contain mt-4 sm:mt-0 sm:absolute right-4 bottom-4 h-[150px]"
            />
          </div>

          {/* Featured Collection */}
          <div className="bg-white flex flex-col items-start justify-between p-8 rounded-lg h-[270px] w-full">
            <div className="space-y-4">
              {featuredCollections.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-[50px] h-[50px] object-contain"
                  />
                  <div className="flex flex-col justify-center px-4">
                    <h4 className="text-sm font-bold text-[#151875] truncate">{item.name}</h4>
                    <span className="text-[#151875] text-sm font-medium">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;