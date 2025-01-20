"use client";

import React from "react";
import Image from "next/image";
import chair1 from "@/app/assets/chair1.png";
import chair2 from "@/app/assets/chair2.png";
import chair3 from "@/app/assets/chair3.png";
import chair4 from "@/app/assets/chair4.png";

const TopCategories = () => {
  const categories = [
    { id: 1, name: "Mini LCW Chair", price: "$56.00", image: chair1 },
    { id: 2, name: "Mini LCW Chair", price: "$56.00", image: chair2 },
    { id: 3, name: "Mini LCW Chair", price: "$56.00", image: chair3 },
    { id: 4, name: "Mini LCW Chair", price: "$56.00", image: chair4 },
  ];

  return (
    <div className="bg-white py-2">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#151875] mb-8">
          Top Categories
        </h2>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="flex flex-col items-center w-[250px] mx-auto"
            >
              {/* Circle (Image Section) */}
              <div
                className={`relative flex justify-center items-center rounded-full bg-[#F6F7FB] w-[250px] h-[250px] transition-transform hover:scale-105 ${
                  index === 0 ? "border-4 border-[#7E33E0]" : ""
                } hover:bg-[#9877E7]`}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  className="w-[120px] h-[120px] object-contain"
                />
                {/* Button (First Item Only) */}
                {index === 0 && (
                  <button className="absolute bottom-6 bg-[#08D15F] text-white px-4 py-2 text-sm rounded-md hover:bg-[#06b856] transition">
                    View Shop
                  </button>
                )}
              </div>
              {/* Text Section */}
              <div className="text-center mt-4 w-full">
                <h3 className="text-[#151875] text-lg font-normal">
                  {category.name}
                </h3>
                <span className="text-[#151875] text-sm">{category.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          <span className="w-3 h-3 rounded-full bg-[#FB2E86]"></span>
          <span className="w-3 h-3 rounded-full bg-[#E5E5E5]"></span>
          <span className="w-3 h-3 rounded-full bg-[#E5E5E5]"></span>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
