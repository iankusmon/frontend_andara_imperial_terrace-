import Link from 'next/link';

const salesData = [
  {
    title: 'Davinci Residence',
    image: '/davinci_1_1.png',
    link: '/villa/davinci-residence/type',
  },
  {
    title: 'Amsterdam Royale',
    image: '/amsterdam_1_1.png',
    link: '/villa/amsterdam-royal/type',
  },
  {
    title: 'Athena Height',
    image: '/athena_1_1.png',
    link: '/villa/athena-height/type',
  },
];

export default function SalesPage() {
  return (
    <div className="flex flex-col items-center w-full pt-20">
      <div className="text-center py-10 px-5 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Hidup dalam Kemewahan dan Keharmonisan dengan Alam</h1>
        <p className="text-lg text-gray-700">
          The Royale Elegance adalah tempat di mana kemewahan dan keharmonisan dengan alam bersatu, menciptakan
          lingkungan yang elegan dan penuh kedamaian. Kawasan ini menonjolkan arsitektur yang penuh karakter,
          mulai dari pilar kokoh ala Yunani Klasik di Athena Height, balkon luas dan taman hijau di Da Vinci Residence,
          hingga pesona fasad bata merah yang hangat di Amsterdam Royale. Setiap villa memiliki desain unik yang
          mencerminkan gaya hidup mewah yang seimbang dengan keindahan alam sekitar. Di sini, penghuni dapat menikmati
          kehidupan berkelas yang mengutamakan kenyamanan dan keselarasan dengan alam.
        </p>
      </div>

      {/* Promo Section */}
      <div className="w-full max-w-4xl text-center px-5 pb-10">
        <h2 className="text-3xl font-bold text-red-600 mb-4">💎 Cashback Rp 400 Juta – Keuntungan Maksimal Selama Pre-Launching! 1- 15 Maret 2025 !! 💎</h2>
        <p className="text-lg text-gray-700 mb-4">
          Jangan lewatkan kesempatan emas untuk memiliki hunian impian di Andara Imperial Terrace dengan penawaran spesial!
          Selama masa Pre-Launching 1-15 Maret 2025, kami menghadirkan Cashback Eksklusif sebesar Rp 400 Juta.
        </p>
        <ul className="text-left text-lg text-gray-700 mb-6 list-disc list-inside">
          <li>✅ Harga Lebih Ringan – Potongan harga langsung.</li>
          <li>✅ Penghematan Maksimal – Gunakan untuk interior atau investasi tambahan.</li>
          <li>✅ Keuntungan Lebih Cepat – Nilai properti terus meningkat.</li>
          <li>✅ Terbatas & Eksklusif – Berlaku hanya selama Pre-Launching.</li>
        </ul>
        <p className="text-lg font-semibold text-gray-900">📞 Hubungi kami sekarang untuk informasi lebih lanjut!</p>
      </div>

      <div className="w-full max-w-4xl text-center px-5 pb-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">🎯 Bebas Biaya Pajak – Hemat Maksimal, Investasi Lebih Ringan! 🎯</h2>
        <p className="text-lg text-gray-700 mb-4">
          Selama masa Pre-Launching, seluruh biaya pajak pembelian, termasuk PPN 12% dan BPHTB 5%, akan ditanggung pengembang.
        </p>
        <table className="w-full border-collapse border border-gray-400 mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Metode Pembayaran</th>
              <th className="border border-gray-400 px-4 py-2">Persentase Pajak Ditanggung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Cash Keras 100%</td>
              <td className="border border-gray-400 px-4 py-2">100%</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Cash Tempo 3 Bulan</td>
              <td className="border border-gray-400 px-4 py-2">80%</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Cash Tempo 6 Bulan</td>
              <td className="border border-gray-400 px-4 py-2">60%</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Cash Tempo 12 Bulan</td>
              <td className="border border-gray-400 px-4 py-2">20%</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">KPR</td>
              <td className="border border-gray-400 px-4 py-2">10%</td>
            </tr>
          </tbody>
        </table>
        <p className="text-lg font-semibold text-gray-900">📞 Hubungi kami sekarang untuk informasi lebih lanjut!</p>
      </div>

      {/* Villa Listings */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-5 pb-20">
        {salesData.map((villa, index) => (
          <Link key={index} href={villa.link}>
            <div className="relative group cursor-pointer">
              <img
                src={villa.image}
                alt={villa.title}
                className="w-full h-[600px] object-cover rounded-lg shadow-lg group-hover:opacity-75 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h2 className="text-white text-3xl font-bold">{villa.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}