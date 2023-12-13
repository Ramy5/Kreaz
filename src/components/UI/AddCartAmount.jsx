"use client";

import Link from "next/link";
import React from "react";
import { AiFillHeart } from "react-icons/ai";

const AddCartAmount = ({ isAvailable, id, countBoxStyle }) => {
  return (
    <>
      {isAvailable ? (
        <div className="hidden xl:flex items-center gap-2">
          <span className="w-6 h-6 cursor-pointer bg-mainColorLight text-center text-white">
            +
          </span>
          <p
            className={`${countBoxStyle} w-12 h-6 border border-mainColorLight py-2 px-2 flex items-center justify-center text-mainColorLight`}
          >
            1
          </p>
          <span
            onClick={() => console.log("done")}
            className="w-6 h-6 cursor-pointer bg-mainColorLight text-center text-white"
          >
            -
          </span>
        </div>
      ) : (
        <div className="relative w-full xl:w-auto">
          <AiFillHeart className="absolute left-1/2 -translate-x-1/2 -top-4 text-mainColorDark text-xl" />
          <Link
            className="text-[12px] border border-mainColorLight flex flex-col items-center py-2 px-2 bg-mainColorLight text-white"
            href="/"
          >
            <span>احجز المنتج لحين التوفر</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default AddCartAmount;
