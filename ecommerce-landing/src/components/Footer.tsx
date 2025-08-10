// import React from "react";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-blue-600 text-white text-center py-6">
//       <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B2F4E] text-gray-300 font-lato">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">E-Shop</h2>
          <p className="text-sm leading-relaxed mb-4">
            Your one-stop shop for premium products at unbeatable prices.
            We’re committed to delivering exceptional service and quality.
          </p>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-white transition">
              <FiFacebook />
            </a>
            <a href="#" className="hover:text-white transition">
              <FiTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FiInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Shop</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">FAQs</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Shipping & Returns</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FiMapPin /> 123 E-Shop Street, Osun, Nigeria
            </li>
            <li className="flex items-center gap-2">
              <FiPhone /> +234 813 4757 902
            </li>
            <li className="flex items-center gap-2">
              <FiMail /> support@eshop.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
