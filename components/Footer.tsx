import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='footer-short-padding relative max-container footer-container py-36 flex xs:gap-12 lg:gap-20 xs:flex-col lg:flex-row'>
      <Image className='absolute right-[-4%] xs:top-0 lg:top-[-20%] ' src='/footer-object.png' alt='object' width={100} height={100} />

      <div className='flex flex-col gap-12 lg:w-1/3'>
        {/* LOGO & TEXT */}
        <div className='flex flex-col gap-4'>
          <div className='logo flex items-center gap-2'>
            <Image src='/logo_ait.png' alt='logo' width={50} height={50} />
            <h2 className='font-bold text-2xl'>Andara Imperial Terrace</h2>
          </div>
          <p className='opacity-70'>an oase Andara's application that will handle the process of sales, rent of property, tender and also tour features as well.
          </p>
        </div>

        {/* SOCIAL MEDIA */}
        <div className='social flex gap-4'>
          <Link href='/'>
            <Image src='/fb.png' alt='facebook' width={30} height={30} />
          </Link>
          <Link href='/'>
            <Image src='/twitter.png' alt='twitter'  width={30} height={30} />
          </Link>
          <Link href='/'>
            <Image src='/instagram.png' alt='instagram' width={30} height={30} />
          </Link>
        </div>
      </div>

      {/* LINK FOOTER */}
      <div className='right lg:w-2/3 flex xs:flex-col md:flex-row xs:gap-10 md:gap-0 md:justify-between'>
        <FooterCard title='Product' link1='Penjualan' link2='Penyewaan' link3='Paket' link4='KPR' />
        <FooterCard title='News' link1='Artikel' link2='Promo' link3='Affiliate Corner' />
        <FooterCard title='Meet Us' link1='+62812-2805-1080' link2='info@andaraimperialterrace.co.id' link3='Bendogantungan, Sumberejo, Kec. Klaten Sel., Kabupaten Klaten, Jawa Tengah 57426' />
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