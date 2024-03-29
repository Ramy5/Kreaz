"use client";

import useCartStore from "@/store/CartStore";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Sidebar from "../UI/Sidebar";
import { useState } from "react";

const Header = () => {
  const { toggleCart } = useCartStore();
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => setOpenSidebar(true);
  const handleCloseSidebar = () => setOpenSidebar(false);

  return (
    <header className="main_layout text-grayColorLight py-4 xl:py-6 px-2 flex flex-wrap items-center justify-between">
      {/* RIGHT */}
      <div className="xl:flex flex-col gap-2 hidden">
        <div className="flex gap-1 items-center border border-gray-300 text-gray-500  px-4 rounded-2xl">
          <MdLocationPin className="text-xl" />
          <p>تغيير عنوان التوصيل</p>
          <select className="border-gray-300 text-gray-500 outline-none border-none text-sm text-center block w-24 py-2 focus:ring-transparent">
            <option value="القاهرة">القاهرة</option>
            <option value="الجيزة">الجيزة</option>
            <option value="المنوفيه">طنطا</option>
            <option value="المنصورة">المنصورة</option>
          </select>
        </div>

        <div className="xl:flex hidden items-center gap-2 px-4">
          <FaShoppingCart className="text-xl" />
          <p className="flex gap-2 items-center">
            <p
              onClick={toggleCart}
              className="hover:text-mainColorLight cursor-pointer transition-colors duration-200"
            >
              {" "}
              عرض سلة التسوق -
            </p>
            <Link
              className="hover:text-mainColorLight transition-colors duration-200"
              href="/checkout"
            >
              إتــمام الشراء
            </Link>
          </p>
        </div>
      </div>

      {/* CENTER */}
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="logo" width={120} height={100} />
      </Link>

      {/* LEFT */}
      <div className="flex flex-col gap-2">
        <div className="xl:flex hidden items-center gap-2">
          <FaUserCircle className="text-xl" />
          <p className="flex gap-1">
            <Link
              className="hover:text-mainColorLight transition-colors duration-200"
              href="/login"
            >
              {" "}
              تسجيل الدخول /
            </Link>
            <Link
              className="hover:text-mainColorLight transition-colors duration-200"
              href="/signup"
            >
              عميل جديد
            </Link>
          </p>
        </div>
        <div className="xl:flex items-center gap-2 hidden">
          <IoLogoWhatsapp className="text-xl" />
          <p>01200006529</p>
        </div>

        <div className="cursor-pointer">
          <FaRegUser
            onClick={handleOpenSidebar}
            className="block xl:hidden text-xl w-12 h-12 text-mainColorLight rounded-full bg-slate-100 p-3"
          />
        </div>

        {openSidebar && <Sidebar closeSidebar={handleCloseSidebar} />}
      </div>
    </header>
  );
};

export default Header;
