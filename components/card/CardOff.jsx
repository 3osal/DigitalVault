import Image from "next/image";
import Button from "../button/Button";
const CardOff = ({offer , title , desc, price, priceOff, img}) => {
  return (
    <div className="bg-white shadow-md relative w-full rounded-[7px] p-[10px] flex flex-col gap-2 items-center">
      <span className="absolute right-0 top-2 bg-offer text-white font-bold p-[5px] text-[12px] rounded-l-[3px]">
        {`${offer}% off`}
      </span>
      <figure className="w-[150px] h-[110px] mx-auto">
        <Image
          src={img}
          className="hover:scale-125 transition-all w-full h-full z-30"
          alt="imagel"
          width={500}
          height={500}
        />
      </figure>
      <div>
        <h2 className="text-primary text-[20px] capitalize font-bold">
          {title}
        </h2>
        <p className="text-[11px] text-secondary">
    {desc}
        </p>
        <div className="flex gap-2 items-center">
          <span className="text-offer font-bold">{`${priceOff}$`}</span>
          <s className="text-secondary text-[12px]">{`${price}$`}</s>
        </div>
      </div>
      <Button />
    </div>
  );
};

export default CardOff;
