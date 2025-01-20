"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPenNib } from "react-icons/fa"; 
import { BsCalendar } from "react-icons/bs"; 

import blog1 from "@/app/assets/blog1.png";
import blog2 from "@/app/assets/blog2.png";
import blog3 from "@/app/assets/blog3.png";

const LatestBlog = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      author: "SaberAli",
      date: "21 August, 2020",
      title: "Top essential Trends in 2021",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      link: "/singleblog", 
    },
    {
      id: 2,
      image: blog2,
      author: "Surfauxion",
      date: "21 August, 2020",
      title: "Top essential Trends in 2021",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      link: "/singleblog", 
    },
    {
      id: 3,
      image: blog3,
      author: "SaberAli",
      date: "21 August, 2020",
      title: "Top essential Trends in 2021",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      link: "/singleblog", 
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#151875] mb-10">
          Latest Blog
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-[493px] w-[350px] max-w-full mx-auto flex flex-col"
            >
              {/* Image Section */}
              <div className="h-[200px] w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col justify-between p-6 h-[293px]">
                {/* Author and Date */}
                <div className="flex items-center space-x-4 text-sm text-[#151875] mb-4">
                  <span className="flex items-center">
                    <FaPenNib className="text-[#FB2E86] mr-2" />
                    {blog.author}
                  </span>
                  <span className="flex items-center">
                    <BsCalendar className="text-[#FFA454] mr-2" />
                    {blog.date}
                  </span>
                </div>
                {/* Title */}
                <Link href={blog.link}>
                  <h3 className="text-lg font-bold text-[#151875] mb-4 hover:text-[#FB2E86] transition">
                    {blog.title}
                  </h3>
                </Link>
                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
                {/* Read More Link */}
                <Link
                  href={blog.link}
                  className="text-[#151875] text-sm font-medium hover:text-[#FB2E86] transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
