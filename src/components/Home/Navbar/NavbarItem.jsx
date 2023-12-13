"use client";

import Link from "next/link";
import React, { useState } from "react";

const NavbarItem = ({ title, list, isActive }) => {
  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-mainColorLight xl:text-gray-200 relative border-b xl:border-b-0 py-3 xl:py-0 xl:border-l border-mainColorLight block w-full xl:w-auto xl:border-white focus:outline-none px-2 xl:px-4 font-bold xl:font-medium text-sm text-start xl:text-center xl:inline-flex xl:items-center xl:hover:text-white transition-all duration-200"
        type="button"
      >
        {title}

        {list?.length > 0 && (
          <div
            id="dropdown"
            className={`z-10 ${
              !isActive && "hidden"
            } w-full xl:w-36 relative xl:absolute top-5 xl:left-1/2 xl:-translate-x-1/2 my-2 xl:my-0`}
          >
            <ul
              className="py-2 text-sm text-gray-700"
              aria-labelledby="dropdownDefaultButton"
            >
              {list.map((li) => {
                return (
                  <li key={li.id} className="dropDown_item ">
                    <Link
                      href={li.link}
                      className="block transition-all duration-300 text-start xl:text-center hover:text-mainColorLight xl:hover:bg-white bg-mainColorLight text-white px-4 py-2"
                    >
                      {li.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default NavbarItem;
