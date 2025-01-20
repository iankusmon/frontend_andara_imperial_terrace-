'use client'

// components/DayClub.tsx
import React, { useState, useEffect } from 'react';
import VideoSliderMobile from './VideoSliderMobile'; // Versi mobile VideoSlider
import VideoSliderDesktop from './VideoSliderDesktop'; // Versi desktop VideoSlider
import FacilityCardMobile from './FacilityCardMobile'; // Versi mobile FacilityCard
import FacilityCardDesktop from './FacilityCardDesktop'; // Versi desktop FacilityCard

// Data fasilitas Day Club
const facilities = [
  {
    title: "Swimming Pool",
    description: "Enjoy our refreshing outdoor pool with a stunning view.",
    imageUrl: "https://asset-2.tstatic.net/travel/foto/bank/images/omnia-dayclub-bali_20180926_095344.jpg", // Gambar fasilitas (ganti dengan URL gambar nyata)
  },
  {
    title: "Fitness Center",
    description: "State-of-the-art gym to keep you fit during your stay.",
    imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/27/60/7b/75/ambiance.jpg",
  },
  {
    title: "Lounge Area",
    description: "Relax and socialize in our comfortable lounge area.",
    imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/2e/1f/6c/8a/caption.jpg",
  },
  {
    title: "Bar & Restaurant",
    description: "Enjoy gourmet meals and refreshing drinks at our bar.",
    imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/27/00/f7/27/day-club.jpg",
  },
  {
    title: "Tempate Bertani",
    description: "Relax and socialize in our comfortable rice area.",
    imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/2e/3e/05/b7/caption.jpg",
  },
  {
    title: "Tempate Berendem",
    description: "Relax and socialize in our comfortable pool hi areaghground.",
    imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/2e/17/50/40/caption.jpg",
  },
];

const DayClub: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Cek ukuran layar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Deteksi ukuran layar untuk mobile
    };
    handleResize(); // Panggil saat pertama kali
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="day-club-container">
      {/* Video Slider */}
      {isMobile ? <VideoSliderMobile /> : <VideoSliderDesktop />}

      {/* Fasilitas */}
      <div className="facilities-section">
        <h2>Our Facilities</h2>
        <div className="facility-grid">
          {facilities.map((facility, index) => (
            isMobile ? (
              <FacilityCardMobile
                key={index}
                title={facility.title}
                description={facility.description}
                imageUrl={facility.imageUrl}
              />
            ) : (
              <FacilityCardDesktop
                key={index}
                title={facility.title}
                description={facility.description}
                imageUrl={facility.imageUrl}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayClub;
