import Link from "next/link";
import React from "react";
import { FOOTER_CONTACT, FOOTER_HELP, FOOTER_SHOP } from "./FooterData";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 p-[20px]">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-mainColor capitalize font-bold text-[40px]"
            >
              DigitalVault
            </Link>
          </div>
          <div>
            <h2 className="text-primary capitalize font-bold text-[18px] mb-4">
              shop
            </h2>
            <div className="flex flex-col gap-2 w-max">
              {FOOTER_SHOP.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-secondary capitalize hover:text-mainColor"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-primary capitalize font-bold text-[18px] mb-4">
              need help?
            </h2>
            <div className="flex flex-col gap-2 w-max">
              {FOOTER_HELP.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-secondary capitalize hover:text-mainColor"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-primary capitalize font-bold text-[18px] mb-4">
              contact
            </h2>
            <div className="flex flex-col gap-2 w-max">
              {FOOTER_CONTACT.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-secondary capitalize hover:text-mainColor"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className="bg-zinc-900 p-[20px]">
        <div className="container flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
        <div>
          <p className="text-white">2024 copyright by DigitalVault</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white text-[25px]">
          <FaCcVisa/>
          </span>
          <span className="text-white text-[25px]">
          <FaCcPaypal />
          </span>
          <span className="text-white text-[25px]">
          <FaCcMastercard />
          </span>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
