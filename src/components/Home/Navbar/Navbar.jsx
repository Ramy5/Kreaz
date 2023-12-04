"use client";

import {
  navListTorta,
  navListBaked,
  navListEasternSweet,
  navListIceCream,
  navListCoffe,
} from "@/data/NavbarList";
import NavbarItem from "./NavbarItem";
import { BiLogoFirefox } from "react-icons/bi";
import { SlPresent } from "react-icons/sl";
import Link from "next/link";
import { useState } from "react";

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

const Navbar = () => {
  const [activeId, setActiveId] = useState(null);

  const handleActiveList = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <nav className="flex items-center main_layout rounded-xl justify-between bg-grayColorLight py-2 text-white">
      <ul className="flex">
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
      <div className="flex items-center gap-6">
        <Link
          href={"/"}
          className="flex items-center gap-2  hover:text-white transition-all duration-200 text-gray-200"
        >
          <BiLogoFirefox />
          <p>عروض</p>
        </Link>
        <Link
          href={"/cartPage"}
          className="flex items-center gap-2  hover:text-white transition-all duration-200 text-gray-200"
        >
          <BiLogoFirefox />
          <p>السله</p>
        </Link>
        <Link
          className="flex items-center gap-2  hover:text-white transition-all duration-200 text-gray-200"
          href={"/"}
        >
          <SlPresent />
          <p>هدايا</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
