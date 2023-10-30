import Header from "@/components/Header/Header";
import KahkBiscuit from "@/components/Home/KahkBiscuit/KahkBiscuit";
import Navbar from "@/components/Home/Navbar/Navbar";
import Offers from "@/components/Home/Offers/Offers";
import OffersProduct from "@/components/Home/OffersProduct/OffersProduct";
import SectionMostVisited from "@/components/Home/SectionMostVisited/SectionMostVisited";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Offers />
      <SectionMostVisited />
      <OffersProduct />
      <KahkBiscuit />
    </>
  );
}
