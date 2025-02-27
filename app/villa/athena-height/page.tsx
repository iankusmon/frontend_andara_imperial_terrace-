"use client"

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const VillaAthenaHeight = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const galleryImages = [
    "/athena_2_1.png",
    "/athena_3_1.png",
    "/athena_4_1.png",
    "/athena_5_1.png",
    "/athena_6_1.png",
    // "/amsterdam_8_1.png",
  ];

  const exclusiveRooms = ["/athena_10_1.png", "/athena_11_1.png"];
  const otherFacilities = ["/athena_10_1.png", "/athena_11_1.png", "/athena_12_1.png", "/athena_7_1.png"];

  return (
    <div className="w-full">
      {/* Full-width Autoplay Video */}
      <div className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
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
      <div className="max-w-7xl mx-auto p-4 pt-6">
        {/* Banner utama */}
        <div className="w-full h-[250px] sm:h-[400px] md:h-[600px] lg:h-[800px] relative">
          <Image src="/athena_1_1.png" alt="Villa Da Vinci" layout="fill" objectFit="cover" className="rounded-xl" />
        </div>

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
          <h1 className="text-3xl font-bold">Villa Athena Height</h1>
          <p className="mt-4 text-lg text-gray-700">
            Andara Imperial Terrace dengan bangga mempersembahkan Type Villa Athena Height, sebuah mahakarya arsitektur Yunani yang memadukan kemewahan dan kenyamanan dalam setiap detail. Villa ini dirancang untuk menghadirkan pengalaman resor bintang lima dalam kenyamanan hunian pribadi, menjadikannya pilihan sempurna bagi mereka yang mendambakan gaya hidup eksklusif dan prestisius.
          </p>
        </div>

        {/* Harga */}
        <div className="mt-4 text-center">
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">
            Harga: <span className="text-red-500 line-through">Rp 3,15 M</span> <span className="text-green-600 font-bold">Rp 2,75 M</span>
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
              <Image src="/athena_7_1.png" alt="Presidential Suite" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>

          {/* Executive Suite */}
          <div className="mt-6">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800">Executive Suite</h3>
            <div className="relative h-[250px] sm:h-[400px] md:h-[600px] lg:h-[800px] mt-2">
              <Image src="/athena_8_1.png" alt="Executive Suite" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>

          {/* Junior Suite */}
          <div className="mt-6">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800">Junior Suite</h3>
            <div className="relative h-[250px] sm:h-[400px] md:h-[600px] lg:h-[800px] mt-2">
              <Image src="/athena_9_1.png" alt="Junior Suite" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
        </div>

        {/* Fasilitas Lainnya */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-bold text-center">Fasilitas Lainnya</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {otherFacilities.map((src, index) => (
              <div key={index} className="relative h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                <Image src={src} alt={`Facility ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillaAthenaHeight;
