import React from "react";
import SingleProductDescriptionTable from "./SingleProductDescriptionTable";
import AddCartBtn from "../UI/AddCartBtn";
import AddCartAmount from "../UI/AddCartAmount";
import { FaCheckSquare } from "react-icons/fa";

const SingleProductDescription = () => {
  return (
    <div className="col-span-2 xl:col-span-3">
      {/* TITLE AND PRICE + DISCOUNT */}
      <div className="flex items-center justify-between w-full">
        <h2 className=" pb-4 font-bold xl:border-b xl:border-gray-200 w-8/12 text-2xl text-mainColorLight">
          تورتة قلب نوتيلا
        </h2>
        <p className="bg-mainColorLight py-2 px-8 text-white rounded-full flex items-center gap-2">
          <span className="text-2xl font-bold ">325</span> جنية
        </p>
      </div>

      {/* DESCRIPTION TEXT */}
      <p className="w-full xl:w-8/12 py-8 border-b border-gray-200 text-mainColorLight text-lg">
        تورتة قلب النوتيلا الشهيره من كريز تذوق اجمل طعم لكيك الشوكولاتة الذائب
        في النوتيلا وبسكويت الاوريو والمكسرت
      </p>

      {/* DESCRIPTION TABLE */}
      <div className="pb-4">
        <div className="flex justify-between items-center py-4">
          <p className="py-2 font-bold px-6 bg-grayColorLight text-white">
            المواصفات
          </p>
          <p className="py-2 px-6 bg-[#88C321] text-white rounded-full flex items-center gap-1">
            <FaCheckSquare />
            <span>هذا المنتج متوفر</span>
          </p>
        </div>

        <SingleProductDescriptionTable />
      </div>

      {/* DESCRIPTION TEXT 2 */}
      <div className="w-full xl:w-8/12  py-3 border-t border-gray-200">
        <p>يستغرق توصيل المنتج من 30 الى 45 دقيقة وقد تختلف في أوقات الذروة</p>
        <p>قد يختلف شكل المنتج عن الصورة نسبيا ولكن لا يختلف في المكونات</p>
        <p>اذا كان لديك أي طلبات خاصة يمكنك تحديدها مع انهاء الطلب </p>
      </div>

      {/* ADD TO CART BUTTON AND QUANTITY */}
      <div className="flex justify-between items-center mt-4">
        <AddCartBtn
          isAvailable
          className={"w-60 flex justify-center rounded-full font-bold py-4"}
        />
        <div className="flex items-center gap-6">
          <span className="text-mainColorLight text-lg font-bold hidden xl:block">
            الكمية
          </span>
          <AddCartAmount isAvailable />
        </div>
      </div>
    </div>
  );
};

export default SingleProductDescription;
