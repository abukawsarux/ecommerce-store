"use client";

import React, { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const categories = [
  {
    title: "Apple Products",
    items: ["iPhone", "MacBook", "iPad", "Apple Watch", "AirPods"],
    dropdown: true,
  },
  {
    title: "Phones",
    items: ["Samsung", "Xiaomi", "Vivo", "Oppo", "Realme"],
    dropdown: true,
  },
  {
    title: "Tablet",
    items: ["iPad", "Galaxy Tab", "Lenovo Tab"],
    dropdown: true,
  },
  {
    title: "Sound Equipment",
    items: ["Headphones", "Earbuds", "Speakers"],
    dropdown: true,
  },
  {
    title: "Power & Accessories",
    items: ["Chargers", "Power Bank", "Cables", "Adapters"],
    dropdown: true,
  },
  {
    title: "Fitness & Wearable",
    items: ["Smart Watch", "Fitness Band"],
    dropdown: true,
  },
  {
    title: "Peripherals",
    items: ["Keyboard", "Mouse", "Webcam"],
    dropdown: true,
  },
  {
    title: "Cover & Glass",
    items: ["Mobile Cover", "Screen Protector"],
    dropdown: true,
  },
  {
    title: "Smart Electronics",
    items: ["Smart Bulb", "Smart Plug", "Smart Camera"],
    dropdown: true,
  },
  {
    title: "Used Device",
    items: ["Used Phone", "Used Laptop"],
    dropdown: false,
  },
];

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="w-full">
      {/* ---------- Top Bar ---------- */}
      <div className="bg-black text-white">
        <div className="container flex items-center gap-6 py-4">
          <div className="text-xl font-bold whitespace-nowrap">
            <Link href="/" className="text-orange-500">
              gadgets
            </Link>
          </div>

          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full bg-zinc-800 pl-10 pr-4 py-2 text-sm focus:outline-none"
              />
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <Link href="#" className="hover:text-orange-400">
              Blog
            </Link>
            <Link href="#" className="hover:text-orange-400">
              Pre-order
            </Link>
            <Link href="#" className="text-orange-400 font-semibold">
              🎁 Offers
            </Link>
            <Link href="#" className="hover:text-orange-400">
              ⇄ Compare
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-xs text-white rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* ---------- Category Bar ---------- */}
      <div className="bg-white border-b">
        <div className="container flex items-center gap-6 py-3 text-sm font-medium whitespace-nowrap">
          {categories.map((category, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={category.title}
                className="relative group"
                onMouseEnter={() => category.dropdown && setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Trigger */}
                <button className="flex items-center gap-1 text-gray-800 group-hover:text-primary transition-colors">
                  {category.title}

                  {category.dropdown && (
                    <span
                      className={`
                        text-gray-400
                        transition-transform duration-300
                        ${isHovered ? "rotate-180 text-primary" : ""}
                      `}
                    >
                      <IoIosArrowDown />
                    </span>
                  )}
                </button>

                {/* Dropdown (PURE HOVER — SAME AS BEFORE) */}
                {category.dropdown && (
                  <div
                    className="
                      absolute left-0 top-full mt-2
                      w-56 bg-white border rounded-lg shadow-lg
                      opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition-all duration-200
                      z-50
                    "
                  >
                    <ul className="py-2">
                      {category.items.map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
