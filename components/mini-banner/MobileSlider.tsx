// components/MobileSlider.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const mobileSlides = [
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

const MobileSlider: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={10}
      slidesPerView={2}
      autoplay={{ delay: 4000 }}
      loop={true}
      navigation
    >
      {mobileSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="slide-item">
            <img src={slide.image} />
            <div className="slide-overlay">
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileSlider;
