"use client";

import React from "react";
import Image from "next/image";
import { FaStar, FaHeart,  FaInstagram,  } from "react-icons/fa";
import Thumbnail1 from "@/app/assets/pr2.png";
import Thumbnail2 from "@/app/assets/pr3.png";
import Thumbnail3 from "@/app/assets/pr4.png";
import MainImage from "@/app/assets/pr1.png";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";



const ProductCart = () => {
    return (
      <div className="bg-white py-10">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-10">
          {/* Left Side - Thumbnails */}
          <div className="flex lg:flex-col flex-row gap-4 items-center lg:items-start w-full lg:w-auto">
            {[Thumbnail1, Thumbnail2, Thumbnail3].map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-[70px] h-[70px] object-cover rounded-lg border border-gray-300"
              />
            ))}
          </div>
  
          {/* Center - Main Image */}
          <div className="flex-1">
            <Image
              src={MainImage}
              alt="Main Product"
              className="w-full h-auto lg:[487px] object-cover rounded-lg"
            />
          </div>
  
          {/* Right Side - Product Details */}
          <div className="flex-1 ">
            <h1 className="text-2xl md:text-[36px] font-semibold text-[#0D134E] mb-4">Playwood Arm Chair</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#FFC416] text-sm md:text-base mr-1" />
                ))}
              </div>
              <span className="text-sm md:text-base text-[#151875] ml-2">(22)</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xl md:text-[16px] font-medium text-[#151875]">$32.00</span>
              <span className="text-lg md:text-[16px] text-[#FB2E86] line-through">$52.00</span>
            </div>
            <p className="text-[#0D134E] text-xl md:text-[16px] font-semibold mb-[10px]">Color</p>
            <p className="text-sm md:text-base text-[#A9ACC6] mb-6 leading-relaxed lg:leading-[29px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
              porttitor purus, et volutpat sit.
            </p>
  
            <div className="flex items-center gap-4 mb-6">
              <Link href="/shoppingcurt"><button className=" text-[#151875] border-2  text-[12px] sm:text-[16px] px-4 md:px-6 py-2 rounded-lg font-medium hover:bg-[#e0226f] transition">
                Add To Cart
              </button></Link>
              <button className="p-2 rounded-full border border-gray-300 hover:bg-[#FB2E86] hover:text-white transition">
                <FaHeart className="text-[#535399]"/>
              </button>
            </div>
  
            <div className="mt-6">
              <p className="text-sm sm:text-[16px] font-semibold text-[#151875] mb-1">Categories:</p>
              
            </div>
  
            <div className="mt-4">
              <p className="text-sm sm:text-[16px] font-semibold text-[#151875] mb-1">Tags:</p>
             
            </div>
  
            <div className="mt-4">
              <div className="flex gap-4 mt-2">
              <p className="text-sm sm:text-[16px] font-semibold text-[#151875] mb-1">Share:</p>
              <div>
       
            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank">
                <IoLogoFacebook className="text-[#5625DF] text-xl hover:text-black  cursor-pointer" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <FaInstagram className="text-white bg-[#FF27B7] text-xl hover:bg-black  hover:border-black  border-4 rounded-full border-[#FF27B7] cursor-pointer" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <AiFillTwitterCircle className="text-[#37DAF3] text-xl hover:text-black cursor-pointer" />
              </Link>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCart;
