import Image from "next/image";
import React from "react";
import HeadSection from "../UI/HeadSection";
import SingleProductCard from "../UI/SingleProductCard";

const productData = [
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    discountPrecent: "%15",
    discountAmount: "وفر 50 ج",
    name: "شمع",
    desc: "شمع الوان 12 شمعة",
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
    name: "شمع",
    desc: "شمع الوان 12 شمعة",
    price: "325 ج",
    priceDisc: "360 ج",
    cardLink: "/products/4",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    discountPrecent: "%15",
    discountAmount: "وفر 50 ج",
    name: "شمع",
    desc: "شمع الوان 12 شمعة",
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
    name: "شمع",
    desc: "شمع الوان 12 شمعة",
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
    name: "شمع",
    desc: "شمع الوان 12 شمعة",
    price: "325 ج",
    priceDisc: "360 ج",
    cardLink: "/products/5",
    amount: 1,
  },
  {
    isAvailable: false,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    discountPrecent: "%15",
    discountAmount: "وفر 50 ج",
    name: "شمع",
    desc: "شمع الوان 12 شمعة",
    price: "325 ج",
    priceDisc: "360 ج",
    cardLink: "/products/5",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    name: "شمع",
    desc: "شمع الوان 12 شمعة",
    price: "325 ج",
    cardLink: "/products/6",
    amount: 1,
  },
  {
    isAvailable: false,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    name: "شمع",
    desc: "شمع الوان 12 شمعة",
    price: "325 ج",
    cardLink: "/products/8",
    amount: 1,
  },
  {
    isAvailable: true,
    id: crypto.randomUUID(),
    imgUrl: "/product/1.png",
    name: "تورتة قلب نوتيلا",
    desc: "شمع الوان 12 شمعة",
    price: "325 ج",
    cardLink: "/products/7",
    amount: 1,
  },
];

const SingleReleventProduct = () => {
  return (
    <div className="pt-8 grid grid-cols-1 xl:grid-cols-3 xl:gap-x-4 gap-x-0 gap-y-4">
      <div className="col-span-2">
        <HeadSection
          title={"منتجات يتم طلبها عاده مع هذا المنتج"}
          className={"text-center"}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-1 items-center">
          {productData.map((el, i) => {
            return <SingleProductCard key={i} {...el} />;
          })}
        </div>
      </div>

      <div className="col-span-1">
        <Image
          className="h-full w-full xl:w-auto"
          src={"/خصم.png"}
          width={450}
          height={400}
          alt="offer"
          priority
        />
      </div>
    </div>
  );
};

export default SingleReleventProduct;
