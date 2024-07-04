import MainTitle from "../main title/MainTitle"
import Product from "./Product"

const Special = () => {
  return (
    <section className="mt-16 p-[20px] mb-16 z-20 bg-white relative md:before:absolute before:left-40 before:top-0 before:w-[3%] before:h-full before:bg-mainColor before:skew-x-[30deg] before:-z-10">
        <div className="container">
            <MainTitle lable="gaming" />
            <Product />
        </div>
    </section>
  )
}

export default Special