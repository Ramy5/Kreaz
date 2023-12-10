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
          width={250}
          height={250}
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
              className={`w-2/6 flex flex-col items-center mx-auto gap-6 p-10`}
            >
              {/* NAME */}
              <div className="w-full">
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
              <div className="w-full">
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
              <div className="w-full">
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
              <div className="w-full">
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

              {/* CONFIRM PASSWORD */}
              <div className="w-full">
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

              <button
                className="text-center rounded-lg py-1 bg-white text-mainColorLight px-4 w-full text-lg"
                type="submit"
                disabled={!isValid}
              >
                إتمام التسجيل
              </button>

              <Link
                href="/login"
                className="text-center rounded-lg py-1 bg-mainColorLight text-white px-4 w-full text-lg "
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
