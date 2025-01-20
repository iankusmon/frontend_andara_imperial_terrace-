import YoutubeShort from '@/components/YoutubeShort'
import Hero from '@/components/Hero'
import MiniBanner from '@/components/MiniBanner'
import DayClub from '../components/DayClub'; // Komponen Day Club
import MiniHomepage from '@/components/MiniHomepage';
import Map from '@/components/Map';
// import SiteMap from '@/components/SiteMap'
// import Sitemap3D from '../components/Sitemap3D';
// import Map2D from '@/components/Map2D';
import VideoSlider from '../components/VideoSlider';
// import Landmark from '@/components/Landmark'
// import VillaType from '@/components/VillaType'
import VillaSlider from '@/components/VillaSlider';
import AlurPemesanan from '@/components/AlurPemesanan';
import Article from '@/components/Article'

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
      <h1 className="title">Day Club Pertama di Pulau Jawa</h1>
      <DayClub/>
      <div>
        <h1>Peta Interaktif Cimory Bogor</h1>
       <DynamicMap />
     </div>
      <VillaSlider />
      <AlurPemesanan/>
      <BannerSlider/>
      {/* <MiniBanner /> */}
    </>
  
  )
}
