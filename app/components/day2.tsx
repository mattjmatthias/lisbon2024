import Image from "next/image";
import Place from "./place";
import Restaurant from "./restaurant";
import Header from "./header";

export default function Day2() {
  return (      
    <>
      <Header name="TUESDAY" t="TERÇA-FEIRA" tag="tuesday" image="/boat-header.jpg"/>

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
            url="https://maps.app.goo.gl/Qp3RWYD43qbHv2hK8?g_st=com.google.maps.preview.copy"
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
            url="https://maps.app.goo.gl/dB4nuU7cgqpQXMVS8?g_st=com.google.maps.preview.copy"
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
