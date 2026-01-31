"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Eye, Star } from "lucide-react";
import { motion } from "framer-motion";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  category?: string;
  inStock?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  link: string;
}

interface ProductCardProps {
  product: Product;
  showQuickActions?: boolean;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showQuickActions = true,
  className = "",
}) => {
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div className={`group ${className}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
        {/* Product Image */}
        <Link href={product.link}>
          <div className="relative aspect-square overflow-hidden bg-gray-50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.isNew && (
                <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </span>
              )}
              {discountPercentage > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  -{discountPercentage}%
                </span>
              )}
              {!product.inStock && (
                <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Quick Actions */}
            {showQuickActions && product.inStock !== false && (
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsWishlisted(!isWishlisted);
                  }}
                  className={`p-2 rounded-full shadow-lg transition-colors ${
                    isWishlisted
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-700 hover:bg-red-50"
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart
                    className="w-4 h-4"
                    fill={isWishlisted ? "currentColor" : "none"}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.preventDefault();
                    // Quick view functionality
                  }}
                  className="bg-white text-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                  aria-label="Quick view"
                >
                  <Eye className="w-4 h-4" />
                </motion.button>
              </div>
            )}

            {/* Add to Cart Button - Shows on Hover */}
            {product.inStock !== false && (
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    // Add to cart functionality
                  }}
                  className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </motion.button>
              </div>
            )}
          </div>
        </Link>

        {/* Product Info */}
        <Link href={product.link}>
          <div className="p-4">
            {/* Category */}
            {product.category && (
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                {product.category}
              </p>
            )}

            {/* Product Name */}
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm md:text-base min-h-[2.5rem]">
              {product.name}
            </h3>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating!)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-600">
                  ({product.reviewCount || 0})
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
