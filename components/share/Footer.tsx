"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container py-14">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Contact */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {/* <Image
                src="/images/logo-footer.png"
                alt="Gadgets AppleGadgets"
                width={180}
                height={40}
              /> */}
              <span className="text-orange-500">gadgets</span>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-1 text-primary" />
              <div>
                <p className="text-sm font-semibold text-white">Phone Number</p>
                <p className="text-sm">09678148148</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-1 text-primary" />
              <div>
                <p className="text-sm font-semibold text-white">
                  Email Address
                </p>
                <p className="text-sm">contact@applegadgetsbd.com</p>
              </div>
            </div>

            {/* App buttons */}
            {/* <div className="flex items-center gap-3 pt-2">
              <Image
                src="/images/appstore.png"
                alt="App Store"
                width={140}
                height={45}
              />
              <Image
                src="/images/googleplay.png"
                alt="Google Play"
                width={140}
                height={45}
              />
            </div> */}
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase">
              Location
            </h3>

            {[
              {
                title: "Bashundhara City Shopping Complex",
                desc: "Basement 2, Shop 26",
              },
              {
                title: "Bashundhara City Shopping Complex",
                desc: "Level 5, Block-A, Shop-6,7,8",
              },
              {
                title: "Jamuna Future Park",
                desc: "Level 4, Zone A (West Court), Shop 28D",
              },
              {
                title: "AG Care | Bashundhara City Shopping Complex",
                desc: "Level-3, Block-B, Shop-07",
              },
              {
                title: "AG Care | Jamuna Future Park, Dhaka",
                desc: "Level 4, Zone A (West Court), Shop 16B1",
              },
            ].map((loc) => (
              <div key={loc.title} className="flex gap-3">
                <MapPin size={16} className="mt-1 text-primary" />
                <div>
                  <p className="text-sm text-white">{loc.title}</p>
                  <p className="text-xs text-gray-400">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* About Us */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase">
              About Us
            </h3>

            {[
              "About Us",
              "Corporate",
              "Order Tracking",
              "Blog",
              "Press Coverage",
              "Careers",
              "Complain / Advice",
              "Contact Us",
              "FAQs",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="block text-sm hover:text-white transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Policy */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase">
              Policy
            </h3>

            {[
              "Privacy Policy",
              "EMI and Payment Policy",
              "Warranty Policy",
              "Exchange Policy",
              "Delivery Policy",
              "Pre-Order Policy",
              "Refund Policy",
              "Return Policy",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="block text-sm hover:text-white transition"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">
            © 2026 Thanks From Apple Gadgets | All rights reserved
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            <a className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaFacebookF />
            </a>
            <a className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaInstagram />
            </a>
            <a className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
