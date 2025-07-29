"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import LogoAdaptavist from "../../image/logo/adaptvist.png";
import LogoMailgun from "../../image/logo/Mailgun.png";
import LogoKabbage from "../../image/logo/Kabbage.png";
import LogoIllumous from "../../image/logo/Illumous.png";

const logoData = [
  {
    id: 1,
    image: LogoAdaptavist,
  },
  {
    id: 2,
    image: LogoMailgun,
  },
  {
    id: 3,
    image: LogoKabbage,
  },
  {
    id: 4,
    image: LogoIllumous,
  },
];

function BrandLogo() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };
  return (
    <div className="p-[30px] bg-white drop-shadow-[0_0_60px_rgba(0,0,0,0.05)]">
      <div className="slider-container">
        <Slider {...settings}>
          
            {logoData?.map((item) => (
              <div key={item.id} className="px-2 py-[14px]">
                <LogoList image={item.image} />
              </div>
            ))}
          
        </Slider>
      </div>
    </div>
  );
}

export default BrandLogo;

const LogoList = ({ image }) => {
  return (
    <div className=" h-[30px] flex items-center justify-center relative">
      <Image
        src={image}
        alt="image"
        width={130}
        height={30}
        className="object-cover"
      />
    </div>
  );
};
