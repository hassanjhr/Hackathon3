'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '../../../types/product';
import { client } from '@/utils/sanity';
import { three } from '@/sanity/lib/queries';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';
import { addToCart } from '../actions/actions';
import Swal from 'sweetalert2';

const FeaturedProducts = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchProduct: Product[] = await client.fetch(three);
      setProduct(fetchProduct);
    }
    fetchProduct();
  }, []);

// add to cart function
  const handleAddToCart = (e: React.MouseEvent, product : Product) => {
    e.preventDefault();
    Swal.fire({
      position : 'center',
      icon : 'success',
      title : `${product.name} added to cart`,
      showConfirmButton : false,
      timer : 1500
    })
    addToCart(product)
  }

  return (
    <div className="bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#151875] mb-8">
          Featured Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.map((product) => (
            <div
              key={product._id}
              className="bg-[#F6F7FB] p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col justify-between"
            >

              <Link href={`/product/${product.slug.current}`} className="flex-grow">
                {/* Product Image */}
                {product.image && (
                  <Image
                    src={urlForImage(product.image).url()}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-auto object-contain"
                  />
                )}

                {/* Product Name */}
                <h3 className="text-lg font-medium text-center text-[#151875] mt-4">
                  {product.name}
                </h3>

                {/* Product Price */}
                <p className="text-center text-[#FB2E86] text-xl font-bold mt-2">
                  ${product.price}
                </p>
              </Link>

              {/* Add to Cart Button */}
              <div className="flex justify-center mt-4">
                <button 
                  className='bg-[#FB2E86] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out'
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <Link href="/products">
        <div className=" mx-auto flex justify-center mt-12 space-x-2 ">
  <button  className="text-[#FB2E86] font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out hover:bg-[#FB2E86] hover:text-white">
    View More
  </button>
</div></Link>

      </div>
    </div>
  );
};

export default FeaturedProducts;
















// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Product } from '../../../types/product';
// import { client } from '@/utils/sanity';
// import { four } from '@/sanity/lib/queries';
// import Image from 'next/image';
// import { urlForImage } from '@/sanity/lib/image';
// import Link from 'next/link';


// const FeaturedProducts = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       const fetchedProducts: Product[] = await client.fetch(four);
//       setProducts(fetchedProducts);
//     }
//     fetchProducts();
//   }, []);

//   return (
//     <div className="bg-white py-12">
//       <div className="max-w-[1200px] mx-auto px-4">
//         {/* Section Title */}
//         <h2 className="text-center text-2xl md:text-3xl font-bold text-[#151875] mb-8">
//           Featured Products
//         </h2>

//         {/* Products Container */}
//         <div className="overflow-x-scroll scrollbar-hide flex gap-6 md:gap-8">
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="flex-shrink-0 min-w-[250px] bg-[#F6F7FB] rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer"
//             >
//               <Link href={`/product/${product.slug.current}`}>
//                 {/* Image Section */}
//                 <div className="p-4 flex items-center justify-center">
//                   {product.image && (
//                     <Image
//                       src={urlForImage(product.image).url()}
//                       alt={product.name}
//                       width={150}
//                       height={150}
//                       className="w-auto h-[150px]"
//                       onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//                         const target = e.target as HTMLImageElement;
//                         target.src = '/path/to/default/image.jpg'; // Add the default image path here
//                       }}
//                     />
//                   )}
//                 </div>

//                 {/* Text Section */}
//                 <div className="bg-white p-4 rounded-b-lg hover:bg-[#2F1AC4] hover:text-white transition-colors">
//                   <h3 className="text-[#FB2E86] font-bold text-sm text-center hover:text-white">
//                     {product.name}
//                   </h3>
//                   <div className="flex justify-center mt-2">
//                     <div className="w-[40px] h-[8px] bg-[#FB2E86] rounded"></div>
//                   </div>
//                   <p className="text-[#151875] text-xs text-center mt-2 hover:text-white">
//                     Code: {product._id.slice(0, 6).toUpperCase()} {/* Placeholder */}
//                   </p>
//                   <p className="text-[#151875] font-bold text-sm text-center mt-1 hover:text-white">
//                     ${product.price}
//                   </p>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Dots */}
//         <div className="flex justify-center mt-6 space-x-2">
//           <span className="w-4 h-2 bg-[#FB2E86] rounded-full"></span>
//           <span className="w-4 h-2 bg-[#EEEFFB] rounded-full"></span>
//           <span className="w-4 h-2 bg-[#EEEFFB] rounded-full"></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;
















// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Product } from '../../../types/product';
// import { client } from '@/utils/sanity';
// import { allProducts, four } from '@/sanity/lib/queries';
// import Image from 'next/image';
// import { urlForImage } from '@/sanity/lib/image';

// const FeaturedProducts = () => {
//   const [product, setProduct] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProduct() {
//       const fetchProduct: Product[] = await client.fetch(four);
//       setProduct(fetchProduct);
//     }
//     fetchProduct();
//   }, []);

//   return (
//     <div>
//       {product.map((product) => (
//         <div key={product._id}> {/* Ensure _id or similar unique key */}
//           {product.name}
//           {product.image && (
//             <Image src={urlForImage(product.image).url()} alt={product.name} width={200} height={200} />
//           )
          
//           }
//           {product.price}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FeaturedProducts;





























// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import chair1 from "@/app/assets/chair1.png";
// import chair2 from "@/app/assets/chair2.png";
// import chair3 from "@/app/assets/chair3.png";
// import chair4 from "@/app/assets/chair4.png";
// import stripes from "@/app/assets/Group 1411.png";

// const FeaturedProducts = () => {
//   return (
//     <div className="bg-white py-12">
//       <div className="max-w-[1200px] mx-auto px-4">
//         {/* Section Title */}
//         <h2 className="text-center text-2xl md:text-3xl font-bold text-[#151875] mb-8">
//           Featured Products
//         </h2>

//         {/* Products Container */}
//         <div className="overflow-x-scroll scrollbar-hide flex gap-6 md:gap-8">
//           {/* Card 1 */}
//           <Link href="/product-details/1">
//             <div className="flex-shrink-0 min-w-[250px] bg-[#F6F7FB] rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
//               {/* Image Section */}
//               <div className="p-4 flex items-center justify-center">
//                 <Image
//                   src={chair1}
//                   alt="Chair 1"
//                   className="w-auto h-[150px]"
//                 />
//               </div>
//               {/* Text Section */}
//               <div className="bg-white p-4 rounded-b-lg hover:bg-[#2F1AC4] hover:text-white transition-colors">
//                 <h3 className="text-[#FB2E86] font-bold text-sm text-center hover:text-white">
//                   Cantilever Chair
//                 </h3>
//                 <div className="flex justify-center mt-2">
//                   <Image
//                     src={stripes}
//                     alt="Color Stripes"
//                     width={40}
//                     height={8}
//                   />
//                 </div>
//                 <p className="text-[#151875] text-xs text-center mt-2 hover:text-white">
//                   Code: Y523201
//                 </p>
//                 <p className="text-[#151875] font-bold text-sm text-center mt-1 hover:text-white">
//                   $42.00
//                 </p>
//               </div>
//             </div>
//           </Link>

//           {/* Card 2 */}
//           <Link href="/product-details/2">
//             <div className="flex-shrink-0 min-w-[250px] bg-[#F6F7FB] rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
//               <div className="p-4 flex items-center justify-center">
//                 <Image
//                   src={chair2}
//                   alt="Chair 2"
//                   className="w-auto h-[150px]"
//                 />
//               </div>
//               <div className="bg-white p-4 rounded-b-lg hover:bg-[#2F1AC4] hover:text-white transition-colors">
//                 <h3 className="text-[#FB2E86] font-bold text-sm text-center hover:text-white">
//                   Cantilever Chair
//                 </h3>
//                 <div className="flex justify-center mt-2">
//                   <Image
//                     src={stripes}
//                     alt="Color Stripes"
//                     width={40}
//                     height={8}
//                   />
//                 </div>
//                 <p className="text-[#151875] text-xs text-center mt-2 hover:text-white">
//                   Code: Y523201
//                 </p>
//                 <p className="text-[#151875] font-bold text-sm text-center mt-1 hover:text-white">
//                   $42.00
//                 </p>
//               </div>
//             </div>
//           </Link>

//           {/* Card 3 */}
//           <Link href="/product-details/3">
//             <div className="flex-shrink-0 min-w-[250px] bg-[#F6F7FB] rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
//               <div className="p-4 flex items-center justify-center">
//                 <Image
//                   src={chair3}
//                   alt="Chair 3"
//                   className="w-auto h-[150px]"
//                 />
//               </div>
//               <div className="bg-white p-4 rounded-b-lg hover:bg-[#2F1AC4] hover:text-white transition-colors">
//                 <h3 className="text-[#FB2E86] font-bold text-sm text-center hover:text-white">
//                   Cantilever Chair
//                 </h3>
//                 <div className="flex justify-center mt-2">
//                   <Image
//                     src={stripes}
//                     alt="Color Stripes"
//                     width={40}
//                     height={8}
//                   />
//                 </div>
//                 <p className="text-[#151875] text-xs text-center mt-2 hover:text-white">
//                   Code: Y523201
//                 </p>
//                 <p className="text-[#151875] font-bold text-sm text-center mt-1 hover:text-white">
//                   $42.00
//                 </p>
//               </div>
//             </div>
//           </Link>

//           {/* Card 4 */}
//           <Link href="/product-details/4">
//             <div className="flex-shrink-0 min-w-[250px] bg-[#F6F7FB] rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
//               <div className="p-4 flex items-center justify-center">
//                 <Image
//                   src={chair4}
//                   alt="Chair 4"
//                   className="w-auto h-[150px]"
//                 />
//               </div>
//               <div className="bg-white p-4 rounded-b-lg hover:bg-[#2F1AC4] hover:text-white transition-colors">
//                 <h3 className="text-[#FB2E86] font-bold text-sm text-center hover:text-white">
//                   Cantilever Chair
//                 </h3>
//                 <div className="flex justify-center mt-2">
//                   <Image
//                     src={stripes}
//                     alt="Color Stripes"
//                     width={40}
//                     height={8}
//                   />
//                 </div>
//                 <p className="ext-[#151875] text-xs text-center mt-2 hover:text-white">
//                   Code: Y523201
//                 </p>
//                 <p className="text-[#151875] font-bold text-sm text-center mt-1 hover:text-white">
//                   $42.00
//                 </p>
//               </div>
//             </div>
//           </Link>
//         </div>

//         {/* Navigation Dots */}
//         <div className="flex justify-center mt-6 space-x-2">
//           <span className="w-4 h-2 bg-[#FB2E86] rounded-full"></span>
//           <span className="w-4 h-2 bg-[#EEEFFB] rounded-full"></span>
//           <span className="w-4 h-2 bg-[#EEEFFB] rounded-full"></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;
