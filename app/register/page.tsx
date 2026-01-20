"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  return (
    <main className="flex min-h-fit items-center justify-center px-4  px-4 py-16 lg:py-20">
      <div
        className="w-full max-w-md rounded-2xl bg-white p-7
        shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
      >
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Create Account
          </h1>
        </div>

        {/* Google Create */}
        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-lg
            border border-gray-300 py-2.5 text-sm font-medium
            hover:bg-gray-50 transition"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <span className="h-px w-full bg-gray-200" />
          <span className="text-xs text-gray-400">OR</span>
          <span className="h-px w-full bg-gray-200" />
        </div>

        {/* Email / Phone */}
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email or phone number
          </label>
          <input
            type="text"
            placeholder="Enter email or phone number"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
              focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Terms */}
        <p className="mb-6 text-sm text-gray-500 leading-relaxed">
          By creating an account, you agree to the{" "}
          <Link
            href="/privacy-policy"
            className="font-medium text-gray-700 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/terms"
            className="font-medium text-gray-700 hover:underline"
          >
            Delivery Terms &amp; Conditions
          </Link>
          .
        </p>

        {/* CTA */}
        <button
          type="submit"
          className="w-full rounded-full bg-orange-500 py-3
            text-sm font-semibold text-white
            hover:bg-orange-600 transition"
        >
          Get Started
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-orange-600 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
