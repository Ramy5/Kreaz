"use client";

import Link from "next/link";
import React, { useState } from "react";

const NavbarItem = ({ title, list }) => {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <>
      <button
        id="dropdownDefaultButton"
        onClick={() => setIsDropdown((prev) => !prev)}
        data-dropdown-toggle="dropdown"
        className="text-gray-200 relative border-l border-white focus:outline-none px-4 font-medium text-sm text-center inline-flex items-center hover:text-white transition-all duration-200"
        type="button"
      >
        {title}

        {list?.length > 0 && (
          <div
            id="dropdown"
            className={`z-10 ${
              !isDropdown && "hidden"
            }  w-36 absolute top-5 left-1/2 -translate-x-1/2`}
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
                      className="block transition-all duration-300 text-center hover:text-mainColorLight hover:bg-white bg-mainColorLight text-white px-4 py-2"
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
