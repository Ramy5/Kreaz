"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BakeMostSells from "@/components/Home/BakeMostSells/BakeMostSells";
import BookCakeForm from "@/components/Home/BookCakeForm/BookCakeForm";
import Branches from "@/components/Home/Branches/Branches";
import ChoclateProducts from "@/components/Home/ChoclateProducts/ChoclateProducts";
import KahkBiscuit from "@/components/Home/KahkBiscuit/KahkBiscuit";
import MilkProducts from "@/components/Home/MilkProducts/MilkProducts";
import Navbar from "@/components/Home/Navbar/Navbar";
import Offers from "@/components/Home/Offers/Offers";
import OffersProduct from "@/components/Home/OffersProduct/OffersProduct";
import PhoneFooter from "@/components/Home/PhoneFooter/PhoneFooter";
import SectionMostVisited from "@/components/Home/SectionMostVisited/SectionMostVisited";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Offers />
      <SectionMostVisited />
      <OffersProduct />
      <KahkBiscuit />
      <ChoclateProducts />
      <BakeMostSells />
      <BookCakeForm />
      <MilkProducts />
      <Branches />
      <PhoneFooter />
    </>
  );
};

export default App;
