import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "next-share";
import { FaFacebook, FaWhatsapp, FaTelegram, FaTimes, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/navigation";

const DOMAIN = "https://www.andaraimperialterrace.co.id";

type SlideType = {
  id: number;
  image: string;
  link: string;
  message: string;
  label: string;
  share_link: string;
};

const desktopSlides: SlideType[] = [
  { id: 1, image: "/menara_pissa_2.jpg", link: "/artikel/menara-pissa", share_link: "/sign-up/customer", message: "Lihat Keindahan Menara Pisa!", label: "Menara Pissa!" },
  { id: 2, image: "/colosseum_3.jpg", link: "/artikel/colosseum", share_link: "/sign-up/customer", message: "Lihat Keindahan Colosseum!", label: "Colosseum!" },
  { id: 3, image: "/venice_canals_2.jpg", link: "/artikel/venice-canals", share_link: "/sign-up/customer", message: "Lihat Keseruan naik perahu di Venice Canals!", label: "Venice Canals!!" },
  { id: 4, image: "/versailles_park_2.jpg", link: "/artikel/versailles-park", share_link: "/sign-up/customer", message: "Mari berpetualangan di Europe Versailles Park!", label: "Versailles Park!" },
  { id: 5, image: "/menara_imperial_terrace_2.jpg", link: "/artikel/menara-imperial-terrace", share_link: "/sign-up/customer", message: "Lihatlah Kesempurnaan Menara Imperial Terrace!", label: "Menara Imperial Terrace!" },
  { id: 6, image: "/tour_vehicle.jpg", link: "/artikel/tour-vehicle", share_link: "/sign-up/customer", message: "Temukan Tour Vehicle terkeren di Solo Raya!", label: "Tour Vehicle!" },
  { id: 7, image: "/play_story.jpg", link: "/artikel/play-story", share_link: "/sign-up/customer", message: "Temukan Play Story yang fun dan berhadiah menarik!", label: "Play Story!" },
  { id: 8, image: "/lobby_villa_resort.jpg", link: "/artikel/lobby-villa-resort", share_link: "/sign-up/customer", message: "Temukan Kelengkapan dan Kemewahab Lobby Villa Resort di Solo Raya!", label: "Lobby Villa Resort!" },
  { id: 9, image: "/restoran.jpg", link: "/artikel/imperial-dine-lounge-by-andara", share_link: "/sign-up/customer", message: "Temukan Imperial Dine & Lounge by Andara dengan pemandangan sawah terasering asri dan segar!", label: "Imperial Dine & Lounge by Andara!" }
];

const DesktopSlider: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState<SlideType | null>(null);
  const [referralCode, setReferralCode] = useState("");
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token");
  
    // const referralCode = localStorage.getItem("referralCode") ?? "";
    const referralCode = localStorage.getItem("referralCode") || ""; // Jika null, atur menjadi string kosong
    setReferralCode(referralCode);
  }, []);
  

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
            <div className="slide-item relative">
              <a href={DOMAIN + slide.link} rel="noopener noreferrer">
                <img src={slide.image} className="rounded-lg object-cover w-full h-full" />
                <p className="absolute bottom-0 left-0 right-0 text-center text-sm font-semibold bg-black bg-opacity-50 text-white py-2">{slide.label}</p>
              </a>
              <button
                onClick={() => { setCurrentSlide(slide); setShowPopup(true); }}
                className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-lg"
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
              <FacebookShareButton url={`${DOMAIN}${currentSlide.share_link}?referral_code=${referralCode}`} hashtag="#PropertiImpian">
                <FaFacebook className="text-blue-600 text-3xl cursor-pointer" />
              </FacebookShareButton>
              <WhatsappShareButton url={`${DOMAIN}${currentSlide.share_link}?referral_code=${referralCode}`} title={currentSlide.message} separator=" - ">
                <FaWhatsapp className="text-green-500 text-3xl cursor-pointer" />
              </WhatsappShareButton>
              <TelegramShareButton url={`${DOMAIN}${currentSlide.share_link}?referral_code=${referralCode}`} title={currentSlide.message}>
                <FaTelegram className="text-blue-400 text-3xl cursor-pointer" />
              </TelegramShareButton>
              <a
                href={`https://www.instagram.com/?url=${DOMAIN + currentSlide.share_link}?referral_code=${referralCode}`}
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
