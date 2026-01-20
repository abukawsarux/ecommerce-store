"use client";

import RelatedProduct from "@/components/product/RelatedProduct";
import Image from "next/image";
import { useState } from "react";

export default function ProductPage() {
  const [qty, setQty] = useState(1);

  return (
    <main className="py-8 ">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div>
          <div className="rounded-xl border p-6">
            <Image
              src="/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp"
              alt="Redmi Note 14 4G"
              width={450}
              height={450}
              className="mx-auto"
            />
          </div>

          <div className="mt-4 flex gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-20 w-20 cursor-pointer rounded-lg border p-2 hover:border-orange-500"
              >
                <Image
                  src={`/images/products/thumb-${i}.png`}
                  alt="thumb"
                  width={80}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Redmi Note 14 4G
          </h1>

          <div className="mt-2 flex items-center gap-3 text-sm">
            <span className="text-xl font-bold text-gray-900">৳20,600</span>
            <span className="text-gray-400 line-through">৳21,500</span>
            <span className="text-green-600 font-medium">In Stock</span>
          </div>

          {/* Color */}
          <div className="mt-6">
            <p className="mb-2 text-sm font-medium">Color</p>
            <div className="flex gap-2">
              {["Lime Green", "Midnight Black", "Ocean Blue"].map((c) => (
                <button
                  key={c}
                  className="rounded-full border px-4 py-1 text-sm hover:border-orange-500"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Storage */}
          <div className="mt-6">
            <p className="mb-2 text-sm font-medium">Storage</p>
            <div className="flex gap-2">
              {["6/128GB", "8/128GB", "8/256GB"].map((s) => (
                <button
                  key={s}
                  className="rounded-full border px-4 py-1 text-sm hover:border-orange-500"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6 flex items-center gap-4">
            <p className="text-sm font-medium">Quantity</p>
            <div className="flex items-center rounded-full border">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-3 py-1"
              >
                −
              </button>
              <span className="px-4">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-3 py-1">
                +
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-col gap-3">
            <button className="rounded-full bg-orange-500 py-3 text-white font-semibold hover:bg-orange-600">
              Shop Now
            </button>

            <button className="rounded-full border py-3 font-medium hover:bg-gray-50">
              Add To Cart
            </button>

            <button className="rounded-full bg-green-100 py-3 text-green-700 font-medium">
              WhatsApp
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Delivery Timescale: <strong>3–5 Days</strong>
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="my-12">
        <div className="flex gap-6 border-b text-sm font-medium">
          <button className="border-b-2 border-orange-500 pb-2">
            Specification
          </button>
          <button className="pb-2 text-gray-500">Description</button>
          <button className="pb-2 text-gray-500">Warranty</button>
        </div>

        {/* Specification Table */}
        <div className="mt-6 rounded-xl border">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Brand", "Xiaomi"],
                ["Display", '6.67" AMOLED 120Hz'],
                ["Processor", "Helio G99 Ultra"],
                ["RAM & Storage", "8GB / 256GB"],
                ["Battery", "5500 mAh"],
                ["Charging", "33W Fast Charging"],
              ].map(([k, v]) => (
                <tr key={k} className="border-b last:border-none">
                  <td className="w-1/3 px-4 py-3 text-gray-500">{k}</td>
                  <td className="px-4 py-3 font-medium">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <RelatedProduct />
    </main>
  );
}
