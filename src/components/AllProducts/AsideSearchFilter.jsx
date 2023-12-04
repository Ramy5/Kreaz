"use client";

import React from "react";
import { Form, Formik } from "formik";
import { CiSearch } from "react-icons/ci";

const AsideSearchFilter = () => {
  const initialValues = {};

  return (
    <Formik initialValues={initialValues} onSubmit={(values) => {}}>
      {(values) => {
        return (
          <Form className="">
            {/* SEARCH FILTER */}
            <div className="bg-mainColorLight p-2 text-white">
              <div className="flex items-center justify-between bg-white">
                <input
                  type="text"
                  className="w-full text-mainColorLight placeholder:text-mainColorLight border-none focus:outline-none focus:border-none focus:ring-0"
                  placeholder="اكتب هنا بتدور على ايه"
                />
                <CiSearch className="text-mainColorLight ml-2 text-xl" />
              </div>
              <div className="my-3 flex items-center gap-2 mr-2">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  name="available"
                  id="available"
                />
                <label htmlFor="available" className="cursor-pointer">
                  فقط المتوفر في الفروع
                </label>
              </div>
              <div className="my-3 flex items-center gap-2 mr-2">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  name="notila"
                  id="notila"
                />
                <label htmlFor="notila" className="cursor-pointer">
                  نوتيلا
                </label>
              </div>
              <div className="my-3 flex items-center gap-2 mr-2">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  name="nots"
                  id="nots"
                />
                <label htmlFor="nots" className="cursor-pointer">
                  لوتس
                </label>
              </div>
              <div className="my-3 flex items-center gap-2 mr-2">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  name="half_torta"
                  id="half_torta"
                />
                <label htmlFor="half_torta" className="cursor-pointer">
                  تورتة نصين
                </label>
              </div>
              <div className="my-3 flex items-center gap-2 mr-2">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  name="mini_torta"
                  id="mini_torta"
                />
                <label htmlFor="mini_torta" className="cursor-pointer">
                  ميني تورتة
                </label>
              </div>
              <div className="my-3 flex items-center gap-2 mr-2">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  name="offers_discount"
                  id="offers_discount"
                />
                <label htmlFor="offers_discount" className="cursor-pointer">
                  عروض وخصومات
                </label>
              </div>
            </div>

            {/* PRICE FILTER */}
            <div className="mt-8">
              <p className="bg-mainColorLight mb-6 text-white py-1 px-2">
                تصفية السعر
              </p>
              <input type="range" name="price_range" id="price_range" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AsideSearchFilter;
