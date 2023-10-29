"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Offers = () => {
  return (
    <section className="main_layout grid grid-cols-1 xl:grid-cols-3 gap-6 py-10">
      {/* ADVERTISEMENT */}
      <div className="col-span-1">
        <Image
          className="h-full"
          src={"/خصم.png"}
          width={450}
          height={200}
          alt="offer"
          priority
        />
      </div>

      {/* SLIDE */}
      <Swiper
        className="w-full col-span-2"
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <Image
            src={"/slider.png"}
            width={900}
            className="h-full"
            height={100}
            alt="offer"
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/slider.png"}
            width={900}
            className="h-full"
            height={100}
            alt="offer"
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/slider.png"}
            width={900}
            className="h-full"
            height={100}
            alt="offer"
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/slider.png"}
            width={900}
            className="h-full"
            height={100}
            alt="offer"
            priority
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Offers;
