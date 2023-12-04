"use client";

import React from "react";
import Accordion from "../UI/Accordion";

import AsideSearchFilter from "./AsideSearchFilter";

const accordionList1 = [
  { title: "تورت وجاتوه", list: ["تورت", "جاتوهات", "سواريه", "متنوع"] },
  { title: "حلويات شرقية", list: ["تورت", "جاتوهات", "سواريه", "متنوع"] },
  { title: "مخبوزات", list: ["تورت", "جاتوهات", "سواريه", "متنوع"] },
  { title: "حلويات المولد", list: ["تورت", "جاتوهات", "سواريه", "متنوع"] },
  { title: "شوكولاتة", list: ["تورت", "جاتوهات", "سواريه", "متنوع"] },
  { title: "كحك وبسكويت", list: ["تورت", "جاتوهات", "سواريه", "متنوع"] },
  { title: "منتجات الألبان", list: ["تورت", "جاتوهات", "سواريه", "متنوع"] },
  { title: "ايس كريم", list: ["تورت", "جاتوهات", "سواريه", "متنوع"] },
  { title: "كافيه", list: ["تورت", "جاتوهات", "سواريه", "متنوع"] },
];

const Aside = () => {
  return (
    <aside className="w-[19%]">
      {/* FIRST FILTER ACCORDION */}
      <div className="container mx-auto space-y-2">
        {accordionList1.map((accordion, index) => (
          <Accordion
            key={index}
            title={accordion.title}
            list={accordion.list}
          />
        ))}
      </div>

      {/* SECOND FILTER ACCORDION */}
      {/* <div className="mt-8">
        <AsideSearchFilter />
      </div> */}
    </aside>
  );
};

export default Aside;
