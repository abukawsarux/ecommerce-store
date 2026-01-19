import FeaturedCategories from "@/components/home/FeaturedCategories";
import HeroSection from "@/components/home/HeroSection";
import HomeAppliances from "@/components/home/HomeAppliances";
import NewTrends from "@/components/home/NewTrends";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <NewTrends />
      <HomeAppliances />
    </>
  );
}
