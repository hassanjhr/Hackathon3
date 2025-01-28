"use client";

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Product } from "../../../types/product";
import { client } from "@/utils/sanity";
import Link from "next/link";
import { useRouter } from "next/navigation"; 

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter(); 

  // Fetch products from Sanity
  const fetchProducts = async () => {
    const query = `*[_type == "product"]{
      _id,
      name,
      price,
      description,
      image {
        asset->{
          _id,
          url
        }
      },
      category,
      slug
    }`;
    const products = await client.fetch(query);
    return products;
  };

  // Handle the search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsDropdownOpen(e.target.value.length > 0); // Show suggestions if there's input
  };

  // Trigger search function
  const triggerSearch = async () => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    // Fetch all products
    const products = await fetchProducts();
    const filtered = products.filter((product: Product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Handle product click for dynamic routing
  const handleProductClick = (slug: string) => {
    router.push(`/product/${slug}`); 
    setSearchQuery(""); 
    setIsDropdownOpen(false); 
  };

  return (
    <div className="h-[60px] bg-white max-w-[1920px] flex justify-center relative mb-3">
      <div className="w-full px-4   max-w-[1177px] flex items-center justify-between lg:justify-center">
        {/* Logo */}
        <Link href="/" className="hover:text-[#FB2E86]">
          <div className="text-2xl font-bold text-[#0D0E43] mr-[44px] xl:mr-[88px]">
            Hekto
          </div>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden relative z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl text-[#0D0E43] focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <div className="text-3xl">X</div> 
            ) : (
              <div className="text-3xl">☰</div> 
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white lg:static lg:w-auto lg:flex text-[#0D0E43] font-normal z-40`}
        >
          <div className="flex flex-col items-center lg:flex-row lg:space-x-6 lg:items-center relative mr-[100px] xl:mr-[200px]">
            <Link href="/" className="hover:text-[#FB2E86]">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#FB2E86]">
              About
            </Link>
            <Link href="/products" className="hover:text-[#FB2E86]">
              Products
            </Link>
            <Link href="/blog" className="hover:text-[#FB2E86]">
              Blog
            </Link>
            <Link href="/faq" className="hover:text-[#FB2E86]">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-[#FB2E86]">
              Contact
            </Link>
          </div>

          {/* Search Bar Inside Hamburger Menu */}
          <div className="relative w-full max-w-[400px] flex mt-4 mx-auto  mb-3 lg:mb-0">
            <input
              type="text"
              className="w-full py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  triggerSearch();
                }
              }}
            />
            <button
              className="ml-2 py-2 px-4 bg-[#FB2E86] text-white rounded-lg hover:bg-[#7E33E0]"
              onClick={triggerSearch}
            >
              <IoSearchOutline className="text-white text-lg" />
            </button>

            {/* Search Suggestions Dropdown */}
            {isDropdownOpen && filteredProducts.length > 0 && (
              <div className="absolute top-[40px] left-0 right-0 z-50 bg-white border-2 border-gray-300 shadow-lg max-h-[300px] overflow-y-auto">
                {filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    className="p-4 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleProductClick(product.slug.current)}
                  >
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <p className="text-sm text-gray-500">Price: ${product.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;










// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { IoSearchOutline } from "react-icons/io5";
// import { AiOutlineDown } from "react-icons/ai";
// import { HiMenu } from "react-icons/hi";
// import { IoClose } from "react-icons/io5";
// import Link from "next/link";
// import SearchBar from "./searchBar"; // Assuming SearchBar is a separate component
// import { useRouter } from "next/navigation"; 

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null); 

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node) 
//       ) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleProductSelect = (productSlug: string) => {
//     // Debugging: Log the selected product slug
//     console.log("Selected Product Slug:", productSlug);
//     // Additional functionality here (e.g., navigate to the product page)
//   };

//   return (
//     <div className="h-[60px] bg-white max-w-[1920px] flex justify-center">
//       {/* Navbar Content */}
//       <div className="w-full px-4 max-w-[1177px] flex items-center justify-between lg:justify-center">
//         {/* Logo */}
//         <Link href="/"><div className="text-2xl font-bold text-[#0D0E43] mr-[44px] xl:mr-[88px]">
//           Hekto
//         </div></Link>

//         {/* Hamburger Menu for Mobile */}
//         <div className="lg:hidden relative z-50">
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="text-2xl text-[#0D0E43] focus:outline-none"
//           >
//             {isMobileMenuOpen ? <IoClose /> : <HiMenu />}
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <div
//           className={`${
//             isMobileMenuOpen ? "block" : "hidden"
//           } absolute top-[40px] left-0 w-full bg-white lg:static lg:w-auto lg:flex text-[#0D0E43] font-normal z-40`}
//         >
//           <div className="flex flex-col lg:flex-row lg:space-x-6 relative mr-[100px] xl:mr-[200px]">
//             <Link href="/" className="hover:text-[#FB2E86]">Home</Link>
//             <Link href="/about" className="hover:text-[#FB2E86]">About</Link>
//             <Link href="/products" className="hover:text-[#FB2E86]">Products</Link>
//             <Link href="/blog" className="hover:text-[#FB2E86]">Blog</Link>
//             <Link href="/faq" className="hover:text-[#FB2E86]">FAQ</Link>
//             <Link href="/contact" className="hover:text-[#FB2E86]">Contact</Link>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <SearchBar onProductSelect={handleProductSelect} />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

;












































// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { IoSearchOutline } from "react-icons/io5";
// import { AiOutlineDown } from "react-icons/ai";
// import { HiMenu } from "react-icons/hi";
// import { IoClose } from "react-icons/io5";
// import Link from "next/link";
// import SearchBar from "./searchBar";
// import { useRouter } from "next/navigation"; 

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null); 

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node) 
//       ) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="h-[60px] bg-white max-w-[1920px] flex justify-center">
//       {/* Navbar Content */}
//       <div className="w-full px-4 max-w-[1177px] flex items-center justify-between lg:justify-center">
//         {/* Logo */}
//         <Link href="/"><div className="text-2xl font-bold text-[#0D0E43] mr-[44px] xl:mr-[88px]">
//           Hekto
//         </div></Link>

//         {/* Hamburger Menu for Mobile */}
//         <div className="lg:hidden relative z-50">
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="text-2xl text-[#0D0E43] focus:outline-none"
//           >
//             {isMobileMenuOpen ? <IoClose /> : <HiMenu />}
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <div
//           className={`${
//             isMobileMenuOpen ? "block" : "hidden"
//           } absolute top-[40px] left-0 w-full bg-white lg:static lg:w-auto lg:flex text-[#0D0E43] font-normal z-40`}
//         >
//           <div className="flex flex-col lg:flex-row lg:space-x-6 relative mr-[100px] xl:mr-[200px]">
//             {/* Home with Dropdown */}
//             {/* <div
//               className="relative cursor-pointer"
//               ref={dropdownRef}
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             >
//               <div className="flex items-center text-[#FB2E86] hover:text-gray-500 text-[12px] sm:text-[16px] font-medium">
//                 Home <AiOutlineDown className="ml-1 mt-[2px] text-[12px]" />
//               </div>
//               {isDropdownOpen && (
//                 <div className="absolute left-0 mt-2 bg-white shadow-lg rounded w-[150px] text-[12px] sm:text-[16px]">
//                   <ul className="py-2">
//                     <li className="px-4 py-2 hover:bg-gray-200">
//                       <Link href="/" className="hover:text-[#FB2E86]">
//                         Home
//                       </Link>
//                     </li>
//                     <li className="px-4 py-2 hover:bg-gray-200">
//                       <Link href="/about" className="hover:text-[#FB2E86]">
//                         About
//                       </Link>
//                     </li>
//                     <li className="px-4 py-2 hover:bg-gray-200">
//                       <Link href="/faq" className="hover:text-[#FB2E86]">
//                         FAQ
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div> */}

//             <Link href="/" className="hover:text-[#FB2E86]">
//                         Home
//                       </Link>


//             <Link href="/about" className="hover:text-[#FB2E86]">
//                         About
//                       </Link>
//             <Link
//               href="/products"
//               className="hover:text-[#FB2E86]"
//             >
//               Products
//             </Link>
//             <Link
//               href="/blog"
//               className="hover:text-[#FB2E86]"
//             >
//               Blog
//             </Link>
//             <Link href="/faq" className="hover:text-[#FB2E86]">
//                         FAQ
//                       </Link>
//             <Link
//               href="/contact"
//               className="hover:text-[#FB2E86]"
//             >
//               Contact
//             </Link>
//           </div>
//         </div>

//         {/* Search Bar */}
//         {/* <div className="hidden lg:flex items-center text-[12px] sm:text-[16px]">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-[250px] h-[30px] px-4 border border-gray-400 text-black focus:outline-none"
//           />
//           <button className="w-[40px] h-[30px] bg-[#FB2E86] flex items-center justify-center">
//             <IoSearchOutline className="text-white text-lg" />
//           </button>
//         </div> */}

        
//       </div>
//     </div>
//   );
// };

// export default Navbar;
