"use client";

import Link from "next/link";
import React from "react";
import { IoMailOutline, IoCallOutline, IoHeartOutline, IoLogInOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  return (
    <div className="bg-[#7E33E0] text-white px-4 sm:py-0">
      <div className="container mx-auto max-w-[1920px] flex flex-wrap items-center justify-between lg:justify-around gap-4">
        {/* Left Section: Email and Phone */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 gap-2  lg:mb-0">
          {/* Email */}
          <div className="flex items-center space-x-2">
            <IoMailOutline className="text-[12px] sm:text-[15px] " />
            <span className="text-[12px] sm:text-[15px] truncate ">
              mhhasanul@gmail.com
            </span>
          </div>

          {/* Phone */}
          <div className=" items-center space-x-2  hidden sm:flex">
            <IoCallOutline className="text-[12px] sm:text-[15px]" />
            <span className="text-[12px] sm:text-[15px]">
              (12345)67890
            </span>
          </div>
        </div>

        {/* Right Section: Dropdowns and Icons */}
        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <select className="bg-[#7E33E0] text-white text-[12px] sm:text-[15px] border-none outline-none rounded  py-1 cursor-pointer">
            <option value="english">English</option>
            <option value="urdu">Urdu</option>
            <option value="french">French</option>
          </select>

          {/* Currency Dropdown */}
          <select className="hidden sm:block bg-[#7E33E0] text-white text-[12px] sm:text-[15px] border-none outline-none rounded  py-1 cursor-pointer">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="pkr">PKR</option>
          </select>

          {/* Login */}
          <Link href="/login"><div className="flex items-center space-x-1 cursor-pointer">
          <span className=" text-[12px] sm:text-[15px]">Login</span>
            <IoLogInOutline className="text-lg hidden sm:block" />
          </div></Link>

          {/* Wishlist */}
          <Link href="/wishlist"><div className=" items-center space-x-1 cursor-pointer hidden md:flex">
            <span className="hidden sm:block text-[12px] sm:text-[15px]">Wishlist</span>
            <IoHeartOutline className="text-lg hidden sm:block" />
          </div></Link>

          {/* Cart Icon */}
          <Link href="/products"><div className="p-2 cursor-pointer hidden md:flex">
            <LuShoppingCart className="text-lg" />
          </div></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
