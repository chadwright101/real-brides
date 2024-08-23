"use client";

import { SetStateAction, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Image from "next/image";

interface Props {
  cssClasses?: string;
  desktop?: boolean;
  data: string[];
}

const HeroSlider = ({ cssClasses, desktop, data }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper: {
    activeIndex: SetStateAction<number>;
  }) => {
    setCurrentIndex(swiper.activeIndex);
  };

  if (desktop) {
    return (
      <Swiper
        onSlideChange={handleSlideChange}
        autoplay={{ delay: 5000 }}
        speed={1000}
        effect="fade"
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        className={cssClasses}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop
        style={
          {
            "--swiper-pagination-color": "#523B6D",
            "--swiper-pagination-bullet-inactive-color": "#523B6D",
            "--swiper-pagination-bullet-inactive-opacity": "0.8",
            "--swiper-pagination-bullet-size": "10px",
          } as React.CSSProperties
        }
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide}
              alt={`Real Brides - Image ${index + 1}`}
              className="rounded-none w-full h-full object-cover"
              width={1280}
              height={857}
              loading={index < 1 ? "eager" : "lazy"}
            />
          </SwiperSlide>
        ))}
        <button
          className="swiper-button-prev absolute top-[49%] z-10 left-20 cursor-pointer grid place-items-center p-2 rounded-full bg-white/[80%] w-10 h-10 hover:bg-white"
          aria-label="Show previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            className=" rotate-180 -translate-x-[1px]"
            fill="#020202"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </button>
        <button
          className="swiper-button-next absolute top-[49%] z-10 right-20 cursor-pointer grid place-items-center p-2 rounded-full bg-white/[80%] w-10 h-10 hover:bg-white"
          aria-label="Show next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            fill="#020202"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </button>
      </Swiper>
    );
  } else {
    return (
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        spaceBetween={12}
        speed={1500}
        modules={[Autoplay, Pagination]}
        className={cssClasses}
        pagination={{
          dynamicBullets: true,
        }}
        loop
        style={
          {
            "--swiper-pagination-color": "#523B6D",
            "--swiper-pagination-bullet-inactive-color": "#523B6D",
            "--swiper-pagination-bullet-inactive-opacity": "0.8",
          } as React.CSSProperties
        }
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index} className="pb-10">
            <SwiperSlide key={index}>
              <Image
                src={slide}
                alt={`Real Brides - Image ${index + 1}`}
                className="rounded-none w-full h-full object-cover"
                width={900}
                height={540}
                loading={index < 1 ? "eager" : "lazy"}
              />
            </SwiperSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
};

export default HeroSlider;
