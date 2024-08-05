import Image from "next/image";
import london from "../../public/london.jpg";

export default function TravelThere() {

  return (
      <div id="departure" className="relative overflow-hidden">
        <div className="absolute inset-0 w-full h-[200px] max-h-[200px]">
          <Image src={london} alt="Header image" fill={true} className="object-cover object-middle "/>          
        </div>
        <div className="relative flex items-center justify-center text-center py-4 pl-1.5 md:p-8">
          <h1 className="m-0 w-full text-[40px] md:text-[70px] relative text-left tracking-[-4px] font-bold font-inherit whitespace-pre-wrap inline-block max-w-full z-[3] md:leading-[60px] leading-[38px] mix-blend-screen">
            <p>DEPARTURE<span className="ml-2 text-xs font-normal tracking-[0px]">PARTIDA</span></p>
          </h1>
        </div>
      </div>
  );
}
