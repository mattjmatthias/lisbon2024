import Image from "next/image";
import header from "../public/header-dark.jpeg";
import ButtonGrid from "./components/button-grid";
import TravelThere from "./components/travel-there";
import Day1 from "./components/day1";
import Day2 from "./components/day2";
import Day3 from "./components/day3";
import Day4 from "./components/day4";
import Day5 from "./components/day5";
import TravelBack from "./components/travel-back";
import Notes from "./components/notes";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  const buttons = [
    { id: 'departure', label: 'Departure', t: 'Partida' },
    { id: 'return', label: 'Return', t: 'Volver' },
    { id: 'monday', label: 'Monday', t: 'Segunda-Feira' },
    { id: 'tuesday', label: 'Tuesday', t: 'Terça-Feira' },
    { id: 'wednesday', label: 'Wednesday', t: 'Quarto-Feira' },
    { id: 'thursday', label: 'Thursday', t: 'Quinto-Feira' },
    { id: 'friday', label: 'Friday', t: 'Sexto-Feira' },
    { id: 'notes', label: 'Notes', t: 'Notas' }
  ];

  return (
    <main className="flex min-h-screen flex-col">      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 w-full h-[200px] max-h-[200px]">
          <Image src={header} alt="Header image" fill={true} className="object-cover "/>          
        </div>
        <div className="relative flex items-center justify-center text-center py-4 pr-1.5 md:p-8">
          <h1 className="m-0 w-full text-[50px] md:text-[80px] relative text-right tracking-[-4px] font-bold font-inherit whitespace-pre-wrap inline-block max-w-full z-[3] md:leading-[60px] leading-[38px] mix-blend-screen">
            <p>BECKY&apos;S 40TH</p>
            <p>LISBON 2024</p>
          </h1>
        </div>
      </div>

      <Analytics/>
      <SpeedInsights/>

      <ButtonGrid buttons={buttons} />      
      <TravelThere/>
      <Day1/>
      <Day2/>
      <Day3/>
      <Day4/>
      <Day5/>
      <TravelBack/>
      <Notes/>

    </main>
  );
}
