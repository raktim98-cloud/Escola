"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClintPic from "../../image/logo/riview clint.png";
import SectionHead from "../SectionHead";
const testimonials = [
  {
    id: 1,
    name: "Courtney Henry",
    title: "Marketing specialist",
    dis: "Architecto id sint aut est molestiae reiciendis. Minima quis illo. Accusamus repudiandae neque veniam. Quasi rerum sit consequuntur aut tenetur.",
    icon: ClintPic,
  },
  {
    id: 2,
    name: "Ralph Edwards",
    title: "CEO specialist",
    dis: "Blanditiis eius neque sed voluptatibus qui velit voluptatibus dolor reiciendis. Pariatur ex ipsam mollitia at. Iste temporibus labore nihil velit.",
    icon: ClintPic,
  },
  {
    id: 3,
    name: "Ralph Edwards",
    title: "CEO specialist",
    dis: "Et recusandae consequatur voluptatibus quia occaecati sed velit. Recusandae ducimus voluptas illo sunt occaecati. Fugiat nihil sed reprehenderit.",
    icon: ClintPic,
  },
];

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <div className="py-12 px-4  mx-auto text-center">
        <SectionHead
          headClass="text-start"
          title="Clients review"
          subtitle="Expert Guidance for Your Journey"
        />
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {testimonials?.map((item) => (
            <div key={item.id} className="px-[15px] py-[14px]">
              <ReviewList review={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const ReviewList = ({ review }) => {
  return (
    <div className="py-[30px] px-4 bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="text-yellow-400 text-[30px]">★★★★★</div>
        <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#2563eb]">
          <span className="text-white text-5xl font-bold leading-none text-center pt-6">
            ”
          </span>
        </div>
      </div>
      <p className="text-gray-700 text-[17px] leading-[26.1px] pt-[30px] pb-[30px]">{review.dis}</p>
      <div className="flex items-center  gap-4">
        <div className="size-[62px] relative overflow-hidden">
          <Image
            src={review.icon}
            alt="image"
            fill
            className="object-contain"
          />
        </div>
        <div className="pb-[20px]">
          <h5 className="text-lg leading-[27px] font-bold pb-[5px]">
            {review.name}
          </h5>
          <p className="text-[17px] leading-[26.1px]">{review.title}</p>
        </div>
      </div>
    </div>
  );
};
//  <div className="flex items-center mb-4">
//               <div className="text-yellow-400 text-xl">★★★★★</div>
//               <div className="ml-auto text-blue-600 text-2xl font-bold">“</div>
//             </div>
//             <p className="text-gray-700 mb-6">{review.text}</p>
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
//               <div>
//                 <p className="font-semibold">{review.name}</p>
//                 <p className="text-sm text-gray-500">{review.title}</p>
//               </div>
//             </div>
//             </div>
