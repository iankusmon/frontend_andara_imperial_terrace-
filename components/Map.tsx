'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

interface Location {
  id: number;
  name: string;
  x: number;
  y: number;
  img: string;
}

const desktopLocations = [
  // { id: 1, name: "Colosseum", x: 10, y: 20, img: "/colosseum.jpg" },
  { id: 2, name: "Menara Eiffel", x: 52, y: 22, img: "/eiffel.jpg" },
  { id: 3, name: "Versailles Park", x: 50, y: 24, img: "/versailles.jpg" },
];

const mobileLocations = [
  // { id: 1, name: "Colosseum", x: 15, y: 25, img: "/colosseum.jpg" },
  { id: 2, name: "Menara Eiffel", x: 56, y: 28, img: "/eiffel.jpg" },
  { id: 3, name: "Versailles Park", x: 50, y: 30, img: "/versailles.jpg" },
];

interface MapComponentProps {
  locations: Location[];
  isMobile: boolean;
}

function MapComponent({ locations, isMobile }: MapComponentProps) {
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const handleClick = (loc: Location) => {
    if (isMobile) {
      if (selectedLocation?.id === loc.id) {
        window.location.href = `/lokasi/${loc.id}`;
      } else {
        setSelectedLocation(loc);
      }
    } else {
      window.location.href = `/lokasi/${loc.id}`;
    }
  };

  return (
    <div className="relative w-full h-[80vh]">
      <Image
        src="/siteplan.jpeg"
        alt="Site Plan Andara Imperial Terrace"
        layout="fill"
        objectFit="contain"
      />
      {locations.map((loc) => (
        <div
          key={loc.id}
          className={`absolute bg-red-500 w-4 h-4 rounded-full cursor-pointer transition-transform duration-200 ${isMobile ? '' : 'hover:scale-125'}`}
          style={{ top: `${loc.y}%`, left: `${loc.x}%` }}
          onMouseEnter={() => !isMobile && setHoveredLocation(loc)}
          onMouseLeave={() => !isMobile && setHoveredLocation(null)}
          onClick={() => handleClick(loc)}
        >
          {(hoveredLocation?.id === loc.id || selectedLocation?.id === loc.id) && (
            <div className="absolute bg-white p-2 rounded shadow-lg -top-20 left-1/2 transform -translate-x-1/2 w-40 relative">
              {isMobile && (
                <button
                  className="absolute top-1 right-1 bg-gray-200 rounded-full px-2 py-1 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLocation(null);
                  }}
                >
                  ✕
                </button>
              )}
              <Image src={loc.img} alt={loc.name} width={160} height={90} className="rounded" />
              <p className="text-center mt-2 text-sm font-semibold">{loc.name}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function SiteMap() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <MapComponent locations={isMobile ? mobileLocations : desktopLocations} isMobile={isMobile} />;
}

