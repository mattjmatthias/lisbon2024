import Header from "./header";

export default function TravelBack() {

  return (    
    <>
      <Header name="RETURN" t="VOLVER" tag="return" image="/lisbon-header.jpg"/>
      
      <div className="flex flex-col p-8">
        <p className="mb-4">Our return journey is the same as departure in reverse.</p>
        <p className="mb-4">We take the metro from Rossio back to the airport, and once we land in Heathrow, the tube to Romford, where we get the car and head back home.</p>            
      </div>
    </>
  );
}
