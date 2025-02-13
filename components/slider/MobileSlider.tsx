import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "next-share";
import {
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
  FaTimes,
} from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DOMAIN = "https://www.andaraimperialterrace.co.id";

// Definisi tipe Slide
interface Slide {
  image: string;
  link: string;
  isVideo: boolean;
  message: string;
}

const MobileSlider: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState<Slide | null>(null); // Perbaikan tipe state

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const slides: Slide[] = [
    { image: "/slide_mobile5.png", link: "/sign-up/agent-affiliate", isVideo: false, message: "Lihat hunian murah berkualitas!" },
    { image: "/slide_mobile6.png", link: "/sign-up/agent-affiliate", isVideo: false, message: "Temukan rumah impian Anda di sini!" },
    { image: "/slide_mobile3.png", link: "/sign-up/agent-affiliate", isVideo: false, message: "Tonton video eksklusif tentang properti ini!" },
    { image: "/slide_mobile4.png", link: "/kpr-corner", isVideo: false, message: "Jangan lewatkan promo terbaru kami!" },
  ];

  return (
    <div className="mobile-slider pt-16 mb-16 pt-20">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-item relative">
            <a href={DOMAIN + slide.link} rel="noopener noreferrer">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={600}
                height={400}
                layout="responsive"
                quality={80}
              />
            </a>
            <button 
              onClick={() => { setCurrentSlide(slide); setShowPopup(true); }}
              className="absolute top-16 right-4 bg-white p-2 rounded-full shadow-lg z-50"
            >
              <Image src="/share.png" alt="Share" width={32} height={32} />
            </button>
          </div>
        ))}
      </Slider>
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
              <a
                href={`https://www.instagram.com/?url=${DOMAIN + currentSlide.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSlider;
