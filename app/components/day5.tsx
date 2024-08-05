import Image from "next/image";
import roomHeader from "../../public/room-header.jpg";
import Place from "./place";
import Restaurant from "./restaurant";

export default function Day5() {
  return (
    <>
      <div id="friday" className="relative overflow-hidden">
        <div className="absolute inset-0 w-full h-[200px] max-h-[200px]">
          <Image
            src={roomHeader}
            alt="Header image"
            fill={true}
            className="object-cover object-bottom"
          />
        </div>
        <div className="relative flex items-center justify-center text-center py-4 pl-1.5 md:p-8">
          <h1 className="m-0 w-full text-[40px] md:text-[70px] relative text-left tracking-[-4px] font-bold font-inherit whitespace-pre-wrap inline-block max-w-full z-[3] md:leading-[60px] leading-[38px] mix-blend-screen">
            <p>
              FRIDAY
              <span className="ml-2 text-xs font-normal tracking-[0px]">
                SEXTA-FEIRA
              </span>
            </p>
          </h1>
        </div>
      </div>
      <div className="flex flex-col p-8">
        <div>
          <p>Day 5 we have a free morning to go pick up any last things we want to take home (or maybe just a lie in to recover).</p>
          <p className="mt-4">We leave the apartment about 1:00pm for the airport.</p>
        </div>
      </div>
    </>
  );
}
