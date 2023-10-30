import Image from "next/image";
import Link from "next/link";
import React from "react";

const KahkBiscuit = () => {
  return (
    <section className="bg-gray-50 main_layout py-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
      {/* RIGHT */}
      <div>
        <Image
          className="w-full object-cover"
          src={"/kahk.png"}
          width={800}
          height={300}
          alt="Kahk photo"
        />
      </div>

      {/* LEFT */}
      <div className="flex flex-col items-center gap-10 text-grayColorDark text-center">
        <Image src={"/logo.png"} width={200} height={200} alt="logo" />
        <div>
          <p className="text-2xl">For Every day & Every time</p>
          <p className="text-sm">الكحك والبسكويت مش للعيد وبس</p>
        </div>
        <p className="w-11/12 md:w-10/12 lg:w-1/2">
          هو في فطار بيكمل من غير كباية الشاي بلبن مع أحلى كحك وبسكوت من كريز
        </p>
        <Link
          className="py-2 px-6 w-80 rounded-3xl bg-mainColorLight text-white"
          href={"/"}
        >
          شاهد المنتجات الآن
        </Link>
      </div>
    </section>
  );
};

export default KahkBiscuit;
