import Image from "next/image";
import React from "react";
import AddCartBtn from "./AddCartBtn";
import AddCartAmount from "./AddCartAmount";
import Link from "next/link";

const ProductCard = ({
  imgUrl,
  discountPrecent,
  discountAmount,
  name,
  desc,
  price,
  priceDisc,
  isAvailable,
  cardLink,
  amount,
}) => {
  let contentOnImg;

  if (discountPrecent) {
    contentOnImg = (
      <p
        className={`${
          isAvailable && " rounded-full"
        } absolute top-1 left-1 bg-white w-16 h-16 flex flex-col items-center justify-center`}
      >
        <span className="text-xl text-mainColorLight font-bold">
          {discountPrecent}
        </span>
        <span className="text-xs text-mainColorLight">{discountAmount}</span>
      </p>
    );
  }

  if (!isAvailable) {
    contentOnImg = (
      <p
        className={`${
          isAvailable && " rounded-full"
        } absolute top-1 left-1 bg-white w-16 h-16 flex flex-col items-center justify-center`}
      >
        <span className="text-xl text-mainColorLight font-bold text-center">
          نفذت الكميه
        </span>
      </p>
    );
  }

  return (
    <div className="p-6 shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl bg-white border border-gray-300">
      <Link href={cardLink}>
        {/* IMAGE */}
        <div className="relative">
          <Image
            className="object-cover w-full"
            src={imgUrl}
            alt="product photo"
            width={300}
            height={400}
          />
          {contentOnImg}
        </div>

        {/* TEXT */}
        <div className="py-4 flex flex-wrap items-center justify-between gap-2 text-grayColorDark">
          <div>
            <p className="font-bold text-xl">{name}</p>
            <p className="text-sm">{desc}</p>
          </div>
          <div>
            <p className="text-xl font-bold text-mainColorLight">{price}</p>
            {discountPrecent && (
              <p className="text-sm line-through">{priceDisc}</p>
            )}
          </div>
        </div>
      </Link>

      {/* ADD TO CART */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <AddCartBtn isAvailable={isAvailable} />
        <AddCartAmount isAvailable={isAvailable} amount={amount} />
      </div>
    </div>
  );
};

export default ProductCard;
