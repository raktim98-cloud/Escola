'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: "Courtney Henry",
    title: "Marketing specialist",
    text: "Architecto id sint aut est molestiae reiciendis. Minima quis illo. Accusamus repudiandae neque veniam. Quasi rerum sit consequuntur aut tenetur.",
  },
  {
    name: "Ralph Edwards",
    title: "CEO specialist",
    text: "Blanditiis eius neque sed voluptatibus qui velit voluptatibus dolor reiciendis. Pariatur ex ipsam mollitia at. Iste temporibus labore nihil velit.",
  },
  {
    name: "Ralph Edwards",
    title: "CEO specialist",
    text: "Et recusandae consequatur voluptatibus quia occaecati sed velit. Recusandae ducimus voluptas illo sunt occaecati. Fugiat nihil sed reprehenderit.",
  },
];

export default function Testimonial() {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto text-center">
      <p className="text-sm text-blue-600 font-semibold mb-2">Clients Review</p>
      <h2 className="text-3xl font-bold mb-8">Expert Guidance for Your Journey</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="bg-white p-6 rounded-lg shadow-md text-left">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-xl">★★★★★</div>
              <div className="ml-auto text-blue-600 text-2xl font-bold">“</div>
            </div>
            <p className="text-gray-700 mb-6">{item.text}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
