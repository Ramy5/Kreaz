"use client";

import CategorySidebar from "@/components/UI/CategorySidebar";
import useCartStore from "@/store/CartStore";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const PhoneFooter = () => {
  const { toggleCart } = useCartStore();
  const [activeItem, setActiveItem] = useState("الرئيسية");
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => setOpenSidebar(true);
  const handleCloseSidebar = () => setOpenSidebar(false);
  const handleActiveItem = (itemName) => setActiveItem(itemName);

  return (
    <div className="xl:hidden fixed bottom-0 left-0 min-h-16 flex items-center justify-between z-50 gap-6 w-full py-2 px-4 bg-slate-50 border border-gray-100">
      <Link
        href={"/"}
        onClick={() => handleActiveItem("الرئيسية")}
        className={`${
          activeItem === "الرئيسية" ? "text-mainColorLight" : "text-gray-700"
        } flex flex-col gap-1 items-center`}
      >
        <AiFillHome className="text-2xl " />
        <p className="text-sm text-center">الرئيسية</p>
      </Link>
      <div
        onClick={() => {
          handleActiveItem("الاقسام");
          handleOpenSidebar();
        }}
        className={`${
          activeItem === "الاقسام" ? "text-mainColorLight" : "text-gray-700"
        } flex flex-col gap-1 items-center`}
      >
        <FaBars className="text-2xl " />
        <p className="text-sm text-center">الاقسام</p>
      </div>
      <div
        onClick={() => handleActiveItem("البحث")}
        className={`${
          activeItem === "البحث" ? "text-mainColorLight" : "text-gray-700"
        } flex flex-col gap-1 items-center`}
      >
        <IoIosSearch className="text-2xl " />
        <p className="text-sm text-center">البحث</p>
      </div>
      <div
        onClick={() => {
          handleActiveItem("سلة التسوق");
          toggleCart();
        }}
        className={`${
          activeItem === "سلة التسوق" ? "text-mainColorLight" : "text-gray-700"
        } flex flex-col gap-1 items-center`}
      >
        <FaShoppingCart className="text-2xl" />
        <p className="text-sm text-center">سلة التسوق</p>
      </div>

      {openSidebar && <CategorySidebar closeSidebar={handleCloseSidebar} />}
    </div>
  );
};

export default PhoneFooter;
