import AllProduct from "./components/homepage/AllProduct";
import Hero from "./components/homepage/Hero";
import PriceDecreased from "./components/homepage/PriceDecreased";
import PriceIncreased from "./components/homepage/PriceIncreased";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3FBF4] p-2 md:p-5">
      <Hero />
      <PriceIncreased />
      <PriceDecreased />
      <AllProduct />
    </div>
  );
}