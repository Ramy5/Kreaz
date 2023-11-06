import React from "react";
import Link from "next/link";
import MainBranchHead from "../UI/MainBranchHead";
import {
  FaWhatsapp,
  FaTiktok,
  FaFacebookMessenger,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="main_layout leading-8 flex flex-col gap-6 mt-12 bg-mainColorLight text-white p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* ABOUT KREAZ */}
        <div>
          <MainBranchHead text={"عن حلواني كريز"} />
          <p className="mb-4">
            من 2007 ولأكتر من 15 عام ، حرصنا على تقديم أفضل جودة لعملائنا من
            أرقى الحلويـــــات الشرقية والغــــربية بطعم كريز الممــــيز دائما
          </p>
          <p>وبدأنا رحلتا من مدينة طنــطا التي كانت من اشهر المدن المصريـة</p>
          <p>في مجال صناعة الحلويات ، والتي اصبحت الآن اشهرها على الإطلاق</p>
          <p className="mb-4">
            {" "}
            .واصبح كريز من أكبر علاماتها المميزه في هذه الصناعة
          </p>
          <p>
            انطلقنا في محافظات مصر بأكثر من 11 فرع حتى الآن وسيظل هدفنا هو تقديم
            أفضل تجربه وأجمل طعم لكل عملائنا والتطوير الدائم والمستمر لجميع
            منتجاتنا حتى نكون دائما خياركم الأول والأفضل
          </p>
        </div>

        {/* JOIN OUR TEAM */}
        <div>
          <MainBranchHead text={"انضم الي فريق عملنا"} />
          <p className="mb-4">
            نحن دائما في حاجة للكفائات المميزة في مجال صناعة الحلويات لذلك اذا
            كنت ترى في مهاراتك المطلبات اللازمة يمكنك الإضمام الينا
          </p>
          <p> لا تتردد في ارسال بياناتك الي البريد التالي :</p>
          <Link
            className="mb-4 inline-block"
            href="mailto:Hr@kreazdesserts.com"
          >
            Hr@kreazdesserts.com
          </Link>
          <p>او يمكنكم مشاهدة الفرص المتاحة والتقدم الآن </p>
          <p className="mt-4">
            <span>من خلال الرابط التالي : </span>
            <Link className="border-2 border-white py-1 px-8" href={"/"}>
              إنضم الآن
            </Link>
          </p>
        </div>

        {/* WORK TIME AND SOCIAL*/}
        <div>
          <MainBranchHead text={"مواعيد العمل"} />
          <p className="mb-12">
            {" "}
            جميع أيام الأسبوع من 8 صباحا <br />
            حتى الساعة الواحدة بعد منتصف الليل
          </p>

          <MainBranchHead text={"تواصل معنا"} />
          <div className="flex flex-wrap items-center gap-2 text-2xl mt-3">
            <Link href={"/"} target="_blank">
              <FaFacebookMessenger />
            </Link>
            <Link href={"/"} target="_blank">
              <FaWhatsapp />
            </Link>
            <Link href={"/"} target="_blank">
              <FaTiktok />
            </Link>
            <Link href={"/"} target="_blank">
              <FaYoutube />
            </Link>
            <Link href={"/"} target="_blank">
              <FaInstagram />
            </Link>
            <Link href={"/"} target="_blank">
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>

      {/* VISA */}
      <div className="flex gap-2 items-center justify-end">
        <Image
          src={"/footer/vodafone.png"}
          width={30}
          height={30}
          alt="vodafone"
        />
        <Image
          src={"/footer/mastercard.png"}
          width={40}
          height={40}
          alt="master"
        />
        <Image src={"/footer/visa.png"} width={50} height={50} alt="visa" />
        <Image
          src={"/footer/Group 13.png"}
          width={70}
          height={70}
          alt="cash on delivery"
        />
      </div>
    </footer>
  );
};

export default Footer;
