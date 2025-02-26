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
    "/athena_2.png",
    "/athena_3.png",
    "/athena_4.png",
    "/athena_5.png",
    "/athena_6.png",
    "/athena_7.png",
    "/athena_8.png",
  ];

  const exclusiveRooms = ["/athena_10.png", "/athena_11.png"];
  const otherFacilities = ["/athena_12.png", "/athena_9.png"];

  return (
    <div className="w-full">
      {/* Full-width Autoplay Video */}
      <div className="w-full h-[500px] overflow-hidden">
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
      <div className="max-w-7xl mx-auto p-4 mt-10">
        {/* Banner utama */}
        <div className="w-full h-[500px] relative">
          <Image src="/athena_1.png" alt="Villa Athena Height" layout="fill" objectFit="cover" className="rounded-xl" />
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
          <h1 className="text-3xl font-bold">Villa Athena Height</h1>
          <p className="mt-4 text-lg text-gray-700">
            Andara Imperial Terrace dengan bangga mempersembahkan Type Villa Athena Height, sebuah mahakarya arsitektur Yunani yang memadukan kemewahan dan kenyamanan dalam setiap detail. Villa ini dirancang untuk menghadirkan pengalaman resor bintang lima dalam kenyamanan hunian pribadi, menjadikannya pilihan sempurna bagi mereka yang mendambakan gaya hidup eksklusif dan prestisius.
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

export default VillaAthenaHeight;
