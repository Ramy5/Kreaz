import HeadSection from "@/components/UI/HeadSection";
import SectionMostVisitedCard from "@/components/UI/SectionMostVisitedCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SectionMostVisited = () => {
  return (
    <>
      <section className="main_layout pt-2 pb-10">
        <HeadSection title={"الأقسام الأكثر زيارة"} className="text-center" />
        {/* <div className="xl:flex flex-wrap items-center hidden gap-4 justify-center">
          <SectionMostVisitedCard name="وافل" img="/waffle.png" link={"/"} />
          <SectionMostVisitedCard
            name="جاتوهات"
            img="/13 black forest.png"
            link={"/"}
          />
          <SectionMostVisitedCard
            name="تورت"
            img="/قلب نوتيلا.png"
            link={"/"}
          />
          <SectionMostVisitedCard
            name="البسبوسة"
            img="/بسبوسة.png"
            link={"/"}
          />
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
        </div> */}
        {/* SLIDE */}
        <div className="">
          <Swiper
            spaceBetween={10}
            style={{ paddingBottom: "1rem" }}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 8,
              },
            }}
          >
            <SwiperSlide>
              <SectionMostVisitedCard
                name="وافل"
                img="/waffle.png"
                link={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SectionMostVisitedCard
                name="جاتوهات"
                img="/13 black forest.png"
                link={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SectionMostVisitedCard
                name="تورت"
                img="/قلب نوتيلا.png"
                link={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SectionMostVisitedCard
                name="البسبوسة"
                img="/بسبوسة.png"
                link={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SectionMostVisitedCard
                name="شوكولاتة"
                img="/chocolate.png"
                link={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SectionMostVisitedCard
                name="مخبوزات حلو"
                img="/mini-corrisant.png"
                link={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SectionMostVisitedCard
                name="ميني ساندوتش"
                img="/mini-sandich.png"
                link={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SectionMostVisitedCard
                name="جاتوة سوارية"
                img="/سواريه.png"
                link={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SectionMostVisitedCard
                name="دوناتس"
                img="/دوناتس.png"
                link={"/"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default SectionMostVisited;
