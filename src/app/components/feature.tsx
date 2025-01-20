"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import chair1 from "@/app/assets/chair1.png";
import chair2 from "@/app/assets/chair2.png";
import chair3 from "@/app/assets/chair3.png";
import chair4 from "@/app/assets/chair4.png";
import stripes from "@/app/assets/Group 1411.png";

const FeaturedProducts = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#151875] mb-8">
          Featured Products
        </h2>

        {/* Products Container */}
        <div className="overflow-x-scroll scrollbar-hide flex gap-6 md:gap-8">
          {/* Card 1 */}
          <Link href="/product-details/1">
            <div className="flex-shrink-0 min-w-[250px] bg-[#F6F7FB] rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
              {/* Image Section */}
              <div className="p-4 flex items-center justify-center">
                <Image
                  src={chair1}
                  alt="Chair 1"
                  className="w-auto h-[150px]"
                />
              </div>
              {/* Text Section */}
              <div className="bg-white p-4 rounded-b-lg hover:bg-[#2F1AC4] hover:text-white transition-colors">
                <h3 className="text-[#FB2E86] font-bold text-sm text-center hover:text-white">
                  Cantilever Chair
                </h3>
                <div className="flex justify-center mt-2">
                  <Image
                    src={stripes}
                    alt="Color Stripes"
                    width={40}
                    height={8}
                  />
                </div>
                <p className="text-[#151875] text-xs text-center mt-2 hover:text-white">
                  Code: Y523201
                </p>
                <p className="text-[#151875] font-bold text-sm text-center mt-1 hover:text-white">
                  $42.00
                </p>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/product-details/2">
            <div className="flex-shrink-0 min-w-[250px] bg-[#F6F7FB] rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
              <div className="p-4 flex items-center justify-center">
                <Image
                  src={chair2}
                  alt="Chair 2"
                  className="w-auto h-[150px]"
                />
              </div>
              <div className="bg-white p-4 rounded-b-lg hover:bg-[#2F1AC4] hover:text-white transition-colors">
                <h3 className="text-[#FB2E86] font-bold text-sm text-center hover:text-white">
                  Cantilever Chair
                </h3>
                <div className="flex justify-center mt-2">
                  <Image
                    src={stripes}
                    alt="Color Stripes"
                    width={40}
                    height={8}
                  />
                </div>
                <p className="text-[#151875] text-xs text-center mt-2 hover:text-white">
                  Code: Y523201
                </p>
                <p className="text-[#151875] font-bold text-sm text-center mt-1 hover:text-white">
                  $42.00
                </p>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/product-details/3">
            <div className="flex-shrink-0 min-w-[250px] bg-[#F6F7FB] rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
              <div className="p-4 flex items-center justify-center">
                <Image
                  src={chair3}
                  alt="Chair 3"
                  className="w-auto h-[150px]"
                />
              </div>
              <div className="bg-white p-4 rounded-b-lg hover:bg-[#2F1AC4] hover:text-white transition-colors">
                <h3 className="text-[#FB2E86] font-bold text-sm text-center hover:text-white">
                  Cantilever Chair
                </h3>
                <div className="flex justify-center mt-2">
                  <Image
                    src={stripes}
                    alt="Color Stripes"
                    width={40}
                    height={8}
                  />
                </div>
                <p className="text-[#151875] text-xs text-center mt-2 hover:text-white">
                  Code: Y523201
                </p>
                <p className="text-[#151875] font-bold text-sm text-center mt-1 hover:text-white">
                  $42.00
                </p>
              </div>
            </div>
          </Link>

          {/* Card 4 */}
          <Link href="/product-details/4">
            <div className="flex-shrink-0 min-w-[250px] bg-[#F6F7FB] rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
              <div className="p-4 flex items-center justify-center">
                <Image
                  src={chair4}
                  alt="Chair 4"
                  className="w-auto h-[150px]"
                />
              </div>
              <div className="bg-white p-4 rounded-b-lg hover:bg-[#2F1AC4] hover:text-white transition-colors">
                <h3 className="text-[#FB2E86] font-bold text-sm text-center hover:text-white">
                  Cantilever Chair
                </h3>
                <div className="flex justify-center mt-2">
                  <Image
                    src={stripes}
                    alt="Color Stripes"
                    width={40}
                    height={8}
                  />
                </div>
                <p className="ext-[#151875] text-xs text-center mt-2 hover:text-white">
                  Code: Y523201
                </p>
                <p className="text-[#151875] font-bold text-sm text-center mt-1 hover:text-white">
                  $42.00
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          <span className="w-4 h-2 bg-[#FB2E86] rounded-full"></span>
          <span className="w-4 h-2 bg-[#EEEFFB] rounded-full"></span>
          <span className="w-4 h-2 bg-[#EEEFFB] rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
