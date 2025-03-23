import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaFacebook, FaWhatsapp, FaTelegram, FaInstagram, FaYoutube, FaTiktok, FaTimes } from "react-icons/fa";
import { FacebookShareButton, WhatsappShareButton, TelegramShareButton } from "next-share";
import { useRouter } from "next/navigation";

const DOMAIN = "https://www.andaraimperialterrace.co.id";

interface Slide {
  id: number;
  image: string;
  link: string;
  message: string;
  label: string;
  share_link: string;
}

const mobileSlides: Slide[] = [
  { id: 1, image: "/menara_pissa_2.jpg", link: "/artikel/menara-pissa", share_link: "/sign-up/customer", message: "Lihat Keindahan Menara Pisa! Ayuk, Investasi sekarang: ", label: "Menara Pissa!" },
  { id: 2, image: "/colosseum_3.jpg", link: "/artikel/colosseum", share_link: "/sign-up/customer", message: "Lihat Keindahan Colosseum! Ayuk, Investasi sekarang: ", label: "Colosseum!" },
  { id: 3, image: "/venice_canals_2.jpg", link: "/artikel/venice-canals", share_link: "/sign-up/customer", message: "Lihat Keseruan naik perahu di Venice Canals! Ayuk, Investasi sekarang: ", label: "Venice Canals!!" },
  { id: 4, image: "/versailles_park_2.jpg", link: "/artikel/versailles-park", share_link: "/sign-up/customer", message: "Mari berpetualangan di Europe Versailles Park! Ayuk, Investasi sekarang: ", label: "Versailles Park!" },
  { id: 5, image: "/menara_imperial_terrace_2.jpg", link: "/artikel/menara-imperial-terrace", share_link: "/sign-up/customer", message: "Lihatlah Kesempurnaan Menara Imperial Terrace! Ayuk, Investasi sekarang: ", label: "Menara Imperial Terrace!" },
  { id: 6, image: "/tour_vehicle.jpg", link: "/artikel/tour-vehicle", share_link: "/sign-up/customer", message: "Temukan Tour Vehicle terkeren di Solo Raya! Ayuk, Investasi sekarang: ", label: "Tour Vehicle!" },
  { id: 7, image: "/play_story.jpg", link: "/artikel/play-story", share_link: "/sign-up/customer", message: "Temukan Play Story yang fun dan berhadiah menarik! Ayuk, Investasi sekarang: ", label: "Play Story!" },
  { id: 8, image: "/lobby_villa_resort.jpg", link: "/artikel/lobby-villa-resort", share_link: "/sign-up/customer", message: "Temukan Kelengkapan dan Kemewahab Lobby Villa Resort di Solo Raya! Ayuk, Investasi sekarang: ", label: "Lobby Villa Resort!" },
  { id: 9, image: "/restoran.jpg", link: "/artikel/imperial-dine-lounge-by-andara", share_link: "/sign-up/customer", message: "Temukan Imperial Dine & Lounge by Andara dengan pemandangan sawah terasering asri dan segar! Ayuk, Investasi sekarang: ", label: "Imperial Dine & Lounge by Andara!" }
];

const MobileSlider: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<Slide | null>(null);
  const [referralCode, setReferralCode] = useState("");
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token");
  
    // const referralCode = localStorage.getItem("referralCode") ?? "";
    const referralCode = localStorage.getItem("referralCode") || ""; // Jika null, atur menjadi string kosong
    setReferralCode(referralCode);
  }, []);
  

  return (
    <div className="mobile-slider-container">
      <Swiper modules={[Navigation, Autoplay]} spaceBetween={10} slidesPerView={1} autoplay={{ delay: 4000 }} loop navigation>
        {mobileSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <a href={slide.link} rel="noopener noreferrer">
              <div className="slide-item relative text-center">
                <Image src={slide.image} alt={slide.message} width={600} height={400} layout="responsive" quality={80} />
                <div className="mt-2 text-center text-sm font-semibold bg-white bg-opacity-75 px-3 py-1 rounded-md">{slide.label}</div>
                <div className="mt-2 flex justify-center">
                  <button onClick={() => { setCurrentSlide(slide); setShowPopup(true); }}
                    className="absolute top-5 right-5 border rounded-full p-2 bg-white shadow hover:shadow-md transition z-10">
                    <Image src="/share.svg" alt="Share" width={24} height={24} />
                  </button>
                </div>
              </div>
            </a>
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
            <div className="flex gap-3 justify-center">
            <FacebookShareButton url={`${DOMAIN}${currentSlide.share_link}?referral_code=${referralCode}&message=Temukan Properti Impian Anda!`} quote="Temukan properti impian Anda dengan Andara Imperial Terrace! 🌟🏡" hashtag={currentSlide.message}>
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
    </div>
  );
};

export default MobileSlider;
