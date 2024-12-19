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

const MiniBanner = () => {
  return (
    <section className='relative max-container padding-container flex flex-col gap-16 py-12 youtube-short-padding'>
      {/* <Image className='absolute xs:bottom-[65%] xs:right-[5%] md:bottom-[70%] xl:right-0' src='/yellowx.png' alt='yellow object' width={100} height={100} /> */}

      {/* <div className='top'>
        <Title title='top MiniBanner' subtitle='Explore top MiniBanner' />
      </div> */}

      <div className='bottom flex items-center justify-between'>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
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
              slidesPerView: 1,
              spaceBetween: 40,
            },
            '@1.60': {
              slidesPerView: 1,
              spaceBetween: 60,
            },
          }}
        >
          <SwiperSlide className='pb-12'>
            <MiniBannerCard img='/Banner.png' place='Paradise Beach, Bantayan Island' country='Rome, Italy' price='$550.16' rating='4.8' />
          </SwiperSlide>
          <SwiperSlide>
            <MiniBannerCard img='/Banner.png' place='Ocean with full of Colors' country='Maldives' price='$20.99' rating='4.5' />
          </SwiperSlide>
          <SwiperSlide>
            <MiniBannerCard img='/Banner.png' place='Mountain View, Above the cloud' country='United Arab Emeries' price='$150.99' rating='5.0' />
          </SwiperSlide>
        </Swiper>
      </div>
      
    </section>
  )
}

interface MiniBannerCardProps {
  img: string;
  place: string;
  country: string;
  price: string;
  rating: string;
}

const MiniBannerCard = ({img, place, country, price, rating} : MiniBannerCardProps) => {
  return (
    <div className='bg-white h-[320px] w-[1469px] pb-4 rounded-3xl shadow-1 flex flex-col gap-4'>
      <div className='h-3/3 rounded-t-3xl'>
        <Image className='h-full w-full rounded-t-3xl' src={img} alt='img' width={1379} height={300} />
      </div>
    </div>
  )
}


export default MiniBanner