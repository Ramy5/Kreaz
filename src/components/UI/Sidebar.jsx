"use client";

import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ closeSidebar }) => {
  return (
    <aside className="animate_sidebar w-full h-full bg-gray-100 fixed top-0 left-0 z-[1000]">
      <AiOutlineClose
        onClick={closeSidebar}
        className="absolute top-4 right-4 text-2xl font-bolder text-red-700"
      />
    </aside>
  );
};

export default Sidebar;
