"use client";

import React from "react";
import Image from "next/image";

const CheckoutPage = () => {
  return (
    <section className="bg-white py-8">
      <div className="container">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <button className="border rounded-full px-3 py-1 text-sm">
            ← Back
          </button>
          <h1 className="text-2xl font-bold">Checkout & Confirm Order</h1>
        </div>

        {/* Notice */}
        <div className="bg-orange-50 text-sm px-4 py-3 rounded-lg mb-6">
          অর্ডার সংক্রান্ত যেকোনো প্রয়োজনে কথা বলুন আমাদের কাস্টমার সার্ভিস
          প্রতিনিধির সাথে - <strong>09678148148</strong>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* ================= LEFT FORM ================= */}
          <div className="lg:col-span-8 border rounded-2xl p-6">
            {/* ---------- Delivery Info ---------- */}
            <h2 className="font-semibold text-lg mb-6">Delivery Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className="label">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input className="input" placeholder="Enter full name" />
              </div>

              {/* Email */}
              <div>
                <label className="label">Email</label>
                <input className="input" placeholder="Enter Email" />
              </div>

              {/* Phone */}
              <div>
                <label className="label">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input className="input" placeholder="Enter phone number" />
              </div>

              {/* Division */}
              <div>
                <label className="label">
                  Division <span className="text-red-500">*</span>
                </label>
                <select className="input">
                  <option>Select your division</option>
                </select>
              </div>

              {/* District */}
              <div>
                <label className="label">
                  District <span className="text-red-500">*</span>
                </label>
                <select className="input">
                  <option>Select your city</option>
                </select>
              </div>

              {/* Upazila */}
              <div>
                <label className="label">
                  Upazila <span className="text-red-500">*</span>
                </label>
                <select className="input">
                  <option>Select your area</option>
                </select>
              </div>

              {/* Post Code */}
              <div>
                <label className="label">Post Code</label>
                <input className="input" placeholder="Enter Post Code" />
              </div>

              {/* Address */}
              <div>
                <label className="label">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  className="input"
                  placeholder="For ex: House: 23, Road: 24, Block: B"
                />
              </div>
            </div>

            {/* ---------- Payment Method ---------- */}
            <h2 className="font-semibold text-lg mt-10 mb-4">Payment Method</h2>

            <div className="grid grid-cols-2 gap-4">
              {/* Cash on Delivery */}
              <div className="method-card active">
                <span className="icon text-orange-500">💰</span>
                <span className="text-sm font-medium">Cash on Delivery</span>
                <span className="radio active" />
              </div>

              {/* Online Payment */}
              <div className="method-card">
                <span className="icon">💳</span>
                <span className="text-sm font-medium">Online Payment</span>
                <span className="radio" />
              </div>
            </div>
          </div>

          {/* ================= RIGHT SUMMARY ================= */}
          <div className="lg:col-span-4 border rounded-2xl p-6 h-fit">
            <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

            {/* Product */}
            <div className="flex gap-3 mb-4">
              <Image
                src="/images/products/redmi-note-14.png"
                alt="product"
                width={60}
                height={80}
                className="object-contain"
              />
              <div>
                <p className="font-medium">Redmi Note 14 4G</p>
                <p className="text-sm text-gray-500">1 quantity</p>
              </div>
            </div>

            {/* Coupon */}
            <div className="mb-4">
              <p className="font-medium mb-2">Apply Coupon</p>
              <div className="flex gap-2">
                <input
                  className="flex-1 border rounded-full px-3 py-2 text-sm"
                  placeholder="Apply Coupon"
                />
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
                  Apply Coupon
                </button>
              </div>
            </div>

            {/* Totals */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Sub Total (1 items)</span>
                <span>৳ 20,600</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="text-orange-500">will be added</span>
              </div>

              <div className="flex justify-between">
                <span>Discount</span>
                <span>৳ 0</span>
              </div>

              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Total Amount</span>
                <span>৳ 20,600</span>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-center gap-2 text-sm mt-4">
              <input type="checkbox" defaultChecked />I have read & agree to the
              website
              <span className="text-orange-500">Terms and Conditions</span>
            </label>

            {/* Confirm */}
            <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold">
              Confirm & Place Order
            </button>
          </div>
        </div>
      </div>

      {/* Input utility */}
      <style jsx>{`
        .input {
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 0.6rem 0.75rem;
          font-size: 0.875rem;
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default CheckoutPage;
