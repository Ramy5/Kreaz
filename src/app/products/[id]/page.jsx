"use client";

import SimilarProducts from "@/components/SingleProduct/SimilarProducts";
import SingleProductDescription from "@/components/SingleProduct/SingleProductDescription";
import SingleProductImages from "@/components/SingleProduct/SingleProductImages";
import SingleReleventProduct from "@/components/SingleProduct/SingleReleventProduct";
import Link from "next/link";

const page = async ({ params }) => {
  const paramsId = params.id;

  return (
    <div className="main_layout py-8">
      {/* HISTORY AND FILTER FOR AVAILABLE */}
      <div className="w-full mb-4 bg-grayColorLight text-white p-2">
        <Link href={"/"}>الصفحة الرئيسية</Link> / تورت وجاتوهات
      </div>

      {/* IMAGES + DESCRIPTION AND PRICE */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        <SingleProductImages />
        <SingleProductDescription />
      </div>

      {/* PRODUCTS TO THE PRODUCT */}
      <SingleReleventProduct />

      {/* SIMILAR PRODUCTS */}
      <SimilarProducts />
    </div>
  );
};

export default page;
