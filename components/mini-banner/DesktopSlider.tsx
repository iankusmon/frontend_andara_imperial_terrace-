// components/DesktopSlider.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const desktopSlides = [
  { id: 1, image: '/Landmark5.png'},
  { id: 2, image: '/Landmark2.png'},
  { id: 3, image: '/Landmark3.png'},
  { id: 4, image: '/Landmark4.png'},
  { id: 5, image: '/Landmark5.png'},
  { id: 1, image: '/Landmark4.png'},
  { id: 2, image: '/Landmark5.png'},
  { id: 3, image: '/Landmark2.png'},
  { id: 4, image: '/Landmark5.png'}
];

const DesktopSlider: React.FC = () => {
  return (
    <div className="desktop-slider-container">
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={10}  // Mengurangi jarak antar gambar
      slidesPerView={4}  // Menampilkan 4 gambar sekaligus
      autoplay={{ delay: 4000 }}
      loop={true}
      navigation
    >
      {desktopSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="slide-item">
            <img src={slide.image}  />
            <div className="slide-overlay">
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <style jsx>{`
      .desktop-slider-container {
        max-width: 1400px; /* Memperluas lebar slider */
        margin: 0 auto;
        padding: 20px 0;
      }
      .slide-item {
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        height: 350px; /* Memperbesar tinggi gambar */
      }
      .slide-item img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover; /* Menjaga proporsi gambar */
      }
      .slide-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 15px;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-size: 18px;
        text-align: left;
        font-weight: bold;
      }
    `}</style>
  </div>
  );
};

export default DesktopSlider;
