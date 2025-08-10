import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  category?: string;
  image: string;
}

interface ProductGridProps {
  products: Product[];
  variant?: "featured" | "trending" | "popular" | "new";
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  variant = "featured",
}) => {
  // Grid layout styles for each variant
  const variantGridStyles: Record<
    "featured" | "trending" | "popular" | "new",
    { grid: string; container: string; heading: string; button: string }
  > = {
    featured: {
      grid: "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
      container: "bg-white px-4 py-10",
      heading:
        "text-3xl font-bold text-[#008ECC] tracking-tight border-b-2 border-[#008ECC] inline-block pb-1",
      button:
        "text-[#008ECC] text-sm font-medium hover:underline hover:text-blue-700",
    },
    trending: {
      grid: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
      container: "bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-12",
      heading:
        "text-2xl font-extrabold text-orange-600 uppercase tracking-wider",
      button:
        "text-orange-600 text-sm font-semibold hover:underline hover:text-orange-700",
    },
    popular: {
      grid: "grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5",
      container: "bg-purple-50 px-5 py-14",
      heading:
        "text-2xl font-bold text-purple-700 tracking-wide relative after:content-['🔥'] after:ml-2",
      button:
        "text-purple-700 text-sm font-medium hover:underline hover:text-purple-800",
    },
    new: {
      grid: "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
      container:
        "bg-gradient-to-br from-green-50 via-white to-green-100 px-4 py-10",
      heading:
        "text-2xl font-semibold text-green-600 italic tracking-tight",
      button:
        "text-green-600 text-sm font-medium hover:underline hover:text-green-700",
    },
  };

  const { grid, container, heading, button } = variantGridStyles[variant];

  // Section title
  const sectionTitle =
    variant === "featured"
      ? "Featured Products"
      : variant === "trending"
      ? "Trending Now"
      : variant === "popular"
      ? "Most Popular"
      : "New Arrivals";

  return (
    <section className={`${container} max-w-7xl mx-auto rounded-xl`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className={heading}>{sectionTitle}</h2>
        <button className={button}>View All →</button>
      </div>

      {/* Product Grid */}
      <div className={grid}>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.name}
              price={product.price}
              category={product.category || ""}
              thumbnail={product.image}
              variant={variant}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500 text-lg">No products found</p>
          </div>
        )}
      </div>

    </section>
  );
};

export default ProductGrid;
