"use client";

import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface Props {
  cssClasses?: string;
  data: Array<{ date: string; url: string; image: string }>;
}

const LatestIssuesSlider = ({ cssClasses, data }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper: {
    activeIndex: SetStateAction<number>;
  }) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <Swiper
      onSlideChange={handleSlideChange}
      speed={1000}
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{
        dynamicBullets: true,
      }}
      className={cssClasses}
      slidesPerView={"auto"}
      slidesPerGroup={1}
      spaceBetween={20}
      style={
        {
          "--swiper-pagination-color": "#523B6D",
          "--swiper-pagination-bullet-inactive-color": "#523B6D",
          "--swiper-pagination-bullet-inactive-opacity": "0.8",
          "--swiper-pagination-bullet-size": "10px",
        } as React.CSSProperties
      }
    >
      {data.map(({ image, date, url }, index) => (
        <SwiperSlide
          key={index}
          className="max-w-[198px] h-auto pb-8 tablet:pb-10"
        >
          <Link
            href={url}
            target="_blank"
            aria-label={`Real Brides Magazine - ${date} Issue`}
            className="desktop:hover:opacity-85 ease-in-out duration-200"
          >
            <Image
              src={image}
              alt={`Real Brides Magazine - ${date} Issue`}
              className="rounded-none"
              width={198}
              height={280}
            />
            <p className="mt-2 italic text-center">{date}</p>
          </Link>
        </SwiperSlide>
      ))}
      <button
        className="hidden desktop:grid swiper-button-prev absolute bottom-0 z-10 left-[38%] cursor-pointer place-items-center rounded-full bg-purple/[80%] w-7 h-7 hover:bg-purple ease-in-out duration-200"
        aria-label="Show previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="14"
          viewBox="0 -960 960 960"
          width="14"
          className=" rotate-180 -translate-x-[1px]"
          fill="#FFFFFF"
        >
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
      </button>
      <button
        className="hidden desktop:grid swiper-button-next absolute bottom-0 z-10 right-[38%] cursor-pointer place-items-center rounded-full bg-purple/[80%] w-7 h-7 hover:bg-purple ease-in-out duration-200"
        aria-label="Show next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="14"
          viewBox="0 -960 960 960"
          width="14"
          fill="#FFFFFF"
        >
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
      </button>
    </Swiper>
  );
};

export default LatestIssuesSlider;
