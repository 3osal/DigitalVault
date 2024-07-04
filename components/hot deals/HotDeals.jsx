"use client"
import Image from "next/image";
import Button from "../button/Button";
import DealsSwiper from "./DealsSwiper";

const HotDeals = () => {
  return (
    <section className="bg-mainColor p-[20px]">
      <div className="container">
        <h2 className="text-[20px] text-white font-bold mb-2 ">
          Hot Deals of the week
        </h2>
      <DealsSwiper />
      </div>
    </section>
  );
};

export default HotDeals;
