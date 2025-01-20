"use client";

import React from "react";
import Image from "next/image";
import Chair from "@/app/assets/chairs.png";
import Lamp from "@/app/assets/lamp.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-[#F2F0FF] py-12">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center lg:justify-start">
        {/* Lamp Section */}
        <div className="lg:w-1/3 flex justify-start lg:justify-start relative xl:mb-[70px]">
          <Image
            src={Lamp}
            alt="Lamp"
            width={350}
            height={350}
            className="w-[220px] sm:w-[280px] lg:w-[350px] -mt-11 lg:-mt-20"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/3 text-left lg:text-left mt-6 lg:mt-0 flex flex-col items-center lg:items-start lg:ml-[-100px]">
          <p className="text-[#FB2E86] text-sm lg:text-base">
            Best Furniture For Your Castle....
          </p>
          <h1 className="text-[#151875] font-bold text-2xl sm:text-3xl lg:text-4xl mt-2 leading-tight">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p className="text-[#9196AA] text-xs sm:text-sm lg:text-base mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <Link href="/products"><button className="mt-6 px-6 py-2 bg-[#FB2E86] text-white rounded text-sm lg:text-base">
            Shop Now
          </button></Link>
        </div>

        {/* Chair Section */}
        <div className="lg:w-1/3 flex justify-center relative mt-8 lg:mt-0 lg:ml-[10px]">
          <Image
            src={Chair}
            alt="Chair"
            width={700}
            height={700}
            className="w-[320px] sm:w-[450px] lg:w-[700px]"
          />
          {/* Discount Tag */}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        <div className="w-3 h-3 bg-[#FB2E86] rounded-full"></div>
        <div className="w-3 h-3 bg-[#C4C4C4] rounded-full"></div>
        <div className="w-3 h-3 bg-[#C4C4C4] rounded-full"></div>
      </div>
    </div>
  );
};

export default HeroSection;
