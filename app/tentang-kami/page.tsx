import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TentangKami = () => {
  return (
    <div className='container mx-auto px-4 py-12'>
      {/* Logo */}
      <div className='flex justify-center mb-8 pt-40'>
        <Image src='/LogoAIT2.png' alt='Andara Imperial Terrace' width={150} height={150} />
      </div>
      
      {/* Visi */}
      <section className='mb-12'>
        <h2 className='text-3xl font-bold text-center mb-4'>Visi</h2>
        <p className='text-lg text-center max-w-3xl mx-auto'>
          Menjadi Kawasan Akomodasi, MICE, Day Club, dan Wisata Modern Terintegrasi Bertaraf Internasional di Solo Raya
          yang Menggabungkan Kemewahan Arsitektur Eropa, Budaya, Keindahan Alam, dan Teknologi Modern untuk Menciptakan
          Pengalaman Hidup yang Spektakuler dan Bernilai Investasi Tinggi.
        </p>
      </section>

      {/* Misi */}
      <section className='mb-12'>
        <h2 className='text-3xl font-bold text-center mb-4'>Misi</h2>
        <ul className='list-disc pl-6 max-w-4xl mx-auto text-lg space-y-4'>
          <li><strong>Menciptakan Ikon Arsitektur Berkelas Dunia</strong>: Menghadirkan landmark seperti Colosseum, Menara Eiffel, dan lainnya.</li>
          <li><strong>Menawarkan Pengalaman Wisata Modern</strong>: Fasilitas inovatif seperti Water Coaster, Infinity Pool, dan atraksi budaya.</li>
          <li><strong>Menyediakan Hunian Mewah</strong>: 197 unit villa dengan smart home, private pool, dan rooftop eksklusif.</li>
          <li><strong>Membangun Komunitas yang Harmonis</strong>: Coworking space, festival budaya, dan pilihan kuliner internasional.</li>
          <li><strong>Menghadirkan Keberkahan & Kemakmuran</strong>: Kawasan investasi yang menguntungkan bagi stakeholder.</li>
          <li><strong>Mengharmoniskan Alam dan Kehidupan</strong>: Taman hijau, konsep ramah lingkungan, dan sistem keberlanjutan.</li>
        </ul>
      </section>

      {/* Informasi Tambahan */}
      <section className='mb-12'>
        <h2 className='text-3xl font-bold text-center mb-4'>Informasi</h2>
        <div className='flex flex-wrap justify-center gap-8'>
          <InfoCard title='Produk' links={['Penjualan', 'Penyewaan', 'Paket', 'KPR']} />
          <InfoCard title='Berita' links={['Artikel', 'Promo', 'Affiliate Corner']} />
          <InfoCard title='Kontak' links={['+6281228712277', 'info@andaraimperialterrace.co.id', 'Bendogantungan, Klaten, Jawa Tengah']} />
        </div>
      </section>
    </div>
  );
};

interface InfoCardProps {
  title: string;
  links: string[];
}

const InfoCard = ({ title, links }: InfoCardProps) => {
  return (
    <div className='bg-gray-100 p-6 rounded-lg shadow-md w-64 text-center'>
      <h3 className='text-xl font-bold mb-4'>{title}</h3>
      <ul className='space-y-2'>
        {links.map((link, index) => (
          <li key={index} className='text-gray-700 opacity-80'>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default TentangKami;
