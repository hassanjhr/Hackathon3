"use client";

import React from "react";
import Image from "next/image";


import sponsorImage from "@/app/assets/sponsors.png";

const Sponsors = () => {
  return (
    <div className="bg-white py-8 flex justify-center items-center">
      <Image
        src={sponsorImage}
        alt="Sponsors"
        className="object-contain"
        width={800} 
        height={100} 
      />
    </div>
  );
};

export default Sponsors;
