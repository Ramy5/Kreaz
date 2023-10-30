import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const AddCartBtn = ({ isAvailable }) => {
  return (
    <div>
      <Link
        href={"/"}
        className={`${
          isAvailable ? "bg-mainColorLight" : "bg-grayColorLight"
        }  text-white px-2 py-2 flex items-center gap-2`}
      >
        {isAvailable && (
          <FaShoppingCart className="text-mainColorLight bg-white w-6 h-6 p-1 rounded-full" />
        )}
        <span className={`${!isAvailable && "text-[12px]"}`}>
          {" "}
          {isAvailable ? "اضف الي السله" : "عفوا المنتج غير متوفر للطلب"}
        </span>
      </Link>
    </div>
  );
};

export default AddCartBtn;
