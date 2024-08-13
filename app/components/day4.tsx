import Place from "./place";
import Restaurant from "./restaurant";
import Header from "./header";

export default function Day4() {
  return (
    <>
      <Header name="THURSDAY" t="QUINTO-FEIRA" tag="thursday" image="/torre-header.jpg"/>

      <div className="flex flex-col p-8">
        <div>
          <p>Day 4 we start off early to get to Belem before the crowds and queues at the Belem Pasteis shop. For lunch we go to the Timeout Food Hall, and spend the afternoon around the Alfama and its views.</p>
          <p className="mt-4">For food we have a table at a restaurant near the Santa Justa Lift where there&apos;ll be live Fado music.</p>
          <p className="mt-4">We can reach Belém easily by tram (tram 15 from the square in front of our apartment, Praça da Figueira, or Cais do Sodré) or by train from Cais do Sodré station. The journey takes about 20-30 minutes.</p>
        </div>

        <Place
          name="Torre de Belém"
          t="Belém Tower"
          image="/torre.jpg"
          shortDescription={[
              "A UNESCO World Heritage site, this historic tower was built in the early 16th century and is a symbol of Portugal's Age of Discoveries. It's a beautiful spot to explore and offers great views of the Tagus River.",
          ]}
          description={[
              "The Torre de Belém, or Belém Tower, is a striking fortress that stands as a testament to Portugal's maritime history. Completed in 1520, this Manueline-style tower was originally built to guard the entrance to the Tagus River and served as a ceremonial gateway for explorers embarking on their voyages.",
              "Its intricate stonework features maritime motifs, including ropes, anchors, and armillary spheres, reflecting the age of exploration. The tower’s crenellated battlements, ornate windows, and impressive turret provide both historical and architectural significance.",
              "Visitors can explore the tower's various levels, including the bastion, which offers panoramic views of the river and the surrounding area. The interior houses displays that delve into the tower’s history and its role in Portugal’s seafaring past.",
              "Set against the backdrop of the Tagus River, the Torre de Belém not only offers a glimpse into the country's rich history but also provides a picturesque setting for visitors. Its role in Portugal’s Age of Discoveries makes it an essential stop for history enthusiasts and anyone interested in the country’s maritime heritage."
          ]}
          url="https://maps.app.goo.gl/R4zv5YMADUCxGdc36?g_st=com.google.maps.preview.copy"
        />

        <Place
            name="Mosteiro dos Jerónimos"
            t="Jerónimos Monastery"
            image="/mosteiro.jpg"
            shortDescription={[
                "Another UNESCO World Heritage site, this stunning monastery is a masterpiece of Manueline architecture. You can visit the ornate church and cloisters, which are both breathtakingly beautiful.",
            ]}
            description={[
                "The Mosteiro dos Jerónimos, or Jerónimos Monastery, is a prime example of Manueline architecture and a testament to Portugal’s maritime golden age. Located in the Belém district of Lisbon, this monumental building was constructed in the late 15th and early 16th centuries to honor Vasco da Gama's successful voyage to India.",
                "The monastery’s intricate façade and elaborate cloisters showcase the rich decorative style unique to the Manueline period, featuring maritime motifs and intricate stonework. The church, with its grand nave and stunning vaulted ceilings, is equally impressive and houses the tomb of Vasco da Gama, adding to the site’s historical significance.",
                "The serene and ornate cloisters, with their beautifully carved columns and arches, provide a tranquil space for reflection and exploration. The monastery is not only a marvel of architectural design but also a vital piece of Portugal’s cultural heritage.",
                "As a UNESCO World Heritage site, the Jerónimos Monastery offers a deep dive into Portugal’s rich history and artistic legacy, making it a must-visit landmark for anyone interested in architecture, history, or the Age of Exploration."
            ]}
            url="https://maps.app.goo.gl/Z8s5zRBanDkUCFqu7?g_st=com.google.maps.preview.copy"
        />

        <Place
            name="Padrão dos Descobrimentos"
            t="Monument to the Discoveries"
            image="/padrao.jpg"
            shortDescription={[
                "This impressive monument celebrates the Portuguese explorers of the 15th and 16th centuries. It's located along the riverfront, and you can climb to the top for a panoramic view of Belém and the river.",
            ]}
            description={[
                "The Padrão dos Descobrimentos, or Monument to the Discoveries, stands proudly along the Tagus River in Lisbon’s Belém district. Erected in 1960 to commemorate the 500th anniversary of the death of Henry the Navigator, this striking monument honors the Portuguese Age of Discovery and its influential explorers.",
                "Designed by sculptor Leopoldo de Almeida, the monument features a dramatic array of historical figures, including explorers, cartographers, and missionaries, all extending forward as if navigating the seas. The monument's design reflects the grandeur of Portugal’s maritime history and its significant impact on global exploration.",
                "Visitors can ascend to the top of the monument for breathtaking panoramic views of Belém, the river, and the iconic nearby landmarks such as the Jerónimos Monastery and the Belém Tower. The surrounding area, with its expansive gardens and cultural attractions, offers a rich historical context and a picturesque setting.",
                "The Padrão dos Descobrimentos is not only an architectural marvel but also a powerful symbol of Portugal’s enduring legacy in world exploration. Its location along the riverfront provides a fitting backdrop for reflecting on the country’s illustrious maritime past."
            ]}
            url="https://maps.app.goo.gl/x6b1vCt2faWesVGP8?g_st=com.google.maps.preview.copy"
        />


        <Restaurant
          name="Pastéis de Belém"
          t="Belem Custard Tarts"
          image="/pasteis.jpg"
          description={[
             "No visit to Belém is complete without trying the famous custard tarts from Pastéis de Belém. This historic pastry shop has been serving these delicious treats since 1837. Expect a line, but it's worth the wait!"
          ]}
          restaurantUrl="https://pasteisdebelem.pt/"
          url="https://maps.app.goo.gl/kswXCNs2LiKBFo9U9?g_st=com.google.maps.preview.copy"
          />

        <Restaurant
          name="MAAT"
          t="Museum of Art, Architecture and Technology"
          image="/maat.jpg"
          description={[
            "For a modern contrast, visit the MAAT. The building itself is an architectural marvel, and it houses contemporary exhibitions focusing on art, architecture, and technology.",
          ]}
          restaurantUrl="https://www.maat.pt/pt"
          url="https://maps.app.goo.gl/6w1d5Qqtx1Kbxfep6?g_st=com.google.maps.preview.copy"
        />

        <h1 className="text-3xl font-bold">Lunch</h1>

        <Restaurant
          name="Mercado da Ribeira"
          t="Time Out Market"
          image="/timeout.jpg"
          description={[
             "For lunch, we're heading to the nearby Mercado da Ribeira, also known as Time Out Market. It's about a 15-minute walk from Praça do Comércio. This food hall offers a variety of stalls with delicious Portuguese and international cuisine. It's a great place to sample local dishes like bacalhau (codfish), and more."
          ]}
          restaurantUrl="https://www.timeoutmarket.com/lisboa"
          url="https://maps.app.goo.gl/z77dvB54zAr54TWi7?g_st=com.google.maps.preview.copy"
        />
        
        <h1 className="text-3xl font-bold">Afternoon</h1>

        <Place
            name="Alfama District"
            t=""
            image="/alfama.jpg"
            shortDescription={[
                "After lunch, we'll take a stroll or a short tram ride to Alfama, Lisbon's oldest district. This charming neighborhood is known for its narrow, winding streets, traditional Fado music, and historic buildings. We can explore the São Jorge Castle for stunning views over the city or visit the Lisbon Cathedral (Sé).",
            ]}
            description={[
                "The Alfama District, one of Lisbon’s most historic and picturesque neighborhoods, is a maze of narrow streets and alleys that offer a glimpse into the city’s past. Known for its vibrant Fado music and traditional Portuguese charm, Alfama is home to some of Lisbon's oldest buildings and landmarks.",
                "A highlight of the district is the São Jorge Castle, perched on a hilltop, which provides panoramic views over the city and the Tagus River. The castle's ancient walls and towers tell stories of Lisbon’s medieval history and offer a perfect spot for both daytime and sunset vistas.",
                "Nearby, the Lisbon Cathedral (Sé de Lisboa) stands as a testament to the city’s rich architectural heritage. Dating back to the 12th century, this imposing cathedral features a mix of Romanesque and Gothic styles, making it a fascinating site for history and architecture enthusiasts.",
                "Wandering through Alfama, you'll encounter traditional shops, cozy cafes, and beautiful azulejos, the iconic Portuguese tiles that adorn many buildings. The district’s lively atmosphere and historic charm make it a must-visit for anyone wanting to experience the authentic essence of Lisbon."
            ]}
            url="https://maps.app.goo.gl/4od3dt5RYz2pznJr8?g_st=com.google.maps.preview.copy"
        />

        <Place
            name="Miradouro de Santa Luzia"
            t="Santa Luzia Lookout"
            image="/miradouro.jpg"
            shortDescription={[
                "We can walk up to this scenic viewpoint for another fantastic view of the city and the river. The tiles and bougainvillea make it a beautiful spot for photos.",
            ]}
            description={[
                "Miradouro de Santa Luzia, perched in the Alfama district, offers one of Lisbon's most enchanting viewpoints. From this picturesque terrace, you can gaze over the red-tiled rooftops of the old city and enjoy sweeping views of the Tagus River. The space is adorned with charming azulejos, traditional Portuguese tiles that depict historical scenes, and lush bougainvillea that adds a splash of color.",
                "The lookout provides a serene escape and a perfect vantage point for capturing stunning photographs of Lisbon's iconic landmarks. It's a popular spot for both tourists and locals seeking to relax and take in the panoramic vistas. Nearby, you’ll find quaint cafes and narrow streets that embody the essence of Alfama’s old-world charm.",
                "Whether you're strolling through the Alfama district or simply enjoying a moment of tranquility, Miradouro de Santa Luzia offers a memorable experience with its blend of scenic beauty and cultural heritage."
            ]}
            url="https://maps.app.goo.gl/Mpo4mscSr3n9fiyLA?g_st=com.google.maps.preview.copy"
        />

        <Place
            name="Tram 28 Ride"
            t=""
            image="/tram.jpg"
            shortDescription={[
                "If time allows, we'll hop on the famous Tram 28, which passes through many of Lisbon's historic districts, including Graça, Alfama, and Baixa. It's a great way to see the city's sights and experience a bit of local life.",
            ]}
            description={[
                "The Tram 28 ride is a quintessential Lisbon experience, offering a charming and nostalgic way to explore the city. This iconic yellow tram meanders through historic neighborhoods such as Graça, Alfama, and Baixa, providing a picturesque journey through Lisbon's rich tapestry of history and culture.",
                "As the tram clatters along its tracks, you'll pass by stunning architectural landmarks, quaint streets, and bustling squares. The ride captures the essence of Lisbon’s character, with its narrow streets, colorful facades, and lively atmosphere. It's a delightful way to immerse yourself in the city's vibrant spirit while enjoying unique vantage points that are often missed on foot.",
                "Be sure to keep your camera ready, as Tram 28 offers numerous photo opportunities of Lisbon's iconic landmarks and hidden gems. Whether you're a first-time visitor or a seasoned traveler, this classic ride through Lisbon’s historical heart is an unforgettable part of the city’s charm."
            ]}
            url="https://maps.app.goo.gl/6Kq7pu1LiDMKnAnh6?g_st=com.google.maps.preview.copy"
        />
        
        <h1 className="text-3xl font-bold">Restaurant</h1>

        <Restaurant
          name="Restaurante Elevador"
          t=""
          image="/restaurant-elevador.jpg"
          description={[
             "We have a 7:30pm table booked at Restaurante Elevador (2 minutes from our apartment), and also a special 50% discount on the meal (excluding drinks and preset menus). Thursday evening they have live Fado music playing for the authentic Lisbon experience."
          ]}
          restaurantUrl="https://restauranteelevador.pt/en/"
          url="https://maps.app.goo.gl/LDNkR44m6xSpMpmdA?g_st=com.google.maps.preview.copy"
        />
      </div>
    </>
  );
}
