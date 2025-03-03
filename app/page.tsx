import Hero from '@/components/Hero'
import DayClub from '../components/DayClub'; // Komponen Day Club
import MiniHomepage from '@/components/MiniHomepage';
import VillaSlider from '@/components/VillaSlider';
import AlurPemesanan from '@/components/AlurPemesanan';
import AffiliateBanner from '@/components/AffiliateBanner';
import FreshChat from "@/components/FreshChat";

// pages/_app.tsx
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
  return (
    <>
      <PopupBanner />
      <Hero />
      <VillaSlider />
      <DynamicMap />
      <DayClub/>
      <MiniHomepage />
      <AlurPemesanan/>
      <AffiliateBanner/>
      <FreshChat />
    </>
  
  )
}
