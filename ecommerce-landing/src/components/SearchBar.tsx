import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full max-w-md relative group">
      {/* Search Icon */}
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#008ECC] transition-colors duration-300"
      />

      {/* Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for products, brands, and categories..."
        className="w-full border border-gray-200 rounded-full pl-12 pr-4 py-3 
                   text-sm font-medium text-gray-700 placeholder-gray-400
                   focus:outline-none focus:border-[#008ECC] focus:ring-2 focus:ring-[#008ECC]/20
                   bg-white shadow-sm hover:shadow-md transition-all duration-300"
      />

      {/* Suggestion glow effect */}
      <div className="absolute inset-0 rounded-full pointer-events-none border border-transparent group-focus-within:border-[#008ECC] transition duration-300"></div>
    </div>
  );
};

export default SearchBar;
