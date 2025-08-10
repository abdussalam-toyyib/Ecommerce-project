// import React from "react";
// import ProductCard from "./ProductCard";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   category: string;
//   thumbnail?: string;
// }

// interface ProductSectionProps {
//   title: string;
//   products: Product[];
//   variant?: "featured" | "trending" | "popular" | "new";
//   layout?: "grid" | "carousel";
// }

// const ProductSection: React.FC<ProductSectionProps> = ({
//   title,
//   products,
//   variant = "featured",
//   layout = "grid",
// }) => {
//   const titleColor =
//     variant === "trending"
//       ? "text-orange-500"
//       : variant === "popular"
//       ? "text-purple-500"
//       : variant === "new"
//       ? "text-green-500"
//       : "text-[#008ECC]";

//   // Different grid patterns for each variant
//   const gridClasses =
//     variant === "featured"
//       ? "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
//       : variant === "new"
//       ? "grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
//       : variant === "trending"
//       ? "grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
//       : "grid gap-8 sm:grid-cols-2 md:grid-cols-3"; // popular

//   return (
//     <section className="px-4 py-6">
//       <h2 className={`text-xl font-bold mb-4 ${titleColor}`}>{title}</h2>

//       {layout === "grid" ? (
//         <div className={gridClasses}>
//           {products.map((product) => (
//             <ProductCard key={product.id} {...product} variant={variant} />
//           ))}
//         </div>
//       ) : (
//         <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className={
//                 variant === "trending"
//                   ? "flex-shrink-0 w-80"
//                   : "flex-shrink-0 w-64"
//               }
//             >
//               <ProductCard {...product} variant={variant} />
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default ProductSection;


import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail?: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  variant?: "featured" | "trending" | "popular" | "new";
  layout?: "grid" | "carousel";
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  products,
  variant = "featured",
  layout = "grid",
}) => {
  const titleColor =
    variant === "trending"
      ? "text-orange-500"
      : variant === "popular"
      ? "text-purple-500"
      : variant === "new"
      ? "text-green-500"
      : "text-[#008ECC]";

  const gridClasses =
    variant === "featured"
      ? "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      : variant === "new"
      ? "grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
      : variant === "trending"
      ? "grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : "grid gap-8 sm:grid-cols-2 md:grid-cols-3";

  return (
    <section className="px-4 py-6">
      <h2 className={`text-xl font-bold mb-4 ${titleColor}`}>{title}</h2>

      {products.length === 0 ? (
        <div className="flex items-center justify-center py-12">
          <p className="text-gray-500 italic text-lg">
            No products available.
          </p>
        </div>
      ) : layout === "grid" ? (
        <div className={gridClasses}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} variant={variant} />
          ))}
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {products.map((product) => (
            <div
              key={product.id}
              className={
                variant === "trending"
                  ? "flex-shrink-0 w-80"
                  : "flex-shrink-0 w-64"
              }
            >
              <ProductCard {...product} variant={variant} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductSection;
