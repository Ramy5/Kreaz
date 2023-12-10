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
    <div className="flex justify-center items-center flex-col h-screen main_gradient--1">
      {/* LOGO */}
      <Link href={"/"}>
        <Image
          className="mb-8"
          src={"/logo.png"}
          alt="logo"
          width={250}
          height={250}
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
              className={` w-2/6 flex flex-col items-center mx-auto gap-6  p-12`}
            >
              {/* PHONE NUMBER */}
              <div className="w-full">
                <Field
                  className="w-full text-mainColorLight placeholder:text-mainColorLight text-base border-none outline-none focus:ring-transparent rounded-lg"
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
              <div className="w-full">
                <Field
                  className="w-full text-mainColorLight placeholder:text-mainColorLight text-base border-none outline-none focus:ring-transparent rounded-lg"
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
                className="text-center rounded-lg py-1 bg-white text-mainColorLight px-4 w-full text-lg "
                type="submit"
                disabled={!isValid}
              >
                تسجيل الدخول
              </button>

              {/* CHECKBOX FOR REMEMBER ME */}
              <SaveDataCheckbox name="saveData" label="حفظ بيانات التسجيل" />

              <p className="cursor-pointer self-start text-white hover:text-blue-400 transition-all duration-300 text-lg underline -translate-y-4">
                هل نسيت كلمة السر؟
              </p>
              <Link
                href="/signup"
                className="text-center rounded-lg py-1 text-white bg-mainColorLight px-4 w-full text-lg "
              >
                تسجيل حساب جديد
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default page;
