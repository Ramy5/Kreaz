import Link from "next/link";
import React from "react";

const ShowAllProductsBtn = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="w-4/5 bg-mainColorLight h-[2px]">-</span>
      <button type="button">
        <Link
          className="bg-mainColorLight text-white py-2 px-6"
          href={"/allProducts"}
        >
          عرض جميع المنتجات
        </Link>
      </button>
    </div>
  );
};

export default ShowAllProductsBtn;
