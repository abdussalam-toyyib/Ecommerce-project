import React from "react";
import { Star } from "lucide-react";

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface ProductCardProps {
  id: number;
  title: string;
  description?: string;
  category?: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  tags?: string[];
  brand?: string;
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: Review[];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta?: {
    barcode?: string;
    qrCode?: string;
  };
  images?: string[];
  thumbnail?: string;
  variant?: "featured" | "trending" | "popular" | "new";
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  category,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  warrantyInformation,
  shippingInformation,
  availabilityStatus,
  reviews,
  meta,
  images,
  thumbnail,
  variant = "featured",
}) => {
  // Variant Styles
  let borderColor = "";
  let accentColor = "";
  switch (variant) {
    case "featured":
      borderColor = "border-[#008ECC]";
      accentColor = "#008ECC";
      break;
    case "trending":
      borderColor = "border-orange-400";
      accentColor = "#F97316";
      break;
    case "popular":
      borderColor = "border-purple-400";
      accentColor = "#8B5CF6";
      break;
    case "new":
      borderColor = "border-green-400";
      accentColor = "#10B981";
      break;
  }

  // Rating Stars
  const renderStars = (ratingValue: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={i <= Math.round(ratingValue) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <div
      className={`group relative ${borderColor} border rounded-2xl overflow-hidden bg-white shadow-md hover:-translate-y-2 hover:shadow-xl transition-all`}
    >
      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={thumbnail || images?.[0] || "https://via.placeholder.com/300x200?text=No+Image"}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Category & Brand */}
        {(category || brand) && (
          <p className="text-xs uppercase text-gray-500 tracking-wide">
            {category} {category && brand ? "•" : ""} {brand}
          </p>
        )}

        {/* Title */}
        <h3
          className="text-lg font-semibold text-gray-800 transition-colors"
          style={{ transitionDuration: "300ms" }}
        >
          {title}
        </h3>

        {/* Price & Discount */}
        <div className="flex items-center gap-2">
          <p className="text-xl font-bold" style={{ color: accentColor }}>
            ${price.toFixed(2)}
          </p>
          {discountPercentage !== undefined && (
            <>
              <span className="text-sm text-gray-500 line-through">
                ${(price / (1 - discountPercentage / 100)).toFixed(2)}
              </span>
              <span className="text-xs text-red-500 font-medium">
                -{discountPercentage}%
              </span>
            </>
          )}
        </div>

        {/* Rating */}
        {rating !== undefined && (
          <div className="flex items-center gap-1">
            {renderStars(rating)}
            {reviews && reviews.length > 0 && (
              <span className="text-xs text-gray-500">
                ({reviews.length} reviews)
              </span>
            )}
          </div>
        )}

        {/* Availability */}
        {availabilityStatus && (
          <p
            className={`text-xs font-medium ${
              availabilityStatus === "In Stock" ? "text-green-500" : "text-red-500"
            }`}
          >
            {availabilityStatus}
            {stock !== undefined && ` • ${stock} left`}
          </p>
        )}

        {/* Short Description */}
        {description && <p className="text-sm text-gray-600 line-clamp-2">{description}</p>}

        {/* Warranty & Shipping */}
        {(warrantyInformation || shippingInformation) && (
          <div className="mt-2 text-xs text-gray-500 space-y-1">
            {shippingInformation && <p>📦 {shippingInformation}</p>}
            {warrantyInformation && <p>🛡 {warrantyInformation}</p>}
          </div>
        )}

        {/* QR Code & Button */}
        <div className="mt-3 flex justify-between items-center">
          <button
            style={{ backgroundColor: accentColor }}
            className="px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition"
          >
            Add to Cart
          </button>
          {meta?.qrCode && (
            <img
              src={meta.qrCode}
              alt="QR Code"
              className="w-10 h-10 object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
