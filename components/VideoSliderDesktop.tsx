"use client";
// components/VideoSliderDesktop.tsx
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

const VideoSliderDesktop = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Menampilkan 2 video untuk desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Setiap 3 detik otomatis slide
  };

  return (
    <div className="video-slider-desktop">
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

export default VideoSliderDesktop;
