"use client";

import React from "react";
import Image from "next/image";

const products = [
  {
    title: "AirPods Pro 3",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 30,200",
    oldPrice: "৳34,000",
    off: "৳ 3,800 OFF",
  },
  {
    title: "iPhone 17 Pro Max",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 171,500",
    oldPrice: "৳175,000",
    off: "৳ 3,500 OFF",
  },
  {
    title: "Galaxy S25 Ultra 5G",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 112,000",
    oldPrice: "৳115,000",
    off: "৳ 3,000 OFF",
  },
  {
    title: "Apple Watch Series 11",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 53,000",
  },
  {
    title: "iPad Air M3 – 2025",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 71,000",
  },
];

const RelatedProduct = () => {
  return (
    <section className="bg-white py-10">
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            <span className="text-gray-900">New </span>
            <span className="text-primary">Trends</span>
          </h2>

          {/* Navigation buttons (UI only) */}
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">
              ‹
            </button>
            <button className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-black/90 transition">
              ›
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-2xl border p-4 hover:shadow-lg transition group"
            >
              {/* Image */}
              <div className="relative w-full h-44 mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition">
                {product.title}
              </h3>

              {/* Price */}
              <div className="space-y-1">
                <p className="font-bold">{product.price}</p>

                {product.oldPrice && (
                  <div className="flex items-center gap-2 text-xs">
                    <span className="line-through text-gray-400">
                      {product.oldPrice}
                    </span>
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      {product.off}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProduct;
