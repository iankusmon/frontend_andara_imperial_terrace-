import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton } from "next-share";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobileSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Auto slide setiap 5 detik
    arrows: false,
  };

  const slides = [
    { image: "/slide_mobile2.png", link: "/hunian-murah" },
    { image: "/slide_mobile1.png", link: "/" },
    { image: "/slide_mobile3.png", link: "/hunian-murah" },
    { image: "/slide_mobile4.png", link: "/" }
  ];

  return (
    <div className="mobile-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-item">
            <a href={slide.link}  rel="noopener noreferrer">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={600}
                height={400}
                layout="responsive"
                quality={80}
              />
            </a>
            <div className="share-buttons">
              <FacebookShareButton url={slide.link}>
                <button className="share-btn">Facebook</button>
              </FacebookShareButton>
              <WhatsappShareButton url={slide.link}>
                <button className="share-btn">WhatsApp</button>
              </WhatsappShareButton>
              <TwitterShareButton url={slide.link}>
                <button className="share-btn">Twitter</button>
              </TwitterShareButton>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MobileSlider;

