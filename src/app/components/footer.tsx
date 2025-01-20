import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#EEEFFB] py-6 lg:py-8">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-2 lg:gap-x-4 text-[#151875]">
          {/* Hekto Section */}
          <div className="px-2 lg:pr-8">
            <h2 className="text-[38px] font-bold text-black">Hekto</h2>
            <div className="mt-3 flex items-center">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="px-3 py-1 border rounded-l-md text-sm w-full max-w-[150px] md:max-w-[150px]"
              />
              <button className="bg-[#FB2E86] text-white px-3 py-1 text-sm rounded-r-md">
                Sign Up
              </button>
            </div>
            <div className="mt-3 text-sm md:text-[14px] text-[#9196AA]">
              <h3 className="font-semibold text-black">Contact Info</h3>
              <p className="mt-1">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="px-2 lg:px-4">
            <h2 className="text-base lg:text-sm font-bold text-black">
              Categories
            </h2>
            <ul className="mt-2 space-y-1 text-sm md:text-base text-[#9196AA]">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="px-2 lg:px-4">
            <h2 className="text-base lg:text-sm font-bold text-black">
              Customer Care
            </h2>
            <ul className="mt-2 space-y-1 text-sm md:text-base text-[#9196AA]">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Pages */}
          <div className="px-2 lg:px-4">
            <h2 className="text-base lg:text-sm font-bold text-black">Pages</h2>
            <ul className="mt-2 space-y-1 text-sm md:text-base text-[#9196AA]">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t pt-4 flex flex-col lg:flex-row items-center justify-around text-sm md:text-base text-[#9196AA]">
          {/* Copyright */}
          <p className="text-center lg:text-left">
            ©Webecy - All Rights Reserved
          </p>
          {/* Social Links */}
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <Link
              href="#"
              className="bg-[#151875] text-white p-2 rounded-full flex items-center justify-center text-sm"
            >
              <FaFacebookF size={10} />
            </Link>
            <Link
              href="#"
              className="bg-[#151875] text-white p-2 rounded-full flex items-center justify-center text-sm"
            >
              <FaInstagram size={10} />
            </Link>
            <Link
              href="#"
              className="bg-[#151875] text-white p-2 rounded-full flex items-center justify-center text-sm"
            >
              <FaTwitter size={10} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
