import Image from "next/image";
import Place from "./components/place";
import header from "../public/header-dark.jpeg"
import ButtonGrid from "./components/button-grid";

export default function Home() {
  const buttons = [
    { id: 'section1', label: 'Depature', t: 'Partida' },
    { id: 'section2', label: 'Return', t: 'Volver' },
    { id: 'section3', label: 'Monday', t: 'Segunda-Feira' },
    { id: 'section3', label: 'Tuesday', t: 'Terça-Feira' },
    { id: 'section3', label: 'Wednesday', t: 'Quarto-Feira' },
    { id: 'section3', label: 'Thursday', t: 'Quinto-Feira' },
    { id: 'section3', label: 'Friday', t: 'Sexto-Feira' },
    { id: 'section3', label: 'Notes', t: 'Notas' }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 gradient">
      <div className="z-10 w-full max-w-5xl text-4xl text-white items-center justify-between font-medium lg:flex">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 h-[200px] max-h-[200px]">
          <Image src={header} alt="Header image" fill={true} className="object-cover "/>          
        </div>
        <div className="relative flex items-center justify-center text-center py-4 pr-1.5">
          <h1 className="m-0 w-full text-[50px] relative text-right tracking-[-4px] font-bold font-inherit whitespace-pre-wrap inline-block max-w-full z-[3] leading-[38px] mix-blend-screen">
            BECKY'S 40TH
            LISBON 2024
          </h1>
        </div>
      </div>

      <ButtonGrid buttons={buttons} />
      </div>
    </main>
  );
}
