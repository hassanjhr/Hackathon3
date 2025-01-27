



'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '../../../types/product';
import { client } from '@/utils/sanity';
import { allProducts } from '@/sanity/lib/queries';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';
import { addToCart } from '../actions/actions';
import Swal from 'sweetalert2';

const FeaturedProducts = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchProduct);
    }
    fetchProduct();
  }, []);

// add to cart function
  const handleAddToCart = (e: React.MouseEvent, product : Product) => {
    e.preventDefault();
    Swal.fire({
      position : 'top-right',
      icon : 'success',
      title : `${product.name} added to cart`,
      showConfirmButton : false,
      timer : 1500
    })
    addToCart(product)
  }

  return (

    <div className="bg-[#F6F7FB]">
          {/* Breadcrumb Section */}
           <div className="bg-[#F6F7FB] py-10">
             <div className="max-w-[1200px] mx-auto px-6">
              <h2 className="text-xl font-bold text-[#151875] mb-2">Product Details</h2>
             <div className="text-sm text-[#151875] mb-5">
               <Link href="/" className="hover:text-[#FB2E86] hover:underline">
                 Home
               </Link>
               <span className="mx-2 text-[#B7BACB]">•</span>
               <span>Pages</span>
                <span className="mx-2 text-[#B7BACB]">•</span>
               <span className="text-[#FB2E86]">Product Details</span>
            </div>
           </div>




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
      </div>
    </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;























// 'use client';

// import React, { useState, useEffect } from "react";
// import sanityClient from "@sanity/client";
// import Image from "next/image";

// // Sanity Client Configuration
// const sanity = sanityClient({
//   projectId: "0ou5ayap",
//   dataset: "production",
//   apiVersion: '2023-01-01',
//   useCdn: true,
// });

// // Product Interface
// interface Product {
//   _id: string;
//   name: string;
//   price: number | string;
//   description: string;
//   discountPercentage: number;
//   imageUrl: string;
//   isFeaturedProduct: boolean;
//   stockLevel: number;
//   category: string;
//   tags?: string[];
// }

// const ProductCards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);

//   // Fetch Products from Sanity
//   const fetchProducts = async () => {
//     try {
//       const query = `*[_type == "product"] {
//         _id,
//         name,
//         price,
//         description,
//         discountPercentage,
//         "imageUrl": coalesce(image.asset->url, "/placeholder-image.png"),
//         isFeaturedProduct,
//         stockLevel,
//         category,
//         tags
//       }`;

//       const data = await sanity.fetch(query);
//       setProducts(data);
//     } catch (error) {
//       console.error("Failed to fetch products", error);
//     }
//   };

//   // Add Product to Cart
//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.name} has been added to your cart!`);
//   };

//   // Truncate Description
//   const truncateDescription = (description: string) => {
//     return description.length > 100 ? description.substring(0, 100) + "..." : description;
//   };

//   // Fetch products on component mount
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-center text-slate-800 mt-4 mb-4">Products From API's Data</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
//           >
//             {/* Product Image */}
//             <Image
//               src={product.imageUrl || "/placeholder-image.png"}
//               alt={product.name || "Product image"}
//               width={300}
//               height={300}
//               className="w-full object-cover rounded-md"
//             />

//             {/* Product Details */}
//             <div className="mt-4 flex flex-col flex-grow">
//               <h2 className="text-lg font-semibold">{product.name}</h2>
//               <p className="text-gray-800 mt-2 text-sm">{truncateDescription(product.description)}</p>

//               {/* Price and Discount */}
//               <div className="flex justify-between items-center mt-4">
//                 <div>
//                   <p className="text-slate-600 font-bold">
//                     ${Number(product.price).toFixed(2)}
//                   </p>
//                   {product.discountPercentage > 0 && (
//                     <p className="text-sm text-red-500">{product.discountPercentage}% off</p>
//                   )}
//                 </div>
//               </div>

//               {/* Tags */}
//               {product.tags && (
//                 <div className="mt-2 flex flex-wrap gap-2">
//                   {product.tags.map((tag, index) => (
//                     <span key={index} className="text-xs bg-slate-400 text-black rounded-full px-2 py-1">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               className="mt-4 w-full bg-[#7E33E0] text-white py-2 rounded-md hover:bg-purple-700 text-sm lg:text-base"
//               onClick={() => addToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Cart Summary */}
//       <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-black text-red-800">Cart Summary</h2>

//         {cart.length > 0 ? (
//           <ul className="space-y-4">
//             {cart.map((item) => (
//               <li
//                 key={item._id}
//                 className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
//               >
//                 <div>
//                   <h3 className="text-medium font-bold">{item.name}</h3>
//                   <p className="text-sm text-blue-600">
//                     ${Number(item.price).toFixed(2)}
//                   </p>
//                 </div>
//                 <Image
//                   src={item.imageUrl || "/placeholder-image.png"}
//                   alt={item.name || "Product image"}
//                   width={50}
//                   height={50}
//                   className="rounded-md"
//                 />
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-center text-black">Your cart is empty</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductCards;































// "use client";



// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import sponsorsImage from "@/app/assets/sponsors.png";
// import ProductCart from "../components/productcart";
// import ProductDetailsTabs from "../components/productdetails";
// import RelatedProducts from "../components/relatedproducts";






// const ProductPage = () => {
//     return (
    
//             <div className="bg-[#F6F7FB]">
//       {/* Breadcrumb Section */}
//       <div className="bg-[#F6F7FB] py-10">
//         <div className="max-w-[1200px] mx-auto px-6">
//           <h2 className="text-xl font-bold text-[#151875] mb-2">Product Details</h2>
//           <div className="text-sm text-[#151875]">
//             <Link href="/" className="hover:text-[#FB2E86] hover:underline">
//               Home
//             </Link>
//             <span className="mx-2 text-[#B7BACB]">•</span>
//             <span>Pages</span>
//             <span className="mx-2 text-[#B7BACB]">•</span>
//             <span className="text-[#FB2E86]">Product Details</span>
//           </div>
//         </div>
//       </div>

      
// {/*  */}
//       {/* Shop Section */}

  
//       <ProductCart/>
//       <ProductDetailsTabs/>
//       <RelatedProducts/>


      
// {/*  */}
//       {/* Sponsors Section */}
//       <div className="bg-white py-10 flex justify-center">
//         <Image src={sponsorsImage} alt="Sponsors" className="max-w-[80%] md:max-w-[60%]" />
//       </div>
//     </div>


    
//     )
// }

// export default ProductPage;