"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";



import VideoImage from "@/app/assets/video-placeholder.jpg";
import Product1 from "@/app/assets/product11.jpg";
import Product2 from "@/app/assets/product12.jpg";
import Product3 from "@/app/assets/product13.jpg";
import Product4 from "@/app/assets/product14.jpg";
import BlogImage1 from "@/app/assets/blog1.jpg";
import Product22 from "@/app/assets/Rectangle 63.png"

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
import {  FaInstagram } from "react-icons/fa";
import { IoIosArrowRoundBack ,IoIosArrowRoundForward } from "react-icons/io";
import BlogCommet1 from "@/app/assets/BlogImage11.jpg"
import BlogCommet2 from "@/app/assets/BlogImage12.jpg"
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";



  
  const SingleBlog = () => {
    const products = [
      {
        id: 1,
        name: "Quam sed",
        price: "$32.00",
        salePrice: "$56.00",
        image: Product2,
      },
      {
        id: 2,
        name: "Tristique sed",
        price: "$32.00",
        salePrice: "$56.00",
        image: Product22,
      },
      {
        id: 3,
        name: "A etiam",
        price: "$32.00",
        salePrice: "$56.00",
        image: Product3,
      },
      {
        id: 4,
        name: "Mi nisi",
        price: "$32.00",
        salePrice: "$56.00",
        image: Product4,
      },
    ];
  
  
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
                <span className="text-[#151875] bg-[#FFE7F9] w-[100px] h-[20px] sm:w-[150px] sm:h-[25px] text-center font-medium text-[9px] sm:text-[14px]">
                  {" "}
                  Surf Auxion
                </span>
                <span className="mx-2 text-[#FB2E86] text-[20px]"></span>
                <BsCalendar className="text-[#FFA454] mr-2" />
                <span className="text-[#151875] bg-[#FFECE2] w-[130px] h-[25px] text-center font-medium text-[9px] sm:text-[14px]">
                  Aug 09 2020
                </span>
              </div>
              <h2 className="text-[16px] sm:text-[24px] md:text-[30px] font-bold text-[#151875] mb-4">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-sm md:text-[16px] text-[#8A8FB9] mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at.im.
              </p>
              <p className="text-sm md:text-[16px] text-[#8A8FB9] mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,
              </p>

              <p className="text-sm md:text-[18px] text-[#8A8FB9] mb-4 leading-[50px] mt-[50px] border-l-2 pl-2 border-[#FC45A0] bg-[#FAFAFB]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Commodo dictum sapien, amet,
                consequat toamk risusu”
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-white   rounded-md p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Image
                  src={VideoImage}
                  alt="Video Placeholder"
                  className="w-full h-[200px] object-cover"
                />
              </div>

              <div className="relative">
                <Image
                  src={Product1}
                  alt="Video Placeholder"
                  className="w-full h-[200px] object-cover "
                />
              </div>
            </div>
          </div>

          <p className="text-sm md:text-[16px] text-[#8A8FB9] mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Velit dapibus est, nunc, montes, lacus consequat integer
            viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec
            vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Velit dapibus est, nunc,
          </p>

          {/* Product Carousel */}
          <div >
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white   overflow-hidden"
              >
                <div>
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="text-justify p-4">
                  <h4 className="text-sm md:text-[18px] font-medium text-black mb-2">
                    {product.name}
                  </h4>
                  <div className="flex justify-normal items-center gap-2 mb-1">
                    <span className="text-[#232A69] text-sm md:text-[14px] font-medium">
                      {product.price}
                    </span>
                    <span className="text-[#FF38B0] line-through text-sm md:text-[14px]">
                      {product.salePrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm md:text-[16px] text-[#8A8FB9] mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Velit dapibus est, nunc, montes, lacus consequat integer
            viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec
            vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Velit dapibus est, nunc,
          </p>

          <p className="text-sm md:text-[16px] text-[#8A8FB9] mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Velit dapibus est, nunc, montes, lacus consequat integer
            viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec
            vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Velit dapibus est, nunc,
          </p>

          <div className="flex gap-4 justify-center">
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

 {/* Pagination */}
 <div className="flex items-center justify-between px-2 bg-[#F7F8FB] h-[45px] text-sm text-[#151875] mt-8">
            <Link href="#" className="text-[#8A8FB9] hover:underline flex">
            <IoIosArrowRoundBack className="mt-[4px]" /> Previous Post
            </Link>
            <Link href="#" className="text-[#8A8FB9] hover:underline flex">
              Next Post <IoIosArrowRoundForward  className="mt-[4px]"/>
            </Link>
          </div>


            {/* Blog Items as comments */}
            <div className="space-y-6 py-12">
  {/* Blog Item 1 */}
  <div className="flex items-center bg-white shadow-md  overflow-hidden md:w-[667px]">
    {/* Image */}
    <div className="w-[100px] h-[100px]">
      <Image
        src={BlogCommet1}
        alt="Sapien ac"
        className="w-full h-full object-cover"
      />
    </div>
    {/* Content */}
    <div className="flex-1 p-4">
      <div className="flex items-center gap-6">
        <h3 className=" text-[14px] sm:text-[18px] font-semibold text-[#363385]">Sapien ac</h3>
      <p className="text-sm text-[#A3A2B6] text-[10px] sm:text-[12px]">Jan 09 2020</p>
      </div>
      <p className="text-[10px] md:text-[12px] text-[#A3A2B6] mt-2 md:leading-[28.3px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae
        rutrum vulputate consectetur.
      </p>
    </div>
  </div>

  {/* Blog Item 2 */}
  <div className="flex items-center bg-white shadow-md  overflow-hidden md:w-[667px] ">
    {/* Image */}
    <div className="w-[100px] h-[100px]">
      <Image
        src={BlogCommet2}
        alt="Augue conv"
        className="w-full h-full object-cover"
      />
    </div>
    {/* Content */}
    <div className="flex-1 p-4">
      <div className="flex items-center gap-6">
        <h3 className="text-[14px] sm:text-[18px] font-semibold text-[#363385]">Augue conv</h3>
      <p className="text-sm text-[#A3A2B6] text-[10px] sm:text-[12px]">Aug 18 2020</p>
      </div>
      <p className="text-[10px] md:text-[12px] text-[#A3A2B6] mt-2 md:leading-[28.3px] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae
        rutrum vulputate consectetur.
      </p>
    </div>
  </div>
</div>




{/* customer details */}


<div className="bg-white p-6-md max-w-[700px]  space-y-6 py-10">
  {/* Input Fields */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="relative">
      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Your Name*"
        className="w-full border border-gray-300   pl-10 py-2 text-xs sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
      />
    </div>
    <div className="relative">
      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="email"
        placeholder="Write Your Email*"
        className="w-full border border-gray-300  pl-10 py-2 text-xs sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
      />
    </div>
  </div>

  {/* Comment Field */}
  <div className="relative">
    <FaComment className="absolute left-3 top-3 text-gray-400" />
    <textarea
      placeholder="Write your comment*"
      className="w-full border border-gray-300  pl-10 py-2 text-xs sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-[#FB2E86] h-[180px]"
    ></textarea>
  </div>

  {/* Checkbox */}
  <div className="flex items-center gap-2">
    <input
      type="checkbox"
      id="save-info"
      className="form-checkbox text-[#FB2E86] focus:ring-2 focus:ring-[#FB2E86]"
    />
    <label
      htmlFor="save-info"
      className="text-xs sm:text-[15px]  text-[#8A91AB]"
    >
      Save my name, email, and website in this browser for the next time I comment.
    </label>
  </div>

  {/* Submit Button */}
  <button className="w-full sm:h-[50px] bg-[#FB2E86] text-white py-2  font-semibold text-sm sm:text-[18px] hover:bg-[#e0226f] transition">
    Continue Shipping
  </button>
</div>



         
         
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[300px] space-y-8">
          {/* Search */}
          <div>
            <h3 className="text-[22px] font-semibold text-[#151875] mb-4">
              Search
            </h3>
            <input
              type="text"
              placeholder="Search for Posts"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[22px] font-semibold text-[#151875] mb-4">
              Categories
            </h3>
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
              {[SaleProduct1, SaleProduct2, SaleProduct3].map((sale, index) => (
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
              ))}
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
                    <h2 className="text-[#151875] font-semibold">
                      Duis lectus est.
                    </h2>
                    <p className="text-sm text-[#8A8FB9]">$12.00 - $15.00</p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-[22px] font-semibold text-[#151875] mb-4">
              Follow
            </h3>
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
            <h3 className="text-[22px] font-semibold text-[#151875] mb-4">
              Tags
            </h3>
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

export default SingleBlog;
