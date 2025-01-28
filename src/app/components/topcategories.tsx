"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/utils/sanity";
import { lastFour } from "@/sanity/lib/queries"; 
import { Product } from "../../../types/product"; 
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

const TopCategories = () => {
  const [categories, setCategories] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const fetchedCategories: Product[] = await client.fetch(lastFour);
      setCategories(fetchedCategories);
    }
    fetchCategories();
  }, []);

  return (
    <div className="bg-white py-2">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#151875] mb-8">
          Top Categories
        </h2>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category._id} className="flex flex-col items-center w-[250px] mx-auto">
              
              <Link href={`/product/${category.slug.current}`}>
                <div className="relative flex justify-center items-center rounded-full bg-[#F6F7FB] w-[250px] h-[250px] transition-transform hover:scale-105 border-4 border-[#7E33E0] hover:bg-[#9877E7]">
                  <Image
                    src={urlForImage(category.image).url()}
                    alt={category.name}
                    className="w-[120px] h-[120px] object-contain"
                    width={120} 
                    height={120}
                  />

                  {/* Button (First Item Only) */}
                  <button className="absolute bottom-6 bg-[#08D15F] text-white px-4 py-2 text-sm rounded-md hover:bg-[#06b856] transition">
                    View Shop
                  </button>
                </div>
              </Link>
              {/* Text Section */}
              <div className="text-center mt-4 w-full">
                <h3 className="text-[#151875] text-lg font-normal">{category.name}</h3>
                <span className="text-[#151875] text-sm">{category.price}</span>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default TopCategories;
