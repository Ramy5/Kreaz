import Image from "next/image";
import Link from "next/link";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

const Header = () => {
  return (
    <header className="main_layout text-grayColorLight py-6 px-2 flex flex-wrap items-center justify-between">
      {/* RIGHT */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 items-center border border-gray-300 text-gray-500  px-4 rounded-2xl">
          <MdLocationPin className="text-xl" />
          <p>تغيير عنوان التوصيل</p>
          <select className="border-gray-300 text-gray-500 outline-none border-none text-sm text-center block w-24 py-2 focus:ring-transparent">
            <option value="القاهرة">القاهرة</option>
            <option value="الجيزة">الجيزة</option>
            <option value="المنوفيه">طنطا</option>
            <option value="المنصورة">المنصورة</option>
          </select>
        </div>

        <div className="flex items-center gap-2 px-4">
          <FaShoppingCart className="text-xl" />
          <p className="flex gap-2 items-center">
            <Link
              className="hover:text-mainColorLight transition-colors duration-200"
              href="/"
            >
              {" "}
              عرض سلة التسوق -
            </Link>
            <Link
              className="hover:text-mainColorLight transition-colors duration-200"
              href="/"
            >
              إتــمام الشراء
            </Link>
          </p>
        </div>
      </div>

      {/* CENTER */}
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="logo" width={150} height={100} />
      </Link>

      {/* LEFT */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-xl" />
          <p className="flex gap-1">
            <Link
              className="hover:text-mainColorLight transition-colors duration-200"
              href="/"
            >
              {" "}
              تسجيل الدخول /
            </Link>
            <Link
              className="hover:text-mainColorLight transition-colors duration-200"
              href="/"
            >
              عميل جديد
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <IoLogoWhatsapp className="text-xl" />
          <p>01200006529</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
