"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-fit items-center justify-center  px-4 py-16 lg:py-20">
      <div
        className="w-full max-w-md rounded-2xl bg-white p-7
        shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
      >
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">Sign In</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Please sign in to continue
          </p>
        </div>

        {/* Google Login */}
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

        {/* Email */}
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

        {/* Password */}
        <div className="mb-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 text-sm
                focus:border-orange-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2
                text-gray-400 hover:text-gray-600"
            >
              👁
            </button>
          </div>
        </div>

        {/* Forgot password */}
        <div className="mb-5 text-right">
          <Link
            href="/forgot-password"
            className="text-xs text-orange-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Sign in */}
        <button
          type="submit"
          className="w-full rounded-lg bg-orange-500 py-2.5
            text-sm font-semibold text-white
            hover:bg-orange-600 transition"
        >
          Sign In
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-orange-600 hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}
