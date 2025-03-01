"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PopupBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const handleClick = () => {
    setIsVisible(false);
    router.push("/sales");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-screen">
      <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-lg w-full text-center">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1"
        >
          ✕
        </button>
        <Image
          src="/prelaunch_1_cover.png"
          alt="The Royale Elegance"
          width={500}
          height={300}
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
