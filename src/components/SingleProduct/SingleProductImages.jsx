import Image from "next/image";
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
    id: crypto.randomUUID(),
    imgUrl: "/product/milk.png",
  },
  {
    id: crypto.randomUUID(),
    imgUrl: "/product/milk.png",
  },
  {
    id: crypto.randomUUID(),
    imgUrl: "/product/milk.png",
  },
  {
    id: crypto.randomUUID(),
    imgUrl: "/product/milk.png",
  },
  {
    id: crypto.randomUUID(),
    imgUrl: "/product/milk.png",
  },
  {
    id: crypto.randomUUID(),
    imgUrl: "/product/milk.png",
  },
  {
    id: crypto.randomUUID(),
    imgUrl: "/product/milk.png",
  },
  {
    id: crypto.randomUUID(),
    imgUrl: "/product/milk.png",
  },
];

const SingleProductImages = () => {
  return (
    <div className="border border-gray-300 p-4 col-span-2">
      <Image
        className="mb-4"
        src={"/33.png"}
        width={500}
        height={500}
        alt="product"
      />

      {/* SLIDE */}
      <Swiper
        spaceBetween={30}
        loop
        centeredSlides={true}
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          400: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {productData?.map((img) => {
          return (
            <SwiperSlide key={img.id} className="">
              <Image
                className=""
                src={"/33.png"}
                width={150}
                height={100}
                alt="product"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SingleProductImages;
