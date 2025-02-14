'use client'

// components/DayClub.tsx
import React, { useState, useEffect } from 'react';
import VideoSliderMobile from './VideoSliderMobile'; // Versi mobile VideoSlider
import VideoSliderDesktop from './VideoSliderDesktop'; // Versi desktop VideoSlider
import FacilityCardMobile from './FacilityCardMobile'; // Versi mobile FacilityCard
import FacilityCardDesktop from './FacilityCardDesktop'; // Versi desktop FacilityCard

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
    </div>
  );
};

export default DayClub;
