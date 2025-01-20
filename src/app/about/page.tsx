"use client";



import React from "react";
import Link from "next/link";
import BusinessHistory from "../components/businesshistory";
import AboutFeatures from "../components/aboutfeatures";
import Testimonials from "../components/testimonials";





const AboutPage = () => {
    return (
    
            <div className="bg-[#F6F7FB]">
      {/* Breadcrumb Section */}
      <div className="bg-[#F6F7FB] py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-xl font-bold text-[#151875] mb-2">About Us</h2>
          <div className="text-sm text-[#151875]">
            <Link href="/" className="hover:text-[#FB2E86] hover:underline">
              Home
            </Link>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span>Pages</span>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span className="text-[#FB2E86]">About Us</span>
          </div>
        </div>
      </div>

      
{/*  */}
      {/* Shop Section */}

  <BusinessHistory/>
  <AboutFeatures/>
  <Testimonials/>
  

  <div className="h-[100px] md:h-[200px] bg-white"></div>
      


      
{/*  */}
      
    </div>


    
    )
}

export default AboutPage;