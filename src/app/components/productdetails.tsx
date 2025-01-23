// components/ProductDetail.tsx
"use client"; // Add this directive at the top

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage?: number;
  imageUrl: string;
  category: string;
}

interface ProductDetailProps {
  products: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ products }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.slice(0, visibleCount).map((product) => (
            <div key={product._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={`/product/${product._id}`}>
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt={product.name}
                    className="object-cover object-center w-full h-full block"
                    src={product.imageUrl || "/placeholder.png"}
                    layout="fill"
                  />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category.toUpperCase()}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <p className="mt-1">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < products.length && (
          <button
            onClick={handleLoadMore}
            className="mt-8 mx-auto flex justify-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;

















































// "use client";

// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

// const ProductDetailsTabs = () => {
//   const [activeTab, setActiveTab] = useState("description");

//   const tabs = ["Description", "Additional Info", "Reviews", "Video"];

//   const handleTabClick = (tab: string) => {
//     setActiveTab(tab.toLowerCase());
//   };

//   return (
//     <div className="bg-[#F9F8FE] py-20 px-4 flex justify-center">
//       <div className="max-w-[1200px] w-full">
//         {/* Tab Navigation */}
//         <div className="flex gap-6  border-gray-200 pb-2 mb-6">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => handleTabClick(tab)}
//               className={`text-sm md:text-base font-medium ${
//                 activeTab === tab.toLowerCase()
//                   ? "text-[#151875] border-b-2 border-[#151875]"
//                   : "text-gray-400"
//               } hover:text-[#151875] transition`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Tab Content */}
//         {activeTab === "description" && (
//           <div>
//             <h2 className="text-lg sm:text-[22px] font-semibold text-[#151875] mb-4">
//               Varius tempor.
//             </h2>
//             <p className="text-sm sm:text-[16px] text-[#A9ACC6] leading-relaxed mb-6">
//               Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
//               ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
//               varius ac est bibendum. Scelerisque a, risus ac ante. Velit
//               consectetur neque, elit, aliquet. Non varius proin sed urna,
//               egestas consequat laoreet diam tincidunt. Magna eget faucibus
//               cras justo, tortor sed donec tempus. Imperdiet consequat, quis
//               diam arcu, nulla lobortis justo netus dis. Eu in fringilla
//               vulputate nunc nec. Dui, massa viverra.
//             </p>
//             <h3 className="text-base sm:text-[22px] font-semibold text-[#151875] mb-4">
//               More details
//             </h3>
//             <ul className="space-y-3">
//               {[
//                 "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
//                 "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
//                 "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
//                 "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
//               ].map((detail, index) => (
//                 <li key={index} className="flex items-center text-sm sm:text-[16px] text-[#A9ACC6]">
//                   <FaArrowRight className="text-black mr-2" />
//                   {detail}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {/* */}
//         {activeTab === "additional info" && (
//           <div>
//             <h2 className="text-lg font-semibold text-[#151875] mb-4">
//               Additional Information
//             </h2>
//             <p className="text-sm text-[#151875] leading-relaxed">
//               Content for additional information goes here.
//             </p>
//           </div>
//         )}
//         {activeTab === "reviews" && (
//           <div>
//             <h2 className="text-lg font-semibold text-[#151875] mb-4">Reviews</h2>
//             <p className="text-sm text-[#151875] leading-relaxed">
//               Content for reviews goes here.
//             </p>
//           </div>
//         )}
//         {activeTab === "video" && (
//           <div>
//             <h2 className="text-lg font-semibold text-[#151875] mb-4">Video</h2>
//             <p className="text-sm text-[#151875] leading-relaxed">
//               Content for video goes here.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsTabs;
