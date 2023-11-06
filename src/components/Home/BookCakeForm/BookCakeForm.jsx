import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "@/validation/BookFormValidation";
import Image from "next/image";
import { toast } from "react-toastify";

const BookCakeForm = () => {
  // INITIAL VALUE FOR BOOK FORM
  const initialFormValues = {
    name: "",
    phoneNumber: "",
    occasionDate: "",
    occasionType: "",
    amountOfPeople: "",
    img: "",
  };

  return (
    <section className="main_layout py-8 grid grid-cols-1 xl:grid-cols-2 gap-8 text-grayColorLight">
      {/* RIGHT */}
      <div className="flex flex-col items-center gap-8 order-2 lg:order-1">
        <div className="flex flex-col items-center">
          <Image
            className="object-cover mb-4"
            src={"/path 40.svg"}
            alt="icon"
            width={60}
            height={60}
          />
          <p className="text-xl mb-1">! BOOK YOUR SPECIAL CAKE NOW</p>
          <p className="mb-4">لكل مناسبة حلوة تورتة احلى تكمل فرحتها</p>
          <p className="mb-4 text-lg">احجز تورتتك الخاصة دلوقت !</p>
          <p>كل الي عليك تملى البيانات وهيقوم احد موظفينا المختصين</p>
          <p>بالتواصل معك فورا ً لأختيار الشكل المناسب واتمام الحجز </p>
        </div>

        {/* FORM FOR BOOK */}
        <Formik
          initialValues={initialFormValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values);

            actions.resetForm();
            toast.success("تم حجز المنتج سيتم التواصل معك", {
              closeOnClick: true,
              pauseOnHover: true,
            });
          }}
        >
          {({ resetForm, isValid }) => (
            <Form className="w-[25rem]">
              <div
                className={` flex flex-col items-center gap-4 bg-mainColorLight p-6`}
              >
                {/* NAME */}
                <div className="w-full">
                  <Field
                    className="w-full mb-1 text-grayColorLight text-base border-none outline-none focus:ring-transparent"
                    type="text"
                    name="name"
                    required
                    placeholder="الإسم"
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                {/* PHONE NUMBER */}
                <div className="w-full">
                  <Field
                    className="w-full mb-1 text-grayColorLight text-base border-none outline-none focus:ring-transparent"
                    type="text"
                    required
                    name="phoneNumber"
                    placeholder="رقم للتواصل ويفضل تواجد واتس اب "
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="error"
                  />
                </div>

                {/* OCCASION DATE */}
                <div className="w-full">
                  <Field
                    className="w-full mb-1 text-grayColorLight text-base border-none outline-none focus:ring-transparent"
                    type="date"
                    required
                    name="occasionDate"
                    placeholder="تاريخ المناسبة"
                  />
                  <ErrorMessage
                    name="occasionDate"
                    component="div"
                    className="error"
                  />
                </div>

                {/* OCCASION TYPE */}
                <div className="w-full">
                  <Field
                    className="w-full mb-1 text-grayColorLight text-base border-none outline-none focus:ring-transparent"
                    type="text"
                    required
                    name="occasionType"
                    placeholder="نوع المناسبة (عيد ميلاد - خطوبة - زواج ... )"
                  />
                  <ErrorMessage
                    name="occasionType"
                    component="div"
                    className="error"
                  />
                </div>

                {/* AMOUNT OF PEOPLE */}
                <div className="w-full">
                  <Field
                    className="w-full mb-1 text-grayColorLight text-base border-none outline-none focus:ring-transparent"
                    type="number"
                    required
                    name="amountOfPeople"
                    min="1"
                    placeholder="عدد الأفراد"
                  />
                  <ErrorMessage
                    name="amountOfPeople"
                    component="div"
                    className="error"
                  />
                </div>

                {/* IMAGE*/}
                <div className="w-full">
                  <Field
                    class="w-full text-sm mb-1 text-grayColorLight cursor-pointer bg-gray-50 focus:outline-none"
                    id="file_input"
                    style={{ direction: "ltr" }}
                    type="file"
                    name="img"
                  />
                  <ErrorMessage name="img" component="div" className="error" />
                </div>
              </div>

              <button
                className="text-center bg-mainColorLight text-white mt-4 py-2 px-4 w-full text-xl "
                type="submit"
              >
                إتمام الحجز
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* LEFT */}
      <div className="grid grid-cols-1 items-end lg:grid-cols-2 gap-4 order-1 lg:order-2">
        <Image
          className="object-cover w-full h-[90%]"
          src={"/33.png"}
          alt="Chocolate cake"
          width={400}
          height={400}
        />
        <Image
          className="object-cover w-full h-[90%]"
          src={"/33.png"}
          alt="Chocolate cake"
          width={400}
          height={400}
        />
        <Image
          className="object-cover w-full h-[90%]"
          src={"/33.png"}
          alt="Chocolate cake"
          width={400}
          height={400}
        />
        <Image
          className="object-cover w-full h-[90%]"
          src={"/33.png"}
          alt="Chocolate cake"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default BookCakeForm;
