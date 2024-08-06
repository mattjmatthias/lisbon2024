import Place from "./place";
import Restaurant from "./restaurant";
import Header from "./header";

export default function Day3() {
  return (
    <>
      <Header name="WEDNESDAY" t="QUATRO-FEIRA" tag="wednesday" image="/pena-header.jpg"/>
      <div className="flex flex-col p-8">
        <div>
          <p>Day 3 we&apos;re off to visit the beautiful sights of Sintra, both the castles and the town below, followed by a Michelin-starred meal at 2Monkeys.</p>
          <p className="mt-4">We start by getting a train from the nearby Rossio station.</p>
        </div>
        <Place
          name="Palácio da Pena"
          t="Pena Palace"
          image="/pena.jpg"
          shortDescription={[
            "One of Portugal's most iconic landmarks, this colorful palace sits atop a hill in Sintra. The architecture is an eclectic mix of styles, and the views from the palace and its surrounding gardens are spectacular.",
          ]}
          description={[
            "The Palácio da Pena, perched on a hilltop in Sintra, is a vivid representation of 19th-century Romanticism in architecture. Commissioned by King Ferdinand II, the palace blends Gothic, Manueline, Moorish, and Renaissance styles into a singularly unique structure that seems to have emerged from a fairytale.",
            "Constructed between 1842 and 1854, Pena Palace features a striking color palette, including deep reds, yellows, and blues, which make it stand out against the backdrop of lush, forested hills. The palace's exterior is adorned with turrets, crenellations, and elaborate carvings, while its interiors are equally opulent, showcasing lavishly decorated rooms and intricate furniture.",
            "The surrounding parkland is a botanical haven, designed with romantic pathways, hidden grottos, and exotic plant species. Visitors can wander through the vast gardens, explore the nearby Moorish Castle, or take in panoramic views from the palace's terraces. The blend of architectural styles and the stunning natural setting make Pena Palace a must-see destination in Portugal, offering a glimpse into the opulence and imagination of 19th-century royalty.",
            "Whether you're interested in history, architecture, or simply want to enjoy breathtaking scenery, Pena Palace provides a memorable experience that captures the enchanting essence of Sintra.",
          ]}
          url="https://www.google.com/maps/place/Pala%C3%ADcio+da+Pena/@38.7870298,-9.3902822,17z/data=!3m1!4b1!4m6!3m5!1s0xd1933878b8d1db:0x5f90e5505f76a12f!8m2!3d38.7870298!4d-9.3880935!16zL20vMDJ4dTc?entry=ttu"
        />

        <Place
          name="Quinta da Regaleira"
          t="Regaleira Farm"
          image="/quinta.jpg"
          shortDescription={[
            "An enchanting estate near Sintra, Quinta da Regaleira is renowned for its mystical gardens, elaborate architecture, and intriguing symbolism. The estate's highlights include the Initiation Well and the lush, otherworldly gardens.",
          ]}
          description={[
            "Quinta da Regaleira, located in the heart of Sintra, is a captivating estate famous for its enigmatic architecture and lush gardens. Designed by the Italian architect Luigi Manini in the early 20th century, the estate combines Gothic, Renaissance, and Manueline styles to create a whimsical and mystical atmosphere.",
            "The estate is renowned for its elaborate gardens, which feature hidden grottoes, ornate fountains, and labyrinthine pathways. Among its most famous attractions is the Initiation Well, a spiraling subterranean tower that descends 27 meters into the earth, symbolizing a journey into the mysteries of the soul. The well is surrounded by a network of tunnels and chambers, adding to the estate's aura of mystique.",
            "The main mansion, with its intricate carvings and eclectic design, complements the magical quality of the gardens. The interior of the mansion is equally impressive, featuring grand halls, ornate ceilings, and period furnishings that reflect the opulence of the era.",
            "Quinta da Regaleira is not just a visual feast but also a place steeped in symbolism and history, with connections to the esoteric traditions and secret societies of the time. A visit to this estate provides a unique blend of architectural beauty, historical intrigue, and natural splendor, making it a standout attraction in Sintra.",
          ]}
          url="https://www.google.com/maps/place/Quinta+da+Regaleira/@38.797594,-9.388538,17z/data=!3m1!4b1!4m6!3m5!1s0xd1933878e638c65:0x2898e72d2b1c574!8m2!3d38.797594!4d-9.3863493!16zL20vMDIydGQ?entry=ttu"
        />

        <Place
          name="Castelo dos Mouros"
          t="Moorish Castle"
          image="/castelo.jpg"
          shortDescription={[
            "Explore this ancient Moorish fortress, which offers panoramic views of Sintra and the surrounding countryside. The castle’s ruins provide a dramatic and historic atmosphere.",
          ]}
          description={[
            "The Castelo dos Mouros, or Moorish Castle, is a medieval fortress situated on a hilltop overlooking Sintra. Built by the Moors in the 8th century, the castle played a strategic role in the region’s history and offers an evocative glimpse into Portugal’s medieval past.",
            "The castle is characterised by its rugged stone walls, watchtowers, and battlements, which were designed to defend the area from invaders. Walking along the castle’s ramparts provides stunning panoramic views of Sintra's picturesque landscape, including the nearby Pena Palace and the lush Sintra mountains.",
            "Although largely in ruins, the castle’s imposing structure and historical significance make it a fascinating site to explore. The atmospheric setting is enhanced by the castle's rugged terrain and its dramatic location atop a forested hill.",
            "Visiting the Moorish Castle offers not only a sense of historical grandeur but also an opportunity to immerse yourself in the natural beauty of Sintra. The combination of ancient ruins and spectacular views makes the castle a must-visit destination for history enthusiasts and nature lovers alike.",
          ]}
          url="https://www.google.com/maps/place/Castelo+dos+Mouros/@38.792215,-9.388852,17z/data=!3m1!4b1!4m6!3m5!1s0xd1933878e1f64eb:0x23614b0f18a2e4a!8m2!3d38.792215!4d-9.3866633!16zL20vMDI0NmM?entry=ttu"
        />

        <Place
          name="Sintra Town"
          t=""
          image="/sintra.jpg"
          shortDescription={[
            "After visiting the main attractions, take some time to explore the charming town of Sintra itself. It's full of quaint streets, shops, and cafes where you can enjoy local delicacies.",
          ]}
          description={[
            "Sintra, a picturesque town nestled in the hills of Portugal, offers a charming escape with its narrow streets, colorful buildings, and vibrant atmosphere. This UNESCO World Heritage site is renowned for its historic estates, lush gardens, and stunning architecture, making it a popular destination for travelers seeking both cultural and natural beauty.",
            "The town’s historical center is filled with quaint shops, traditional cafes, and delightful restaurants where you can savor local delicacies such as Travesseiros and Queijadas. The lively streets are perfect for a leisurely stroll, with each turn revealing hidden gems and picturesque views.",
            "Sintra’s unique blend of architectural styles, from Moorish to Gothic, is showcased in its many landmarks, including the extravagant Pena Palace and the enigmatic Quinta da Regaleira. Beyond these famous sites, the town itself is a treasure trove of charming squares, historic buildings, and serene parks.",
            "Exploring Sintra provides a sense of stepping back in time, with its rich cultural heritage and stunning surroundings offering an unforgettable experience. Whether you're wandering through the local markets, relaxing in a cozy cafe, or admiring the town's beautiful architecture, Sintra's enchanting atmosphere makes it a destination not to be missed.",
          ]}
          url="https://www.google.com/maps/place/Sintra,+Portugal/@38.798387,-9.388177,13z/data=!3m1!4b1!4m6!3m5!1s0xd193387d8129d89:0x700f01302d600b8!8m2!3d38.798387!4d-9.386281!16zL20vMGd0MXB?entry=ttu"
        />

        <h1 className="text-3xl font-bold">Restaurant</h1>

        <Restaurant
          name="2Monkeys"
          t=""
          image="/2monkey.jpg"
          description={[
             "We have a table booked for 7:30pm at 2Monkeys, a Michelin-starred gem located in the historic Torel Palace in Lisbon. This restaurant offers contemporary Portuguese cuisine with a creative twist, set in a sophisticated and elegant atmosphere."
          ]}
          restaurantUrl="https://2monkeys.com.pt/"
          url="https://www.google.com/maps/place/2Monkeys+Restaurant/@38.7184707,-9.1427093,892m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd19334f9246e1b1:0x9d284e2b28091778!8m2!3d38.7184707!4d-9.140129!16s%2Fg%2F11jywz9857?entry=ttu"
        />
      </div>
    </>
  );
}
