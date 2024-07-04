"use client"
import MainTitle from "../main title/MainTitle"
import FeaturedSwiper from "./FeaturedSwiper"

const FeaturedPro = () => {
  return (
    <section className="mt-10">
        <div className="container">
            <MainTitle lable="featured product" />
            <FeaturedSwiper />
        </div>
    </section>
  )
}

export default FeaturedPro