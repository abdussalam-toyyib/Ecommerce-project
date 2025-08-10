import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ProductSection from "./ProductSection";

export interface Product {
  id: number;
  title: string;
  name: string;
  price: number;
  category: string;
  thumbnail?: string;
  image?: string;
  description?: string;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  meta?: any;
  reviews?: any[];
}

interface Category {
  slug: string;
  name: string;
  url: string;
}

const ProductLists: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories from API
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const formatted = [
            { slug: "all", name: "All", url: "#" },
            ...data.slice(0, 12).map((cat) => {
              const categoryName = typeof cat === "string" ? cat : cat.name || "";
              return {
                slug: categoryName.toLowerCase().replace(/\s+/g, "-"),
                name: categoryName.replace(/\b\w/g, (l: string) => l.toUpperCase()),
                url: `/${categoryName.toLowerCase().replace(/\s+/g, "-")}`,
              };
            }),
          ];
          setCategories(formatted);
        }
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  // Fetch products when searchTerm or activeCategory changes
  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        let url = "";

        if (searchTerm.trim()) {
          // Search endpoint
          url = `https://dummyjson.com/products/search?q=${encodeURIComponent(
            searchTerm.trim()
          )}`;
        } else if (activeCategory.toLowerCase() !== "all") {
          // Category endpoint
          url = `https://dummyjson.com/products/category/${encodeURIComponent(
            activeCategory
          )}`;
        } else {
          // All products
          url = "https://dummyjson.com/products?limit=100";
        }

        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        const productsData = data.products || [];

        const mappedProducts: Product[] = productsData.map((p: any) => ({
          id: p.id,
          title: p.title ?? "",
          name: p.title ?? "",
          price: typeof p.price === "number" ? p.price : Number(p.price) || 0,
          category: p.category ?? "uncategorized",
          thumbnail: p.thumbnail ?? (p.images && p.images[0]) ?? undefined,
          image: p.thumbnail ?? (p.images && p.images[0]) ?? undefined,
          description: p.description,
          discountPercentage: p.discountPercentage,
          rating: p.rating,
          stock: p.stock,
          brand: p.brand,
          meta: p.meta,
          reviews: p.reviews,
        }));

        setProducts(mappedProducts);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error("Error fetching products:", err);
          setError(err.message ?? "Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search + Category Filter */}
      <div className="flex flex-col gap-4 py-4 px-4">
        <div className="flex justify-center">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-40">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <p className="text-center py-10 text-red-500">Error: {error}</p>
      ) : products.length > 0 ? (
        <>
          <ProductSection
            title="Featured Products"
            products={products.slice(0, 4)}
            variant="featured"
            layout="grid"
          />
          <ProductSection
            title="Trending Now"
            products={products.slice(2, 10)}
            variant="trending"
            layout="carousel"
          />
          <ProductSection
            title="Popular Picks"
            products={products.slice(5, 20)}
            variant="popular"
            layout="carousel"
          />
          <ProductSection
            title="New Arrivals"
            products={products.slice(-10)}
            variant="new"
            layout="grid"
          />
        </>
      ) : (
        <p className="text-center py-10 text-gray-500">No products found</p>
      )}
    </div>
  );
};

export default ProductLists;
