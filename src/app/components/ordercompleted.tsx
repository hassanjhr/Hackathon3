"use client";

import React from "react";
import Image from "next/image";


import ClockImage from "@/app/assets/clock001.png";
import TickImage from "@/app/assets/tick001.png";
import ChecklistImage from "@/app/assets/checklist001.png";
import Link from "next/link";

const OrderCompleted = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center relative">
      
      <div className="absolute top-1/2 w-full border-t border-dashed border-gray-300 transform -translate-y-1/2"></div>

      
      <div className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <Image
          src={ClockImage}
          alt="Clock Icon"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      
      <div className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <Image
          src={ChecklistImage}
          alt="Checklist Icon"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      
      <div className="z-10 text-center">
       
        <div className="flex justify-center items-center mb-6">
          <div className="w-[80px] h-[80px] bg-[#F7F7F7] rounded-full flex items-center justify-center">
            <Image
              src={TickImage}
              alt="Tick Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        
        <h1 className="text-2xl md:text-3xl font-bold text-[#151875] mb-4">
          Your Order Is Completed!
        </h1>

        
        <p className="text-sm md:text-base text-[#B7BACB] max-w-[600px] mx-auto mb-6">
        Thank you for your order! Your order is being processed and will be
          completed within 5-7 days. You will receive an email confirmation
          when your order is completed.
        </p>

        
        <Link href= "/"><button className='bg-gradient-to-r from-[#7E33E0] to-[#FB2E86] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out mt-4'>
          Continue Shopping
        </button></Link>
      </div>
    </div>
  );
};

export default OrderCompleted;
