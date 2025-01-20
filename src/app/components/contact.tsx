"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import ContactImage from "@/app/assets/CImage.png"

const Contact = () => {
  return (
    <div className="bg-[#F6F7FB]">
      {/* Breadcrumb Section */}
      <div className="bg-[#F6F7FB] py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-xl font-bold text-[#151875] mb-2">Contact</h2>
          <div className="text-sm text-[#151875]">
            <Link href="/" className="hover:text-[#FB2E86] hover:underline">
              Home
            </Link>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span>Pages</span>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span className="text-[#FB2E86]">Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-10 ">
      {/* Main Content */}
     

      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start gap-10 lg:gap-16 px-4 lg:px-20 py-12 bg-white">
  {/* Information About Us */}
  <div className="w-full lg:w-[45%] max-w-[500px] text-center lg:text-left">
    <h2 className="text-2xl font-bold text-[#151875] mb-4">Information About us</h2>
    <p className="text-sm text-[#151875] mb-6 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
      ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet
      erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis
      bibendum quam.
    </p>
    <div className="flex justify-center lg:justify-start gap-4">
      <div className="w-5 h-5 rounded-full bg-[#5625DF]"></div>
      <div className="w-5 h-5 rounded-full bg-[#FF27B7]"></div>
      <div className="w-5 h-5 rounded-full bg-[#37DAF3]"></div>
    </div>
  </div>

  {/* Contact Way */}
  <div className="w-full lg:w-[45%] max-w-[500px] text-center lg:text-left">
    <h2 className="text-2xl font-bold text-[#151875] mb-4">Contact Way</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center    ">
      {/* Contact Item 1 */}
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 rounded-full bg-[#5726DF]"></div>
        <div>
          <p className="text-sm text-[#151875]">Tel: 877-67-88-99</p>
          <p className="text-sm text-[#151875]">E-Mail: shop@store.com</p>
        </div>
      </div>
      {/* Contact Item 2 */}
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 rounded-full bg-[#FB2E86]"></div>
        <div>
          <p className="text-sm text-[#151875]">Support Forum</p>
          <p className="text-sm text-[#151875]">For over 24hr</p>
        </div>
      </div>
      {/* Contact Item 3 */}
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 rounded-full bg-[#FFB265]"></div>
        <div>
          <p className="text-sm text-[#151875]">20 Margaret st, London</p>
          <p className="text-sm text-[#151875]">Great britain, 3NM98-LK</p>
        </div>
      </div>
      {/* Contact Item 4 */}
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 rounded-full bg-[#1BE982]"></div>
        <div>
          <p className="text-sm text-[#151875]">Free standard shipping</p>
          <p className="text-sm text-[#151875]">on all orders.</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/*  */}
<div className="flex flex-col lg:flex-row items-center justify-center gap-16 px-6 py-12 bg-white">
  {/* Left Section - Form */}
  <div className="max-w-[500px] w-full text-center lg:text-left">
    <h2 className="text-[36px] font-bold text-[#151875] mb-4">Get In Touch</h2>
    <p className="text-sm text-[#151875] mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
      ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet
      erat vitae eget dolor los vitae lobortis quis bibendum quam.
    </p>
    <form className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Your Name*"
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
        />
        <input
          type="email"
          placeholder="Your E-mail*"
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
        />
      </div>
      <input
        type="text"
        placeholder="Subject*"
        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
      />
      <textarea
        placeholder="Type Your Message*"
        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86] h-[120px]"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-[#FB2E86] text-white  py-2 font-medium text-sm hover:bg-[#e0226f] transition sm:w-[157px] h-[44px] "
      >
        Send Mail
      </button>
    </form>
  </div>

  {/* Right Section - Image */}
  <div className="max-w-[600px] w-full flex justify-center">
    <Image
      src={ContactImage}
      alt="Customer Support Illustration"
      className="max-w-full h-auto object-contain"
    />
  </div>
</div>





{/*  */}
      </div>

      
    </div>
  );
};

export default Contact;
