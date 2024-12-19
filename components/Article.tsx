import React from 'react'
import Title from './Title'
import Image from 'next/image'

const Article = () => {
  return (
    <section className='relative max-container padding-container flex md:flex-row xs:flex-col py-10 md:h-[420px] xs:h-full gap-8'>
      <div className='bg-white h-[320px] w-[1469px] pb-4 rounded-3xl shadow-1 flex flex-col gap-4'>
      <div className='h-3/3 rounded-t-3xl'>
        <Image className='h-full w-full rounded-t-3xl' src={'/Article.png'} alt='img' width={1379} height={300} />
      </div>
    </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const ServiceCard = ({icon, title, subtitle} : ServiceCardProps) => {
  return (
    <div className='bg-white h-full w-full xs:py-10 md:py-0 min-w-[250px] rounded-3xl shadow-2 px-12 flex flex-col gap-12 items-center justify-center'>
      <Image src={icon} alt='icon' width={50} height={50} />
      <div className='flex flex-col items-center gap-3'>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p className='text-[14px] text-center opacity-60'>{subtitle}</p>
      </div>
    </div>
  )
}

export default Article