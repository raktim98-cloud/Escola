"use client";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import BrandLOgo from "../image/logo/Brand_logo.png";
import Messege_Logo from "../image/logo/messege_logo.png";
import { useState } from "react";
const dropData = ["Home 01", "Home 02", "Home 03", "Home 04", "Home 05"];

function Header() {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <section className="bg-[#F3F6FB]">
      <div className="max-w-[1520px] py-[20px] px-[40px] flex items-center justify-between">
        <div className="flex items-center justify-center gap-[150px]">
          {/* logo part */}
          <div className="flex items-center justify-center gap-[10px] relative z-10">
            <div className="size-[36px] ">
              <Image
                src={BrandLOgo}
                alt="logo"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
            <h3 className="text-[#192335] font-bold text-[30px] leading-[54px]">
              Escola
            </h3>
            <div className="w-[322px] h-[120px] absolute left-0 top-0 -translate-x-10 -translate-y-6 -z-10">
              <img
                className="w-full h-full object-cover"
                src="/triangle_image.png"
                alt="image"
              />
            </div>
          </div>
          {/* Menu Part */}
          <ul className="flex items-center justify-center gap-[25px]">
            <li
              onMouseEnter={() => setShowDropDown(true)}
              onMouseLeave={() => setShowDropDown(false)}
              className="flex relative group items-center justify-center gap-[5px] group"
            >
              <Link
                className="text-[16px] font-semibold leading-[130%] text-[#1F242C] hover:text-primary transition-all"
                href={"/"}
              >
                Home
              </Link>
              <span>
                <IoIosArrowDown />
              </span>

              {showDropDown && (
               <ul className="absolute left-0 top-0 mt-2 w-40 bg-white  shadow-lg z-50 after:absolute after:h-12 after:w-full after:bg-red-500 after:top-0 after:left-0 after:content-[''] after:z-0 after:py-2.5 after:opacity-0 ">


                  
                  {dropData.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="hover:bg-blue-600 hover:text-white px-4 py-2 cursor-pointer transition-colors duration-200"
                      >
                        <Link href="#">{item}</Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
            <li className="flex items-center justify-center gap-[5px]">
              <Link
                className="text-[16px] font-semibold leading-[130%] text-[#1F242C] hover:text-primary transition-all"
                href={"/about"}
              >
                About
              </Link>
              <span>
                <IoIosArrowDown />
              </span>
            </li>
            <li className="flex items-center justify-center gap-[5px]">
              <Link
                className="text-[16px] font-semibold leading-[130%] text-[#1F242C] hover:text-primary transition-all"
                href={"/services"}
              >
                Services
              </Link>
              <span>
                <IoIosArrowDown />
              </span>
            </li>
            <li className="flex items-center justify-center gap-[5px]">
              <Link
                className="text-[16px] font-semibold leading-[130%] text-[#1F242C] hover:text-primary transition-all"
                href={"/blog"}
              >
                Blog
              </Link>
              <span>
                <IoIosArrowDown />
              </span>
            </li>
            <li className="flex items-center justify-center gap-[5px]">
              <Link
                className="text-[16px] font-semibold leading-[130%] text-[#1F242C] hover:text-primary transition-all"
                href={"/page"}
              >
                Page
              </Link>
              <span>
                <IoIosArrowDown />
              </span>
            </li>
            <li className="flex items-center justify-center gap-[5px]">
              <Link
                className="text-[16px] font-semibold leading-[130%] text-[#1F242C] hover:text-primary transition-all"
                href={"/contact"}
              >
                Contact
              </Link>
              <span>
                <IoIosArrowDown />
              </span>
            </li>
          </ul>
        </div>
        {/* last part */}
        <div className="flex items-center justify-end gap-[15px]">
          <div className="size-[55px]">
            <Image
              src={Messege_Logo}
              alt="logo"
              width={55}
              height={55}
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-[16px] leading-[160%] text-[#1F242C]">
              Need raktim?
            </h4>
            <h4 className="text-[20px] leading-[140%] text-[#1F242C] font-semibold">
              (307) 555-0133
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
