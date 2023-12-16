"use client";

import SaveDataCheckbox from "@/components/UI/SaveDataCheckbox";
import LoginValidation from "@/validation/LoginValidation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const page = () => {
  const initialFormValues = {
    phoneNumber: "",
    password: "",
    saveData: false,
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen main_gradient--1">
      {/* LOGO */}
      <Link href="/">
        <Image
          className="mb-8"
          src={"/logo.png"}
          alt="logo"
          width={200}
          height={200}
          priority
        />
      </Link>

      {/* FORM FOR BOOK */}
      <Formik
        initialValues={initialFormValues}
        validationSchema={LoginValidation}
        onSubmit={(values) => {
          console.log(values);

          toast.success("مرحبا بعودتك رامي", {
            closeOnClick: true,
            pauseOnHover: true,
          });
        }}
      >
        {({ isValid }) => (
          <Form className="w-full">
            <div
              className={` xl:w-2/6 flex flex-col items-center mx-auto gap-6  p-12`}
            >
              {/* PHONE NUMBER */}
              <div className="w-full animate_from_right">
                <Field
                  className="w-full text-base border-none rounded-lg outline-none text-mainColorLight placeholder:text-mainColorLight focus:ring-transparent"
                  type="text"
                  required
                  name="phoneNumber"
                  placeholder="رقم الهاتف المسجل لدينا"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="error"
                />
              </div>

              {/* PASSWORD */}
              <div className="w-full animate_from_left animation_delay-3">
                <Field
                  className="w-full text-base border-none rounded-lg outline-none text-mainColorLight placeholder:text-mainColorLight focus:ring-transparent"
                  type="password"
                  required
                  name="password"
                  placeholder="كلمة المرور"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <button
                className="w-full px-4 py-1 text-lg text-center text-white rounded-lg main_gradient--1 animate_from_top animation_delay-5 "
                type="submit"
              >
                تسجيل الدخول
              </button>

              <div className="flex flex-wrap items-center justify-between w-full gap-1 ">
                {/* CHECKBOX FOR REMEMBER ME */}
                <SaveDataCheckbox name="saveData" label="حفظ بيانات التسجيل" />

                <p className="self-start text-lg text-white underline transition-all duration-300 cursor-pointer hover:text-blue-400 animate_from_right animation_delay-9">
                  هل نسيت كلمة السر؟
                </p>
              </div>
              <Link
                href="/signup"
                className="w-full px-4 py-1 text-lg text-center text-white transition-all duration-300 bg-transparent border rounded-lg animate_from_bottom animation_delay-11 hover:bg-mainColorLight hover:border-transparent "
              >
                انشاء حساب جديد
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default page;
