import React from "react";
import { Search } from "lucide-react";

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-5">

      <div className="flex items-center bg-white rounded-2xl border border-blue-100 shadow-md focus-within:ring-2 focus-within:ring-blue-500 transition">

        <Search className="w-5 h-5 ml-5 text-blue-500" />

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-4 text-sm sm:text-base outline-none rounded-2xl"
        />

      </div>

    </div>
  );
};

export default SearchFilter;