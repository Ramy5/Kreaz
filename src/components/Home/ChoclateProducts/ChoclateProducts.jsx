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
    imgUrl: "/product/300 golden.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/300 golden.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/300 golden.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/300 golden.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/300 golden.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/300 golden.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/300 golden.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/300 golden.png",
    name: "تورتة قلب نوتيلا",
    desc: "مقاس 26",
    price: "325 ج",
    cardLink: "/",
    amount: 1,
  },
];

const ChoclateProducts = () => {
  return (
    <section className="main_layout mb-6">
      <HeadSection title={"الشوكولاته"} className={"text-right"} />

      {/* PRODUCTS */}
      <div className="py-8 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productData?.map((card) => {
          const {
            id,
            isAvailable,
            imgUrl,
            name,
            desc,
            price,
            cardLink,
            amount,
          } = card;

          return (
            <ProductCard
              key={id}
              cardLink={cardLink}
              imgUrl={imgUrl}
              isAvailable={isAvailable}
              name={name}
              desc={desc}
              price={price}
              amount={amount}
            />
          );
        })}
      </div>

      {/* SHOW ALL PRODUCTS BTN */}
      <ShowAllProductsBtn />
    </section>
  );
};

export default ChoclateProducts;
