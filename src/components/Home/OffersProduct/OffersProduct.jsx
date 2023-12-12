import Countdown from "@/components/UI/Countdown";
import HeadSection from "@/components/UI/HeadSection";
import ProductCard from "@/components/UI/ProductCard";
import ShowAllProductsBtn from "@/components/UI/ShowAllProductsBtn";
import React from "react";

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
    cardLink: "/products/1",
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
    cardLink: "/products/2",
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
    cardLink: "/products/3",
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
    cardLink: "/products/4",
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
    cardLink: "/products/5",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/products/6",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/products/7",
    amount: 1,
  },
  {
    isAvailable: false,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/products/8",
    amount: 1,
  },
];

const OffersProduct = () => {
  return (
    <section className="main_layout mb-6">
      {/* COUNTDOWN */}
      <div className="flex items-center gap-4 flex-wrap justify-between">
        <HeadSection
          title={"عروض لفترة محدودة"}
          className={"text-center xl:text-right w-full xl:w-3/5"}
        />
        <Countdown />
      </div>

      {/* PRODUCTS */}
      <div className="py-12 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productData?.map((card) => {
          return <ProductCard key={card.id} {...card} />;
        })}
      </div>

      {/* SHOW ALL PRODUCTS BTN */}
      <ShowAllProductsBtn />
    </section>
  );
};

export default OffersProduct;
