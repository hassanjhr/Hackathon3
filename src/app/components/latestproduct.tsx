'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '../../../types/product';
import { client } from '@/utils/sanity';
import { six } from '@/sanity/lib/queries';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';

const LatestProducts = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchProduct: Product[] = await client.fetch(six);
      setProduct(fetchProduct);
    }
    fetchProduct();
  }, []);

  return (
    <div className="bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#151875] mb-8">
          Latest Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.map((product) => (
            <div
              key={product._id}
              className="bg-[#F6F7FB] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col justify-between h-full"
            >
              <Link href={`/product/${product.slug.current}`}>
                {/* Product Image */}
                {product.image && (
                  <div className="relative w-full h-64 mb-4">
                    <Image
                      src={urlForImage(product.image).url()}
                      alt={product.name}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                )}

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-center text-[#151875] mt-2">
                  {product.name}
                </h3>

                {/* Product Category */}
                <div className="text-center text-sm text-gray-500 mt-1">
                  <span className="font-medium">Category:</span> {product.category}
                </div>

                {/* Product Price */}
                <p className="text-center text-[#FB2E86] text-xl font-bold mt-2">
                  ${product.price}
                </p>

                {/* Remaining Stock */}
                {product.stockLevel && (
                  <div className="text-center text-sm text-gray-500 mt-2">
                    <span className="font-medium">Remaining Stock:</span> {product.stockLevel}
                  </div>
                )}
              </Link>

              {/* Bottom Section */}
              <div className="mt-auto p-4 bg-[#F0F4FF] rounded-lg shadow-inner">
                <div className="flex justify-between items-center">
                  <Link href={`/product/${product.slug.current}`}>
                    <button className='bg-[#FB2E86] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out'>
                      View Details
                    </button>
                  </Link>

                  {/* Remaining Stock */}
                  {product.stockLevel && (
                    <span className="text-sm text-gray-700 font-semibold">
                      {product.stockLevel} Left
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;























// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Product } from '../../../types/product';
// import { client } from '@/utils/sanity';
// import { six } from '@/sanity/lib/queries';
// import Image from 'next/image';
// import { urlForImage } from '@/sanity/lib/image';
// import Link from 'next/link';

// const LatestProducts = () => {
//   const [product, setProduct] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProduct() {
//       const fetchProduct: Product[] = await client.fetch(six);
//       setProduct(fetchProduct);
//     }
//     fetchProduct();
//   }, []);

//   return (
//     <div className="bg-white py-12">
//       <div className="max-w-[1200px] mx-auto px-4">
//         {/* Section Title */}
//         <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#151875] mb-4">
//            Latest Products
//         </h2>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {product.map((product) => (
//             <div
//               key={product._id}
//               className="bg-[#F6F7FB] p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
//             >

//               <Link href={`/product/${product.slug.current}`}>
//               {/* Product Image */}
//               {product.image && (
//                 <Image
//                   src={urlForImage(product.image).url()}
//                   alt={product.name}
//                   width={200}
//                   height={200}
//                   className="w-full h-auto object-contain"
//                 />
//               )}

//               {/* Product Name */}
//               <h3 className="text-lg font-medium text-center text-[#151875] mt-4">
//                 {product.name}
//               </h3>

//               {/* Product Price */}
//               <p className="text-center text-[#FB2E86] text-xl font-bold mt-2">
//                 ${product.price}
//               </p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestProducts;




























// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import chair1 from "@/app/assets/chair5.png";
// import chair2 from "@/app/assets/chair6.png";
// import chair3 from "@/app/assets/chair1.png";
// import chair4 from "@/app/assets/chair7.png";
// import chair5 from "@/app/assets/chair8.png";
// import chair6 from "@/app/assets/chair4.png";

// const LatestProducts = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Comfort Handy Craft",
//       price: "$42.00",
//       sale: "$65.00",
//       image: chair1,
//     },
//     {
//       id: 2,
//       name: "Comfort Handy Craft",
//       price: "$42.00",
//       sale: "$65.00",
//       image: chair2,
//     },
//     {
//       id: 3,
//       name: "Comfort Handy Craft",
//       price: "$42.00",
//       sale: "$65.00",
//       image: chair3,
//     },
//     {
//       id: 4,
//       name: "Comfort Handy Craft",
//       price: "$42.00",
//       sale: "$65.00",
//       image: chair4,
//     },
//     {
//       id: 5,
//       name: "Comfort Handy Craft",
//       price: "$42.00",
//       sale: "$65.00",
//       image: chair5,
//     },
//     {
//       id: 6,
//       name: "Comfort Handy Craft",
//       price: "$42.00",
//       sale: "$65.00",
//       image: chair6,
//     },
//   ];

//   return (
//     <div className="bg-white py-12">
//       <div className="max-w-[1200px] mx-auto px-4">
//         {/* Section Title */}
//         <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#151875] mb-4">
//           Latest Products
//         </h2>

//         {/* Navigation Bar */}
//         <div className="flex justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm md:text-base font-medium mb-8">
//           <button className="text-[#FB2E86] underline">New Arrival</button>
//           <button className="text-[#151875] hover:text-[#FB2E86]">
//             Best Seller
//           </button>
//           <button className="text-[#151875] hover:text-[#FB2E86]">
//             Featured
//           </button>
//           <button className="text-[#151875] hover:text-[#FB2E86]">
//             Special Offer
//           </button>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <Link
//               key={product.id}
//               href={`/product/${product.id}`}
//               className="block border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
//             >
//               {/* Top Part (Image with Background) */}
//               <div className="bg-[#EEEFFB] p-6 flex items-center justify-center h-[180px] sm:h-[200px] lg:h-[240px]">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   className="max-h-full object-contain"
//                 />
//               </div>

//               {/* Bottom Part (Details) */}
//               <div className="bg-white px-4 py-3 flex justify-between items-center">
//                 <h3 className="text-xs sm:text-sm md:text-base font-medium text-[#151875] truncate">
//                   {product.name}
//                 </h3>
//                 <div className="text-right">
//                   <span className="text-xs sm:text-sm md:text-base text-[#151875] font-medium">
//                     {product.price}
//                   </span>
//                   <span className="text-xs sm:text-sm md:text-base text-[#FB2E86] line-through ml-2">
//                     {product.sale}
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestProducts;
