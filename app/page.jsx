import Brands from "@/components/brands/Brands";
import FeaturedPro from "@/components/featured product/FeaturedPro";
import HotDeals from "@/components/hot deals/HotDeals";
import Landing from "@/components/landing/Landing";
import Special from "@/components/special/Special";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Landing />
      <Brands />
      <HotDeals />
      <FeaturedPro />
      <FeaturedPro />
      <Special />
    </div>
  );
}
