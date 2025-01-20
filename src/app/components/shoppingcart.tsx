"use client";

import React from "react";
import Image from "next/image";

import Link from "next/link";


import Product1 from "@/app/assets/sc1.png";
import Product2 from "@/app/assets/sc2.png";
import Product3 from "@/app/assets/sc3.png";
import Product4 from "@/app/assets/sc4.png";
import Product5 from "@/app/assets/sc5.png";

const products = [
  {
    id: 1,
    name: "Ut diam consequat",
    color: "Brown",
    size: "XL",
    price: "$32.00",
    total: "£219.00",
    image: Product1,
  },
  {
    id: 2,
    name: "Vel faucibus posuere",
    color: "Brown",
    size: "XL",
    price: "$32.00",
    total: "£219.00",
    image: Product2,
  },
  {
    id: 3,
    name: "Ac vitae vestibulum",
    color: "Brown",
    size: "XL",
    price: "$32.00",
    total: "£219.00",
    image: Product3,
  },
  {
    id: 4,
    name: "Elit massa diam",
    color: "Brown",
    size: "XL",
    price: "$32.00",
    total: "£219.00",
    image: Product4,
  },
  {
    id: 5,
    name: "Proin pharetra elementum",
    color: "Brown",
    size: "XL",
    price: "$32.00",
    total: "£219.00",
    image: Product5,
  },
];

const ShoppingCart = () => {
  return (
    <div className="bg-white py-10 px-4 flex justify-center">
      <div className="max-w-[1200px] w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Products */}
          <div className="w-full lg:w-3/4">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b text-[#1D3178] font-semibold text-sm sm:text-[20px]">
                  <th className="py-3">Product</th>
                  <th className="py-3">Price</th>
                  <th className="py-3">Quantity</th>
                  <th className="py-3">Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b text-sm">
                    <td className="py-3 flex items-center gap-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={60}
                        height={60}
                        className="rounded"
                      />
                      <div>
                        <p className="text-black text-[14px] font-medium">
                          {product.name}
                        </p>
                        <p className="text-[#A1A8C1] text-sm sm:text-[12px]">
                          Color: {product.color}
                        </p>
                        <p className="text-[#A1A8C1] text-sm sm:text-[12px]">Size: {product.size}</p>
                      </div>
                    </td>
                    <td className="py-3 text-[#15245E] text-[14px]">{product.price}</td>
                    <td className="py-3">
                      <input
                        type="number"
                        defaultValue={1}
                        className="w-12 text-center border border-gray-300 rounded py-1"
                      />
                    </td>
                    <td className="py-3 text-[#15245E] text-[14px]">{product.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between mt-4">
              <button className="bg-[#FB2E86] text-white px-4 py-2  hover:bg-[#e0226f] text-[16px]">
                Update Cart
              </button>
              <button className="bg-[#FB2E86] text-white px-4 py-2 rounded hover:bg-gray-400">
                Clear Cart
              </button>
            </div>
          </div>

          {/* Right Section - Summary */}
          <div className="w-full lg:w-1/4 space-y-8">
            {/* Cart Totals */}
              <h3 className="text-lg font-bold text-[#151875] mb-4 text-center">Cart Totals</h3>
            <div className="p-4 border  bg-[#E8E6F1]">
              <div className="flex justify-between text-sm text-[#151875] mb-2 ">
                <span>Subtotal:</span>
                <span>£219.00</span>
              </div>
              <div className="flex justify-between text-sm text-[#151875] mb-4">
                <span>Total:</span>
                <span>£325.00</span>
              </div>
              <div className="flex gap-2 my-[20px] "><div className="w-2 h-2 rounded-full bg-[#1BE982] mt-[6px]"></div> <p className="text-[12px] text-[#8A91AB] mb-[10px]">Shipping & taxes calculated at checkout</p></div>
              <Link href="/ordercompleted"><button className="w-full bg-green-500 text-white py-2  hover:bg-green-600">
                Proceed to Checkout
              </button></Link>
            </div>

            {/* Calculate Shipping */}
              <h3 className="text-lg font-bold text-[#151875] mb-4">
                Calculate Shipping
              </h3>
            <div className="p-4 border bg-[#F4F4FC]">
              <input
                type="text"
                placeholder="Country"
                className="w-full border border-gray-300 bg-[#F4F4FC] rounded px-3 py-2 mb-2"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full border border-gray-300 bg-[#F4F4FC] rounded px-3 py-2 mb-2"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border border-gray-300 bg-[#F4F4FC] rounded px-3 py-2 mb-4"
              />
              <Link href="/"><button className="w-full lg:w-[179px] bg-[#FB2E86] text-white py-2  hover:bg-[#e0226f]">
                Calculate Shipping
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
