import React from 'react';
import Title from './Title';
import Image from 'next/image';

const Penjualan = () => {
  return (
    <section className='relative max-container padding-container flex flex-col py-10 w-full gap-8'>
      <div className='bg-white max-w-[1469px] pb-4 rounded-3xl shadow-1 flex flex-col gap-4 mx-auto'>
        <div className='h-auto rounded-t-3xl overflow-hidden'>
          <Image 
            className='rounded-t-3xl object-cover w-full h-auto' 
            src={'/type-villa.png'} 
            alt='img' 
            width={1379} 
            height={2000} 
            layout="responsive" 
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const ServiceCard = ({ icon, title, subtitle }: ServiceCardProps) => {
  return (
    <div className='bg-white h-full w-full xs:py-10 md:py-0 min-w-[250px] rounded-3xl shadow-2 px-12 flex flex-col gap-12 items-center justify-center'>
      <Image 
        src={icon} 
        alt='icon' 
        width={50} 
        height={50} 
        layout="intrinsic" 
      />
      <div className='flex flex-col items-center gap-3'>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p className='text-[14px] text-center opacity-60'>{subtitle}</p>
      </div>
    </div>
  );
};

export default Penjualan;