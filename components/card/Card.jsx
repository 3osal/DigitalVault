import Image from "next/image";
import Button from "../button/Button";
const Card = ({ title , desc, price, img}) => {
  return (
    <div className="bg-white transition-all  relative w-full rounded-[7px] p-[10px] flex flex-col gap-2 items-center hover:shadow-lg">
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
        <div>
          <span className="text-offer font-bold">{`${price}$`}</span>
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Card;
