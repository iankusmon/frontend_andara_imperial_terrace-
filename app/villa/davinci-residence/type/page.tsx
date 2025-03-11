"use client"

import React, { useState, useEffect, useRef } from "react";
import ShareModal from "../../../../components/ShareModal"; // sesuaikan path jika diperlukan
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const DavinciResidence = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [referralCode, setReferralCode] = useState("");

  useEffect(() => {
    const referral = localStorage.getItem("referralCode") || "";
    setReferralCode(referral);
  }, []);

  const handleOpenShareModal = () => {
    setIsShareModalOpen(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
  };

  const sliderImages = [
    "/davinci_1_1.png",
    "/davinci_2_1.png",
    "/davinci_3_1.png",
    "/davinci_4_1.png",
    "/davinci_5_1.png",
    "/davinci_6_1.png",
  ];

  const totalUnits = 10;
  const availableUnits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.autoplay = true;
      video.play().catch(error => console.error("Video play failed", error));
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gray-100 pt-20">
      {/* Video Section */}
      <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/davinci_vidio_2.mp4"
          autoPlay
          loop
          playsInline
        />
        {/* Tombol share dengan icon di pojok kanan atas */}
        <button
          onClick={handleOpenShareModal}
          className="absolute top-5 right-5 border rounded-full p-2 bg-white shadow hover:shadow-md transition z-10"
        >
          <Image src="/share.svg" alt="Share" width={24} height={24} />
        </button>
        {/* ShareModal diposisikan di atas dengan properti z-index */}
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={handleCloseShareModal}
          message="Bagikan Kemewahan Villa Type Davinci Residence"
          shareLink="/sign-up/customer"
          referralCode={referralCode}
        />
      </div>

      {/* Image Slider */}
      <div className="w-full py-8">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Davinci Residence ${index + 1}`}
                width={1200}
                height={600}
                className="w-full rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Narasi */}
      <div className="mt-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">Villa Da Vinci Residence</h1>
        <p className="mt-4 text-sm sm:text-lg text-gray-700">
          Villa Da Vinci Residence bukan hanya menawarkan keindahan dan kenyamanan sebagai tempat tinggal,
          tetapi juga peluang investasi yang luar biasa. Dengan desain elegan ala Eropa klasik dan fasilitas
          sekelas resor hotel bintang 5, villa ini menjadi pilihan terbaik untuk investasi properti yang
          menjanjikan profit tinggi dan manfaat jangka panjang.
        </p>
      </div>

      {/* Available Units Section */}
      <picture>
        <source srcSet="/masterplan_kavling.png" media="(min-width: 768px)" />
        <img
          src="/masterplan_kavling.png"
          alt="KPR Andara Imperial Terrace"
          className="w-full mb-4 pt-40"
        />
      </picture>
      <h2 className="text-center text-2xl font-bold text-gray-800 my-4">Available Units</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center p-4">
        {Array.from({ length: totalUnits }, (_, i) => i + 1).map((unit) => (
          <Link
            key={unit}
            href={`/villa/davinci-residence/unit/${unit}`}
            className={`p-4 rounded-lg shadow-lg font-bold transition ${
              availableUnits.includes(unit)
                ? "bg-gold text-white hover:bg-black"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <p className="text-lg">Unit DV.{unit}</p>
            <p className="text-sm">
              {availableUnits.includes(unit) ? "Available" : "Sold Out"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DavinciResidence;
