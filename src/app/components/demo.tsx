"use client";

import React from "react";
import Image from "next/image";
import Product1 from "@/app/assets/w1.png";
import Product2 from "@/app/assets/w2.png";
import Product3 from "@/app/assets/w3.png";
import Product4 from "@/app/assets/w4.png";
import Product5 from "@/app/assets/w5.png";
import Product6 from "@/app/assets/w1.png";
import Link from "next/link";

const DemoComponent = () => {
  const products = [
    { id: 1, name: "Ut diam consequat", price: "$32.00", color: "Brown", size: "XL", image: Product1 },
    { id: 2, name: "Ut diam consequat", price: "$32.00", color: "Brown", size: "XL", image: Product2 },
    { id: 3, name: "Ut diam consequat", price: "$32.00", color: "Brown", size: "XL", image: Product3 },
    { id: 4, name: "Ut diam consequat", price: "$32.00", color: "Brown", size: "XL", image: Product4 },
    { id: 5, name: "Ut diam consequat", price: "$32.00", color: "Brown", size: "XL", image: Product5 },
    { id: 6, name: "Ut diam consequat", price: "$32.00", color: "Brown", size: "XL", image: Product6 },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-8 px-4">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
          <h2 className="text-2xl font-bold text-[#151875] mb-6">Hekto Demo</h2>
          <p className="text-sm text-[#B7BACB] mb-6">Cart / Information / Shipping / Payment</p>
        <div className="bg-[#efeff4] lg p-6 lg:col-span-2">
          
          {/* Contact Information */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#151875]">Contact Information</h3>
              <Link href="/login" className="text-sm text-[#C1C8E1] hover:underline">Already have an account? Log in</Link>
            </div>
            <input
              type="email"
              placeholder="Email or mobile phone number"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-2 text-sm bg-[#F8F8FD]"
            />
            <label className="flex items-center gap-2 text-sm text-[#151875]">
              <input type="checkbox" className="w-4 h-4" />
              Keep me up to date on news and exclusive offers
            </label>
          </div>

          {/* Shipping Address */}
          <div>
            <h3 className="text-lg font-bold text-[#151875] mb-4">Shipping address</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name (optional)"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm bg-[#F8F8FD]"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm bg-[#F8F8FD]"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4 text-sm bg-[#F8F8FD]"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc (optional)"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4 text-sm bg-[#F8F8FD]"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="City"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm bg-[#F8F8FD]"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm bg-[#F8F8FD]"
              />
            </div>
            <input
              type="text"
              placeholder="Bangladesh"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4 text-sm bg-[#F8F8FD]"
            />
            <Link href="/products"><button className="bg-[#FB2E86] text-white px-6 py-2 rounded text-sm w-full sm:w-auto">
              Continue Shipping
            </button></Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white  p-6">
          {/* Product List */}
          <div className="space-y-4 mb-6">
            {products.map((product) => (
              <div key={product.id} className="flex items-center justify-between">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-[50px] h-[50px] object-cover rounded"
                />
                <div className="flex-1 mx-4">
                  <p className="text-sm text-[#151875]">{product.name}</p>
                  <p className="text-xs text-[#B7BACB]">Color: {product.color}</p>
                  <p className="text-xs text-[#B7BACB]">Size: {product.size}</p>
                </div>
                <p className="text-sm text-[#151875]">{product.price}</p>
              </div>
            ))}
          </div>

          {/* Subtotal */}
          <div className="border-t border-gray-300 pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-[#151875]">Subtotal:</span>
              <span className="text-sm text-[#151875]">£219.00</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-[#151875]">Total:</span>
              <span className="text-lg font-bold text-[#151875]">£325.00</span>
            </div>
           <Link href="/ordercompleted"> <button className="bg-[#19D16F] text-white w-full py-2  text-sm">
              Proceed To Checkout
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoComponent;
