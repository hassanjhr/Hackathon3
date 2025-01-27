// import React, { useState } from "react";
// import { IoSearchOutline } from "react-icons/io5";

// interface SearchBarProps {
//   onProductSelect: (productSlug: string) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onProductSelect }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = () => {
//     // Ensure there is something entered before triggering the search
//     if (searchQuery.trim() !== "") {
//       const productSlug = searchQuery.toLowerCase().replace(/\s+/g, "-");
//       console.log("Product Slug to be selected:", productSlug);  // Debugging: Log product slug
//       onProductSelect(productSlug); // Pass productSlug to parent
//     } else {
//       console.log("Please enter a search query.");  // Debugging: Log empty search
//     }
//   };

//   return (
//     <div className="relative flex items-center">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="w-[250px] h-[30px] px-4 border border-gray-400 text-black focus:outline-none"
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />
//       <button
//         onClick={handleSearchSubmit}
//         className="w-[40px] h-[30px] bg-[#FB2E86] flex items-center justify-center"
//       >
//         <IoSearchOutline className="text-white text-lg" />
//       </button>
//     </div>
//   );
// };

// export default SearchBar;
