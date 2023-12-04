import MainBranchHead from "@/components/UI/MainBranchHead";
import Map from "@/components/UI/Map";
import React from "react";

const Branches = () => {
  return (
    <section className="main_layout py-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch bg-mainColorLight text-white">
      {/* MAP */}
      <div class=" bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        ></iframe>
      </div>

      {/* BRANCHES */}
      <div>
        <MainBranchHead className={""} text={"عناوين فروعنا"} />
        <div className="flex flex-wrap items-start justify-between gap-4 mt-4">
          <ul className="flex flex-col gap-2">
            <li className="font-bold mb-1">فروع مدينة طنطا :</li>
            <li>الإستاد</li>
            <li>حسن رضوان</li>
            <li>شارع البحر امام الشوا</li>
            <li>شارع الفاتح بجوار بنك مصر</li>
            <li>امتداد شارع النادي الطريق الزراعي</li>
            <li>نادي الشرطة شارع البحر</li>
            <li>نادي ماتريكس</li>
          </ul>

          <ul>
            <li>
              <p className="font-bold">كفر الشيخ :</p>
              <span className="mb-6 block">
                شارع إبراهيم مغازي بجوار تيفال زهران
              </span>
            </li>
            <li>
              <p className="font-bold">المنصورة :</p>
              <span className="mb-6 block">
                شارع المشاية امام ملاهي بيبو لاند
              </span>
            </li>
            <li>
              <p className="font-bold">كفر الزيات :</p>
              <span className="mb-6 block">شارع الجيش</span>
            </li>
            <li>
              <p className="font-bold">سبطاس :</p>
              <span className="mb-6 block">طريق السنطة كوبر الاورمان</span>
            </li>
            <li>
              <p className="font-bold">المعادي :</p>
              <span className="mb-6 block">
                طريق مصر حلوان الزراعي بجوار المستشفى العسكري
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Branches;
