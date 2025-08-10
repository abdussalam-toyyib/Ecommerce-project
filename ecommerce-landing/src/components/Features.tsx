
import React from "react";
import { FaShippingFast, FaHeadset, FaLock } from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast />,
    title: "Free Shipping",
    description: "On all orders above $50",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    description: "Customer support anytime",
  },
  {
    icon: <FaLock />,
    title: "Secure Payment",
    description: "100% secure transactions",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {features.map((feature, i) => (
          <div
            key={i}
            className="group bg-white shadow-md hover:shadow-lg transition rounded-2xl p-8 text-center border border-gray-100 hover:border-[#008ECC]"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-[#008ECC] text-white text-3xl mb-4 group-hover:scale-105 transform transition">
              {feature.icon}
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2 tracking-wide">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
