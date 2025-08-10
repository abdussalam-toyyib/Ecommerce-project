import React, { useState } from "react";
import { FiMenu, FiX, FiShoppingCart, FiSearch, FiUser } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Shop", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100 font-lato">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 flex justify-between items-center h-20">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-[#008ECC] tracking-wide">
          E-Shop
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg text-gray-700 hover:text-[#008ECC] font-semibold transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex gap-8 items-center">
          <button className="hover:text-[#008ECC] transition">
            <FiSearch size={26} />
          </button>
          <button className="hover:text-[#008ECC] transition">
            <FiShoppingCart size={26} />
          </button>
          <button className="hover:text-[#008ECC] transition">
            <FiUser size={26} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-[#008ECC] transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <div className="flex flex-col items-center gap-5 py-5">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg text-gray-700 hover:text-[#008ECC] font-semibold transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-8 mt-4">
              <button className="hover:text-[#008ECC] transition">
                <FiSearch size={26} />
              </button>
              <button className="hover:text-[#008ECC] transition">
                <FiShoppingCart size={26} />
              </button>
              <button className="hover:text-[#008ECC] transition">
                <FiUser size={26} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
