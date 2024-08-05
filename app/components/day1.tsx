import Image from "next/image";
import rossioHeader from "../../public/rossio-header.jpg";
import header from "../public/header-dark.jpeg";

export default function Day1() {
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
    <>
      <div id="monday" className="relative overflow-hidden">
        <div className="absolute inset-0 w-full h-[200px] max-h-[200px]">
          <Image src={rossioHeader} alt="Header image" fill={true} className="object-cover object-middle "/>          
        </div>
        <div className="relative flex items-center justify-center text-center py-4 pl-1.5 md:p-8">
          <h1 className="m-0 w-full text-[40px] md:text-[70px] relative text-left tracking-[-4px] font-bold font-inherit whitespace-pre-wrap inline-block max-w-full z-[3] md:leading-[60px] leading-[38px] mix-blend-screen">
            <p>MONDAY<span className="ml-2 text-xs font-normal tracking-[0px]">SEGUNDA-FEIRA</span></p>
          </h1>
        </div>
      </div>   
      <div className="p-8">
        <p>We arrive at the appartment </p>
      </div>   
    </>
  );
}
