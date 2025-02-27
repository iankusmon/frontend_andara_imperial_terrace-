"use client"

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const VillaDaVinci = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const galleryImages = [
    // "/davinci_10_1.png",
    "/davinci_11_1.png",
    "/davinci_12_1.png",
    "/davinci_13_1.png",
    "/davinci_14_1.png",
    // "/davinci_8_1.png",
  ];

  const exclusiveRooms = ["/davinci_10_1.png", "/davinci_11_1.png"];
  const otherFacilities = ["/davinci_10_1.png", "/davinci_11_1.png", "/davinci_12_1.png", "/davinci_13_1.png"];

  return (
    <div className="w-full">
      {/* Full-width Autoplay Video */}
      <div className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <video
          ref={videoRef}
          src="/davinci_vidio.mp4"
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
        <div className="mt-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Villa Da Vinci Residence</h1>
          <p className="mt-4 text-sm sm:text-lg text-gray-700">
            Villa Da Vinci Residence bukan hanya menawarkan keindahan dan kenyamanan sebagai tempat tinggal,
            tetapi juga peluang investasi yang luar biasa. Dengan desain elegan ala Eropa klasik dan fasilitas
            sekelas resor hotel bintang 5, villa ini menjadi pilihan terbaik untuk investasi properti yang
            menjanjikan profit tinggi dan manfaat jangka panjang.
          </p>
        </div>

        {/* Harga */}
        <div className="mt-4 text-center">
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">
            Harga: <span className="text-red-500 line-through">Rp 3,25 M</span> <span className="text-green-600 font-bold">Rp 2,85 M</span>
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
              <Image src="/davinci_7_1.png" alt="Presidential Suite" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>

          {/* Executive Suite */}
          <div className="mt-6">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800">Executive Suite</h3>
            <div className="relative h-[250px] sm:h-[400px] md:h-[600px] lg:h-[800px] mt-2">
              <Image src="/davinci_8_1.png" alt="Executive Suite" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>

          {/* Junior Suite */}
          <div className="mt-6">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800">Junior Suite</h3>
            <div className="relative h-[250px] sm:h-[400px] md:h-[600px] lg:h-[800px] mt-2">
              <Image src="/davinci_9_1.png" alt="Junior Suite" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default VillaDaVinci;
