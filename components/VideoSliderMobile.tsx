"use client";
// components/VideoSliderMobile.tsx
import React from "react";
import Slider from "react-slick";
import YouTube from "react-youtube";

// Array video ID dari YouTube
const videoIds = [
  "PMGUv02vdvQ", // Ganti dengan ID video YouTube
  "klVdZCG8Z-4", // Ganti dengan ID video YouTube
  "ss94riPTPVs", // Ganti dengan ID video YouTube
  "PMGUv02vdvQ", // Ganti dengan ID video YouTube
  "bMBFjLkF0Hg",
  "e8BsSTGbfJM",
  "-olJWuoHTNc?"
];

function VideoSliderMobile() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Setiap 3 detik otomatis slide
  };

  return (
    <div className="video-slider-mobile">
      <Slider {...settings}>
        {videoIds.map((id, index) => (
          <div key={index} className="video-slide">
            <YouTube videoId={id} opts={{ width: "100%", height: "100%" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default VideoSliderMobile;
