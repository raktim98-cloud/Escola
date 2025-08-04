import Image from "next/image";
import BGImage from "../../image/knoweledge_bg_image.png";
import Recharce_Image from "../../image/recharce image.png";
import { IoIosCheckmarkCircle } from "react-icons/io";

import SectionHead from "../SectionHead";
import Button from "../button/Button";

function Knowledge() {
  console.log(BGImage);

  return (
    <section
      className="relative px-7 pt-[65px]"
      style={{
        backgroundImage: `url(${BGImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="flex flex-col gap-[47px] translate-y-15">
          {/* 1st part */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center justify-start">
              <SectionHead
                title="Services we’re offering"
                subtitle="Knowledge is power is the key education"
                titleClass="text-primary text-blue-600 font-bold leading-[31.5px] -tracking-[0.3px] pb-[10px]"
                subtitleClass="text-[32px] text-[#192335] md:text-[42px] font-bold leading-[54.1px] pr-40"
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
          <div className="grid grid-cols-[561px_1fr] rounded-[40px] drop-shadow-[0_0_60px_rgba(0,0,0,0.2)] bg-white">
            <div className="relative overflow-hidden w-[561px] h-[446px]">
              <Image
                src={Recharce_Image}
                alt="image"
                fill
                className="object-cover rounded-l-[40px]"
              />
            </div>

            <ul className="px-[70px] py-[60px]">
                <li className="flex gap-[20px] items-start ">
                    <span className="text-3xl text-blue-600"><IoIosCheckmarkCircle/></span> 
                    <div>
                        <h4 className="font-bold text-[#192335] text-[20px] ">Parse Optional</h4>
                        <p className=" text-[#192335] text-[17px] leading-[26.1px]">The goal of ecology is to understand how organisms interact with each other</p>
                    </div>
                </li>
                <li className="flex gap-[20px] items-start py-8">
                    <span className="text-3xl text-blue-600"><IoIosCheckmarkCircle/></span> 
                    <div>
                        <h4 className="font-bold text-[#192335] text-[20px] ">Parse Optional</h4>
                        <p className=" text-[#192335] text-[17px] leading-[26.1px]">The goal of ecology is to understand how organisms interact with each other</p>
                    </div>
                </li>
                <li className="flex gap-[20px] items-start ">
                    <span className="text-3xl text-blue-600"><IoIosCheckmarkCircle/></span> 
                    <div>
                        <h4 className="font-bold text-[#192335] text-[20px] ">Parse Optional</h4>
                        <p className=" text-[#192335] text-[17px] leading-[26.1px]">The goal of ecology is to understand how organisms interact with each other</p>
                    </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Knowledge;
