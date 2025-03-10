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
      <div className={ isMobile? "relative bg-white p-4 mt-10 rounded-lg shadow-lg max-w-sm w-full text-center" : "relative bg-white p-4 rounded-lg shadow-lg max-w-md w-full text-center" }>
        <button
          onClick={() => setIsVisible(false)}
          className={ isMobile? "absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1" : "absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1" }>
          ✕
        </button>
        <Image
          src={isMobile ? "/prelaunch_1_cover.png" : "/prelaunch_1_cover.png"}
          alt="The Royale Elegance"
          width={isMobile ? 350 : 500}
          height={isMobile ? 200 : 300}
          className="rounded-lg cursor-pointer"
          onClick={handleClick}
        />
        <p className="mt-4 text-gray-800 font-semibold">
          The Royale Elegance adalah tempat di mana kemewahan dan keharmonisan dengan alam bersatu, menciptakan lingkungan yang elegan dan penuh kedamaian.
        </p>
      </div>
    </div>
  );
};

export default PopupBanner;
