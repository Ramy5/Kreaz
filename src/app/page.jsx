import Header from "@/components/Header/Header";
import Navbar from "@/components/Home/Navbar/Navbar";
import Offers from "@/components/Home/Offers/Offers";
import SectionMostVisited from "@/components/Home/SectionMostVisited/SectionMostVisited";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Offers />
      <SectionMostVisited />
    </>
  );
}
