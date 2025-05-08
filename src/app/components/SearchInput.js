// components/SearchInput.jsx
import React from "react";
import Image from "next/image";

const SearchInput = ({ searchTerm, setSearchTerm }) => (
  <div className="w-full flex justify-end items-center mb-4">
    <div className="flex relative group lg:w-1/4 sm:w-1/3 xsm:w-1/2 w-[95%]">
      <input
        type="text"
        placeholder="Search Blog title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full h-12 py-1 px-3 border border-gray-300 bg-white rounded"
      />
      <button className="p-2 text-gray-500 hover:text-black transition absolute right-2 top-1.5">
        <Image src="/img/searchicon.svg" alt="Search" width={20} height={20} />
      </button>
    </div>
  </div>
);

export default SearchInput;