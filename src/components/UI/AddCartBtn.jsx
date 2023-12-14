"use client";

import useCartStore from "@/store/CartStore";
import { useParams } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const AddCartBtn = ({ isAvailable, className }) => {
  const params = useParams();
  const productId = params?.id;
  const { addToCart, addToWishlist, toggleCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart({
      id: 1,
      name: "kreaz",
      price: 200,
      image: "/33.png",
      desc: "testing",
    });

    toggleCart();
  };

  return (
    <div className="w-full xl:w-auto">
      {isAvailable && (
        <p
          onClick={handleAddToCart}
          className={`bg-mainColorLight w-full justify-center xl:justify-start cursor-pointer text-white px-2 py-2 flex items-center gap-2 ${className}`}
        >
          <FaShoppingCart className="text-mainColorLight bg-white w-6 h-6 p-1 rounded-full" />
          <span className="text-sm">اضف الي السله</span>
        </p>
      )}

      {!isAvailable && (
        <p
          className={`bg-grayColorLight w-full xl:w-auto hidden text-white px-2 py-2 cursor-pointer xl:flex items-center`}
        >
          <span className={`text-[12px]`}>عفوا المنتج غير متوفر</span>
        </p>
      )}
    </div>
  );
};

export default AddCartBtn;
