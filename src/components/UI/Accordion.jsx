"use client";

import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Accordion = ({ title, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen ? "rounded-full duration-300 transition-all ease-linear" : ""
      } duration-300 transition-all ease-linear rounded`}
    >
      <div
        className={`${
          isOpen ? "rounded-full" : ""
        } flex justify-between duration-300 transition-all ease-linear items-center p-2 bg-mainColorLight text-white cursor-pointer`}
        onClick={toggleAccordion}
      >
        <h2 className="text-base">{title}</h2>
        <span
          className={`transform text-lg duration-300 transition-all ease-linear bg-white text-mainColorLight py-[1px] px-[2px] font-bold ${
            isOpen ? "-rotate-180 rounded-full" : ""
          }`}
        >
          <IoMdArrowDropdown />
        </span>
      </div>
      {isOpen && (
        <ul className="mt-2">
          {list.map((item, index) => (
            <li
              key={index}
              className="py-1 px-3 border border-mainColorLight text-mainColorLight my-2 transition-all duration-300 hover:bg-mainColorLight hover:text-white cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordion;
