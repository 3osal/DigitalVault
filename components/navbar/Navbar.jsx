"use client";
import Link from "next/link";
import { NAV_LINK } from "./NavbarData";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handelBtn = () => {
    setOpen(!open);
  };
  return (
    <nav className="bg-mainColor p-3 relative">
      <div className="container">
        {/* nav top */}
        <div className=" flex justify-between items-center">
          {/* logo */}
          <div className="logo flex gap-2 items-center">
            <MdMenu
              onClick={handelBtn}
              className="text-white text-[20px] cursor-pointer m-0 p-0 md:hidden"
            />
            <Link
              href="/"
              className="text-white capitalize font-bold text-[20px]"
            >
              DigitalVault
            </Link>
          </div>
          {/* search and user */}
          <div className="flex gap-2 items-center">
            <div className="hidden md:flex gap-2 items-center bg-white rounded-[4px] px-[10px] py-2">
              <input
                type="text"
                className="bg-transparent outline-none text-[15px] text-secondary"
                placeholder="Search Product..."
              />
              <CiSearch className="text-mainColor text-[20px]" />
            </div>
            <Link href="/" className="text-white capitalize text-[13px]">
              login
            </Link>
            <span className="text-slate-400/50">|</span>
            <Link href="/" className="text-white capitalize text-[13px]">
              sign in
            </Link>
          </div>
        </div>
        {/* nav bottom */}
        {/* links */}
        <div className="hidden mx-auto mt-3 w-max md:flex items-center gap-5">
          {NAV_LINK.map((item) => (
            <Link
              key={item.key}
              href={item.path}
              className="text-white uppercase"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      {/* hidden nav */}
      <div className={open ? "bg-white z-20 w-full p-2 flex flex-col gap-3 absolute left-0 top-[55px] md:hidden" : 'hidden'}>
        {NAV_LINK.map((item) => (
          <Link
            key={item.key}
            href={item.path}
            className="text-mainColor uppercase hover:text-black"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
