'use client';

import React, { useState, useEffect } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";

// Sanity Client Configuration
const sanity = sanityClient({
  projectId: "0ou5ayap",
  dataset: "production",
  apiVersion: '2023-01-01',
  useCdn: true,
});

// Product Interface
interface Product {
  _id: string;
  name: string;
  price: number | string;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
  tags?: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // Fetch Products from Sanity
  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"] {
        _id,
        name,
        price,
        description,
        discountPercentage,
        "imageUrl": coalesce(image.asset->url, "/placeholder-image.png"),
        isFeaturedProduct,
        stockLevel,
        category,
        tags
      }`;

      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  // Add Product to Cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  // Truncate Description
  const truncateDescription = (description: string) => {
    return description.length > 100 ? description.substring(0, 100) + "..." : description;
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">Products From API's Data</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <Image
              src={product.imageUrl || "/placeholder-image.png"}
              alt={product.name || "Product image"}
              width={300}
              height={300}
              className="w-full object-cover rounded-md"
            />

            {/* Product Details */}
            <div className="mt-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-800 mt-2 text-sm">{truncateDescription(product.description)}</p>

              {/* Price and Discount */}
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-slate-600 font-bold">
                    ${Number(product.price).toFixed(2)}
                  </p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-red-500">{product.discountPercentage}% off</p>
                  )}
                </div>
              </div>

              {/* Tags */}
              {product.tags && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-slate-400 text-black rounded-full px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              className="mt-4 w-full bg-[#7E33E0] text-white py-2 rounded-md hover:bg-purple-700 text-sm lg:text-base"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-red-800">Cart Summary</h2>

        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item._id}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div>
                  <h3 className="text-medium font-bold">{item.name}</h3>
                  <p className="text-sm text-blue-600">
                    ${Number(item.price).toFixed(2)}
                  </p>
                </div>
                <Image
                  src={item.imageUrl || "/placeholder-image.png"}
                  alt={item.name || "Product image"}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-black">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;































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