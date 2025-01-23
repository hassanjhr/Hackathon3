import { client } from "@/utils/sanity";
import { Product } from "../../../../types/product";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

interface ProductPageProps {
    params : Promise<{slug: string}>
}

async function getProduct(slug:string): Promise<Product > {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0] {
        _id,
        name,
        _type,
        image,
        price,
        }`, {slug}
    )
}

export default async function ProductPage({params}: ProductPageProps) {
    const {slug} = await params;
    const product = await getProduct(slug)

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex md:grid-cols-2 gap-12">

                <div className="aspect-square">
                    {product.image && (
                        <Image
                        src = {urlForImage(product.image).url()}
                        alt = {product.name}
                        width={500}
                        height={500}
                        className="rounded-lg shadow-md" 
                        />
                    )}

                </div>

                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl font-bold">
                        {product.name}
                    </h1>

                    <p className="text-2xl font-sans">
                        {product.price}
                    </p>
                </div>

            </div>
           

        </div>
    )
} 














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
