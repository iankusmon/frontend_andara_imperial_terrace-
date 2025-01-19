'use client'
import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';

const Landmark = () => {
  return (
    <section className='relative max-container padding-container flex flex-col gap-16 py-12'>
      <div className='top'>
        <Title title='Landmark' subtitle=''/>
      </div>

      <div className='bottom flex items-center justify-between'>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '@1.15': {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            '@1.60': {
              slidesPerView: 4,
              spaceBetween: 60,
            },
          }}
        >
          <SwiperSlide className='pb-12'>
            <LandmarkCard img='/Fasilitas.png' place='Paradise Beach, Bantayan Island' country='Rome, Italy' price='$550.16' rating='4.8' />
          </SwiperSlide>
          <SwiperSlide className='pb-12'>
            <LandmarkCard img='/Fasilitas.png' place='Paradise Beach, Bantayan Island' country='Rome, Italy' price='$550.16' rating='4.8' />
          </SwiperSlide>
          <SwiperSlide className='pb-12'>
            <LandmarkCard img='/Fasilitas.png' place='Paradise Beach, Bantayan Island' country='Rome, Italy' price='$550.16' rating='4.8' />
          </SwiperSlide>
          <SwiperSlide className='pb-12'>
            <LandmarkCard img='/Fasilitas.png' place='Paradise Beach, Bantayan Island' country='Rome, Italy' price='$550.16' rating='4.8' />
          </SwiperSlide>
          <SwiperSlide className='pb-12'>
            <LandmarkCard img='/Fasilitas.png' place='Paradise Beach, Bantayan Island' country='Rome, Italy' price='$550.16' rating='4.8' />
          </SwiperSlide>
          <SwiperSlide className='pb-12'>
            <LandmarkCard img='/Fasilitas.png' place='Paradise Beach, Bantayan Island' country='Rome, Italy' price='$550.16' rating='4.8' />
          </SwiperSlide>
        </Swiper>
      </div>
      
    </section>
  )
}

interface LandmarkCardProps {
  img: string;
  place: string;
  country: string;
  price: string;
  rating: string;
}

const LandmarkCard = ({img, place, country, price, rating} : LandmarkCardProps) => {
  return (
    <div className='bg-white h-[180px] w-[370px] pb-4 rounded-3xl shadow-2 flex flex-col gap-4'>
      <div className='h-3/3 rounded-t-3xl'>
        <Image className='h-full w-full rounded-t-3xl' src={img} alt='img' width={150} height={150} />
      </div> 
    </div>
  )
}


export default Landmark