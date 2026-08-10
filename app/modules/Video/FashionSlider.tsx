"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function FashionSlider() {
  const images = [
    "/img (71).png",
    "/img (65).png",
    "/img.webp",
    "/img (28).jpeg",
    "/img (13).jpeg",
    "/img (4).jpeg",
    "/img (11).jpeg",
    "/imgu.jpeg",
  ];

  return (
    <section className="bg-[#020817] py-10 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        speed={3500}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
              <img
                src={img}
                alt={`Fashion ${index + 1}`}
                className="w-full h-[450px] object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}