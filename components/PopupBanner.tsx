"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PopupBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsVisible(false);
    router.push("/sales");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 z-50 min-h-screen">
      <div
        className={`relative p-4 rounded-lg shadow-lg text-center bg-white ${
          isMobile ? "mt-20 absolute bottom-0 h-3/8 w-3/4" : "mt-10 max-w-md w-full"
        }`}
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1"
        >
          ✕
        </button>
        <Image
          src="/Prelaunch_2_cover_3.png"
          alt="The Royale Elegance"
          width={isMobile ? 350 : 500}
          height={isMobile ? 200 : 300}
          className="rounded-lg cursor-pointer mx-auto"
          onClick={handleClick}
        />
        <p className={isMobile ? "text-gray-800" : "mt-4 text-gray-800 font-semibold"}>
          The Royale Elegance adalah tempat di mana kemewahan dan keharmonisan dengan alam bersatu, menciptakan lingkungan yang elegan dan penuh kedamaian.
        </p>
      </div>
    </div>
  );
};

export default PopupBanner;
