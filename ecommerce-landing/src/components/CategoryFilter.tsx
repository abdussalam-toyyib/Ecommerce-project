import React, { useState } from "react";

interface Category {
  slug: string;
  name: string;
  url: string;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      {/* Mobile Hamburger */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <h2 className="text-lg font-semibold">Categories</h2>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md border border-gray-300 hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`flex-col px-4 pb-3 md:hidden 
          ${menuOpen ? "flex" : "hidden"} 
        `}
      >
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveCategory(cat.slug);
              setMenuOpen(false);
            }}
            className={`px-4 py-2 mb-2 rounded-full border transition whitespace-nowrap
              ${
                activeCategory === cat.slug
                  ? "bg-[#008ECC] text-white border-[#008ECC]"
                  : "bg-white text-gray-800 hover:bg-blue-100"
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="hidden md:flex flex-nowrap gap-3 overflow-x-auto py-3 px-4 scrollbar-hide">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat.slug)}
            className={`px-4 py-2 rounded-full border transition whitespace-nowrap
              ${
                activeCategory === cat.slug
                  ? "bg-[#008ECC] text-white border-[#008ECC]"
                  : "bg-white text-gray-800 hover:bg-blue-100"
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
