"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "next-share";
import { FaFacebook, FaWhatsapp, FaTelegram, FaInstagram, FaTimes } from "react-icons/fa";

const DOMAIN = "https://www.andaraimperialterrace.co.id";

const villaTypes = [
  {
    title: "Da Vinci Residence (10 Unit)",
    concept: "Konsep Arsitektur: Eropa Klasik",
    features: "Ornamen megah, balkon luas, taman dalam.",
    facilities: "Kolam renang pribadi dengan desain klasik, taman dalam yang asri dan tenang, balkon besar untuk menikmati pemandangan luas, serta fitur pencahayaan artistik di seluruh ruangan untuk menciptakan suasana mewah.",
    image: "/davinci_residence.png",
    link: "/villa/davinci-residence/type",
    share_link: "/sign-up/customer?referral_code=CA420C865876",
    share_cta: "Nikmati Kemewahan Da Vinci Residence hanya 10 unit!"
  },
  {
    title: "Amsterdam Royale (7 Unit)",
    concept: "Konsep Arsitektur: Rumah Belanda",
    features: "Fasad bata merah, perapian modern, dapur mewah.",
    facilities: "Taman hijau pribadi dengan nuansa pedesaan Belanda, kolam renang pribadi, serta rooftop dengan pemandangan indah untuk bersantai di sore hari.",
    image: "/amsterdam_royale.png",
    link: "/villa/amsterdam-royal",
    share_link: "/sign-up/customer?referral_code=CA420C865876",
    share_cta: "Nikmati Kemewahan Amsterdam Royale hanya 7 Unit!"
  },
  {
    title: "Athena Height (9 Unit)",
    concept: "Konsep Arsitektur: Yunani Klasik",
    features: "Pilar kokoh, aksen putih bersih, rooftop BBQ area, kolam renang pribadi.",
    facilities: "Kolam renang pribadi dengan desain pemandangan alami, rooftop BBQ area untuk acara santai, serta balkon dan hammock untuk relaksasi yang menyatu dengan alam.",
    image: "/athena_height.png",
    link: "/villa/athena-height",
    share_link: "/sign-up/customer?referral_code=CA420C865876",
    share_cta: "Nikmati Kemewahan Athena Height hanya 9 Unit!"
  },
];

const VillaSlider = () => {
  const [showModal, setShowModal] = useState(false);
  // const [currentVilla, setCurrentVilla] = useState(null);
  const [currentVilla, setCurrentVilla] = useState<null | (typeof villaTypes)[0]>(null);


  const handleShareClick = (villa: (typeof villaTypes)[0]) => {
    setCurrentVilla(villa);
    setShowModal(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="villa-slider-container">
      <Slider {...settings}>
        {villaTypes.map((villa, index) => (
          <div key={index} className="villa-card-container relative">
            <div className="villa-card relative">
              <img src={villa.image} alt={villa.title} className="villa-image" />
              {/* Tombol Share di pojok kanan atas gambar */}
              <button
                className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                onClick={() => handleShareClick(villa)}
              >
                <Image src="/share.png" alt="Share" width={30} height={30} />
              </button>
              <h2 className="villa-title">{villa.title}</h2>
              <p><strong>{villa.concept}</strong></p>
              <p><strong>Ciri Khas:</strong> {villa.features}</p>
              <p><strong>Fasilitas Tambahan:</strong> {villa.facilities}</p>
              <Link href={villa.link}>
                <button className="buy-button">Beli Sekarang</button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>

      {showModal && currentVilla && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Tombol Close */}
            <button className="close-button" onClick={() => setShowModal(false)}>
              <FaTimes className="text-gray-600 text-2xl" />
            </button>
            <h2 className="text-center mb-3">Bagikan {currentVilla.share_cta}</h2>
            <div className="flex gap-3 justify-center">
              <FacebookShareButton url={`${DOMAIN}${currentVilla.share_link}`} hashtag="#PropertiImpian">
                <FaFacebook className="text-blue-600 text-3xl cursor-pointer" />
              </FacebookShareButton>
              <WhatsappShareButton url={`${DOMAIN}${currentVilla.share_link}`} title={currentVilla.share_cta} separator=" - ">
                <FaWhatsapp className="text-green-500 text-3xl cursor-pointer" />
              </WhatsappShareButton>
              <TelegramShareButton url={`${DOMAIN}${currentVilla.share_link}`} title={currentVilla.share_cta}>
                <FaTelegram className="text-blue-400 text-3xl cursor-pointer" />
              </TelegramShareButton>
              <a href={`https://www.instagram.com/?url=${DOMAIN}${currentVilla.share_link}`} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 text-3xl cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .buy-button {
          margin-top: 10px;
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          position: relative;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default VillaSlider;
