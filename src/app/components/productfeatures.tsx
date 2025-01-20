"use client";

import React from "react";
import Image from "next/image";
import chairImage from "@/app/assets/chair-blue.png"; 
import Link from "next/link";

const ProductFeatures = () => {
  return (
    <div className="bg-[#F1F0FF] py-12">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Chair Image */}
        <div className="relative flex justify-center">
          <div className=""></div>
          <Image
            src={chairImage}
            alt="Chair"
            className="relative z-10 max-w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-6 text-center lg:text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#151875]">
            Unique Features Of Latest & Trending Products
          </h2>

          {/* Features List */}
          <ul className="space-y-4 text-sm sm:text-base md:text-lg text-[#9196AA]">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-[#FB2E86] rounded-full mr-4"></span>
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-[#2F1AC4] rounded-full mr-4"></span>
              Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-[#1AC4A6] rounded-full mr-4"></span>
              Arms, backs and seats are structurally reinforced
            </li>
          </ul>

          {/* Add to Cart Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/shoppingcurt"><button className="bg-[#FB2E86] text-white px-6 py-3 rounded-md text-sm sm:text-base hover:bg-[#e02076]">
              Add To Cart
            </button></Link>
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-[#151875] font-semibold text-sm sm:text-base">
                B&B Italian Sofa
              </span>
              <span className="text-[#151875] text-sm sm:text-base">$32.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
