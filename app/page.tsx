import BestSellers from "@/components/home/BestSellers";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FlashSaleSection from "@/components/home/FlashSaleProducts";
import HeroSection from "@/components/home/HeroSection";
import HomeAppliances from "@/components/home/HomeAppliances";
import NewArrivals from "@/components/home/NewArrivals";
import NewTrends from "@/components/home/NewTrends";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <FlashSaleSection />
      <FeaturedProducts />
      <NewArrivals />
      <BestSellers />
      {/* <NewTrends />
      <HomeAppliances /> */}
    </>
  );
}
