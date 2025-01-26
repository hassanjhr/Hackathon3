import { client } from "@/utils/sanity";
import { Product } from "../../../../types/product";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { addToCart } from "@/app/actions/actions";
import AddToCartButton from "@/app/components/AddToCartSection";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
        _id,
        name,
        _type,
        image,
        price,
        description,
        discountPercentage,
        stockLevel,
        category,
        tags,
      }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {product.image && (
            <div className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded mb-8 lg:mb-0">
              <Image
                alt={product.name}
                className="w-full h-full object-contain object-center rounded"
                src={urlForImage(product.image).url()}
                width={500}
                height={500}
              />
            </div>
          )}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>
            <p className="leading-relaxed mb-4 mt-2">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              {/* Add optional size/color selectors here */}
            </div>
            <div className="flex mt-2 mb-2">
              <span className="mr-3 text-lg font-medium text-gray-600">
                Discount: {product.discountPercentage ? `${product.discountPercentage}%` : "N/A"}
              </span>
              <span className="mr-3 text-lg font-medium text-gray-600">
                Stock Level: {product.stockLevel ? product.stockLevel : "Out of Stock"}
              </span>
            </div>
            <div className="mb-4">
              <span className="mr-3 text-sm text-gray-500">Category: {product.category}</span>
            </div>
            <div className="mb-4">
              <span className="mr-3 text-sm text-gray-500">Tags: {product.tags?.join(", ")}</span>
            </div>
            <div className="flex flex-col md:flex-row">
              <span className="title-font font-medium text-2xl text-gray-900 mr-4">
                {product.price ? `$${product.price}` : "Price Unavailable"}
              </span>
             
                <AddToCartButton product={product} />
              
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-[#FB2E86] hover:text-white">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}













// import { client } from "@/utils/sanity";
// import { Product } from "../../../../types/product";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import { urlForImage } from "@/sanity/lib/image";

// interface ProductPageProps {
//   params: Promise<{ slug: string }>;
// }

// async function getProduct(slug: string): Promise<Product> {
//   return client.fetch(
//     groq`*[_type == "product" && slug.current == $slug][0] {
//         _id,
//         name,
//         _type,
//         image,
//         price,
//         description,
//         discountPercentage,
//         stockLevel,
//         category,
//         tags,


//       }`,
//     { slug }
//   );
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const { slug } = await params;
//   const product = await getProduct(slug);

//   return (
//     <section className="text-gray-600 body-font overflow-hidden">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-wrap">
//           {product.image && (
//             <div className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded mb-8 lg:mb-0">
//               <Image
//                 alt={product.name}
//                 className="w-full h-full object-contain object-center rounded"
//                 src={urlForImage(product.image).url()}
//                 width={500}
//                 height={500}
//               />
//             </div>
//           )}
//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//             <h2 className="text-sm title-font text-gray-500 tracking-widest">
//               BRAND NAME
//             </h2>
//             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//               {product.name}
//             </h1>
//             <div className="flex mb-4">
//               <span className="flex items-center">
//                 {[...Array(4)].map((_, i) => (
//                   <svg
//                     key={i}
//                     fill="currentColor"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-4 h-4 text-indigo-500"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                   </svg>
//                 ))}
//                 <span className="text-gray-600 ml-3">4 Reviews</span>
//               </span>
//             </div>
//             <p className="leading-relaxed mb-4">
//               This is a sample description of the product. Please replace it
//               with actual data if available in your `Product` type.
//             </p>
//             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//               <div className="flex">
//                 <span className="mr-3">Color</span>
//                 <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
//                 <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
//                 <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
//               </div>
//               <div className="flex ml-6 items-center">
//                 <span className="mr-3">Size</span>
//                 <div className="relative">
//                   <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
//                     <option>SM</option>
//                     <option>M</option>
//                     <option>L</option>
//                     <option>XL</option>
//                   </select>
//                   <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
//                     <svg
//                       fill="none"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       className="w-4 h-4"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M6 9l6 6 6-6" />
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col md:flex-row">
//               <span className="title-font font-medium text-2xl text-gray-900 mr-4">
//                 {product.price ? `$${product.price}` : "Price Unavailable"}
//               </span>
//               <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mb-4 md:mb-0">
//                 Buy Now
//               </button>
//               <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
//                 <svg
//                   fill="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   className="w-5 h-5"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









// import { client } from "@/utils/sanity";
// import { Product } from "../../../../types/product";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import { urlForImage } from "@/sanity/lib/image";

// interface ProductPageProps {
//     params : Promise<{slug: string}>
// }

// async function getProduct(slug:string): Promise<Product > {
//     return client.fetch(
//         groq`*[_type == "product" && slug.current == $slug][0] {
//         _id,
//         name,
//         _type,
//         image,
//         price,
//         }`, {slug}
//     )
// }

// export default async function ProductPage({params}: ProductPageProps) {
//     const {slug} = await params;
//     const product = await getProduct(slug)

//     return (
//         <div className="max-w-7xl mx-auto px-4">
//             <div className="flex md:grid-cols-2 gap-12">

//                 <div className="aspect-square">
//                     {product.image && (
//                         <Image
//                         src = {urlForImage(product.image).url()}
//                         alt = {product.name}
//                         width={500}
//                         height={500}
//                         className="rounded-lg shadow-md" 
//                         />
//                     )}

//                 </div>

//                 <div className="flex flex-col gap-8">
//                     <h1 className="text-4xl font-bold">
//                         {product.name}
//                     </h1>

//                     <p className="text-2xl font-sans">
//                         {product.price}
//                     </p>
//                 </div>

//             </div>
           

//         </div>
//     )
// } 






// ...............................testing........................................



// import { client } from "@/utils/sanity";
// import { Product } from "../../../../types/product";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import { urlForImage } from "@/sanity/lib/image";

// interface ProductPageProps {
//     params : Promise<{slug: string}>
// }

// async function getProduct(slug:string): Promise<Product > {
//     return client.fetch(
//         groq`*[_type == "product" && slug.current == $slug][0] {
//         _id,
//         name,
//         _type,
//         image,
//         price,
//         }`, {slug}
//     )
// }

// export default async function ProductPage({params}: ProductPageProps) {
//     const {slug} = await params;
//     const product = await getProduct(slug)

//     return (
//         <div className="max-w-7xl mx-auto px-4">
//             <div className="flex md:grid-cols-2 gap-12">

//                 <div className="aspect-square">
//                     {product.image && (
//                         <Image
//                         src = {urlForImage(product.image).url()}
//                         alt = {product.name}
//                         width={500}
//                         height={500}
//                         className="rounded-lg shadow-md" 
//                         />
//                     )}

//                 </div>

//                 <div className="flex flex-col gap-8">
//                     <h1 className="text-4xl font-bold">
//                         {product.name}
//                     </h1>

//                     <p className="text-2xl font-sans">
//                         {product.price}
//                     </p>
//                 </div>

//             </div>
           

//         </div>
//     )
// } 





// .........................................................................

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


































// import { client } from "@/utils/sanity";
// import { Product } from "../../../../types/product";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import { urlForImage } from "@/sanity/lib/image";

// interface ProductPageProps {
//     params : Promise<{slug: string}>
// }
// async function getProduct(slug : string) : Promise<Product> {
//     return client.fetch(
//         groq`[_type == "product" && slug.current == $slug][0] {
//         _id,
//         name,
//         price,
//         description,
//         discountPercentage,
//         "imageUrl": coalesce(image.asset->url, "/placeholder-image.png"),
//         stockLevel,
//         category,
//         tags,
//         } `, {slug}
//     )
// }

// export default async function ProductPage({params} : ProductPageProps) {
//     const {slug} = await params;

//     const product = await getProduct(slug);


//     return (
//         <div className="max-w-7xl mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                 <div className="aspect-square">

//                     {product.image &&(
//                         <Image 
//                         src={urlForImage(product.image).url()}
//                         alt={product.name}
//                         width={500}
//                         height={500}
//                         className="rounded-lg shadow-md" 
//                         />
//                     )}

//                 </div>

//                 <div className="flex flex-col gap-8">
//                     <h1 className="text-4xl font-bold">{product.name}</h1>

//                     <p className="text-2xl font-sans">
//                         {product.price}

//                     </p>

//                 </div>


//             </div>
            
//         </div>
//     )

    
// }







// // app/product/[slug]/page.tsx
// import React from "react";
// import { useParams } from "next/navigation"; // Use `useParams` instead of `useRouter`
// import Image from "next/image";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   discountPercentage?: number;
//   imageUrl: string;
//   stockLevel: number;
//   category: string;
// }

// const fetchProduct = async (slug: string): Promise<Product | null> => {
//   const query = encodeURIComponent(
//     `*[_type == "product" && _id == "${slug}"][0]{
//       _id,
//       name,
//       price,
//       description,
//       discountPercentage,
//       "imageUrl": coalesce(image.asset->url, ""),
//       stockLevel,
//       category
//     }`
//   );
//   const url = `https://your-sanity-api-endpoint/query?query=${query}`;
//   const res = await fetch(url);
//   const data = await res.json();
//   return data.result || null;
// };

// const ProductPage = async () => {
//   const params = useParams(); // Use `useParams` to get the slug from the URL
//   const { slug } = params;

//   if (!slug) return <div>Loading...</div>;

//   const product = await fetchProduct(slug as string);

//   if (!product) return <div>Product not found</div>;

//   return (
//     <section className="text-gray-600 body-font overflow-hidden">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-wrap">
//           <Image
//             alt={product.name}
//             className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
//             src={product.imageUrl || "/placeholder.png"}
//             width={400}
//             height={400}
//           />
//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//             <h2 className="text-sm title-font text-gray-500 tracking-widest">
//               {product.category.toUpperCase()}
//             </h2>
//             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//               {product.name}
//             </h1>
//             <p className="leading-relaxed">{product.description}</p>
//             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//               <span className="mr-3">Stock Level: {product.stockLevel}</span>
//             </div>
//             <div className="flex">
//               <span className="title-font font-medium text-2xl text-gray-900">
//                 ${product.price.toFixed(2)}
//               </span>
//               <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductPage;
