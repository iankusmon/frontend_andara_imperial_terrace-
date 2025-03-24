'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ShareModal from "./ShareModal"; // sesuaikan path jika diperlukan

interface Location {
  id: number;
  name: string;
  x: number;
  y: number;
  img: string;
  url: string;
}

const desktopLocations = [
  { id: 2, name: "Menara Eiffel", x: 27.5, y: 32, img: "/eiffel.jpg", url: "/artikel/kawasan-ait" },
  { id: 3, name: "Versailles Park", x: 36, y: 23, img: "/versailles.jpg", url: "/artikel/versailles-park" },
  { id: 4, name: "Davinci Residence", x: 14.5, y: 69, img: "/davinci_residence.png", url: "/villa/davinci-residence/type" },
  { id: 5, name: "Amsterdam Royale", x: 14.5, y: 62, img: "/amsterdam_royale.png", url: "/villa/amsterdam-royal/type" },
  { id: 6, name: "Athena Height", x: 16, y: 56, img: "/athena_height.png", url: "/villa/athena-height/type" }
];

const mobileLocations = [
  { id: 2, name: "Menara Eiffel", x: 50, y: 17, img: "/eiffel.jpg", url: "/artikel/kawasan-ait" },
  { id: 3, name: "Versailles Park", x: 69, y: 11, img: "/versailles.jpg", url: "/artikel/versailles-park" },
  { id: 4, name: "Davinci Residence", x: 20, y: 42, img: "/davinci_residence.png", url: "/villa/davinci-residence/type" },
  { id: 5, name: "Amsterdam Royale", x: 19, y: 38, img: "/amsterdam_royale.png", url: "/villa/amsterdam-royal/type" },
  { id: 6, name: "Athena Height", x: 24, y: 34, img: "/athena_height.png", url: "/villa/athena-height/type" }
];

interface MapComponentProps {
  locations: Location[];
  isMobile: boolean;
}

function MapComponent({ locations, isMobile }: MapComponentProps) {
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareLink, setShareLink] = useState("");

  const [referralCode, setReferralCode] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token");

    // const referralCode = localStorage.getItem("referralCode") ?? "";
    const referralCode = localStorage.getItem("referralCode") || ""; // Jika null, atur menjadi string kosong
    setReferralCode(referralCode);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareLink(`/${window.location.pathname}?referral_code=${referralCode}`);
    }
  }, [referralCode]);

  const handleOpenShareModal = () => {
    setIsShareModalOpen(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
  };

  const handleClick = (loc: Location) => {
    if (isMobile) {
      if (selectedLocation?.id === loc.id) {
        window.location.href = `${loc.url}`;
      } else {
        setSelectedLocation(loc);
      }
    } else {
      window.location.href = `${loc.url}`;
    }
  };

  return (
    <div className="relative w-full h-[75vh] flex flex-col items-center justify-center mt-20 mb-20">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-4">Jelajahi Kawasan AIT Virtual Yuk!</h2>
        {/* Tombol share dengan icon di pojok kanan atas */}
        <button
          onClick={handleOpenShareModal}
          className="absolute top-10 right-5 border rounded-full p-2 bg-white shadow hover:shadow-md transition"
        >
          <Image src="/share.svg" alt="Share" width={24} height={24} />
        </button>

        {/* ShareModal diposisikan di atas dengan properti z-index */}
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={handleCloseShareModal}
          message="Bagikan Keseruan Map Kawasan AIT"
          shareLink={shareLink} // Use the state instead of directly accessing window
          referralCode={referralCode}
        />
      <picture className="w-full max-w-screen-xl w-8xl">
        <source srcSet="/SitePlan_Desktop_3D.png" media="(min-width: 768px)" />
        <img src="/SitePlan_Mobile_3D.png" alt="Sitemap Andara Imperial Terrace" className="w-full object-cover max-w-screen-xl" />
      </picture>
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
