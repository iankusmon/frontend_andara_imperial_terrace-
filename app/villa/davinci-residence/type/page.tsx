"use client"

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const DavinciResidence = () => {
  const sliderImages = [
    "/davinci_1_1.png",
    "/davinci_2_1.png",
    "/davinci_3_1.png",
    "/davinci_4_1.png",
    "/davinci_5_1.png",
    "/davinci_6_1.png",
  ];

  const totalUnits = 10;
  const availableUnits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.autoplay = true;
      video.play().catch(error => console.error("Video play failed", error));
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Video Section */}
      <div className="w-full h-[600px] overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/davinci_vidio.mp4"
          autoPlay
          loop
          playsInline
        />
      </div>

      {/* Image Slider */}
      <div className="w-full py-8">
        <Swiper spaceBetween={10} slidesPerView={1} loop pagination={{ clickable: true }} modules={[Pagination]}>
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Davinci Residence ${index + 1}`}
                width={1200}
                height={600}
                className="w-full rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Available Units Section */}
      <h2 className="text-center text-2xl font-bold text-gray-800 my-4">Available Units</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center p-4">
        {Array.from({ length: totalUnits }, (_, i) => i + 1).map((unit) => (
          <Link
            key={unit}
            href={`/villa/davinci-residence/unit/${unit}`}
            className={`p-4 rounded-lg shadow-lg font-bold transition ${availableUnits.includes(unit) ? 'bg-gold text-white hover:bg-black' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
          >
            <p className="text-lg">Unit {unit}</p>
            <p className="text-sm">{availableUnits.includes(unit) ? 'Available' : 'Sold Out'}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DavinciResidence;
