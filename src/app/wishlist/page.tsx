"use client";



import React from "react";

import DemoComponent from "../components/demo";




const WishPage = () => {
    return (
    
            <div className="bg-[#F6F7FB]">
      {/* Breadcrumb Section */}
      <div className="bg-[#F6F7FB] py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-xl font-bold text-[#151875] mb-2">Hekta Demo</h2>
          
        </div>
      </div>

      
{/*  */}
      {/* Shop Section */}

  
     

      <DemoComponent/>


      
{/*  */}
      {/* Sponsors Section */}
      {/* <div className="bg-white py-10 flex justify-center">
        <Image src={sponsorsImage} alt="Sponsors" className="max-w-[80%] md:max-w-[60%]" />
      </div> */}
    </div>


    
    )
}

export default WishPage;