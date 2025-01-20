"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import sponsorsImage from "@/app/assets/sponsors.png";

const Faq = () => {
  return (
    <div className="bg-[#F6F7FB]">
      {/* B Section */}
      <div className="bg-[#F6F7FB] py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-xl font-bold text-[#151875] mb-2">FAQ</h2>
          <div className="text-sm text-[#151875]">
            <Link href="/" className="hover:text-[#FB2E86] hover:underline">
              Home
            </Link>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span>Pages</span>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span className="text-[#FB2E86]">Faq</span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-10 ">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-12">
  {/* General Information */}
  <div
    className="bg-white shadow-md rounded-md p-8 flex flex-col"
    style={{ maxWidth: "738px", width: "100%", height: "auto", minHeight: "566px" }}
  >
    <h2 className="text-2xl font-bold text-[#151875] mb-6">
      General Information
    </h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-[#151875] mb-2">
          Eu dictumst cum at sed euismod condimentum?
        </h3>
        <p className="text-sm text-[#151875]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristiquet sed tristique mollis vitae, consequat gravida sagittis.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-[#151875] mb-2">
          Magna bibendum est fermentum eros.
        </h3>
        <p className="text-sm text-[#151875]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristiquet sed tristique mollis vitae, consequat gravida sagittis.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-[#151875] mb-2">
          Odio muskana hak eris consequat skeleton?
        </h3>
        <p className="text-sm text-[#151875]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristiquet sed tristique mollis vitae, consequat gravida sagittis.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-[#151875] mb-2">
          Elit id blandit sabara boi velit gua maro?
        </h3>
        <p className="text-sm text-[#151875]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristiquet sed tristique mollis vitae, consequat gravida sagittis.
        </p>
      </div>
    </div>
  </div>

  {/* Ask a Question */}
  <div
    className="bg-[#F6F7FB] shadow-md rounded-md p-8 flex flex-col"
    style={{ maxWidth: "566px", width: "100%", height: "auto", minHeight: "566px" }}
  >
    <h2 className="text-2xl font-bold text-[#151875] mb-20">
      Ask a Question
    </h2>
    <form className="space-y-8">
      <input
        type="text"
        placeholder="Your Name*"
        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
      />
      <input
        type="text"
        placeholder="Subject*"
        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
      />
      <textarea
        placeholder="Type Your Message*"
        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86] h-[150px] sm:h-[197px]"
      ></textarea>
      <button
        type="submit"
        className="w-[100px] h-[35px] sm:w-[156px] sm:h-[48px] bg-[#FB2E86] text-white  py-2 font-medium text-sm hover:bg-[#e0226f] transition"
      >
        Send Mail
      </button>
    </form>
  </div>
</div>

      </div>

      {/* Sponsors Section */}
      <div className="bg-white py-10 flex justify-center">
        <Image src={sponsorsImage} alt="Sponsors" className="max-w-[80%] md:max-w-[60%]" />
      </div>
    </div>
  );
};

export default Faq;
