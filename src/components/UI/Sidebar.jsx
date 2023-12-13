"use client";

import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ closeSidebar }) => {
  return (
    <aside className="animate_sidebar w-full h-full bg-gray-100 fixed top-0 left-0 z-[1000]">
      <AiOutlineClose
        onClick={closeSidebar}
        className="absolute top-4 left-4 text-2xl font-bolder text-red-700"
      />

      <p className="flex flex-col gap-4 py-16 px-8">
        <Link
          className="text-mainColorLight text-lg transition-colors duration-200"
          href="/login"
        >
          {" "}
          تسجيل الدخول
        </Link>
        <Link
          className="text-mainColorLight text-lg transition-colors duration-200"
          href="/signup"
        >
          عميل جديد
        </Link>
      </p>
    </aside>
  );
};

export default Sidebar;
