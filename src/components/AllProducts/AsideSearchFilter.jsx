"use client";

import React from "react";
import { Form, Formik } from "formik";
import { CiSearch } from "react-icons/ci";
import AsideRange from "./AsideRange";

const AsideSearchFilter = () => {
  const initialValues = {
    search: "",
    available: "",
    notila: "",
    nots: "",
    half_torta: "",
    mini_torta: "",
    offers_discount: "",
    range_price: "",
  };

  const handlePriceChange = (value) => {
    // Handle the price change, e.g., filter items based on the selected price
    console.log("Selected Price:", value);
    // You can use the value to filter your price range
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle the form submission logic here
    console.log("Form values:", values);
    // You can make API calls, perform actions, etc.
    setSubmitting(false); // This is important to manually set submitting to false when done
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(values, handleSubmit) => {
        return (
          <Form className="">
            {/* SEARCH FILTER */}
            <div className="bg-mainColorLight p-2 text-white">
              <div className="flex items-center justify-between bg-white">
                <input
                  type="text"
                  id="search"
                  name="search"
                  className="w-full text-mainColorLight placeholder:text-mainColorLight border-none focus:outline-none focus:border-none focus:ring-0"
                  placeholder="اكتب هنا بتدور على ايه"
                />
                <CiSearch className="text-mainColorLight ml-2 text-xl" />
              </div>
              <div className="my-3 flex items-center gap-2 mr-2">
                <input
                  type="checkbox"
                  className="checked:bg-mainColorLight checked:ring-0 checked:border checked:border-gray-300 cursor-pointer p-2"
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
                  className="checked:bg-mainColorLight checked:ring-0 checked:border checked:border-gray-300 cursor-pointer p-2"
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
                  className="checked:bg-mainColorLight checked:ring-0 checked:border checked:border-gray-300 cursor-pointer p-2"
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
                  className="checked:bg-mainColorLight checked:ring-0 checked:border checked:border-gray-300 cursor-pointer p-2"
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
                  className="checked:bg-mainColorLight checked:ring-0 checked:border checked:border-gray-300 cursor-pointer p-2"
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
                  className="checked:bg-mainColorLight checked:ring-0 checked:border checked:border-gray-300 cursor-pointer p-2"
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

              <AsideRange min={0} max={2000} onChange={handlePriceChange} />
            </div>

            <button type="submit"></button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AsideSearchFilter;
