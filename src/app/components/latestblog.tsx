import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'  

export interface Blog {
  title: string
  excerpt: string
  coverImage: { asset: { url: string } } | null 
  slug: { current: string }
}

async function LatestBlog() {
  let data: Blog[] = []
  
  try {
    data = await client.fetch(`
      *[_type == "blog"] | order(_publishedAt asc) {
        title,
        excerpt,
        body,
        coverImage,
        slug
      }
    `)
  } catch (error) {
    console.error('Error fetching blogs:', error)
  }

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="flex flex-wrap">
              {data.length === 0 ? (
                <p>No blog posts found.</p>  
              ) : (
                data.map((blog, index) => (
                  <div key={index} className="p-4 md:w-1/3 transition-all hover:scale-105">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <Link href={`/blog/${blog.slug.current}`} passHref>
                        <div className="relative w-full h-48">
                        
                          {blog.coverImage ? (
                            <Image
                              src={urlForImage(blog.coverImage).url()}  
                              alt={blog.title}
                              className="object-cover object-center"
                              fill
                            />
                          ) : (
                            <div className="h-full bg-gray-300"></div> 
                          )}
                        </div>
                      </Link>
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                          Insights
                        </h2>
                        <h1 className="title-font text-lg font-medium text-black mb-3">
                          {blog.title}
                        </h1>
                        <p className="leading-relaxed text-gray-300 mb-3 line-clamp-3">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center flex-wrap">
                          <Link
                            href={`/blog/${blog.slug.current}`}
                            className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LatestBlog












// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaPenNib } from "react-icons/fa"; 
// import { BsCalendar } from "react-icons/bs"; 

// import blog1 from "@/app/assets/blog1.png";
// import blog2 from "@/app/assets/blog2.png";
// import blog3 from "@/app/assets/blog3.png";

// const LatestBlog = () => {
//   const blogs = [
//     {
//       id: 1,
//       image: blog1,
//       author: "SaberAli",
//       date: "21 August, 2020",
//       title: "Top essential Trends in 2021",
//       description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
//       link: "/singleblog", 
//     },
//     {
//       id: 2,
//       image: blog2,
//       author: "Surfauxion",
//       date: "21 August, 2020",
//       title: "Top essential Trends in 2021",
//       description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
//       link: "/singleblog", 
//     },
//     {
//       id: 3,
//       image: blog3,
//       author: "SaberAli",
//       date: "21 August, 2020",
//       title: "Top essential Trends in 2021",
//       description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
//       link: "/singleblog", 
//     },
//   ];



  
//   return (
//     <div className="bg-white py-16">
//       <div className="max-w-[1200px] mx-auto px-6">
//         {/* Section Title */}
//         <h2 className="text-center text-2xl md:text-3xl font-bold text-[#151875] mb-10">
//           Latest Blog
//         </h2>

//         {/* Blog Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogs.map((blog) => (
//             <div
//               key={blog.id}
//               className="border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-[493px] w-[350px] max-w-full mx-auto flex flex-col"
//             >
//               {/* Image Section */}
//               <div className="h-[200px] w-full">
//                 <Image
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Text Section */}
//               <div className="flex flex-col justify-between p-6 h-[293px]">
//                 {/* Author and Date */}
//                 <div className="flex items-center space-x-4 text-sm text-[#151875] mb-4">
//                   <span className="flex items-center">
//                     <FaPenNib className="text-[#FB2E86] mr-2" />
//                     {blog.author}
//                   </span>
//                   <span className="flex items-center">
//                     <BsCalendar className="text-[#FFA454] mr-2" />
//                     {blog.date}
//                   </span>
//                 </div>
//                 {/* Title */}
//                 <Link href={blog.link}>
//                   <h3 className="text-lg font-bold text-[#151875] mb-4 hover:text-[#FB2E86] transition">
//                     {blog.title}
//                   </h3>
//                 </Link>
//                 {/* Description */}
//                 <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
//                 {/* Read More Link */}
//                 <Link
//                   href={blog.link}
//                   className="text-[#151875] text-sm font-medium hover:text-[#FB2E86] transition"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestBlog;
