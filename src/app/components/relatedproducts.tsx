"use client";

import React from "react";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import RP1 from "@/app/assets/rp1.png";
import RP2 from "@/app/assets/rp2.png";
import RP3 from "@/app/assets/rp3.png";
import RP4 from "@/app/assets/rp4.png";

const products = [
  {
    id: 1,
    title: "Mens Fashion Wear",
    price: "$43.00",
    image: RP1,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Women's Fashion",
    price: "$67.00",
    image: RP2,
    rating: 5,
  },
  {
    id: 3,
    title: "Wolx Dummy Fashion",
    price: "$67.00",
    image: RP3,
    rating: 5,
  },
  {
    id: 4,
    title: "Top Wall Digital Clock",
    price: "$51.00",
    image: RP4, 
    rating: 3.5,
  },
];

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center justify-center">
      {Array.from({ length: fullStars }).map((_, index) => (
        <FaStar key={`full-${index}`} className="text-[#FFC416] text-sm" />
      ))}
      {halfStar && <FaStarHalfAlt className="text-[#B2B2B2] text-sm" />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="text-[#B2B2B2] text-sm" />
      ))}
    </div>
  );
};

const RelatedProducts = () => {
  return (
    <div className="bg-white py-10 px-4 flex justify-center">
      <div className="max-w-[1200px] w-full">
        <h2 className="text-2xl font-bold text-[#151875] mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white  overflow-hidden mb-[20px] "
            >
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="w-full object-cover h-[300px]"
              />
              <div className="p-4">
                <div className="flex justify-between ">
                    <h3 className="text-[16px] font-semibold text-[#151875] mb-2">
                  {product.title}
                </h3>
                {renderStars(product.rating)}
                </div>
                <p className="text-[#151875] font-medium mt-2 text-[13px] ">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
