'use client'
// import React from 'react'
// import Title from './Title'
// import Image from 'next/image'
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// // import required modules
// import { Pagination } from 'swiper/modules';

// const Hero = () => {
//   return (
//     <section className='relative max-container padding-container flex flex-col gap-16 py-12'>
//       {/* <Image className='absolute xs:bottom-[65%] xs:right-[5%] md:bottom-[70%] xl:right-0' src='/yellowx.png' alt='yellow object' width={100} height={100} /> */}

//       {/* <div className='top'>
//         <Title title='top Hero' subtitle='Explore top Hero' />
//       </div> */}

//       <div className='bottom flex items-center justify-between'>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={0}
//           loop={true}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Pagination]}
//           breakpoints={{
//             '@0.00': {
//               slidesPerView: 1,
//               spaceBetween: 10,
//             },
//             '@0.75': {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             '@1.15': {
//               slidesPerView: 1,
//               spaceBetween: 40,
//             },
//             '@1.60': {
//               slidesPerView: 1,
//               spaceBetween: 60,
//             },
//           }}
//         >
//           <SwiperSlide className='pb-12'>
//             <HeroCard img='/Banner.png' place='Paradise Beach, Bantayan Island' country='Rome, Italy' price='$550.16' rating='4.8' />
//           </SwiperSlide>
//           <SwiperSlide>
//             <HeroCard img='/Banner.png' place='Ocean with full of Colors' country='Maldives' price='$20.99' rating='4.5' />
//           </SwiperSlide>
//           <SwiperSlide>
//             <HeroCard img='/Banner.png' place='Mountain View, Above the cloud' country='United Arab Emeries' price='$150.99' rating='5.0' />
//           </SwiperSlide>
//         </Swiper>
//       </div>
      
//     </section>
//   )
// }

// interface HeroCardProps {
//   img: string;
//   place: string;
//   country: string;
//   price: string;
//   rating: string;
// }

// const HeroCard = ({img, place, country, price, rating} : HeroCardProps) => {
//   return (
//     <div className='bg-white h-[320px] w-[1469px] pb-4 rounded-3xl shadow-1 flex flex-col gap-4'>
//       <div className='h-3/3 rounded-t-3xl'>
//         <Image className='h-full w-full rounded-t-3xl' src={img} alt='img' width={1379} height={300} />
//       </div>
//     </div>
//   )
// }

// import React from "react";
// import Slider from "react-slick";
// import Image from "next/image";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Hero: React.FC = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000, // Auto slide setiap 5 detik
//     arrows: false,
//   };

//   const slides = [
//     "/Homeslide1.png",
//     "/Homeslide2.png",
//     "/Homeslide3.png",
//   ];

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="slide-item">
//             <Image
//               src={slide}
//               alt={`Slide ${index + 1}`}
//               width={1200}
//               height={500}
//               layout="responsive"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// import React from "react";
// import DesktopSlider from "./slider/DesktopSlider";
// import MobileSlider from "./slider/MobileSlider";
// import { useEffect, useState } from "react";

// const Hero: React.FC = () => {
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     handleResize(); // Set initial state
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return <>{isMobile ? <MobileSlider /> : <DesktopSlider />}</>;
// };


import React from "react";
import DesktopSlider from "./slider/DesktopSlider";
import MobileSlider from "./slider/MobileSlider";
import { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <MobileSlider /> : <DesktopSlider />}</>;
};


export default Hero