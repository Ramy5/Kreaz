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
    cardLink: "/",
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
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/",
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/",
  },
  {
    isAvailable: false,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/",
  },
];

const OffersProduct = () => {
  return (
    <section className="main_layout mb-6">
      {/* COUNTDOWN */}
      <div className="flex items-center gap-4 flex-wrap justify-between">
        <HeadSection
          title={"عروض لفترة محدودة"}
          className={"text-right w-3/5"}
        />
        <Countdown />
      </div>

      {/* PRODUCTS */}
      <div className="py-12 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
          } = card;

          return (
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
            />
          );
        })}
      </div>

      {/* SHOW ALL PRODUCTS BTN */}
      <ShowAllProductsBtn />
    </section>
  );
};

export default OffersProduct;
