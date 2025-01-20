"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineDown } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); 

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) 
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-[60px] bg-white max-w-[1920px] flex justify-center">
      {/* Navbar Content */}
      <div className="w-full px-4 max-w-[1177px] flex items-center justify-between lg:justify-center">
        {/* Logo */}
        <Link href="/"><div className="text-2xl font-bold text-[#0D0E43] mr-[44px] xl:mr-[88px]">
          Hekto
        </div></Link>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden relative z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl text-[#0D0E43] focus:outline-none"
          >
            {isMobileMenuOpen ? <IoClose /> : <HiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-[40px] left-0 w-full bg-white lg:static lg:w-auto lg:flex text-[#0D0E43] font-normal z-40`}
        >
          <div className="flex flex-col lg:flex-row lg:space-x-6 relative mr-[100px] xl:mr-[200px]">
            {/* Home with Dropdown */}
            <div
              className="relative cursor-pointer"
              ref={dropdownRef}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="flex items-center text-[#FB2E86] hover:text-gray-500 text-[12px] sm:text-[16px] font-medium">
                Home <AiOutlineDown className="ml-1 mt-[2px] text-[12px]" />
              </div>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded w-[150px] text-[12px] sm:text-[16px]">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link href="/" className="hover:text-[#FB2E86]">
                        Home
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link href="/about" className="hover:text-[#FB2E86]">
                        About
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link href="/faq" className="hover:text-[#FB2E86]">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link
              href="/shoplist"
              className="hover:text-[#FB2E86] text-[12px] sm:text-[16px] font-normal"
            >
              Pages
            </Link>
            <Link
              href="/products"
              className="hover:text-[#FB2E86] text-[12px] sm:text-[16px] font-normal"
            >
              Products
            </Link>
            <Link
              href="/blog"
              className="hover:text-[#FB2E86] text-[12px] sm:text-[16px] font-normal"
            >
              Blog
            </Link>
            <Link
              href="/shop"
              className="hover:text-[#FB2E86] text-[12px] sm:text-[16px] font-normal"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#FB2E86] text-[12px] sm:text-[16px] font-normal"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center text-[12px] sm:text-[16px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-[250px] h-[30px] px-4 border border-gray-400 text-black focus:outline-none"
          />
          <button className="w-[40px] h-[30px] bg-[#FB2E86] flex items-center justify-center">
            <IoSearchOutline className="text-white text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
