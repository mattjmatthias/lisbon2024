'use client'

import Image from "next/image";

type HeaderProps = {
    image: string;
    name: string;
    t: string;
    tag: string;
  };
  
const Header: React.FC<HeaderProps> = ({ image, name, t, tag }) => {
  return (      
    <>
      <div id={tag} className="relative overflow-hidden flex justify-between items-center py-4">
        <div className="absolute inset-0 w-full h-[200px] max-h-[200px]">
            <Image src={image} alt="Header image" fill={true} className="object-cover object-middle"/>
        </div>
        <div className="relative flex items-center justify-center text-center pl-1.5 md:p-4">
            <h1 className="m-0 w-fit text-[40px] md:text-[70px] relative text-left tracking-[-4px] font-bold font-inherit whitespace-pre-wrap inline-block max-w-full z-[3] md:leading-[60px] leading-[38px] mix-blend-screen">
            <p>{name}<span className="ml-2 text-xs font-normal tracking-[0px]">{t}</span></p>
            </h1>
        </div>       
        <div className="relative flex items-center justify-end w-fit">
            <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mr-8 shadow-md"
            aria-label="Scroll to top"
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            </button>
        </div>
      </div>
    </>
  )
}

export default Header;