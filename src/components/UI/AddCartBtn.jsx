import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const AddCartBtn = ({ isAvailable, className }) => {
  return (
    <div>
      {isAvailable && (
        <p
          className={`bg-mainColorLight cursor-pointer text-white px-2 py-2 flex items-center gap-2 ${className}`}
        >
          <FaShoppingCart className="text-mainColorLight bg-white w-6 h-6 p-1 rounded-full" />
          <span className="text-sm">اضف الي السله</span>
        </p>
      )}

      {!isAvailable && (
        <p
          className={`bg-grayColorLight text-white px-2 py-2 cursor-pointer flex items-center`}
        >
          <span className={`text-[12px]`}>عفوا المنتج غير متوفر</span>
        </p>
      )}
    </div>
  );
};

export default AddCartBtn;
