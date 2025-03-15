"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "next-share";
import { useRouter } from "next/navigation";
import { FaFacebook, FaWhatsapp, FaTelegram, FaInstagram, FaTimes } from "react-icons/fa";

const DOMAIN = "https://www.andaraimperialterrace.co.id";

const villaTypes = [
  {
    title: "Da Vinci Residence",
    concept: "Konsep Arsitektur: Eropa Klasik",
    features: "Ornamen megah, balkon luas, taman dalam.",
    facilities: "Kolam renang pribadi dengan desain klasik, taman dalam yang asri dan tenang, balkon besar untuk menikmati pemandangan luas, serta fitur pencahayaan artistik di seluruh ruangan untuk menciptakan suasana mewah.",
    image: "/davinci_residence.png",
    link: "/villa/davinci-residence/type",
    share_link: "/sign-up/customer",
    share_cta: "Nikmati Kemewahan Da Vinci Residence hanya 10 unit!"
  },
  {
    title: "Amsterdam Royale",
    concept: "Konsep Arsitektur: Rumah Belanda",
    features: "Fasad bata merah, perapian modern, dapur mewah.",
    facilities: "Taman hijau pribadi dengan nuansa pedesaan Belanda, kolam renang pribadi, serta rooftop dengan pemandangan indah untuk bersantai di sore hari dan pagi hari.",
    image: "/amsterdam_royale.png",
    link: "villa/amsterdam-royal/type",
    share_link: "/sign-up/customer",
    share_cta: "Nikmati Kemewahan Amsterdam Royale hanya 9 Unit!"
  },
  {
    title: "Athena Height",
    concept: "Konsep Arsitektur: Yunani Klasik",
    features: "Pilar kokoh, aksen putih bersih, rooftop BBQ area, kolam renang pribadi.",
    facilities: "Kolam renang pribadi dengan desain pemandangan alami, rooftop BBQ area untuk acara santai, serta balkon dan hammock untuk relaksasi yang menyatu dengan alam.",
    image: "/athena_height.png",
    link: "/villa/athena-height/type",
    share_link: "/sign-up/customer",
    share_cta: "Nikmati Kemewahan Athena Height hanya 7 Unit!"
  },
];

const VillaSlider = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  // const [currentVilla, setCurrentVilla] = useState(null);
  const [currentVilla, setCurrentVilla] = useState<null | (typeof villaTypes)[0]>(null);
  const [referralCode, setReferralCode] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token");

    // const referralCode = localStorage.getItem("referralCode") ?? "";
    const referralCode = localStorage.getItem("referralCode") || ""; // Jika null, atur menjadi string kosong
    setReferralCode(referralCode);
  }, []);

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
          <Link key={index} href={villa.link} className="villa-card-container">
            <div className="villa-card">
              <img src={villa.image} alt={villa.title} className="villa-image" />
              <div className="villa-content">
                <h2 className="villa-title">{villa.title}</h2>
                <p><strong>{villa.concept}</strong></p>
                <p><strong>Ciri Khas:</strong> {villa.features}</p>
                <p><strong>Fasilitas Tambahan:</strong> {villa.facilities}</p>
              </div>
            </div>
          </Link>
        ))}
      </Slider>

      {showModal && currentVilla && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={() => setShowModal(false)}>
          <div className="modal-content bg-white p-6 rounded-lg w-96 text-center relative z-50" onClick={(e) => e.stopPropagation()}>
            {/* Tombol Close */}
            <button className="close-button" onClick={() => setShowModal(false)}>
              <FaTimes className="text-gray-600 text-2xl" />
            </button>
            <h2 className="text-center mb-3">Bagikan {currentVilla.share_cta}</h2>
            <div className="flex gap-3 justify-center">
              <FacebookShareButton url={`${DOMAIN}${currentVilla.share_link}?referral_code=${referralCode}`} hashtag="#PropertiImpian">
                <FaFacebook className="text-blue-600 text-3xl cursor-pointer" />
              </FacebookShareButton>
              <WhatsappShareButton url={`${DOMAIN}${currentVilla.share_link}?referral_code=${referralCode}`} title={currentVilla.share_cta} separator=" - ">
                <FaWhatsapp className="text-green-500 text-3xl cursor-pointer" />
              </WhatsappShareButton>
              <TelegramShareButton url={`${DOMAIN}${currentVilla.share_link}?referral_code=${referralCode}`} title={currentVilla.share_cta}>
                <FaTelegram className="text-blue-400 text-3xl cursor-pointer" />
              </TelegramShareButton>
              <a href={`https://www.instagram.com/?url=${DOMAIN}${currentVilla.share_link}?referral_code=${referralCode}`} target="_blank" rel="noopener noreferrer">
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

        .villa-card-container {
          cursor: pointer;
        }
        .villa-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          text-align: center;
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 20px;
        }
        .villa-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .villa-content {
          flex-grow: 1;
        }
        .villa-title {
          font-size: 20px;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default VillaSlider;
