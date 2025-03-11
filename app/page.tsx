"use client";

import { useState, useEffect, useRef } from 'react';

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import VideoLanding from '@/components/VideoLanding';
import DayClub from '../components/DayClub'; // Komponen Day Club
import MiniHomepage from '@/components/MiniHomepage';
import VillaSlider from '@/components/VillaSlider';
import AlurPemesanan from '@/components/AlurPemesanan';
import AffiliateBanner from '@/components/AffiliateBanner';
import FreshChat from "@/components/FreshChat";

// Impor CSS eksternal
import 'leaflet/dist/leaflet.css';  // Impor CSS Leaflet
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import dynamic from 'next/dynamic';
import BannerSlider from '@/components/BannerSlider';

const PopupBanner = dynamic(() => import("@/components/PopupBanner"), {
  ssr: false,
});
const DynamicMap = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <PopupBanner />
      <VideoLanding />
      <Hero />
      <VillaSlider />
      <DynamicMap />
      <DayClub />
      <MiniHomepage />
      <AlurPemesanan />
      <AffiliateBanner />
      <FreshChat />
    </>
  );
}
