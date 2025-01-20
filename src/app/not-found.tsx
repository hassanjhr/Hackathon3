

import React from "react";
import Link from "next/link";
import Image from "next/image";
import sponsorsImage from "@/app/assets/sponsors.png";
import notFoundImage from "@/app/assets/404-image.png";

const NotFound = () => {
  return (
    <div className="bg-[#F6F7FB] flex flex-col min-h-screen">
      {/* Breadcrumb Section */}
      <div className="bg-[#F6F7FB] max-w-[1200px] w-full px-4 py-8 mx-auto">
        <h2 className="text-xl font-bold text-[#151875] mb-2">404 Not Found</h2>
        <div className="text-sm text-[#151875]">
          <Link href="/" className="hover:text-[#FB2E86] hover:underline">
            Home
          </Link>
          <span className="mx-2 text-[#B7BACB]">•</span>
          <span>Pages</span>
          <span className="mx-2 text-[#B7BACB]">•</span>
          <span className="text-[#FB2E86]">404 Not Found</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white flex-grow flex flex-col items-center justify-center">
        <Image src={notFoundImage} alt="404 Not Found" className="w-[300px] md:w-[400px] lg:w-[500px] mb-6" />
        <h2 className="text-xl md:text-2xl font-bold text-[#151875] mb-4 text-center">
          oops! The page you requested was not found!
        </h2>
        <Link href="/">
          <button className="bg-[#FB2E86] text-white px-6 py-2 rounded-md text-sm hover:bg-[#e0226f] transition">
            Back To Home
          </button>
        </Link>
      </div>

      {/* Sponsors Section */}
      <div className="bg-white py-10">
        <Image src={sponsorsImage} alt="Sponsors" className="max-w-[80%] md:max-w-[60%] mx-auto" />
      </div>
    </div>
  );
};

export default NotFound;
