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
    <footer className='footer-short-padding relative max-w-screen-xl mx-auto footer-container py-36 flex xs:gap-12 lg:gap-20 xs:flex-col lg:flex-row overflow-hidden'>
      <Image className='absolute right-[-4%] xs:top-0 lg:top-[-20%]' src='/footer-object.png' alt='object' width={100} height={100} />


      <div className='flex flex-col gap-12 lg:w-1/3'>
        {/* LOGO & TEXT */}
        <div className='flex flex-col gap-4'>
          <div className='logo flex items-center gap-2'>
            <Image src='/LogoAIT3.svg' alt='logo' width={80} height={80} />
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
        <FooterCard title='Product' links={[
          { name: 'AIT', url: '/artikel/kawasan-ait' },
          { name: 'Penyewaan', url: '/artikel/kawasan-ait' },
          { name: 'Paket', url: '/artikel/kawasan-ait' },
          { name: 'KPR', url: '/kpr-corner' },
        ]} />
        <FooterCard title='News' links={[
          { name: 'Kawasan AIT', url: '/artikel/kawasan-ait' },
          { name: 'Promo', url: '/promo' },
          { name: 'Affiliate Corner', url: '/affiliate-corner' },
        ]} />
        <FooterCard title='Contact Us' links={[
          { name: '+6281228712277', isText: true },
          { name: 'info@andaraimperialterrace.co.id', isText: true },
          { name: 'Bendogantungan, Sumberejo, Kec. Klaten Sel., Kabupaten Klaten, Jawa Tengah 57426', isText: true },
        ]} />
        <FooterCard title='FAQ' links={[
          { name: 'FAQ', url: '/faq' },
        ]} />
      </div>
    </footer>
  )
}

interface FooterCardProps {
  title: string;
  links: { name: string; url?: string; isText?: boolean }[];
}

const FooterCard = ({ title, links }: FooterCardProps) => {
  return (
      <div className='flex flex-col gap-4 w-full'>
      <h3 className='text-lg font-bold'>{title}</h3>
      <ul className='flex flex-col gap-4 mt-4 mr-4'>
        {links.map((link, index) =>
          link.isText ? (
            <span key={index} className='opacity-70'>{link.name}</span>
          ) : (
            <Link key={index} className='opacity-70' href={link.url || '#'}>
              {link.name}
            </Link>
          )
        )}
      </ul>                  
    </div>  
  )
}

export default Footer;
