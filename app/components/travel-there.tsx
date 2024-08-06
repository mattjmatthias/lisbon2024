'use client'

import Image from "next/image";
import Header from "./header";

export default function TravelThere() {

  return (    
    <>
      <Header name="DEPARTURE" t="PARTIDA" tag="departure" image="/london.jpg"/>
  
      <div className="flex flex-col p-8">
        <div className="flex flex-col md:flex-row">      
            <div className="md:hidden">
                <p className="mb-4">We start our journey bright and early. We&apos;ll meet at Romford station at 7:45am (at the latest) to catch the 7:55am tube on the Elizabeth Line to Heathrow Terminal 2.</p>
                <p className="mb-4">You don&apos;t need to buy a ticket, as contactless tap-and-go will work fine and the day limit will restrict the cost for a Zone 6 to Zone 6 journey.</p>            
                <p className="my-4">When we arrive at Terminal 2, the TAP Portgual check-in desk is in Zone C, where we can check in cases and head for the lounge.</p>        
                <a
                className="rounded-md md:max-w-[300px] mb-4 p-4 flex-1 flex items-center justify-center bg-pink-600 font-medium text-white"
                href="https://maps.heathrow.com/?lang=en&s=eyJvbmxpbmUvZ2V0RGlyZWN0aW9uc0Zyb21UbyI6eyJtdWx0aXBvaW50Um91dGluZyI6dHJ1ZX0sIm9ubGluZS9wb2lWaWV3Ijp7Im11bHRpcG9pbnRSb3V0aW5nIjp0cnVlfSwib25saW5lL2hlYWRlck9ubGluZSI6eyJzZWFyY2giOiJUQVAgUG9ydHVnYWwgQ2hlY2stSW4iLCJpc1NlYXJjaENvbmZpcm1lZCI6dHJ1ZX0sIm1hcFJlbmRlcmVyIjp7InZwIjp7ImxhdCI6NTEuNDY5NTgzLCJsbmciOi0wLjQ1MDQ1OCwiem9vbSI6MjIsImJlYXJpbmciOjAsInBpdGNoIjowfSwib3JkIjo1fX0%3D"
                >
                Show on map
                </a> 
            </div>
            
            <div className="w-full md:w-1/2 md:pr-8 relative pb-4">
                <Image
                    src={"/travel-out.jpg"}
                    alt="Departure Image"
                    className="rounded-lg object-cover"
                    layout="intrinsic"
                    width={700}
                    height={475}
                />
            </div>
            
            <div className="hidden md:block w-full md:w-1/2 md:pr-4 pb-4">
                <p className="mb-4">We start our journey bright and early. We&apos;ll meet at Romford station at 7:45am (at the latest) to catch the 7:55am tube on the Elizabeth Line to Heathrow Terminal 2.</p>
                <p className="mb-4">You don&apos;t need to buy a ticket, as contactless tap-and-go will work fine and the day limit will restrict the cost for a Zone 6 to Zone 6 journey.</p>                    
                <p className="my-4">When we arrive at Terminal 2, the TAP Portgual check-in desk is in Zone C, where we can check in cases and head for the lounge.</p>        
                <a
                className="rounded-md md:max-w-[300px] mb-4 p-4 flex-1 flex items-center justify-center bg-pink-600 font-medium text-white"
                href="https://maps.heathrow.com/?lang=en&s=eyJvbmxpbmUvZ2V0RGlyZWN0aW9uc0Zyb21UbyI6eyJtdWx0aXBvaW50Um91dGluZyI6dHJ1ZX0sIm9ubGluZS9wb2lWaWV3Ijp7Im11bHRpcG9pbnRSb3V0aW5nIjp0cnVlfSwib25saW5lL2hlYWRlck9ubGluZSI6eyJzZWFyY2giOiJUQVAgUG9ydHVnYWwgQ2hlY2stSW4iLCJpc1NlYXJjaENvbmZpcm1lZCI6dHJ1ZX0sIm1hcFJlbmRlcmVyIjp7InZwIjp7ImxhdCI6NTEuNDY5NTgzLCJsbmciOi0wLjQ1MDQ1OCwiem9vbSI6MjIsImJlYXJpbmciOjAsInBpdGNoIjowfSwib3JkIjo1fX0%3D"
                >
                Show on map
                </a> 
            </div>
        </div>

        <div className="flex flex-col md:flex-row">      
            <div className="md:hidden">        
              <p className="mb-4">When we land we just need to get our cases and head for the metro.</p>
              <p className="mb-4">Again, we don&apos;t need to buy a ticket, as contactless tap-and-go will work fine. The cost will be about €1.30</p>       
            </div>
            
            <div className="w-full md:w-1/2 md:pr-8 relative pb-4">
                <Image
                    src={"/travel-back.jpg"}
                    alt="Return Image"
                    className="rounded-lg object-cover"
                    layout="intrinsic"
                    width={700}
                    height={475}
                />
            </div>
            
            <div className="hidden md:block w-full md:w-1/2 md:pr-4 pb-4">                
              <p className="mb-4">When we land we just need to get our cases and head for the metro.</p>
              <p className="mb-4">Again, we don&apos;t need to buy a ticket, as contactless tap-and-go will work fine. The cost will be about €1.30</p>       
            </div>
        </div>
     
        <div className="flex flex-col md:flex-row">      
            <div className="w-full md:w-1/2 md:pr-8 relative">
                <Image
                    src={"/apartment.jpg"}
                    alt="Apartment"
                    className="rounded-lg object-cover mb-4"
                    layout="intrinsic"
                    width={700}
                    height={475}
                />
            </div>
            
            <div className="w-full md:w-1/2 md:pr-4">                              
                <p className="my-4">From Rossio metro station, we walked the 1 minute walk across the Praça da Figueira to our apartment: </p>
                <p><strong>9 Praça da Figueira, Lisbon</strong></p>        
                <div className="flex flex-row gap-2 mt-4">
                    <a
                    className="rounded-md md:max-w-[300px] mb-4 p-4 flex-1 flex items-center justify-center bg-pink-600 font-medium text-white"
                    href="https://www.airbnb.co.uk/rooms/45746815"
                    >
                    View Airbnb
                    </a>

                    <a
                    className="rounded-md md:max-w-[300px] mb-4 p-4 flex-1 flex items-center justify-center bg-pink-600 font-medium text-white"
                    href="https://www.google.com/maps/place/Pra%C3%A7a+da+Figueira+9,+1100-555+Lisboa,+Portugal/@38.714169,-9.1421115,892m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd1933879d4b434d:0xaa469e8052fff844!8m2!3d38.7141691!4d-9.137246!16s%2Fg%2F11c5chw05r?entry=ttu"
                    >
                    Show on map
                    </a>
                </div> 
            </div>
        </div>       
      </div>   
    </>
  );
}
