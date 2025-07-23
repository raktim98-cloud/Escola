import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import BrandLOgo from "../image/logo/Brand_logo.png";
import Messege_Logo from "../image/logo/messege_logo.png";

function Header() {
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
            <li className="flex items-center justify-center gap-[5px]">
              <Link
                className="text-[16px] font-semibold leading-[130%] text-[#1F242C] hover:text-primary transition-all"
                href={"/"}
              >
                Home
              </Link>
              <span>
                <IoIosArrowDown />
              </span>
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
            Need help?
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
