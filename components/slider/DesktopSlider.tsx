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
  FaYoutube,
  FaTiktok,
  FaTimes,
} from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DOMAIN = "https://www.andaraimperialterrace.co.id";

interface Slide {
  image: string;
  link: string;
  isVideo: boolean;
  message: string;
}

const DesktopSlider: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<Slide | null>(null);

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
    { image: "/slide5.png", link: "/hunian-murah", isVideo: false, message: "Lihat hunian murah berkualitas!" },
    { image: "/slide6.png", link: "/", isVideo: false, message: "Temukan rumah impian Anda di sini!" },
    { image: "/slide3.png", link: "/hunian-murah", isVideo: true, message: "Tonton video eksklusif tentang properti ini!" },
    { image: "/slide4.png", link: "/", isVideo: true, message: "Jangan lewatkan promo terbaru kami!" },
  ];

  return (
    <div className="desktop-slider mb-16">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-item relative" style={{ paddingTop: '18px' }}>
            <a href={DOMAIN + slide.link} rel="noopener noreferrer">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={1200}
                height={600}
                layout="responsive"
                quality={90}
              />
            </a>
            <button 
              onClick={() => { setCurrentSlide(slide); setShowPopup(true); }}
              className="absolute top-24 right-3 bg-white p-2 pt-6 rounded-full shadow-lg"
            >
              <Image src="/share.png" alt="Share" width={40} height={40} />
            </button>
          </div>
        ))}
      </Slider>
      {showPopup && currentSlide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 text-center relative z-50">
            <button className="absolute top-2 right-2" onClick={() => setShowPopup(false)}>
              <FaTimes className="text-2xl" />
            </button>
            <h3 className="text-lg font-bold mb-2">Bagikan</h3>
            <p className="mb-4">{currentSlide.message}</p>
            <div className="flex gap-3 justify-center">
              <FacebookShareButton url={DOMAIN + currentSlide.link} hashtag="#PropertiImpian">
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
    </div>
  );
};

export default DesktopSlider;
