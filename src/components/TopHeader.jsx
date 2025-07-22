"use client";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot,FaInstagram,FaLinkedin } from "react-icons/fa6";
import { FaFacebookF,FaTwitter } from "react-icons/fa";
function TopHeader() {
  const handleEmail = () => {
    window.location.href = "mailto:shuvrow98@gmail.com";
  };

  return (
    <section className="px-[45px]">
      <div className="flex items-center justify-between gap-3 ">
        {/* 1st part */}
        <div className="flex items-center justify-center gap-[20px] py-4">
          <div className="flex items-center justify-center gap-[10px]">
            <span className="text-primary text-xl">
              <IoIosMail />
            </span>
            <a
              href="mailto:info@example.com"
              className="text-[#1F242C] text-[16px] leading-[160%] hover:underline"
            >
              info@example.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-[10px]">
            <span className="text-primary text-xl">
              <FaLocationDot />
            </span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=6391+Elgin+St,+Celina,+10299"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F242C] text-[16px] leading-[160%]"
            >
              6391 Elgin St. Celina, 10299
            </a>
          </div>
        </div>
        {/* 2nd part */}
        <div className="flex items-center justify-center">
            <button className="bg-primary px-[30px] py-[16px] relative inline-flex items-center justify-start inline-block overflow-hidden font-bold  group">
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-1000 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Get a quote</span>
                
            </button>

            <div className="flex items-center justify-center gap-[25px] px-[30px]">
                <span className="text-primary text-[14px] hover:text-black transition-all "><FaFacebookF/></span>
                <span className="text-primary text-[14px] hover:text-black transition-all "><FaInstagram/></span>
                <span className="text-primary text-[14px] hover:text-black transition-all "><FaTwitter/></span>
                <span className="text-primary text-[14px] hover:text-black transition-all "><FaLinkedin/></span>
            </div>
        </div>
      </div>
    </section>
  );
}

export default TopHeader;


{/* <a href="#_" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Button Text</span>
    <span class="absolute inset-0 border-2 border-white rounded-full"></span>
</a> */}