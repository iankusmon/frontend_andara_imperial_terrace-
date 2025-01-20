// components/BannerSlider.tsx
'use client'

import React from 'react';
import Slider from 'react-slick';
import SliderItem from './liderItem';

interface BannerItem {
  image: string;
  title: string;
  description: string;
}

const bannerItems: BannerItem[] = [
  {
    image: '/agent-affiliate.png', // Ganti dengan URL gambar yang sesuai
    title: 'Agent Affiliate yang Sukses',
    description: 'Artikel ini membahas tentang cara menjadi agent affiliate yang sukses.',
  },
  {
    image: '/tender-coming-soon.png', // Ganti dengan URL gambar yang sesuai
    title: 'Tender yang Coming Soon',
    description: 'Informasi terkait tender yang akan segera dimulai.',
  },
  {
    image: '/wisata-modern.png', // Ganti dengan URL gambar yang sesuai
    title: 'Wisata Modern Coming Soon',
    description: 'Tempat wisata modern yang akan dibuka dalam waktu dekat.',
  },
  {
    image: '/beach-club-coming-soon.jpg', // Ganti dengan URL gambar yang sesuai
    title: 'Beach Club Coming Soon',
    description: 'Pantai dan beach club yang sedang dalam proses pembangunan.',
  },
];

const BannerSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Menampilkan 3 gambar sekaligus
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Untuk tampilan di tablet atau lebih kecil
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Untuk tampilan di mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="banner-slider">
      <Slider {...settings}>
        {bannerItems.map((item, index) => (
          <SliderItem 
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
