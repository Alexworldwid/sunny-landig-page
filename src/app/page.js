import Image from "next/image";
import { Fraunces } from "next/font/google";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">    
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
