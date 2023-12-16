import Aside from "@/components/AllProducts/Aside";
import AllProducts from "@/components/AllProducts/AllProducts";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="py-8 main_layout">
      {/* HISTORY AND FILTER FOR AVAILABLE */}
      <div className="flex justify-between gap-2 mb-4">
        <div className="w-3/5 p-2 text-sm text-white xl:w-3/4 bg-grayColorLight">
          <Link href={"/"}>الصفحة الرئيسية</Link> / المنتجات
        </div>
        <div className="text-sm text-white w-max bg-grayColorLight">
          filter for available
        </div>
      </div>

      <div className="flex flex-wrap xl:gap-6">
        {/* RIGHT */}
        <Aside />

        {/* LEFT */}
        <AllProducts />
      </div>
    </div>
  );
};

export default page;
