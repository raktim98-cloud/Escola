import Image from "next/image";
import FootSubscribe from "./sideComponents/FootSubscribe";
import FooterImage from "../image/footer_image.png";
import footLogo from "../image/logo/Brand_logo.png";
import { FaCheck } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <section
      style={{
        backgroundImage: `url(${FooterImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="py-25 relative">
          {/* absulate subscribe part */}
          <div className="absolute top-0 left-0 translate-x-[35px] -translate-y-1/2">
            <FootSubscribe />
          </div>
          {/* footer part */}
          <div>
            <div className="flex items-center justify-center gap-[30px] py-9">
              {/* 1st part */}
              <div className="">
                <div className="flex items-center gap-[10px]">
                  <div>
                    <Image
                      src={footLogo.src}
                      alt={footLogo.src}
                      width={36}
                      height={36}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-[30px] leading-[54.1px] font-bold text-white">
                    Escola
                  </h4>
                </div>
                <p className="text-[17px] leading-[26.1px] text-white pb-[39px] pt-[13px]">
                  Many desktop ublishing packages web page editors no Lorem
                  Ipsum a default model text, and a search for
                </p>
                {/* social media icon */}
                <div className="flex space-x-2 p-2 rounded">
                  <a
                    href="#"
                    className="border border-white p-3 rounded-full hover:bg-primary hover:border-transparent transition-colors"
                  >
                    <FaFacebookF className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="border border-white p-3 rounded-full hover:bg-primary hover:border-transparent transition-colors"
                  >
                    <FaLinkedinIn className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="border border-white p-3 rounded-full hover:bg-primary hover:border-transparent transition-colors"
                  >
                    <FaInstagram className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="border border-white p-3 rounded-full hover:bg-primary hover:border-transparent transition-colors"
                  >
                    <FaTwitter className="text-white" />
                  </a>
                </div>
              </div>

              {/* 2nd part */}
              <div className="p-5 rounded-lg text-white w-64">
                <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-white" />
                    <span>Software Corner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-white" />
                    <span>Application Center</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-white" />
                    <span>Research Section</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-white" />
                    <span>Developing Corner</span>
                  </li>
                </ul>
              </div>
              {/* 2nd end */}

              {/* 3rd part start */}
              <div className="p-5 rounded-lg text-white w-72">
                <h2 className="text-lg font-semibold mb-4">Contact</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <FaPhoneAlt className="text-blue-500" />
                    <span>+880 123 45 67 89</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaEnvelope className="text-blue-500" />
                    <span>yourmail@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-blue-500" />
                    <span>1212, Lav Vegas, The Veg Street, USA</span>
                  </li>
                </ul>
              </div>
              {/* 3rd part end */}

              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div class="text-gray-400 text-sm">
  <div class="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-5 border-t border-gray-700">
   
    <p class="mb-2 md:mb-0">
      © Yoursitename 2023 | All Rights Reserved
    </p>

   
    <div class="flex space-x-4">
      <a href="#" class="hover:text-white transition">Terms & Condition</a>
      <a href="#" class="hover:text-white transition">Privacy Policy</a>
      <a href="#" class="hover:text-white transition">Contact Us</a>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
