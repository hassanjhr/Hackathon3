"use client";

import React from "react";
import Image from "next/image";
import BusinessImage from "@/app/assets/business.png"; 

const BusinessHistory = () => {
  return (
    <div className="bg-white py-12 flex justify-center items-center">
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center gap-8 px-4">
        {/* Image Section */}
        <div className="relative">
          <div className="bg-[#9877E7] absolute bottom-0 left-0 w-full h-[10px] rounded-b-lg z-[-1]"></div>
          <Image
            src={BusinessImage}
            alt="Business History"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-[600px] text-center lg:text-left">
          <h2 className=" text-[32px] md:text-[36px] font-bold text-[#151875] mb-4">
            Know About Our Ecommerce <br /> Business, History
          </h2>
          <p className="text-sm text-[#151875] mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          <button className="bg-[#FB2E86] text-white px-6 py-2 tex-[12px] sm:text-[18px] hover:bg-[#e0226f] transition">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessHistory;
