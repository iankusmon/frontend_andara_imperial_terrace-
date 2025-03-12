"use client";
// components/VideoSliderDesktop.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ShareModal from "./ShareModal"; // sesuaikan path jika diperlukan
import Slider from "react-slick";
import YouTube from "react-youtube";

// Array video ID dari YouTube
const videoIds = [
  "PMGUv02vdvQ", // Ganti dengan ID video YouTube
  "klVdZCG8Z-4", // Ganti dengan ID video YouTube
  "ss94riPTPVs", // Ganti dengan ID video YouTube
  "PMGUv02vdvQ", // Ganti dengan ID video YouTube
  "bMBFjLkF0Hg",
  "e8BsSTGbfJM",
  "-olJWuoHTNc?"
];

const VideoSliderDesktop = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [referralCode, setReferralCode] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token");

    // const referralCode = localStorage.getItem("referralCode") ?? "";
    const referralCode = localStorage.getItem("referralCode") || ""; // Jika null, atur menjadi string kosong
    setReferralCode(referralCode);
  }, []);

  const handleOpenShareModal = () => {
    setIsShareModalOpen(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Menampilkan 2 video untuk desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Setiap 3 detik otomatis slide
  };

  return (
    <div className="video-slider-desktop">
      <Slider {...settings}>
        {videoIds.map((id, index) => (
         <div key={index} className="video-slide relative">
         <YouTube videoId={id} opts={{ width: "100%", height: "300px" }} />
         {/* Tombol share di pojok kanan atas tiap slide */}
         <button
           onClick={handleOpenShareModal}
           className="absolute top-10 right-10 border rounded-full p-2 bg-white shadow hover:shadow-md transition z-10"
         >
           <Image src="/share.svg" alt="Share" width={24} height={24} />
         </button>
       </div>
        ))}
      </Slider>
      {/* ShareModal diletakkan di luar slider agar hanya ada satu modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={handleCloseShareModal}
        message="Bagikan video- video Youtube Pilihan AIT"
        shareLink="/sign-up/customer"
        referralCode={referralCode}
      />
    </div>
  );
};

export default VideoSliderDesktop;
