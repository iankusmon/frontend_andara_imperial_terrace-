"use client";
import React from "react";
import Slider from "react-slick";
import YouTube from "react-youtube";

// Array video ID dari YouTube (maksimal 4 video)
const videoIds = [
  "nijAWP_G8W8", // Ganti dengan ID video YouTube
  "HXg8yTZi5m0", // Ganti dengan ID video YouTube
  "2tRYzWIJZNc", // Ganti dengan ID video YouTube
  "LStyBlwcpQQ", // Ganti dengan ID video YouTube
  "NygsBktIK2Y", // Ganti dengan ID video YouTube
  "Ct5MZCKRfag", // Ganti dengan ID video YouTube
  "NjhnLOqXQvo", // Ganti dengan ID video YouTube
  "bGm87UgSqLY", // Ganti dengan ID video YouTube
];

const VideoSlider = () => {
  // Settingan untuk slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Setiap 3 detik otomatis slide
  };

  return (
    <div className="video-slider">
      <Slider {...settings}>
        {videoIds.map((id, index) => (
          <div key={index} className="video-slide">
            <YouTube videoId={id} opts={{ width: "100%", height: "300px" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
