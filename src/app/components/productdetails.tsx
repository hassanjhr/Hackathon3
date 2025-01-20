"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ProductDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = ["Description", "Additional Info", "Reviews", "Video"];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab.toLowerCase());
  };

  return (
    <div className="bg-[#F9F8FE] py-20 px-4 flex justify-center">
      <div className="max-w-[1200px] w-full">
        {/* Tab Navigation */}
        <div className="flex gap-6  border-gray-200 pb-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`text-sm md:text-base font-medium ${
                activeTab === tab.toLowerCase()
                  ? "text-[#151875] border-b-2 border-[#151875]"
                  : "text-gray-400"
              } hover:text-[#151875] transition`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "description" && (
          <div>
            <h2 className="text-lg sm:text-[22px] font-semibold text-[#151875] mb-4">
              Varius tempor.
            </h2>
            <p className="text-sm sm:text-[16px] text-[#A9ACC6] leading-relaxed mb-6">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
              consectetur neque, elit, aliquet. Non varius proin sed urna,
              egestas consequat laoreet diam tincidunt. Magna eget faucibus
              cras justo, tortor sed donec tempus. Imperdiet consequat, quis
              diam arcu, nulla lobortis justo netus dis. Eu in fringilla
              vulputate nunc nec. Dui, massa viverra.
            </p>
            <h3 className="text-base sm:text-[22px] font-semibold text-[#151875] mb-4">
              More details
            </h3>
            <ul className="space-y-3">
              {[
                "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
                "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
                "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
                "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
              ].map((detail, index) => (
                <li key={index} className="flex items-center text-sm sm:text-[16px] text-[#A9ACC6]">
                  <FaArrowRight className="text-black mr-2" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* */}
        {activeTab === "additional info" && (
          <div>
            <h2 className="text-lg font-semibold text-[#151875] mb-4">
              Additional Information
            </h2>
            <p className="text-sm text-[#151875] leading-relaxed">
              Content for additional information goes here.
            </p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            <h2 className="text-lg font-semibold text-[#151875] mb-4">Reviews</h2>
            <p className="text-sm text-[#151875] leading-relaxed">
              Content for reviews goes here.
            </p>
          </div>
        )}
        {activeTab === "video" && (
          <div>
            <h2 className="text-lg font-semibold text-[#151875] mb-4">Video</h2>
            <p className="text-sm text-[#151875] leading-relaxed">
              Content for video goes here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsTabs;
