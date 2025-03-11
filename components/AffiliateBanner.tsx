'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ShareModal from "./ShareModal"; // sesuaikan path jika diperlukan

const AffiliateBanner = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
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

  return (
    <div style={styles.affiliateBanner} className="mb-20 mt-20">
      {/* Container dengan posisi relative agar tombol absolute berpatokan pada container ini */}
      <div className="relative">
        <a href="/sign-up/agent-affiliate">
          <img
            src="/slide3.png"
            alt="Affiliate Registration"
            style={styles.bannerImage}
          />
        </a>
        {/* Tombol share dengan icon di pojok kanan atas */}
        <button
          onClick={handleOpenShareModal}
          className="absolute top-5 right-5 border rounded-full p-2 bg-white shadow hover:shadow-md transition z-10"
        >
          <Image src="/share.svg" alt="Share" width={24} height={24} />
        </button>
      </div>
      {/* ShareModal diletakkan di luar container gambar */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={handleCloseShareModal}
        message="Yuk Join Agent Affiliate"
        shareLink="/sign-up/agent-affiliate"
        referralCode={referralCode}
      />
    </div>
  );
};

const styles = {
  affiliateBanner: {
    width: "100vw",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
  },
  bannerImage: {
    width: "100%",
    maxWidth: "1920px",
    height: "auto",
  },
};

export default AffiliateBanner;
