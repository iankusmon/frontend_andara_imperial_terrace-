import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaTiktok
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer-short-padding relative max-container footer-container py-36 flex xs:gap-12 lg:gap-20 xs:flex-col lg:flex-row'>
      <Image className='absolute right-[-4%] xs:top-0 lg:top-[-20%] ' src='/footer-object.png' alt='object' width={100} height={100} />

      <div className='flex flex-col gap-12 lg:w-1/3'>
        {/* LOGO & TEXT */}
        <div className='flex flex-col gap-4'>
          <div className='logo flex items-center gap-2'>
            <Image src='/LogoAIT2.png' alt='logo' width={50} height={50} />
            <h2 className='font-bold text-2xl'>Andara Imperial Terrace</h2>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className='social flex gap-4'>
          <Link target='_blank' href='https://www.facebook.com/profile.php?id=61571750821242'>
          <FaFacebook className="text-black-600 text-3xl cursor-pointer" />
          </Link>
          <Link target='_blank' href='https://www.tiktok.com/@andaraimperialterrace?is_from_webapp=1&sender_device=pc'>
            <FaTiktok className="text-black text-2xl cursor-pointer" />
          </Link>
          <Link target='_blank' href='https://www.instagram.com/andaraimperialterrace/?next=%2F'>            
            <FaInstagram className="text-black-500 text-2xl cursor-pointer" />
          </Link>
          <Link target='_blank' href='https://www.youtube.com/@AndaraImperialTerrace'>
            <FaYoutube className="text-black-600 text-2xl cursor-pointer" />
          </Link>
          <Link target='_blank' href='https://wa.me/+6281228712277?text=Saya tertarik join Agent Affiliate, bagaimana cara daftarnya?'>
            <FaWhatsapp className="text-black-600 text-2xl cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* LINK FOOTER */}
      <div className='right lg:w-2/3 flex xs:flex-col md:flex-row xs:gap-10 md:gap-0 md:justify-between'>
        <FooterCard title='Product' link1='Penjualan' link2='Penyewaan' link3='Paket' link4='KPR' />
        <FooterCard title='News' link1='Artikel' link2='Promo' link3='Affiliate Corner' />
        <FooterCard title='Meet Us' link1='+6281228712277' link2='info@andaraimperialterrace.co.id' link3='Bendogantungan, Sumberejo, Kec. Klaten Sel., Kabupaten Klaten, Jawa Tengah 57426' />
      </div>
    </footer>
  )
}

interface FooterCardProps {
  title: string;
  link1: string;
  link2: string;
  link3: string;
  link4?: string;
}

const FooterCard = ({title, link1, link2, link3, link4} : FooterCardProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='text-2xl font-bold'>{title}</h3>
      <ul className='flex flex-col gap-4 mt-4'>
        <Link className='opacity-70' href='/'>{link1}</Link>
        <Link className='opacity-70' href='/'>{link2}</Link>
        <Link className='opacity-70' href='/'>{link3}</Link> 
        {link4 && <Link className='opacity-70' href='/'>{link4}</Link>} 
      </ul>                  
    </div>  
  )
}

export default Footer