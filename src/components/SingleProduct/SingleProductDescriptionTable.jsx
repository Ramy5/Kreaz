import React from "react";

const descriptions = [
  {
    id: crypto.randomUUID(),
    desc: "المقاس",
    value: "26 سم",
  },
  {
    id: crypto.randomUUID(),
    desc: "تكفي حتى",
    value: "8 افراد",
  },
  {
    id: crypto.randomUUID(),
    desc: "الحشو الداخلي",
    value: "كيك الشوكولاتة الاسفنجي مع كريمة الشوكولاتة والنوتيلا",
  },
  {
    id: crypto.randomUUID(),
    desc: "الطبقات الخارجية",
    value: "الشوكولاتة النوتيلا وبسكويت الاوريو مع المكسرات",
  },
];

const SingleProductDescriptionTable = () => {
  return (
    <div className="bg-mainColorLight p-2 w-full">
      {descriptions.map((description) => {
        return (
          <div className="flex items-center" key={description.id}>
            <p className="py-2 m-[6px] px-4 bg-white font-bold text-mainColorLight w-1/4">
              {description.desc}
            </p>
            <p className="py-2 m-[6px] px-4 bg-white font-bold text-mainColorLight  w-3/4">
              {description.value}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProductDescriptionTable;
