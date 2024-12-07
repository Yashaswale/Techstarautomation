import React, { useRef, useEffect, useState } from "react";

const cards = [
  { id: 1, name: "COLOUR DETECTION", image: "/Jigs&Fixtures/Colour_Detection.png?height=300&width=400" },
  { id: 2, name: "DUST CLEANING", image: "/Jigs&Fixtures/Dust_Cleaning.png?height=300&width=400" },
  { id: 3, name: "FTM & HOT BATCH MARKING", image: "/Jigs&Fixtures/FTM&HotBatch.png?height=300&width=400" },
  { id: 4, name: "HEAT STACKING FIXTURE", image: "/Jigs&Fixtures/HeatStackingFixture.png?height=300&width=400" },
  { id: 5, name: "IR & CONTINUITY TESTING", image: "/Jigs&Fixtures/IR&Continuity_Testing.png?height=300&width=400" },
  { id: 6, name: "IR & SHORT TESTING", image: "/Jigs&Fixtures/IR&ShortTesting.png?height=300&width=400" },
  { id: 7, name: "KNOB HEIGHT CHECKING", image: "/Jigs&Fixtures/KnobHeightChecking.png?height=300&width=400" },
  { id: 8, name: "PCB CAULKING FIXTURE", image: "/Jigs&Fixtures/PCBClauckingFixture.png?height=300&width=400" },
  { id: 9, name: "SNAP LOCKING FIXTURE", image: "/Jigs&Fixtures/SnapLockingFixture.png?height=300&width=400" },
  { id: 10, name: "VISION TESTING", image: "/Jigs&Fixtures/VisionTesting.png?height=300&width=400" },
  { id: 11, name: "TRIMMING & RIVETING FIXTURE", image: "/Jigs&Fixtures/Trimming&Reviting.png?height=300&width=400" },
];
function Card({ card }) {
  return (
    <div className="relative w-[400px] h-[300px] flex-shrink-0 mx-4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
      <div className="w-full h-3/4 overflow-hidden">
        <img
          src={card.image}
          alt={`Image for ${card.name}`}
          className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="w-full h-1/4 flex justify-center items-center bg-white text-black">
        <h3 className="text-lg font-semibold text-center">{card.name}</h3>
      </div>
    </div>
  );
}

export default function ScrollingCardGrid() {
  const containerRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [duplicatedCards, setDuplicatedCards] = useState([]);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const cardWidth = 400 + 32; // Card width + margin
      const viewportWidth = container.offsetWidth;
      const cardsNeeded = Math.ceil(viewportWidth / cardWidth) + 2;

      const clonedCards = Array.from({ length: cardsNeeded }, () => [...cards])
        .flat()
        .map((card, index) => ({ ...card, uniqueId: `${card.id}-${index}` }));

      setDuplicatedCards(clonedCards);
    }

    const interval = setInterval(() => {
      setTranslateX((prevTranslate) => {
        const containerWidth = cards.length * (400 + 32); // Updated card width
        const resetThreshold = -containerWidth;

        const newTranslate = prevTranslate - 1; // Adjust for slower scrolling
        return newTranslate <= resetThreshold ? 0 : newTranslate;
      });
    }, 16); // ~60 frames per second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 space-y-8 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">Jigs and Fixtures</h2>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ whiteSpace: "nowrap" }}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: "transform 0.016s linear",
          }}
        >
          {duplicatedCards.map((card) => (
            <Card key={card.uniqueId} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
