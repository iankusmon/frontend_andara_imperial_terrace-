import Hero from '@/components/Hero'
import DayClub from '../components/DayClub'; // Komponen Day Club
import MiniHomepage from '@/components/MiniHomepage';
import VideoSlider from '../components/VideoSlider';
import VillaSlider from '@/components/VillaSlider';
import AlurPemesanan from '@/components/AlurPemesanan';
import AffiliateBanner from '@/components/AffiliateBanner';

// pages/_app.tsx
import 'leaflet/dist/leaflet.css';  // Impor CSS Leaflet
// import 's';  // Impor CSS proyek Anda
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import dynamic from 'next/dynamic';
import BannerSlider from '@/components/BannerSlider';

const DynamicMap = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <MiniHomepage />
      <DynamicMap />
      {/* <h1 className="title">Day Club Pertama di Pulau Jawa</h1> */}
      <DayClub/>
      {/* <div>
        <h1>Peta Interaktif Andara Imperial Terrace</h1>
     </div> */}
      <VillaSlider />
      <AlurPemesanan/>
      <BannerSlider/>
      <AffiliateBanner/>
    </>
  
  )
}
