"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay, Mousewheel } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "next/image";

type ProjectSliderProps = {
  images: string[];
};

export default function SwiperTest({ images }: ProjectSliderProps) {
  SwiperCore.use([Navigation, Scrollbar, Autoplay, Mousewheel]);

  return (
    <div className="relative flex flex-col items-center overflow-hidden w-[350px] h-[250px] sm:w-[350px] sm:h-[200px]">
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={40}
        slidesPerView={1}
        direction="vertical"
        mousewheel={true}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex flex-col w-[350px] h-[250px] sm:w-[350px] sm:h-[200px]">
              <div className="relative rounded-xl w-[350px] h-[250px] overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={`project-image-${index}`}
                  fill
                  className="relative object-cover w-[350px] h-[250px] rounded-xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
