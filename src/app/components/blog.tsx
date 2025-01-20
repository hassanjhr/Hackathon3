"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {  FaInstagram,  } from "react-icons/fa";


import BlogImage1 from "@/app/assets/blog1.jpg";
import BlogImage2 from "@/app/assets/blog2.jpg";
import BlogImage3 from "@/app/assets/blog3.jpg";
import RecentPost1 from "@/app/assets/recent1.jpg";
import RecentPost2 from "@/app/assets/recent2.jpg";
import RecentPost3 from "@/app/assets/recent3.jpg";
import RecentPost4 from "@/app/assets/recent4.jpg";
import SaleProduct1 from "@/app/assets/sale1.jpg";
import SaleProduct2 from "@/app/assets/sale2.jpg";
import SaleProduct3 from "@/app/assets/sale3.jpg";
import OfferProduct1 from "@/app/assets/offer1.jpg";
import OfferProduct2 from "@/app/assets/offer2.jpg";
import OfferProduct3 from "@/app/assets/offer3.jpg";
import OfferProduct4 from "@/app/assets/offer4.jpg";
import { FaPenNib } from "react-icons/fa"; 
import { BsCalendar } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";


const Blog = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-10">
        {/* Blog Posts */}
        <div className="flex-1 space-y-8">
          {/* Post 1 */}
          <div className="bg-white  rounded-md overflow-hidden">
            <Image
              src={BlogImage1}
              alt="Blog Post 1"
              className="w-full h-[250px] sm:h-[453px] object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-[#B7BACB] mb-4">
                    <FaPenNib className="text-[#FB2E86] mr-2" />
                    <span className="text-[#151875] bg-[#FFE7F9] w-[100px] h-[20px] sm:w-[150px] sm:h-[25px] text-center font-medium text-[9px] sm:text-[14px]"> Surf Auxion</span>
                <span className="mx-2 text-[#FB2E86] text-[20px]"></span>
                    <BsCalendar className="text-[#FFA454] mr-2" />
                    <span className="text-[#151875] bg-[#FFECE2] w-[130px] h-[25px] text-center font-medium text-[9px] sm:text-[14px]">Aug 09 2020</span>
              </div>
              <h2 className="text-[16px] sm:text-[24px] md:text-[30px] font-bold text-[#151875] mb-4">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-sm text-[#8A8FB9] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultricies in in neque, porta dignissim.
              </p>
              <Link href="#" className="text-[#151875] text-sm sm:text-[18px] hover:underline">
              Read More<span className="mx-1 text-[#FB2E86] text-[20px]">•</span>
                 
              </Link>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-white rounded-md overflow-hidden">
            <Image
              src={BlogImage2}
              alt="Blog Post 2"
              className="w-full h-[250px] sm:h-[453px] object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-[#B7BACB] mb-4">
                    <FaPenNib className="text-[#FB2E86] mr-2" />
                    <span className="text-[#151875] bg-[#FFE7F9] w-[100px] h-[20px] sm:w-[150px] sm:h-[25px] text-center font-medium text-[9px] sm:text-[14px]"> Surf Auxion</span>
                <span className="mx-2 text-[#FB2E86] text-[20px]"></span>
                    <BsCalendar className="text-[#FFA454] mr-2" />
                    <span className="text-[#151875] bg-[#FFECE2] w-[130px] h-[25px] text-center font-medium text-[9px] sm:text-[14px]">Aug 09 2020</span>
              </div>
              <h2 className="text-[16px] sm:text-[24px] md:text-[30px] font-bold text-[#151875] mb-4">
              Aenean vitae in aliquam ultrices lectus. Etiam.
              </h2>
              <p className="text-sm text-[#8A8FB9] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultricies in in neque, porta dignissim.
              </p>
              <Link href="#" className="text-[#151875] text-sm sm:text-[18px] hover:underline">
              Read More<span className="mx-1 text-[#FB2E86] text-[20px]">•</span>
                 
              </Link>
            </div>
          </div>

          {/* Post 3 */}
          <div className="bg-white  rounded-md overflow-hidden">
            <Image
              src={BlogImage3}
              alt="Blog Post 3"
              className="w-full h-[250px] sm:h-[453px] object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-[#B7BACB] mb-4">
                    <FaPenNib className="text-[#FB2E86] mr-2" />
                    <span className="text-[#151875] bg-[#FFE7F9] w-[100px] h-[20px] sm:w-[150px] sm:h-[25px] text-center font-medium text-[9px] sm:text-[14px]"> Surf Auxion</span>
                <span className="mx-2 text-[#FB2E86] text-[20px]"></span>
                    <BsCalendar className="text-[#FFA454] mr-2" />
                    <span className="text-[#151875] bg-[#FFECE2] w-[130px] h-[25px] text-center font-medium text-[9px] sm:text-[14px]">Aug 09 2020</span>
              </div>
              <h2 className="text-[16px] sm:text-[24px] md:text-[30px] font-bold text-[#151875] mb-4">
              Sit nam congue feugiat nisl, mauris amet nisi. 
              </h2>
              <p className="text-sm text-[#8A8FB9] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultricies in in neque, porta dignissim.
              </p>
              <Link href="#" className="text-[#151875] text-sm sm:text-[18px] hover:underline">
              Read More<span className="mx-1 text-[#FB2E86] text-[20px]">•</span>
                 
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[300px] space-y-8">
          {/* Search */}
          <div>
            <h3 className="text-[22px] font-semibold text-[#151875] mb-4">Search</h3>
            <input
              type="text"
              placeholder="Search for Posts"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[22px] font-semibold text-[#151875] mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-[#151875] grid grid-cols-2 ">
              <li className=" hover:bg-[#F939BF] ">Hobbies (14)</li>
              <li className="hover:bg-[#F939BF]">Women (21)</li>
              <li className="hover:bg-[#F939BF]">Women (21)</li>
              <li className="hover:bg-[#F939BF]">Women (21)</li>
              <li className="hover:bg-[#F939BF]">Women (21)</li>
              <li className="hover:bg-[#F939BF]">Women (21)</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-[22px] font-semibold text-[#151875] mb-4">
              Recent Post
            </h3>
            <ul className="space-y-4">
              {[RecentPost1, RecentPost2, RecentPost3, RecentPost4].map(
                (recent, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <Image
                      src={recent}
                      alt="Recent Post"
                      className="w-[50px] h-[50px] object-cover rounded-md"
                    />
                    <div>
                      <p className="text-sm text-[#151875]">
                        It is a long established fact
                      </p>
                      <p className="text-xs text-[#B7BACB]">Aug 09 2020</p>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Sale Product */}
          <div>
            <h3 className="text-[22px] font-semibold text-[#151875] mb-4">
              Sale Product
            </h3>
            <ul className="space-y-4">
              {[SaleProduct1, SaleProduct2, SaleProduct3].map(
                (sale, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <Image
                      src={sale}
                      alt="Sale Product"
                      className="w-[50px] h-[50px] object-cover rounded-md"
                    />
                    <div>
                      <p className="text-sm text-[#151875]">
                        Elit ornare in enim mauris.
                      </p>
                      <p className="text-xs text-[#B7BACB]">Aug 09 2020</p>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Offer Product */}
          <div>
            <h3 className="text-[22px] font-semibold text-[#151875] mb-4 ">
              Offer Product
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[OfferProduct1, OfferProduct2, OfferProduct3, OfferProduct4].map(
                (offer, index) => (
                  <div key={index}>
                    <Image
                      src={offer}
                      alt="Offer Product"
                      className="w-full h-auto object-cover"
                    />
                    <h2 className="text-[#151875] font-semibold">Duis lectus est.</h2>
                    <p className="text-sm text-[#8A8FB9]">$12.00 - $15.00</p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-[22px] font-semibold text-[#151875] mb-4">Follow</h3>
            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank">
                <IoLogoFacebook className="text-[#5625DF] text-2xl hover:text-black  cursor-pointer" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <FaInstagram className="text-white bg-[#FF27B7] text-2xl hover:bg-black  hover:border-black  border-4 rounded-full border-[#FF27B7] cursor-pointer" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <AiFillTwitterCircle className="text-[#37DAF3] text-2xl hover:text-black cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-[22px] font-semibold text-[#151875] mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["General", "Atsanil", "Insas", "Bibsaas", "Nulla"].map(
                (tag, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-sm text-[#151875]  px-3 py-1 rounded hover:text-[#FB2E86] hover:underline "
                  >
                    {tag}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
