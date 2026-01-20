import type { Metadata } from "next";
import "./globals.css";
// import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Navbar from "@/components/share/Navbar";
import Footer from "@/components/share/Footer";

// Inter font setup
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ecommerce Website",
  description: "Ecommerce Website",
  metadataBase: new URL("https://abukawsarux.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white font-sans">
        {/* <Providers> */}
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
        {/* </Providers> */}
      </body>
    </html>
  );
}
