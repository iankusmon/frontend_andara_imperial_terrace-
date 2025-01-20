"use client";
import React from 'react';
import Slider from 'react-slick';

const villaTypes = [
  {
    title: 'Da Vinci Residence (10 Unit)',
    concept: 'Konsep Arsitektur: Eropa Klasik',
    features: 'Ornamen megah, balkon luas, taman dalam.',
    facilities: 'Kolam renang pribadi dengan desain klasik, taman dalam yang asri dan tenang, balkon besar untuk menikmati pemandangan luas, serta fitur pencahayaan artistik di seluruh ruangan untuk menciptakan suasana mewah.',
    price: 'Rp 3.250.000.000,-',
    image: '/da_vinci.webp',
  },
  {
    title: 'Amsterdam Royale (7 Unit)',
    concept: 'Konsep Arsitektur: Rumah Belanda',
    features: 'Fasad bata merah, perapian modern, dapur mewah.',
    facilities: 'Taman hijau pribadi dengan nuansa pedesaan Belanda, kolam renang pribadi, serta rooftop dengan pemandangan indah untuk bersantai di sore hari.',
    price: 'Rp 3.200.000.000,-',
    image: '/amsterdam_royale.webp',
  },
  {
    title: 'Athena Height (9 Unit)',
    concept: 'Konsep Arsitektur: Yunani Klasik',
    features: 'Pilar kokoh, aksen putih bersih, rooftop BBQ area, kolam renang pribadi.',
    facilities: 'Kolam renang pribadi dengan desain pemandangan alami, rooftop BBQ area untuk acara santai, serta balkon dan hammock untuk relaksasi yang menyatu dengan alam.',
    price: 'Rp 3.150.000.000,-',
    image: '/athena_height.webp',
  },
];

const VillaSlider = () => {
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
        breakpoint: 1024, // Untuk tablet dan layar kecil
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Untuk mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="villa-slider-container">
      <Slider {...settings}>
        {villaTypes.map((villa, index) => (
          <div key={index} className="villa-card-container">
            <div className="villa-card">
              <img src={villa.image} alt={villa.title} className="villa-image" />
              <h2 className="villa-title">{villa.title}</h2>
              <p className="villa-concept"><strong>{villa.concept}</strong></p>
              <p><strong>Ciri Khas:</strong> {villa.features}</p>
              <p><strong>Fasilitas Tambahan:</strong> {villa.facilities}</p>
              <p><strong>Harga Jual:</strong> {villa.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VillaSlider;
