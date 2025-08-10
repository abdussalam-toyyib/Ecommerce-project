// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import image from "../assets/image.png";
// import image2 from "../assets/image2.jpg";
// import image1 from "../assets/image1.jpg";
// import image4 from "../assets/image4.jpg";

// interface HeroItem {
//   image: string;
//   title: string;
//   subtitle: string;
//   discount: string;
// }

// const heroItems: HeroItem[] = [
//   {
//     image: image,
//     title: "SMART WEARABLE.",
//     subtitle: "Best Deal Online on smart watches",
//     discount: "Up to 80% OFF",
//   },
//   {
//     image: image2,
//     title: "LATEST FITNESS BANDS",
//     subtitle: "Track your health in style",
//     discount: "Save up to 50%",
//   },
//   {
//     image: image1,
//     title: "TRENDY HEADPHONES",
//     subtitle: "Feel the music, live the moment",
//     discount: "Starting from $29",
//   },
//   {
//     image: image4,
//     title: "TRENDY HEADPHONES",
//     subtitle: "Feel the music, live the moment",
//     discount: "Starting from $29",
//   },
// ];

// const HeroSection: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-rotate slides
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % heroItems.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="w-full mt-8 bg-gray-100 relative overflow-hidden">
//       <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.8 }}
//             className="absolute inset-0"
//           >
//             <img
//               src={heroItems[currentIndex].image}
//               alt={heroItems[currentIndex].title}
//               className="object-contain"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:p-8 md:p-16 bg-black/40 text-white">
//               <p className="text-xs sm:text-sm md:text-lg">{heroItems[currentIndex].subtitle}</p>
//               <h1 className="text-lg sm:text-2xl md:text-5xl font-bold mt-2">
//                 {heroItems[currentIndex].title}
//               </h1>
//               <p className="mt-2 sm:mt-4 text-sm sm:text-lg md:text-2xl">
//                 {heroItems[currentIndex].discount}
//               </p>
//               <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
//                 Shop Now
//               </button>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import image from "../assets/image.png";
import image2 from "../assets/image2.jpg";
import image1 from "../assets/image1.jpg";
import image4 from "../assets/image4.jpg";

interface HeroItem {
  image: string;
  title: string;
  subtitle: string;
  discount: string;
  bgImage?: string; // optional: background image
}

const heroItems: HeroItem[] = [
  {
    image: image,
    title: "SMART WEARABLE.",
    subtitle: "Best Deal Online on smart watches",
    discount: "Up to 80% OFF",
    bgImage: image2, // background
  },
  {
    image: image2,
    title: "LATEST FITNESS BANDS",
    subtitle: "Track your health in style",
    discount: "Save up to 50%",
    bgImage: image1,
  },
  {
    image: image1,
    title: "TRENDY HEADPHONES",
    subtitle: "Feel the music, live the moment",
    discount: "Starting from $29",
    bgImage: image4,
  },
  {
    image: image4,
    title: "TRENDY HEADPHONES",
    subtitle: "Feel the music, live the moment",
    discount: "Starting from $29",
    bgImage: image,
  },
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full mt-8 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] flex items-center"
          style={{
            backgroundImage: `url(${heroItems[currentIndex].bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-6 sm:px-12 lg:px-20 w-full">
            {/* Text */}
            <div className="text-white space-y-4">
              <p className="text-sm sm:text-lg">{heroItems[currentIndex].subtitle}</p>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                {heroItems[currentIndex].title}
              </h1>
              <p className="text-lg sm:text-xl">{heroItems[currentIndex].discount}</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
                Shop Now
              </button>
            </div>

            {/* Product Image */}
            {/* <div className="flex justify-center md:justify-end md:w-full">
              <img
                src={heroItems[currentIndex].image}
                alt={heroItems[currentIndex].title}
                className="max-w-full max-h-[400px] sm:max-h-[450px] object-contain drop-shadow-lg"
              />
            </div> */}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
