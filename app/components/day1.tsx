import Image from "next/image";
import rossioHeader from "../../public/rossio-header.jpg";
import Place from "./place";
import Restaurant from "./restaurant";

export default function Day1() {
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
      <div className="flex flex-col p-8">
        <div>
            <p>Having unpacked and decompressed, there&apos;s a few things to see right on our doorstep, and some time before dinner.</p>
        </div>   

        <Place
            name="Praça Dom Pedro IV"
            t="Rossio Square"
            image="/rossio.jpg"
            shortDescription={["This bustling area is known for its beautiful wave-patterned cobblestone pavement and the grand National Theatre."]}
            description={["Praça Dom Pedro IV, often referred to as Rossio Square, is the bustling heart of downtown Lisbon. This historic square is a symbol of the city's vibrant culture and is known for its iconic wave-patterned cobblestone pavement, known as \"calçada portuguesa.\" These intricate black and white waves were inspired by the sea and designed by Portuguese artists in the 19th century, creating a mesmerizing optical illusion that captivates visitors.",
                "The square is named after Dom Pedro IV, a former king of Portugal and the first Emperor of Brazil. At its center stands a statue of Dom Pedro IV, majestically looking over the square. The statue rests atop a monumental column, surrounded by four allegorical figures representing Justice, Wisdom, Strength, and Moderation, virtues attributed to the king.",
                "Rossio is also home to the grand National Theatre, or Teatro Nacional D. Maria II, a neoclassical masterpiece that dominates the northern side of the square. The theater has a rich history and has hosted countless performances since its inauguration in 1846. The square itself has been a gathering place for locals and tourists alike for centuries, serving as a site for markets, celebrations, and political demonstrations.",
                "Surrounding the square, you'll find an array of charming cafes, traditional Portuguese shops, and stunning Baroque fountains, making it a perfect spot to relax and people-watch. The energy of Rossio Square, combined with its historical significance and architectural beauty, makes it a must-visit destination for anyone exploring the vibrant city of Lisbon."]}
            url="https://www.google.com/maps/place/Pra%C3%A7a+Dom+Pedro+IV,+Lisboa,+Portugal/@38.7138802,-9.1416313,17z/data=!3m1!4b1!4m6!3m5!1s0xd1933875a6e7b17:0x838d6cf838696382!8m2!3d38.7138802!4d-9.139051!16zL20vMGdoajJm?entry=ttu"
            />

        <Place
            name="Elevador de Santa Justa"
            t="Santa Justa Lift"
            image="/elevador.jpg"
            shortDescription={["A short walk from Rossio Square, this iconic iron elevator offers panoramic views of Lisbon. You can take the lift up and enjoy the view over the city, including the ruins of the Carmo Convent."]}
            description={["The Elevador de Santa Justa, also known as the Santa Justa Lift, is an iconic iron elevator in the heart of Lisbon, Portugal. Constructed in the early 20th century, this neo-Gothic marvel stands 45 meters tall and is a testament to the ingenuity and architectural prowess of its designer, Raoul Mesnier du Ponsard, a disciple of the renowned Gustave Eiffel.",
                "The lift was built to connect the lower streets of Baixa with the higher Carmo Square, offering a practical solution to the city's hilly terrain. Today, it serves not only as a mode of transportation but also as a popular tourist attraction, offering breathtaking panoramic views of Lisbon's skyline. From the top, visitors can admire the beautiful expanse of the Tagus River, the sprawling red roofs of the city, and significant landmarks like the Castelo de São Jorge and the Carmo Convent ruins.",
                "The Santa Justa Lift is constructed entirely from wrought iron, adorned with elegant filigree details, making it a striking example of industrial design fused with artistic elements. Its cabins, initially powered by steam and later converted to electric, are lined with polished wood, creating a vintage atmosphere.",
                "A ride on the lift transports you back in time, offering a unique glimpse into Lisbon's historical and architectural heritage. The top platform provides an unparalleled vantage point, especially at sunset when the city is bathed in a warm golden glow. The lift's central location makes it a perfect starting point for exploring nearby attractions, including the bustling streets of Baixa, the vibrant Rossio Square, and the tranquil Chiado district. Whether you're a history buff, architecture enthusiast, or simply looking for a stunning view, the Santa Justa Lift is an unmissable experience in Lisbon."]}
            url="https://www.google.com/maps/place/Santa+Justa+Lift/@38.7138802,-9.1416313,17z/data=!4m6!3m5!1s0xd193478b78a8d2f:0xe1147c62e070697c!8m2!3d38.7121301!4d-9.1394297!16zL20vMDYydGw1?entry=ttu"
            />

        <Place
            name="Convento do Carmo"
            t="Carmo Convent"
            image="/convento.jpg"
            shortDescription={["Right next to the Santa Justa Lift, this Gothic convent is partially ruined from the 1755 earthquake, but its open-air arches and fascinating archaeological museum are well worth a visit."]}
            description={["The Convento do Carmo, or Carmo Convent, is one of Lisbon's most evocative historical landmarks, known for its hauntingly beautiful ruins and rich history. Situated in the heart of the city, near the Santa Justa Lift, the convent stands as a poignant reminder of the devastating 1755 earthquake that dramatically altered Lisbon's landscape.",
                "Originally built in the late 14th century by Nuno Álvares Pereira, a nobleman and military commander, the convent was one of the largest and most important Gothic buildings in Lisbon. Its design featured an impressive nave and intricate arches, showcasing the grandeur of medieval Portuguese architecture. However, the catastrophic earthquake of 1755, followed by a fire, left much of the structure in ruins. Today, the open-air roofless nave, with its skeletal arches reaching towards the sky, provides a stark and moving atmosphere that captures the imagination of visitors.",
                "Despite the destruction, the convent has been partially restored and transformed into an archaeological museum, housing a fascinating collection of artifacts. Visitors can explore exhibits that include ancient tombstones, pre-Columbian pottery, and even the mummified remains of a Peruvian child. The museum's collection offers a unique glimpse into Portugal's extensive history and cultural exchanges.",
                "The convent's location also provides a serene escape from the city's hustle and bustle. Its peaceful setting, combined with the haunting beauty of the ruins, makes it a popular spot for reflection and photography. The Carmo Convent is not just a relic of the past but a vibrant part of Lisbon's cultural life, hosting concerts and events in its ethereal, open-air space. Whether you're exploring the historical artifacts or simply soaking in the atmosphere, the Carmo Convent is a must-visit site that offers a unique perspective on Lisbon's storied past."]}
            url="https://www.google.com/maps/place/Carmo+Convent/@38.7123621,-9.1578052,15z/data=!3m1!5s0xd19347f4bd8b7d7:0xd780cc121205771!4m6!3m5!1s0xd19347f372ec63f:0x32d7f56592e02cef!8m2!3d38.7120383!4d-9.1406129!16zL20vMGdxNG41?entry=ttu"
            />

        <Place
            name="Baixa e Rua Augusta"
            t="Low Area + Augusta Rd"
            image="/baixa.jpg"
            shortDescription={[
                "Discover the vibrant Baixa district, the heart of Lisbon's downtown area. Stroll down Rua Augusta, a bustling pedestrian avenue lined with historic arcades, stylish shops, charming cafes, and lively street performers. This energetic street leads you directly to the grand Praça do Comércio, an impressive riverside square that reflects Lisbon's rich maritime heritage."
            ]}
            description={[
                "Baixa, meaning 'low' in Portuguese, is the city's central business district, meticulously rebuilt in the early 19th century after the devastating 1755 earthquake. The area is characterized by its grand neoclassical architecture and wide, grid-like streets, designed to provide a sense of order and space in the aftermath of the disaster. This urban renewal was spearheaded by the Marquês de Pombal, a key figure in Lisbon's recovery, whose vision shaped the modern cityscape we see today.",
                "Rua Augusta, the main thoroughfare of Baixa, is a lively pedestrian street that embodies the spirit of Lisbon. It is flanked by elegant 18th-century buildings and arcades, which house a variety of shops, cafes, and eateries. The street's design is marked by its striking triumphal arch, the Arco da Rua Augusta, which offers a gateway to the historic square, Praça do Comércio. This monumental arch is adorned with sculptures and provides panoramic views of the square and the Tagus River.",
                "Praça do Comércio, or Commerce Square, is one of Lisbon's largest and most majestic squares. It was once the site of the royal palace before the 1755 earthquake, and today it serves as a focal point for the city's cultural and social activities. The square is bordered by impressive yellow and white neoclassical buildings, including the former customs house and the elegant arcades of the Rua Augusta. The open space of the square offers stunning views of the Tagus River and the iconic Ponte 25 de Abril bridge in the distance.",
                "Visiting Baixa and Rua Augusta provides a rich blend of historical significance and modern vibrancy. The area's blend of grand architecture, lively street life, and historic landmarks offers a compelling glimpse into Lisbon's past and present. Whether you're shopping along Rua Augusta or relaxing by the river in Praça do Comércio, Baixa is a must-visit district that captures the essence of Lisbon's enduring charm."
            ]}
            url="https://www.google.com/maps/place/Baixa+de+Lisboa,+1100-422+Lisbon,+Portugal/@38.7123621,-9.1578052,15z/data=!3m1!4b1!4m6!3m5!1s0xd19347aa9819715:0xb58b62b103a27cd1!8m2!3d38.7123643!4d-9.1383428!16zL20vMDdxdF95?entry=ttu"
        />

        <h1 className="text-3xl font-bold">Restaurant</h1>

        <Restaurant
            name="Casa Tradição"
            t="Traditional House"
            image="/casatradicao.jpg"
            description={[
                "We have a table booked for 7:30pm at this beautifully local restaurant in the Alfama district which serves contemporary Portuguese cuisine.",
                "Casa Tradição is marked #50 of 4,479 restaurants in Lisbon with a rating of 5.0 of 181 reviews. Prices range from £34-68."
            ]}
            restaurantUrl="https://casatradicao.pt/"
            url="https://www.google.com/maps/place/Baixa+de+Lisboa,+1100-422+Lisbon,+Portugal/@38.7123621,-9.1578052,15z/data=!3m1!4b1!4m6!3m5!1s0xd19347aa9819715:0xb58b62b103a27cd1!8m2!3d38.7123643!4d-9.1383428!16zL20vMDdxdF95?entry=ttu"
        />
      </div>      
    </>
  );
}
