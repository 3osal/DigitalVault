import Image from "next/image";
import { HERO_CardOff } from "./LandingData";
import LandingSwiper from "./LandingSwiper";

const Landing = () => {
  return (
    <div className="hidden lg:block bg-slate-200 w-full h-[500px]">
        <LandingSwiper />
    </div>
  );
};

export default Landing;
