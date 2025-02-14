'use client'
import Image from 'next/image';
import Link from 'next/link';

const steps = [
  {
    title: 'NUP',
    description: 'Pelajari lebih lanjut mengenai NUP (Nomor Urut Pemesanan)',
    image: '/alur_pemesanan_nup.png',
  },
  {
    title: 'Booking Fee',
    description: 'Informasi tentang Booking Fee yang perlu dibayar terlebih dahulu.',
    image: '/alur_pemesanan_booking_fee.png',
  },
  {
    title: 'Down Payment',
    description: 'Detail mengenai pembayaran DP (Down Payment) untuk pemesanan.',
    image: '/alur_pemesanan_down_payment.png',
  },
  {
    title: 'Pelunasan',
    description: 'Pelajari cara melakukan pelunasan untuk pemesanan.',
    image: '/alur_pemesanan_pelunasan.png',
  },
];

const AlurPemesanan = () => {
  return (
    <section className="alur-pemesanan p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Alur Pemesanan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="step bg-white p-4 rounded-lg shadow-lg text-center">
            <div className="relative w-full h-40 mb-4">
              <Image
                src={step.image}
                alt={step.title}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="mb-4 text-gray-700">{step.description}</p>
            <Link href="/article/alur-pemesanan">
              <button className="button bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">Lihat Detail</button>
            </Link>
        </div>
        ))}
      </div>
    </section>
  );
};

export default AlurPemesanan;