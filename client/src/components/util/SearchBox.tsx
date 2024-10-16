import { Search } from "lucide-react";
import React from "react";

// interface props {
//   color: string;
// }
const SearchInputBox = () => {
  return (
    <div className="relative hidden md:flex items-center text-xs rounded-full ring-[1.5px] ring-gray-300 px-2  ">
      <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer"></Search>
      <input
        className={`w-[200px] p-2  pl-8 bg-transparent ouline-none border-none focus:outline-none`} 
        type="search"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInputBox;