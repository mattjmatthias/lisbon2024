import Image from "next/image";
import lisbonHeader from "../../public/lisbon-header.jpg";

export default function TravelBack() {

  return (
      <div id="return" className="relative overflow-hidden">
        <div className="absolute inset-0 w-full h-[200px] max-h-[200px]">
          <Image src={lisbonHeader} alt="Header image" fill={true} className="object-cover object-bottom"/>          
        </div>
        <div className="relative flex items-center justify-center text-center py-4 pl-1.5 md:p-8">
          <h1 className="m-0 w-full text-[40px] md:text-[70px] relative text-left tracking-[-4px] font-bold font-inherit whitespace-pre-wrap inline-block max-w-full z-[3] md:leading-[60px] leading-[38px] mix-blend-screen">
            <p>RETURN<span className="ml-2 text-xs font-normal tracking-[0px]">VOLVER</span></p>
          </h1>
        </div>
      </div>
  );
}
