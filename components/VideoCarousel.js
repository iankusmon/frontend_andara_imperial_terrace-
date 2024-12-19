import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
const VideoCarousel = () => {
  const videos = [
    { id: 1, url: "/videos/YTShortSample.mp4" },
    { id: 2, url: "/videos/YTShortSample.mp4" },
    { id: 3, url: "/videos/YTShortSample.mp4" },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      spaceBetween={30}
      slidesPerView={1}
    >
      {videos.map((video) => (
        <SwiperSlide key={video.id}>
          <video
            src={video.url}
            controls
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VideoCarousel;