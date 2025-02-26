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
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const galleryImages = [
    "/amsterdam_2.png",
    "/amsterdam_3.png",
    "/amsterdam_4.png",
    "/amsterdam_5.png",
    "/amsterdam_6.png",
    "/amsterdam_7.png",
    "/amsterdam_8.png",
  ];

  const exclusiveRooms = ["/amsterdam_10.png", "/amsterdam_11.png"];
  const otherFacilities = ["/amsterdam_12.png", "/amsterdam_9.png"];

  return (
    <div className="w-full">
      {/* Full-width Autoplay Video */}
      <div className="w-full h-[600px] overflow-hidden">
        <video
          ref={videoRef}
          src="/amsterdam_vidio.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 mt-10 pt-20">
        {/* Banner utama */}
        <div className="w-full h-[500px] relative">
          <Image src="/amsterdam_1.png" alt="Villa Amsterdam Royale" layout="fill" objectFit="cover" className="rounded-xl" />
        </div>

        {/* Slider Galeri */}
        <div className="mt-6">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {galleryImages.map((src, index) => (
              <div key={index} className="h-[400px] relative">
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
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Harga: Rp 2.800.000.000</h2>
        </div>

        {/* Button NUP */}
        <div className="mt-8 text-center">
          <button
            onClick={() => router.push("/nup")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Silahkan NUP Sekarang
          </button>
        </div>

        {/* Fasilitas Kamar Eksklusif */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Fasilitas Kamar Eksklusif</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {exclusiveRooms.map((src, index) => (
              <div key={index} className="relative h-64">
                <Image src={src} alt={`Exclusive Room ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
            ))}
          </div>
        </div>

        {/* Fasilitas Lainnya */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Fasilitas Lainnya</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {otherFacilities.map((src, index) => (
              <div key={index} className="relative h-64">
                <Image src={src} alt={`Facility ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillaAmsterdamRoyal;
