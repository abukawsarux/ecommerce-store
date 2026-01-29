"use client";

import Image from "next/image";
import React from "react";

const products = [
  {
    title: "Redmi Note 14 4G",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 20,600",
    oldPrice: "৳21,500",
    off: "৳ 900 OFF",
  },
  {
    title: "Nothing Phone (3a)",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 33,800",
    oldPrice: "৳35,000",
    off: "৳ 1,200 OFF",
  },
  {
    title: "Motorola Edge 60 Fusion 5G",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 30,200",
    oldPrice: "৳32,500",
    off: "৳ 2,300 OFF",
  },
  {
    title: "Redmi Note 14 4G",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 20,600",
    oldPrice: "৳21,500",
    off: "৳ 900 OFF",
  },
  {
    title: "Nothing Phone (3a)",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 33,800",
    oldPrice: "৳35,000",
    off: "৳ 1,200 OFF",
  },
  {
    title: "Motorola Edge 60 Fusion 5G",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 30,200",
    oldPrice: "৳32,500",
    off: "৳ 2,300 OFF",
  },
  {
    title: "Redmi Note 14 4G",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 20,600",
    oldPrice: "৳21,500",
    off: "৳ 900 OFF",
  },
  {
    title: "Nothing Phone (3a)",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 33,800",
    oldPrice: "৳35,000",
    off: "৳ 1,200 OFF",
  },
  {
    title: "Motorola Edge 60 Fusion 5G",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 30,200",
    oldPrice: "৳32,500",
    off: "৳ 2,300 OFF",
  },
];

const Page = () => {
  return (
    <section className="bg-white">
      {/* ---------- Banner ---------- */}
      <div className=" pt-6">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/images/products-banner/Mobile-Phones-7708.webp"
            alt="Mobile Phones"
            width={1600}
            height={320}
            className="w-full h-[180px] md:h-[260px] object-cover"
            priority
          />
        </div>
      </div>

      {/* ---------- Content ---------- */}
      <div
        className="
       py-8"
      >
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-2">Home › Mobile Phone</p>

        <h1 className="text-2xl font-bold mb-6">Mobile Phone</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* ---------- Filters ---------- */}
          <aside className="lg:col-span-3">
            <div className="border rounded-xl bg-white">
              {/* Header */}
              <div className="px-4 py-3 border-b font-semibold">Filters</div>

              {/* -------- Price Range -------- */}
              <div className="px-4 py-4 border-b">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium">Price Range</p>
                  <span className="text-gray-400">⌃</span>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    className="w-full border rounded-md px-2 py-1 text-sm"
                    placeholder="0"
                  />
                  <input
                    className="w-full border rounded-md px-2 py-1 text-sm"
                    placeholder="550000"
                  />
                  <button className="border rounded-md px-2 py-1 text-primary hover:bg-primary hover:text-white transition">
                    ▶
                  </button>
                </div>
              </div>

              {/* -------- Storage -------- */}
              <div className="px-4 py-4 border-b">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium">Storage</p>
                  <span className="text-gray-400">⌃</span>
                </div>

                <input
                  className="w-full border rounded-full px-3 py-1 text-sm mb-3"
                  placeholder="Search Storage"
                />

                <div className="space-y-2 text-sm">
                  {["12/128GB", "12/1TB", "12/256GB", "128GB"].map((v) => (
                    <label key={v} className="flex items-center gap-2">
                      <input type="checkbox" />
                      {v}
                    </label>
                  ))}
                </div>

                <button className="mt-3 text-sm text-primary font-medium">
                  + More
                </button>
              </div>

              {/* -------- Type -------- */}
              <div className="px-4 py-4 border-b">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium">Type</p>
                  <span className="text-gray-400">⌃</span>
                </div>

                <div className="space-y-2 text-sm">
                  {[
                    "Exynos 5G",
                    "Inactive",
                    "Regular Box",
                    "Slim Box",
                    "Snapdragon 5G",
                  ].map((v) => (
                    <label key={v} className="flex items-center gap-2">
                      <input type="checkbox" />
                      {v}
                    </label>
                  ))}
                </div>
              </div>

              {/* -------- SIM -------- */}
              <div className="px-4 py-4 border-b">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium">Sim</p>
                  <span className="text-gray-400">⌃</span>
                </div>

                <div className="space-y-2 text-sm">
                  {["Dual", "Single", "e-Sim"].map((v) => (
                    <label key={v} className="flex items-center gap-2">
                      <input type="checkbox" />
                      {v}
                    </label>
                  ))}
                </div>
              </div>

              {/* -------- Region -------- */}
              <div className="px-4 py-4 border-b">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium">Region</p>
                  <span className="text-gray-400">⌃</span>
                </div>

                <input
                  className="w-full border rounded-full px-3 py-1 text-sm mb-3"
                  placeholder="Search Region"
                />

                <div className="space-y-2 text-sm">
                  {[
                    "AUS",
                    "BD-Official",
                    "CN",
                    "CN - Dual SIM",
                    "CN Global",
                  ].map((v) => (
                    <label key={v} className="flex items-center gap-2">
                      <input type="checkbox" />
                      {v}
                    </label>
                  ))}
                </div>

                <button className="mt-3 text-sm text-primary font-medium">
                  + More
                </button>
              </div>

              {/* -------- Brands -------- */}
              <div className="px-4 py-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium">Brands</p>
                  <span className="text-gray-400">⌃</span>
                </div>

                <input
                  className="w-full border rounded-full px-3 py-1 text-sm mb-3"
                  placeholder="Search Brand"
                />

                <div className="space-y-2 text-sm">
                  {["Apple", "Benco", "Energizer", "Google", "HONOR"].map(
                    (v) => (
                      <label key={v} className="flex items-center gap-2">
                        <input type="checkbox" />
                        {v}
                      </label>
                    ),
                  )}
                </div>

                <button className="mt-3 text-sm text-primary font-medium">
                  + More
                </button>
              </div>
            </div>
          </aside>

          {/* ---------- Products ---------- */}
          <main className="lg:col-span-9">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-500">Showing: (304 Items)</p>

              <select className="border rounded px-3 py-1 text-sm">
                <option>Sort By</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div
                  key={p.title}
                  className="
        bg-white
        border
        rounded-2xl
        p-4
        transition
        hover:shadow-lg
      "
                >
                  {/* Image */}
                  <div className="relative h-48 mb-4 flex items-center justify-center">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold mb-2">{p.title}</h3>

                  {/* Price */}
                  <p className="text-lg font-bold mb-1">{p.price}</p>

                  {/* Old price + OFF */}
                  {p.oldPrice && (
                    <div className="flex items-center gap-2 text-sm mb-4">
                      <span className="line-through text-gray-400">
                        {p.oldPrice}
                      </span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium text-xs">
                        {p.off}
                      </span>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button
                      className="
            flex-1
            border
            rounded-full
            py-2
            text-sm
            font-medium
            hover:bg-gray-100
            transition
          "
                    >
                      Shop Now
                    </button>

                    <button
                      className="
            w-10 h-10
            border
            rounded-full
            flex items-center justify-center
            hover:bg-gray-100
            transition
          "
                      aria-label="Add to cart"
                    >
                      🛒
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-10">
              <button className="px-4 py-2 border rounded">Previous</button>
              <button className="px-4 py-2 bg-primary text-white rounded">
                1
              </button>
              <button className="px-4 py-2 border rounded">2</button>
              <button className="px-4 py-2 border rounded">Next</button>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Page;
