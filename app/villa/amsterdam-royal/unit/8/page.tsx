"use client"

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const VillaAmsterdamRoyal = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.autoplay = true;
      video.play().catch(error => console.error("Video play failed", error));
    }
  }, []);

  const galleryImages = [
    "/amsterdam_10_1.png",
    "/amsterdam_11_1.png",
    "/amsterdam_12_1.png",
    // "/amsterdam_5_1.png",
    // "/amsterdam_13_1.png",
    "/amsterdam_6_1.png",
  ];

  const exclusiveRooms = ["/amsterdam_10_1.png", "/amsterdam_11_1.png"];
  const otherFacilities = ["/amsterdam_10_1.png", "/amsterdam_11_1.png", "/amsterdam_12_1.png", "/amsterdam_6_1.png"];

  return (
    <div className="w-full">
      {/* Full-width Autoplay Video */}
      <div className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <video
          ref={videoRef}
          src="/amsterdam_vidio_2.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 pt-6">

        {/* Slider Galeri */}
        <div className="mt-6">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {galleryImages.map((src, index) => (
              <div key={index} className="h-[250px] sm:h-[400px] md:h-[600px] lg:h-[800px] relative">
                <Image src={src} alt={`Gallery ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Narasi */}
        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold">Villa Amsterdam Royale</h1>
          <p className="mt-4 text-lg text-gray-700">
            Villa Amsterdam Royale di Andara Imperial Terrace adalah lebih dari sekadar tempat tinggal; ini adalah peluang investasi strategis yang
            menjanjikan keuntungan berkelanjutan. Memadukan arsitektur klasik Belanda dengan teknologi modern, villa ini menjadi simbol kemewahan
            yang menarik bagi pasar properti premium.
          </p>
        </div>

        {/* Harga */}
        <div className="mt-4 text-center">
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">
            Harga: <span className="text-red-500 line-through">Rp 3,20 M</span> <span className="text-green-600 font-bold">Rp 2,80 M</span>
          </h2>
        </div>

        {/* Button NUP */}
        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/nup")}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg text-sm sm:text-lg font-semibold hover:bg-blue-700 transition"
          >
            Segera NUP Sekarang
          </button>
        </div>

        {/* Spesifikasi Kamar */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-bold text-center">Spesifikasi Kamar</h2>

          {/* Presidential Suite */}
          <div className="mt-6">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800">Presidential Suite</h3>
            <div className="relative h-[250px] sm:h-[400px] md:h-[600px] lg:h-[800px] mt-2">
              <Image src="/amsterdam_7_1.png" alt="Presidential Suite" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>

          {/* Executive Suite */}
          <div className="mt-6">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800">Executive Suite</h3>
            <div className="relative h-[250px] sm:h-[400px] md:h-[600px] lg:h-[800px] mt-2">
              <Image src="/amsterdam_8_1.png" alt="Executive Suite" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>

          {/* Junior Suite */}
          <div className="mt-6">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800">Junior Suite</h3>
            <div className="relative h-[250px] sm:h-[400px] md:h-[600px] lg:h-[800px] mt-2">
              <Image src="/amsterdam_9_1.png" alt="Junior Suite" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default VillaAmsterdamRoyal;
