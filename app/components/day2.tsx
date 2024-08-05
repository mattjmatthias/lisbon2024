import Image from "next/image";
import boatHeader from "../../public/boat-header.jpg";
import Place from "./place";
import Restaurant from "./restaurant";

export default function Day2() {
  return (      
    <>
      <div id="tuesday" className="relative overflow-hidden">
        <div className="absolute inset-0 w-full h-[200px] max-h-[200px]">
          <Image src={boatHeader} alt="Header image" fill={true} className="object-cover object-bottom "/>          
        </div>
        <div className="relative flex items-center justify-center text-center py-4 pl-1.5 md:p-8">
          <h1 className="m-0 w-full text-[40px] md:text-[70px] relative text-left tracking-[-4px] font-bold font-inherit whitespace-pre-wrap inline-block max-w-full z-[3] md:leading-[60px] leading-[38px] mix-blend-screen">
            <p>TUESDAY<span className="ml-2 text-xs font-normal tracking-[0px]">TERÇA-FEIRA</span></p>
          </h1>
        </div>
      </div>   
      <div className="flex flex-col p-8">
        <div>
            <p>For day 2, we have a food tour from 11am until 2:30pm, a sunset traditional boat ride from 7:30pm and a visit to McDonalds to fit in!</p>
        </div>   

        <Restaurant
            name="Food and Wine Tour"
            t=""
            image="/foodtour.jpg"
            description={["Uncover Lisbon's culture and cuisine while you walk around two of its neighborhoods during this excursion. Join a small group to explore the neighborhoods of Baixa and Mouraria, wandering their back streets in search of delicious Portuguese fare. Stop at several locations for tastings, including VIP access to a local fado house run by a Michelin-starred chef and learn about the international influence of Portuguese food.",
                "We'll meet the tour guide at 11:00am at Praça dos Restauradores, which is 6 mins on foot from where we're staying."
            ]}
            restaurantUrl="https://www.tripadvisor.co.uk/AttractionProductReview-g189158-d17533881-Undiscovered_Lisbon_Food_Wine_Tour_with_Eating_Europe-Lisbon_Lisbon_District_Centr.html"
            url="https://www.google.com/maps/place/Pra%C3%A7a+dos+Restauradores,+1250-001+Lisboa,+Portugal/@38.7158437,-9.1439069,17z/data=!4m10!1m2!2m1!1sRestauradores+Square,+Pra%C3%A7a+dos+Restauradores,+1250-001+Lisboa,+Portugal!3m6!1s0xd193380df7aca9f:0x213be273dddd64f!8m2!3d38.7157819!4d-9.1412387!15sCklSZXN0YXVyYWRvcmVzIFNxdWFyZSwgUHJhw6dhIGRvcyBSZXN0YXVyYWRvcmVzLCAxMjUwLTAwMSBMaXNib2EsIFBvcnR1Z2FskgEObm90YWJsZV9zdHJlZXTgAQA!16s%2Fm%2F02w3jhp?entry=ttu"
            />
        
        <Restaurant
            name="Traditional Boat Sunset Cruise with White Wine"
            t=""
            image="/boat.jpg"
            description={["Escape the crowds on land and get the best views of Lisbon’s skyline from the water during a sunset cruise that reveals the city at its most magical. An open-air boat ensures you get unobstructed photos of top Lisbon landmarks, while onboard commentary provides historical and cultural info that you’re unlikely to find in the guidebook.",
                "The boat departs from the Estação Ferroviária do Sul e Sueste which is a 13 minute walk from our apartment, along the flat directly towards the sea.",
                "Tripadvisor says to find the boat station 'Sul e Sueste' next to Commerce Square. The meeting point is inside the boat station, in front of ticket office #8."
            ]}
            restaurantUrl="https://www.tripadvisor.co.uk/AttractionProductReview-g189158-d12639157-2_Hour_Lisbon_Traditional_Boats_Sunset_Cruise_with_White_Wine-Lisbon_Lisbon_Distri.html"
            url="https://www.google.com/maps/dir/38.7141718,-9.1373014/Esta%C3%A7%C3%A3o+Ferrovi%C3%A1ria+do+Sul+e+Sueste,+Avenida+Infante+Dom+Henrique,+Lisbon,+Portugal/@38.710442,-9.1411175,1784m/data=!3m3!1e3!4b1!5s0xd193380d98d2a1b:0x152b93b32556972b!4m9!4m8!1m0!1m5!1m1!1s0xd1934709adb3915:0x60191b5e8456c1b0!2m2!1d-9.1339882!2d38.7066826!3e2?entry=ttu"
            />
        
        <h1 className="text-3xl font-bold">Restaurant</h1>

        <Restaurant
            name="McDonald's"
            t=""
            image="/mcdonalds.jpg"
            description={["In order to try the Portuguese McDonald's specialities, we'll be calling in before or after the boat ride, depending how full we after from the tour."]}
            restaurantUrl="https://www.mcdonalds.pt/"
            url="https://www.google.com/maps/search/McDonald's+lisbon/@38.7143798,-9.1514552,15z/data=!3m1!4b1?entry=ttu"
            />
      </div>      
    </>
  );
}
