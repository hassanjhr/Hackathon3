"use client";

import React from "react";
import Link from "next/link";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center py-10 bg-white">
      <div className="flex gap-4">
        {/* Page 1 */}
        <Link
          href="/page/1"
          className="w-10 h-10 flex items-center justify-center rounded-md bg-white font-bold text-[#FB2E86] hover:bg-[#e0226f] hover:text-white transition border-2"
        >
          1
        </Link>
        {/* Page 2 */}
        <Link
          href="/page/2"
          className="w-10 h-10 flex items-center justify-center rounded-md bg-white font-bold text-[#FB2E86] hover:bg-[#e0226f] hover:text-white transition border-2"
        >
          2
        </Link>
        {/* Page 3 */}
        <Link
          href="/page/3"
          className="w-10 h-10 flex items-center justify-center rounded-md bg-white font-bold text-[#FB2E86] hover:bg-[#e0226f] hover:text-white transition border-2"
        >
          3
        </Link>
        {/* Page 4 */}
        <Link
          href="/page/4"
          className="w-10 h-10 flex items-center justify-center rounded-md bg-white font-bold text-[#FB2E86] hover:bg-[#e0226f] hover:text-white transition border-2"
        >
          4
        </Link>

        
      </div>
    </div>
  );
};

export default Pagination;
