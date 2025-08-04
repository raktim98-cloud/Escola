import Image from "next/image";
import SectionHead from "../SectionHead";
import Button from "../button/Button";
import PopularImage from "../../image/course/popular course image.png";
import { IoIosCheckmarkCircle } from "react-icons/io";

function PopularCourse() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col gap-[70px]">
          {/* 1st part */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center justify-start">
              <SectionHead
                title="Services we’re offering"
                subtitle="Knowledge is power is the key education"
                titleClass="text-primary text-blue-600 font-bold leading-[31.5px] -tracking-[0.3px] pb-[10px]"
                subtitleClass="text-[32px] text-[#192335] md:text-[40px] font-bold leading-[1.2380952381] pr-40"
              />
            </div>
            <div>
              <p>
                Education is the process of acquiring knowledge, skills, values,
                and attitudes through various methods such as
              </p>
              <div className="">
                <Button
                target="/contact"
                  text="Contact us"
                  buttonClass="!bg-white rounded-[5px] px-[36px] border border-primary mt-[24px]"
                  firstSpanClass="!bg-primary"
                  secondSpanClass="!bg-primary"
                  textClass="text-black text-[15px] font-medium leading-[60px] tracking-[0.5px] group-hover:text-white transition-all "
                />
              </div>
            </div>
          </div>
          {/* 2nd part */}
          <div className="flex items-center  gap-[28px]">
            <div className="bg-yellow-400 rounded-xl py-[50px] px-[42px] ">
              <h2 className="font-semibold text-lg mb-4 text-[#192335]">
                Education Is The Key
              </h2>
              <ul className="">
                <li className="flex t items-center pb-[16px]">
                  <span className="text-[24px] text-blue-600 mr-2">
                    <IoIosCheckmarkCircle />
                  </span>
                  <span className="text-[17px] leading-[26.1px]">
                    education is the key
                  </span>
                </li>
                <li className="flex t items-center pb-[16px]">
                  <span className="text-[24px] text-blue-600 mr-2">
                    <IoIosCheckmarkCircle />
                  </span>
                  <span className="text-[17px] leading-[26.1px]">
                    A Whole Lot of Digital Love for Less
                  </span>
                </li>
                <li className="flex t items-center pb-[16px]">
                  <span className="text-[24px] text-blue-600 mr-2">
                    <IoIosCheckmarkCircle />
                  </span>
                  <span className="text-[17px] leading-[26.1px]">
                    Know what your target market wants and needs
                  </span>
                </li>
                <li className="flex t items-center pb-[16px]">
                  <span className="text-[24px] text-blue-600 mr-2">
                    <IoIosCheckmarkCircle />
                  </span>
                  <span className="text-[17px] leading-[26.1px]">
                    A Whole Lot of Digital Love for Less
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-[701px] h-[302px]">
              <Image
                src={PopularImage}
                alt="logo"
                width={701}
                height={302}
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularCourse;
