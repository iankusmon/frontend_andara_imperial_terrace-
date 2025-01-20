'use client'
// components/MiniHomepage.tsx
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// interface SlideItem {
//   id: number;
//   image: string;
// }

// const slides: SlideItem[] = [
//   { id: 1, image: '/Landmark5.png'},
//   { id: 2, image: '/Landmark2.png'},
//   { id: 3, image: '/Landmark3.png'},
//   { id: 4, image: '/Landmark4.png'},
//   { id: 5, image: '/Landmark5.png'},
//   { id: 1, image: '/Landmark4.png'},
//   { id: 2, image: '/Landmark5.png'},
//   { id: 3, image: '/Landmark2.png'},
//   { id: 4, image: '/Landmark5.png'}
// ];

// const MiniHomepage: React.FC = () => {
//   return (
//     <section className="mini-homepage">
//       <h2 className="title">Landmarks and Facilities</h2>
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={4}
//         autoplay={{ delay: 4000 }}
//         loop={true}
//         navigation
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="slide-item">
//               <img src={slide.image} alt={slide.title} />
//               <div className="slide-overlay">
//                 <p>{slide.title}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <style jsx>{`
//         .mini-homepage {
//           text-align: left;
//           padding: 20px;
//         }
//         .title {
//           font-size: 36px;
//           margin-bottom: 20px;
//         }
//         .slide-item {
//           position: relative;
//           border-radius: 10px;
//           overflow: hidden;
//         }
//         .slide-item img {
//           width: 100%;
//           height: auto;
//           border-radius: 10px;
//         }
//         .slide-overlay {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 100%;
//           padding: 10px;
//           background: rgba(0, 0, 0, 0.5);
//           color: #fff;
//           font-size: 16px;
//           text-align: left;
//         }
//       `}</style>
//     </section>
//   );
// };

// components/SliderSection.tsx
import React, { useEffect, useState } from 'react';
import DesktopSlider from './mini-banner/DesktopSlider';
import MobileSlider from './mini-banner/MobileSlider';

const MiniHomepage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="slider-section">
      <h2 className="title">Menara Imperial Terrace</h2>
      {isMobile ? <MobileSlider /> : <DesktopSlider />}
      <style jsx>{`
        .slider-section {
          text-align: center;
          padding: 20px;
        }
        .title {
          font-size: 24px;
          margin-bottom: 20px;
        }
        .slide-item {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          height: 100%;
        }
        .slide-item img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          object-fit: cover;
        }
        .slide-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 10px;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          font-size: 16px;
          text-align: left;
        }
      `}</style>
    </section>
  );
};



export default MiniHomepage;
