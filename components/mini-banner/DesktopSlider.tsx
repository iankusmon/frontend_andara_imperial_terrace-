import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "next-share";
import { FaFacebook, FaWhatsapp, FaTelegram, FaTimes, FaInstagram } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const DOMAIN = "https://www.andaraimperialterrace.co.id";

type SlideType = {
  id: number;
  image: string;
  link: string;
  message: string;
};

const desktopSlides: SlideType[] = [
  { id: 1, image: "/pissa.png", link: "/artikel/menara-pissa", message: "Lihat Keindahan Menara Pisa!" },
  { id: 2, image: "/colosseum_2.png", link: "/artikel/colosseum", message: "Lihat Keindahan Colosseum!" },
  { id: 3, image: "/infinity_pool.png", link: "/artikel/infinity-pool", message: "Lihat Keseruan Infinity Pool!" },
  { id: 4, image: "/segara_rasa.png", link: "/artikel/segara-rasa", message: "Mari makan dengan dapur segara!" },
  { id: 5, image: "/menara_imperial_terrace.png", link: "/artikel/menara-imperial-terrace", message: "Lihatlah Kesempuranaan Andara Imperial Terrace!" },
  { id: 6, image: "/water_coaster.png", link: "/artikel/water-coaster", message: "Temukan Water Coaster Terpanjang di Solo Raya!" }
];

const DesktopSlider: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState<SlideType | null>(null); // ✅ Perbaikan tipe

  return (
    <div className="desktop-slider-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        autoplay={{ delay: 4000 }}
        loop={true}
        navigation
      >
        {desktopSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-item relative flex flex-col items-center">
              <a href={DOMAIN + slide.link} rel="noopener noreferrer">
                <img src={slide.image} className="rounded-lg object-cover w-full h-full" />
              </a>
              <button
                onClick={() => { setCurrentSlide(slide); setShowPopup(true); }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
              >
                <Image src="/share.png" alt="Share" width={40} height={40} />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showPopup && currentSlide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 text-center relative z-50">
            <button className="absolute top-2 right-2" onClick={() => setShowPopup(false)}>
              <FaTimes className="text-2xl" />
            </button>
            <h3 className="text-lg font-bold mb-2">Bagikan</h3>
            <p className="mb-4">{currentSlide.message}</p>
            <div className="flex gap-3 justify-center">
              <FacebookShareButton url={DOMAIN + currentSlide.link} hashtag="#DestinasiMenarik">
                <FaFacebook className="text-blue-600 text-3xl cursor-pointer" />
              </FacebookShareButton>
              <WhatsappShareButton url={DOMAIN + currentSlide.link} title={currentSlide.message} separator=" - ">
                <FaWhatsapp className="text-green-500 text-3xl cursor-pointer" />
              </WhatsappShareButton>
              <TelegramShareButton url={DOMAIN + currentSlide.link} title={currentSlide.message}>
                <FaTelegram className="text-blue-400 text-3xl cursor-pointer" />
              </TelegramShareButton>
              <a
                href={`https://www.instagram.com/?url=${DOMAIN + currentSlide.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-500 text-3xl cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .desktop-slider-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px 0;
        }
        .slide-item {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          height: 350px;
        }
        .slide-item img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default DesktopSlider;
