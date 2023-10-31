import HeadSection from "@/components/UI/HeadSection";
import SectionMostVisitedCard from "@/components/UI/SectionMostVisitedCard";
import React from "react";

const SectionMostVisited = () => {
  return (
    <section className="main_layout pt-2 pb-10">
      <HeadSection title={"الأقسام الأكثر زيارة"} className="text-center" />
      <div className="flex flex-wrap items-center gap-4 justify-center">
        <SectionMostVisitedCard name="وافل" img="/waffle.png" link={"/"} />
        <SectionMostVisitedCard
          name="جاتوهات"
          img="/13 black forest.png"
          link={"/"}
        />
        <SectionMostVisitedCard name="تورت" img="/قلب نوتيلا.png" link={"/"} />
        <SectionMostVisitedCard name="البسبوسة" img="/بسبوسة.png" link={"/"} />
        <SectionMostVisitedCard
          name="شوكولاتة"
          img="/chocolate.png"
          link={"/"}
        />
        <SectionMostVisitedCard
          name="مخبوزات حلو"
          img="/mini-corrisant.png"
          link={"/"}
        />
        <SectionMostVisitedCard
          name="ميني ساندوتش"
          img="/mini-sandich.png"
          link={"/"}
        />
        <SectionMostVisitedCard
          name="جاتوة سوارية"
          img="/سواريه.png"
          link={"/"}
        />
        <SectionMostVisitedCard name="دوناتس" img="/دوناتس.png" link={"/"} />
      </div>
    </section>
  );
};

export default SectionMostVisited;