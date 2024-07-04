import { BRANDS_DATA } from "./BrandsData"

const Brands = () => {
  return (
    <section className=" mx-auto bg-white text-center rounded-[7px]">
        <div className="container flex gap-2 w-max mx-auto md:p-[20px]">
            {BRANDS_DATA.map((item)=> (
                <span key={item.key} className="text-primary text-[20px] px-[5px] py-[10px] cursor-pointer md:text-[40px] md:px-[20px] md:py-[20px] rounded-[7px] hover:bg-slate-400">{item.icon}</span>
            ))}
        </div>
    </section>
  )
}

export default Brands