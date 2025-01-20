"use client";

import React from "react";

import backgroundImage from "@/app/assets/Rectangle102.png"; 
import Link from "next/link";

const SubscribeSection = () => {
  return (
    <div
      className=" my-14 h-[300px] sm:h-[462px] max-w-[1920px] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#151875] mb-4 max-w-[574px]">
          Get Latest Update By Subscribe Our Newsletter
        </h2>
        <Link href="/shop"><button className="bg-[#FB2E86] lg:h-[49px] lg:w-[173px] mt-[10px] text-white px-6 py-2  text-[17px] hover:bg-[#e0226f] transition">
          Shop Now
        </button></Link>
      </div>
    </div>
  );
};

export default SubscribeSection;
