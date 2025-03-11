"use client";

import React, { useState, useEffect, useRef } from "react";
import ShareModal from "./ShareModal"; // Sesuaikan path jika diperlukan
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const VideoLanding = () => {

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const referral = localStorage.getItem("referralCode") || "";
    setReferralCode(referral);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((error) => console.error("Video play failed", error));
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(!entry.isIntersecting);
      },
      { threshold: 0.3 } // Jika lebih dari 30% video keluar dari layar, munculkan navbar
    );

    if (video) observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      
      {/* Video Section */}
      <div className="relative w-full h-full sm:h-[400px] md:h-[500px] lg:h-[800px] overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-[800px] object-cover"
          src="/vidio_landing_page2.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Tombol Share */}
        <button
          onClick={() => setIsShareModalOpen(true)}
          className="absolute top-5 right-5 border rounded-full p-2 bg-white shadow hover:shadow-md transition z-10"
        >
          <Image src="/share.svg" alt="Share" width={24} height={24} />
        </button>
        {/* Share Modal */}
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
          message="Bagikan Kemewahan dan Kesempurnaan AIT"
          shareLink="/sign-up/customer"
          referralCode={referralCode}
        />
      </div>

      {/* Tambahkan smooth scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default VideoLanding;
