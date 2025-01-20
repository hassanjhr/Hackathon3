"use client";



import React from "react";
import Link from "next/link";


import ShoppingCart from "../components/shoppingcart";




const ShoppingCurtPage = () => {
    return (
    
            <div className="bg-[#F6F7FB]">
      {/* Breadcrumb Section */}
      <div className="bg-[#F6F7FB] py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-xl font-bold text-[#151875] mb-2">Shopping Curt</h2>
          <div className="text-sm text-[#151875]">
            <Link href="/" className="hover:text-[#FB2E86] hover:underline">
              Home
            </Link>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span>Pages</span>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span className="text-[#FB2E86]">Shopping Curt</span>
          </div>
        </div>
      </div>

      
{/*  */}
      {/* Shop Section */}

  
      {/* <ShopList/> */}

      <ShoppingCart/>


      
{/*  */}
      {/* Sponsors Section */}
      {/* <div className="bg-white py-10 flex justify-center">
        <Image src={sponsorsImage} alt="Sponsors" className="max-w-[80%] md:max-w-[60%]" />
      </div> */}
    </div>


    
    )
}

export default ShoppingCurtPage;