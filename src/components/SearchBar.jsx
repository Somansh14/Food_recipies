import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full max-w-4xl mb-8 flex justify-center">
      <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 w-full border-2 border-cyan-500">
        <input
          placeholder="Search for recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 rounded-l-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button className="px-4 py-3 rounded-r-lg bg-cyan-500 text-white hover:bg-cyan-600 transition duration-300">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
