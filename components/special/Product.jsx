import Image from "next/image"
import { PRODUCT_DATA } from "./ProductData"
import Button from "../button/Button"

const Product = () => {
  return (
    <>
    {PRODUCT_DATA.map((item)=> (
            <div key={item.key} className="flex flex-col gap-3 items-start md:flex-row">
            <figure>
                <Image src={item.image} alt="ima" width={400} height={400} />
            </figure>
            <div>
                <h1 className="text-primary font-bold text-[35px] uppercase">{item.title}</h1>
                <div className="flex flex-col gap-3 mt-3">
                    <span className="text-secondary">Cpu: {item.cpu}</span>
                    <span className="text-secondary">Ram: {item.ram}</span>
                    <span className="text-secondary">Hard: {item.hard}</span>
                    <span className="text-secondary">Vga: {item.Vga}</span>
                    <span className="text-secondary">Power: {item.power}</span>
                <Button />
                </div>
            </div>
        </div>
    ))}
    </>
  )
}

export default Product