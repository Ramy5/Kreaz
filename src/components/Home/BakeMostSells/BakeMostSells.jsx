import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductCard from "@/components/UI/ProductCard";
import HeadSection from "@/components/UI/HeadSection";

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

const BakeMostSells = () => {
  return (
    <section className="main_layout py-6">
      <HeadSection
        title={"الأعلي مبيعا في قسم المخبوزات"}
        className="text-center"
      />

      {/* SLIDE */}
      <Swiper
        spaceBetween={20}
        style={{ paddingBottom: "3rem" }}
        loop
        centeredSlides={true}
        navigation
        autoplay={{
          delay: 2500,
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
          const {
            id,
            isAvailable,
            imgUrl,
            discountAmount,
            discountPrecent,
            name,
            desc,
            price,
            priceDisc,
            cardLink,
            amount,
          } = card;

          return (
            <SwiperSlide>
              <ProductCard
                key={id}
                cardLink={cardLink}
                imgUrl={imgUrl}
                isAvailable={isAvailable}
                discountAmount={discountAmount}
                discountPrecent={discountPrecent}
                name={name}
                desc={desc}
                price={price}
                priceDisc={priceDisc}
                amount={amount}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default BakeMostSells;
