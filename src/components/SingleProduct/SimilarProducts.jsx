import React from "react";
import ProductCard from "@/components/UI/ProductCard";
import HeadSection from "../UI/HeadSection";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// TEST DATA
const productData = [
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    discountPrecent: "%15",
    discountAmount: "وفر 50 ج",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    priceDisc: "360 ج",
    cardLink: "/",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    discountPrecent: "%15",
    discountAmount: "وفر 50 ج",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    priceDisc: "360 ج",
    cardLink: "/",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    discountPrecent: "%15",
    discountAmount: "وفر 50 ج",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    priceDisc: "360 ج",
    cardLink: "/",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    discountPrecent: "%15",
    discountAmount: "وفر 50 ج",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    priceDisc: "360 ج",
    cardLink: "/",
    amount: 1,
  },
  {
    isAvailable: false,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    discountPrecent: "%15",
    discountAmount: "وفر 50 ج",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    priceDisc: "360 ج",
    cardLink: "/",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/",
    amount: 1,
  },
  {
    isAvailable: false,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/",
    amount: 1,
  },
];

const SimilarProducts = () => {
  return (
    <div className="my-8">
      <HeadSection title={"منتجات مشابهة"} className="text-center" />

      {/* SLIDE */}
      <Swiper
        spaceBetween={20}
        // className="md:w-4/5"
        style={{ paddingBottom: "3rem" }}
        loop
        centeredSlides={true}
        navigation
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
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
        {productData?.map((card) => {
          return (
            <SwiperSlide key={card.id}>
              <ProductCard {...card} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SimilarProducts;
