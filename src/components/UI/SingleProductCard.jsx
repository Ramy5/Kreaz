import Image from "next/image";
import React from "react";
import AddCartBtn from "./AddCartBtn";
import AddCartAmount from "./AddCartAmount";

const SingleProductCard = ({
  imgUrl,
  // discountPrecent,
  // discountAmount,
  id,
  amount,
  name,
  desc,
  price,
  // priceDisc,
  isAvailable,
  cardLink,
}) => {
  return (
    <div className="relative border border-gray-200 shadow-sm flex">
      <Image
        className="p-2 w-40"
        src={"/33.png"}
        width={100}
        height={100}
        alt="product"
      />

      <div className="flex flex-col justify-between py-2 mt-2 pl-2">
        <div className="mb-6">
          <h3 className="text-mainColorLight text-base">{name}</h3>
          <p className="text-grayColorLight text-sm">{desc}</p>
        </div>

        <div className="flex flex-col gap-1">
          <AddCartBtn isAvailable className={"justify-center w-max pl-[4px]"} />
          <AddCartAmount isAvailable countBoxStyle={"w-16"} />
        </div>
      </div>

      <p className="bg-mainColorLight absolute top-0 left-0 text-white p-1">
        <span>{price}</span>{" "}
      </p>
    </div>
  );
};

export default SingleProductCard;
