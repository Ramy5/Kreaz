"use client";

import Image from "next/image";
import ProductCard from "../UI/ProductCard";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

const AllProducts = () => {
  const path = usePathname();

  return (
    <div className="w-[80%]">
      {/* HISTORY AND FILTER FOR AVAILABLE */}
      <div className="flex justify-between mb-4">
        <div className="w-3/4 bg-grayColorLight text-white p-2">
          <Link href={"/"}>الصفحة الرئيسية</Link> / المنتجات
        </div>
        <div className="w-max bg-grayColorLight text-white self-center">
          filter for available
        </div>
      </div>

      {/* ADVERTISEMENT */}
      <div>
        <Image
          className="w-full"
          src={"/allProducts/advertisement.png"}
          width={400}
          height={400}
        />
      </div>

      {/* ALL PRODUCTS */}
      <div className="py-6 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {productData?.map((card) => {
          return <ProductCard key={card.id} {...card} />;
        })}
      </div>

      {/* BUTTON FOR MORE PRODUCTS */}
      <button type="button" className=" w-full">
        <p className="bg-mainColorLight text-white py-2 px-6">
          عرض المزيد من المنتجات
        </p>
      </button>
    </div>
  );
};

export default AllProducts;
