"use client";

import React from "react";
import Image from "next/image";
import chair from "@/app/assets/disSofa.png";
import Link from "next/link";

const DiscountItem = () => {
  return (
    <div className="bg-white py-12 flex  justify-center min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-10">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#151875] mb-4">
            Discount Item
          </h2>
          <div className="space-x-4">
            <a href="#" className="text-[#FB2E86] font-medium hover:underline">
              Wood Chair
            </a>
            <span className="text-[#151875]">•</span>
            <a href="#" className="text-[#151875] font-medium hover:underline">
              Plastic Chair
            </a>
            <span className="text-[#151875]">•</span>
            <a href="#" className="text-[#151875] font-medium hover:underline">
              Sofa Collection
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 w-full">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left lg:ml-[100px]">
            <h3 className="text-xl md:text-2xl font-bold text-[#151875] mb-2">
              20% Discount Of All Products
            </h3>
            <h4 className="text-lg font-medium text-[#FB2E86] mb-4">
              Eams Sofa Compact
            </h4>
            <p className="text-sm text-[#151875] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#151875] mb-6">
              <li className="flex items-center">
                <span className="text-[#FB2E86] mr-2">✔</span> Material expose
                like metals
              </li>
              <li className="flex items-center">
                <span className="text-[#FB2E86] mr-2">✔</span> Clear lines and
                geometric figures
              </li>
              <li className="flex items-center">
                <span className="text-[#FB2E86] mr-2">✔</span> Simple neutral
                colours
              </li>
              <li className="flex items-center">
                <span className="text-[#FB2E86] mr-2">✔</span> Material expose
                like metals
              </li>
            </ul>
            <Link href="/products"><button className="bg-[#FB2E86] text-white px-6 py-2 rounded-md text-sm hover:bg-[#e0226f] transition">
              Shop Now
            </button></Link>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-around   relative">
            <div className="absolute w-[350px] h-[350px] bg-[#F4F0FC] rounded-full -z-10"></div>
            <Image
              src={chair}
              alt="Discount Chair"
              className="w-[300px] md:w-[400px] lg:w-[600px] xl:w-[699px] h-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;
