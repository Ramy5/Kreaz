"use client";

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  navListTorta,
  navListBaked,
  navListEasternSweet,
  navListIceCream,
  navListCoffe,
} from "@/data/NavbarList";
import NavbarItem from "../Home/Navbar/NavbarItem";
import Link from "next/link";
import { SlPresent } from "react-icons/sl";
import { BiLogoFirefox } from "react-icons/bi";

const navbarItemconstant = [
  {
    title: "تورت وجاتوة",
    list: navListTorta,
  },
  {
    title: "حلويات شرقيه",
    list: navListEasternSweet,
  },
  {
    title: "مخبوزات",
    list: navListBaked,
  },
  {
    title: "حلويات المولد",
  },
  {
    title: "شوكولاته",
  },
  {
    title: "كحك وبسكويت",
  },
  {
    title: "منتجات الألبان",
  },
  {
    title: "ايس كريم",
    list: navListIceCream,
  },
  {
    title: "كافيه",
    list: navListCoffe,
  },
  {
    title: "اخري",
  },
];

const CategorySidebar = ({ closeSidebar }) => {
  const [activeId, setActiveId] = useState(null);

  const handleActiveList = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <aside className="animate_from_right overflow-y-auto w-full custom_categorySidebar_height xl:h-full bg-gray-100 fixed top-0 left-0 z-[1000]">
      <AiOutlineClose
        onClick={closeSidebar}
        className="absolute top-4 left-4 text-2xl font-bolder text-red-700"
      />

      <nav className="flex mt-12 flex-col justify-between py-2 overflow-y-auto text-mainColorLight">
        <ul className="flex flex-col gap-4">
          {navbarItemconstant.map((nav, i) => {
            const isActive = i === activeId;

            return (
              <li key={i} onClick={() => handleActiveList(i)}>
                <NavbarItem
                  title={nav.title}
                  list={nav.list}
                  isActive={isActive}
                />
              </li>
            );
          })}
        </ul>

        {/* LEFT  */}
        <div className="flex flex-col mt-4 xl:mt-10 px-4 gap-6 py-2 xl:py-0">
          <Link
            href={"/"}
            className="flex items-center gap-2  transition-all duration-200 text-mainColorLight"
          >
            <BiLogoFirefox />
            <p>عروض</p>
          </Link>
          <Link
            className="flex items-center gap-2  transition-all duration-200 text-mainColorLight"
            href={"/"}
          >
            <SlPresent />
            <p>هدايا</p>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default CategorySidebar;
