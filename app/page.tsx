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

      <ButtonGrid buttons={buttons} />
      <div className="h-[200px] w-full gradient"/>
      
    </main>
  );
}
