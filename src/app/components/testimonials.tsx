"use client";

import React from "react";
import Image from "next/image";
import Client1 from "@/app/assets/client1.png"; 
import Client2 from "@/app/assets/client2.png";
import Client3 from "@/app/assets/client3.png";

const Testimonials = () => {
  return (
    <div className="bg-[#F6F7FB] py-12 flex justify-center items-center">
      <div className="max-w-[1200px] w-full  text-center px-4">
        {/* Title */}
        <h2 className="text-[28px] md:text-[42px] font-bold text-black mb-16">
          Our Client Say!
        </h2>

        {/* Client Images */}
        <div className="flex justify-center items-center gap-3 mb-8 relative">
          <div className="relative">
            <Image
              src={Client1}
              alt="Client 1"
              className="w-[60px] h-[60px] object-cover border-2 border-gray-300"
            />
          </div>
          <div className="relative -top-4 z-10">
            <Image
              src={Client2}
              alt="Client 2"
              className="w-[60px] h-[60px] object-cover border-2 border-gray-300"
            />
          </div>
          <div className="relative">
            <Image
              src={Client3}
              alt="Client 3"
              className="w-[60px] h-[60px] object-cover border-2 border-gray-300"
            />
          </div>
        </div>

        {/* Client Name and Role */}
        <h3 className="text-lg font-semibold text-black mb-1">
          Selina Gomez
        </h3>
        <p className="text-[10px] text-[#8A8FB9] mb-4">Ceo At Webecy Digital</p>

        {/* Client Testimonial */}
        <p className="text-sm sm:text-[16px] text-[#8A8FB9] font-semibold mb-6 leading-relaxed max-w-[800px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
          ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
          nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
          lacus volutpat praesent.
        </p>

        {/* Underline */}
        <div className="flex justify-center items-center gap-2">
          <div className="w-[20px] h-[2px] bg-[#FF75B0]"></div>
          <div className="w-[40px] h-[2px] bg-[#FB2E86]"></div>
          <div className="w-[20px] h-[2px] bg-[#FF75B0]"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
