import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaFacebook, FaWhatsapp, FaTelegram, FaInstagram, FaYoutube, FaTiktok, FaTimes } from "react-icons/fa";
import { FacebookShareButton, WhatsappShareButton, TelegramShareButton } from "next-share";

const DOMAIN = "https://www.andaraimperialterrace.co.id";

interface Slide {
  id: number;
  image: string;
  link: string;
  isVideo: boolean;
  message: string;
}

const mobileSlides: Slide[] = [
  { id: 1, image: "/pissa.png", link: "/hunian-murah", isVideo: false, message: "Lihat hunian murah berkualitas!" },
  { id: 2, image: "/colosseum_2.png", link: "/", isVideo: false, message: "Temukan rumah impian Anda di sini!" },
  { id: 3, image: "/infinity_pool.png", link: "/hunian-murah", isVideo: true, message: "Tonton video eksklusif tentang properti ini!" },
  { id: 4, image: "/segara_rasa.png", link: "/", isVideo: true, message: "Jangan lewatkan promo terbaru kami!" },
  { id: 5, image: "/menara_imperial_terrace.png", link: "/", isVideo: false, message: "Temukan rumah impian Anda di sini!" },
  { id: 6, image: "/water_coaster.png", link: "/", isVideo: false, message: "Temukan rumah impian Anda di sini!" }
];

const MobileSlider: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<Slide | null>(null);

  return (
    <div className="mobile-slider-container mb-16">
      <Swiper modules={[Navigation, Autoplay]} spaceBetween={10} slidesPerView={4} autoplay={{ delay: 4000 }} loop navigation>
        {mobileSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-item relative text-center">
              <Image src={slide.image} alt={slide.message} width={600} height={400} layout="responsive" quality={80} />
              <div className="mt-2 flex justify-center">
                <button onClick={() => { setCurrentSlide(slide); setShowPopup(true); }} className="bg-white p-2 rounded-full shadow-lg">
                  <Image src="/share.svg" alt="Share" width={30} height={30} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showPopup && currentSlide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-80 text-center relative z-50">
            <button className="absolute top-2 right-2" onClick={() => setShowPopup(false)}>
              <FaTimes className="text-xl" />
            </button>
            <h3 className="text-md font-bold mb-2">Bagikan</h3>
            <p className="mb-3">{currentSlide.message}</p>
            <div className="flex gap-2 justify-center">
              <FacebookShareButton url={DOMAIN + currentSlide.link} hashtag="#PropertiImpian">
                <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
              </FacebookShareButton>
              <WhatsappShareButton url={DOMAIN + currentSlide.link} title={currentSlide.message} separator=" - ">
                <FaWhatsapp className="text-green-500 text-2xl cursor-pointer" />
              </WhatsappShareButton>
              <TelegramShareButton url={DOMAIN + currentSlide.link} title={currentSlide.message}>
                <FaTelegram className="text-blue-400 text-2xl cursor-pointer" />
              </TelegramShareButton>
              <a href={`https://www.instagram.com/?url=${DOMAIN + currentSlide.link}`} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
              </a>
              {currentSlide.isVideo && (
                <>
                  <a href={`https://www.youtube.com/share?url=${DOMAIN + currentSlide.link}`} target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-red-600 text-2xl cursor-pointer" />
                  </a>
                  <a href={`https://www.tiktok.com/share?url=${DOMAIN + currentSlide.link}`} target="_blank" rel="noopener noreferrer">
                    <FaTiktok className="text-black text-2xl cursor-pointer" />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSlider;
