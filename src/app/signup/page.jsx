"use client";

import { SignupValidation } from "@/validation/SignupValidation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
const page = () => {
  // Define initial form values
  const initialFormValues = {
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen main_gradient--2">
      {/* LOGO */}
      <Link href={"/"}>
        <Image
          className="mb-4"
          src={"/logo.png"}
          alt="logo"
          width={200}
          height={200}
          priority
        />
      </Link>
      <Formik
        initialValues={initialFormValues}
        validationSchema={SignupValidation}
        onSubmit={(values) => {
          console.log(values);

          toast.success("مرحبا بك! تم تسجيل الحساب بنجاح", {
            closeOnClick: true,
            pauseOnHover: true,
          });
        }}
      >
        {({ isValid }) => (
          <Form className="w-full">
            <div
              className={`xl:w-7/12 grid grid-cols-1 xl:grid-cols-2 mx-auto gap-6 p-10`}
            >
              {/* NAME */}
              <div className="w-full animate_from_right animation_delay-3">
                <Field
                  className="w-full text-mainColorLight placeholder:text-mainColorLight text-base border-none outline-none focus:ring-transparent rounded-lg"
                  type="text"
                  required
                  name="name"
                  placeholder="الاسم"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              {/* EMAIL */}
              <div className="w-full animate_from_left animation_delay-3">
                <Field
                  className="w-full text-mainColorLight placeholder:text-mainColorLight text-base border-none outline-none focus:ring-transparent rounded-lg"
                  type="email"
                  required
                  name="email"
                  placeholder="البريد الإلكتروني"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              {/* PHONE NUMBER */}
              <div className="w-full animate_from_right animation_delay-5">
                <Field
                  className="w-full text-mainColorLight placeholder:text-mainColorLight text-base border-none outline-none focus:ring-transparent rounded-lg"
                  type="text"
                  required
                  name="phoneNumber"
                  placeholder="رقم المحمول"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="error"
                />
              </div>

              {/* CITY */}
              <div className="w-full animate_from_left animation_delay-5">
                <Field
                  className="w-full text-mainColorLight placeholder:text-mainColorLight text-base border-none outline-none focus:ring-transparent rounded-lg"
                  type="text"
                  required
                  name="city"
                  placeholder="المدينة"
                />
                <ErrorMessage name="city" component="div" className="error" />
              </div>

              {/* PASSWORD */}
              <div className="w-full animate_from_right animation_delay-7">
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

              {/* CONFIRM PASSWORD */}
              <div className="w-full animate_from_left animation_delay-7">
                <Field
                  className="w-full text-mainColorLight placeholder:text-mainColorLight text-base border-none outline-none focus:ring-transparent rounded-lg"
                  type="password"
                  required
                  name="confirmPassword"
                  placeholder="تأكيد كلمة المرور"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error"
                />
              </div>
            </div>

            <div className="xl:w-7/12 mx-auto px-10 space-y-4">
              <button
                className="text-center rounded-lg animate_from_top animation_delay-9 py-2 main_gradient--1 text-white px-4 w-full text-lg"
                type="submit"
              >
                إنشاء حساب{" "}
              </button>

              <Link
                href="/login"
                className="text-center animate_from_bottom animation_delay-11 block rounded-lg py-2 border hover:border-transparent hover:bg-mainColorLight transition-all duration-300 bg-transparent text-white px-4 w-full text-lg "
              >
                لدي حساب بالفعل
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default page;
