import Image from "next/image";
import travelOut from "../../public/travel-out.jpg";
import travelBack from "../../public/travel-back.jpg";
import london from "../../public/london.jpg";
import apartment from "../../public/apartment.jpg";

export default function TravelThere() {

  return (    
    <>
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
      <div className="flex flex-col p-8">
        <p className="mb-4">We start our journey bright and early. We&apos;ll meet at Romford station at 7:45am (at the latest) to catch the 7:55am tube on the Elizabeth Line to Heathrow Terminal 2.</p>
        <p className="mb-4">You don&apos;t need to buy a ticket, as contactless tap-and-go will work fine and the day limit will restrict the cost for a Zone 6 to Zone 6 journey.</p>        

        <div className="w-full relative pb-4">
            <Image
                src={travelOut}
                alt="Departure Image"
                className="rounded-lg object-cover"
                layout="intrinsic"
                width={700}
                height={475}
            />

        <p className="my-4">When we arrive at Terminal 2, the TAP Portgual check-in desk is in Zone C, where we can check in cases and head for the lounge.</p>        
        <a
          className="rounded-md md:max-w-[300px] mb-4 p-4 flex-1 flex items-center justify-center bg-pink-600 font-medium text-white"
          href="https://maps.heathrow.com/?lang=en&s=eyJvbmxpbmUvZ2V0RGlyZWN0aW9uc0Zyb21UbyI6eyJtdWx0aXBvaW50Um91dGluZyI6dHJ1ZX0sIm9ubGluZS9wb2lWaWV3Ijp7Im11bHRpcG9pbnRSb3V0aW5nIjp0cnVlfSwib25saW5lL2hlYWRlck9ubGluZSI6eyJzZWFyY2giOiJUQVAgUG9ydHVnYWwgQ2hlY2stSW4iLCJpc1NlYXJjaENvbmZpcm1lZCI6dHJ1ZX0sIm1hcFJlbmRlcmVyIjp7InZwIjp7ImxhdCI6NTEuNDY5NTgzLCJsbmciOi0wLjQ1MDQ1OCwiem9vbSI6MjIsImJlYXJpbmciOjAsInBpdGNoIjowfSwib3JkIjo1fX0%3D"
        >
          Show on map
        </a>      

        <p className="mb-4">When we land we just need to get our cases and head for the metro.</p>
        <p className="mb-4">Again, we don&apos;t need to buy a ticket, as contactless tap-and-go will work fine. The cost will be about €1.30</p>        

        <div className="w-full relative pb-4">
            <Image
                src={travelBack}
                alt="Return Image"
                className="rounded-lg object-cover"
                layout="intrinsic"
                width={700}
                height={475}
            />

        <p className="my-4">From Rossio metro station, we walked the 1 minute walk across the Praça da Figueira to our apartment: <strong>9 Praça da Figueira, Lisbon</strong></p>        
            <Image
                src={apartment}
                alt="Apartment"
                className="rounded-lg object-cover mb-4"
                layout="intrinsic"
                width={700}
                height={475}
            />
        <a
          className="rounded-md md:max-w-[300px] p-4 flex-1 flex items-center justify-center bg-pink-600 font-medium text-white"
          href="https://www.google.com/maps/place/Pra%C3%A7a+da+Figueira+9,+1100-555+Lisboa,+Portugal/@38.714169,-9.1421115,892m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd1933879d4b434d:0xaa469e8052fff844!8m2!3d38.7141691!4d-9.137246!16s%2Fg%2F11c5chw05r?entry=ttu"
        >
          Show on map
        </a>          
      </div>         
      </div>         
      </div>
    </>
  );
}
