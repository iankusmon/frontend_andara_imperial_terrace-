'use client'

import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ShareModal from "../../components/ShareModal"; // sesuaikan path jika diperlukan

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
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [shareLink, setShareLink] = useState("");

  useEffect(() => {
    const referral = localStorage.getItem("referralCode") || "";
    setReferralCode(referral);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareLink(`/${window.location.pathname}?referral_code=${referralCode}`);
    }
  }, [referralCode]);

  const handleOpenShareModal = () => {
    setIsShareModalOpen(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
  };

  return (
    <div className="relative">
      {/* Tombol share di pojok kanan atas dengan posisi fixed */}
      <div className="flex flex-col items-center w-full pt-20">
        <div className="fixed top-20 right-5 z-50">
        <button
          onClick={handleOpenShareModal}
          className="border rounded-full p-2 bg-white shadow hover:shadow-md transition"
        >
          <Image src="/share.svg" alt="Share" width={24} height={24} />
        </button>
      </div>

        {/* Narasi */}
        <div className="mt-8 text-center px-5 mx-auto">
          <h1 className="text-3xl font-bold">Hidup dalam Kemewahan dan Keharmonisan dengan Alam</h1>
          <p className="mt-4 text-lg text-gray-700 w-full max-w-4xl text-center px-5x mx-auto">
          The Royale Elegance adalah tempat di mana kemewahan dan keharmonisan dengan alam bersatu, menciptakan lingkungan yang elegan dan penuh kedamaian.
          </p>
        </div>

      {/* Promo Section */}
      <div className="w-full max-w-4xl text-center px-5 mx-auto mt-10">
        <h2 className="text-lg font-bold text-red-600 mb-4">💎 Cashback Rp 400 Juta – Keuntungan Maksimal Selama Pre-Launching! 1- 15 Maret 2025 !! 💎</h2>
        <p className="mt-4 text-lg text-gray-700 w-full max-w-4xl text-center px-5x mx-auto">
          Jangan lewatkan kesempatan emas untuk memiliki hunian impian di Andara Imperial Terrace dengan penawaran spesial!
          Selama masa Pre-Launching 1-15 Maret 2025, kami menghadirkan Cashback Eksklusif sebesar Rp 400 Juta.
        </p>
        <ul className="text-left text-lg text-gray-700 mb-6 list-inside" style={{textDecoration: 'none; '}}>
          <li>✅ Harga Lebih Ringan – Potongan harga langsung.</li>
          <li>✅ Penghematan Maksimal – Gunakan untuk interior atau investasi tambahan.</li>
          <li>✅ Keuntungan Lebih Cepat – Nilai properti terus meningkat.</li>
          <li>✅ Terbatas & Eksklusif – Berlaku hanya selama Pre-Launching.</li>
        </ul>
      </div>

      <div className="w-full max-w-4xl text-center px-5x mx-auto pb-10 ">
        <h2 className="text-lg font-bold text-blue-600 mb-4 w-full max-w-4xl text-center px-5x mx-auto">🎯 Bebas Biaya Pajak – Hemat Maksimal, Investasi Lebih Ringan! 🎯</h2>
        <p className="text-lg text-gray-700 mb-4 px-5">
          Selama masa Pre-Launching, seluruh biaya pajak pembelian, termasuk PPN 12% dan BPHTB 5%, akan ditanggung pengembang.
        </p>
        <table className="w-full border-collapse border border-gray-400 mb-6 px-5">
          <thead>
            <tr className="bg-gray-200 px-5">
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
      </div>
      
      {/* Asuransi Properti All Risk */}
      <div className="w-full max-w-4xl text-center px-5x mx-auto pb-10">
        <h2 className="text-lg font-bold text-green-600 mb-4">🏡 Asuransi Properti All Risk – Perlindungan Menyeluruh untuk Hunian Anda! 🔒</h2>
        <p className="text-lg text-gray-700 mb-4 px-5">
          Setiap unit di Andara Imperial Terrace dilengkapi dengan Asuransi Properti All Risk, memberikan perlindungan menyeluruh dari berbagai risiko tak terduga.
        </p>
        <ul className="text-left text-lg text-gray-700 mb-6 px-5 list-inside">
          <li>✅ <strong>Perlindungan dari Risiko Kebakaran</strong> 🔥 – Menjamin kerusakan akibat kebakaran, hubungan arus pendek, dan ledakan gas.</li>
          <li>✅ <strong>Lindungi dari Bencana Alam</strong> 🌪️🌊 – Meliputi gempa bumi, banjir, angin topan, longsor, hingga letusan gunung berapi.</li>
          <li>✅ <strong>Cakupan Kerusakan Struktural</strong> 🏠 – Menanggung biaya perbaikan akibat retak dinding, atap bocor, dan insiden struktural lainnya.</li>
          <li>✅ <strong>Proteksi terhadap Tindak Kejahatan</strong> 🔐 – Melindungi rumah dari pencurian, perusakan, atau vandalisme.</li>
          <li>✅ <strong>Biaya Perbaikan & Pemulihan</strong> 🛠️ – Menanggung biaya pemulihan rumah agar tetap dalam kondisi terbaik.</li>
        </ul>
        <p className="text-lg font-semibold text-gray-900">📌 <strong>Bonus Eksklusif:</strong> Dapatkan <span className="text-green-600">GRATIS</span> Asuransi Properti All Risk selama 1 tahun pertama!</p>
      </div>

      {/* Full Furnished dengan Furnitur Premium */}
      <div className="w-full max-w-4xl text-center px-5x mx-auto pb-10">
        <h2 className="text-lg font-bold text-purple-600 mb-4 px-5">🏡 Full Furnished dengan Furnitur Premium – Hunian Mewah Siap Huni! 🏡</h2>
        <p className="text-lg text-gray-700 mb-4 px-5">
          Nikmati pengalaman tinggal di rumah impian dengan furnitur premium berkualitas tinggi, setara dengan standar hotel bintang lima, siap huni tanpa perlu repot mengatur interior.
        </p>
        <ul className="text-left text-lg text-gray-700 mb-6 px-5">
          <li>✅ <strong>Full Furnished dengan Furnitur Premium</strong> – Setiap unit dilengkapi dengan sofa eksklusif, tempat tidur king-size, meja makan elegan, dan kitchen set modern.</li>
          <li>✅ <strong>Gratis Smart Home System</strong> – Kontrol pencahayaan, keamanan, dan suhu ruangan langsung dari smartphone Anda.</li>
          <li>✅ <strong>Bonus Paket Interior Custom</strong> – Pilih desain interior sesuai selera Anda: modern minimalis, skandinavian, atau klasik mewah.</li>
        </ul>
        <p className="text-lg font-semibold text-gray-900">📌 <strong>Hanya tersedia selama masa Pre-Launching!</strong></p>
      </div>

      {/* Promo Baru: Gratis Biaya Akad dan Notaris */}
      <div className="w-full max-w-4xl text-center px-5x mx-auto pb-10">
        <h2 className="text-lg font-bold text-orange-600 mb-4 px-5">🎉 GRATIS BIAYA AKAD DAN NOTARIS – INVESTASI TANPA BEBAN! 🎉</h2>
        <p className="text-lg text-gray-700 mb-4 px-5">
          Nikmati kemudahan memiliki hunian mewah di Andara Imperial Terrace tanpa perlu khawatir dengan biaya legalitas!
          Semua biaya Akta Jual Beli (AJB), balik nama Sertifikat Hak Guna Bangunan (SHGB), dan biaya notaris DITANGGUNG SEPENUHNYA oleh pengembang!
        </p>
        <ul className="text-left text-lg text-gray-700 mb-6  list-inside px-5">
          <li>✅ Bea Balik Nama (BBN) – Nilai hingga 2% dari harga transaksi.</li>
          <li>✅ Biaya Pembuatan Akta Jual Beli (AJB) – Sekitar 1% dari harga transaksi.</li>
          <li>✅ Biaya Notaris – Termasuk pengurusan legalitas, cek sertifikat tanah, dan administrasi lainnya.</li>
        </ul>
        <p className="text-lg font-semibold text-gray-900">💰 Total keuntungan yang Anda dapatkan: GRATIS biaya legalitas hingga Rp 114 juta!</p>
      </div>

      {/* Promo Baru: Program Referral Bonus Rp 60 Juta */}
      <div className="w-full max-w-4xl text-center px-5x mx-auto pb-10">
        <h2 className="text-lg font-bold text-teal-600 mb-4 px-5">🎁 Program Referral Bonus Rp 60 Juta – Dapatkan Keuntungan Tambahan! 🎁</h2>
        <p className="text-lg text-gray-700 mb-4">
          Bergabunglah dalam <strong>Andara Agen Affiliate Program</strong> dan dapatkan bonus Rp 60 juta setiap kali rekomendasi Anda menghasilkan pembelian unit di Andara Imperial Terrace.
        </p>
        <ul className="text-left text-lg text-gray-700 mb-6list-inside px-5">
          <li>✅ Bonus Langsung Rp 60 Juta untuk setiap unit yang berhasil direferensikan.</li>
          <li>✅ Tidak ada batasan jumlah referral – semakin banyak, semakin besar keuntungan Anda!</li>
          <li>✅ Bergabung gratis dan mulai mendapatkan penghasilan tambahan.</li>
        </ul>
      </div>

       {/* Promo Baru: Cicilan Tanpa Bunga 12 Bulan */}
       <div className="w-full max-w-4xl text-center px-5x mx-auto pb-10">
        <h2 className="text-lg font-bold text-blue-600 mb-4 px-5">📢 Cicilan Tanpa Bunga 12 Bulan – Kemudahan dan Fleksibilitas Pembayaran! 📢</h2>
        <p className="text-lg text-gray-700 mb-4">
          Andara Imperial Terrace memberikan kemudahan bagi Anda yang ingin memiliki properti mewah tanpa beban finansial berat melalui program Cicilan Tanpa Bunga 12 Bulan.
        </p>
        <ul className="text-left text-lg text-gray-700 mb-6  list-inside px-5">
          <li>✅ Pembayaran Tanpa Bunga – Tidak ada biaya tambahan.</li>
          <li>✅ Fleksibilitas Pembayaran – Memudahkan perencanaan keuangan Anda.</li>
          <li>✅ Mempermudah Pemilik Rumah Pertama – Tanpa keterlibatan bank atau lembaga keuangan.</li>
        </ul>
        <p className="text-lg font-semibold text-gray-900">💰 Segera manfaatkan kesempatan ini dan miliki hunian impian Anda dengan pembayaran yang lebih ringan!</p>
      </div>
      
      {/* Promo Baru: Buy Back Garansi 150% */}
      <div className="w-full max-w-4xl text-center px-5x mx-auto pb-10">
        <h2 className="text-lg font-bold text-red-600 mb-4 px-5">🔒 BUY BACK GARANSI 150% – Investasi Aman & Menguntungkan! 🔒</h2>
        <p className="text-lg text-gray-700 mb-4">
          Dengan Buy Back Garansi 150%, Andara Imperial Terrace menawarkan jaminan keamanan investasi Anda dengan pengembalian hingga 150% setelah periode tertentu.
        </p>
        <ul className="text-left text-lg text-gray-700 mb-6  list-inside px-5">
          <li>✅ Keamanan Finansial – Mengurangi risiko fluktuasi harga properti.</li>
          <li>✅ Pengembalian Investasi 50% di atas harga pembelian awal.</li>
          <li>✅ Fleksibilitas investasi untuk keuntungan maksimal.</li>
        </ul>
        <a target='_blank' href='https://wa.me/+6281228712277?text=Saya tertarik membeli villa Andara Imperial Terrace, bagaimana alur pembeliannya?'>
          <p className="text-lg font-semibold text-gray-900">📞 Hubungi kami sekarang dan amankan investasi Anda dengan jaminan terbaik!</p>
        </a>
      </div>

        {/* Tombol Menuju Halaman Sales */}
        <div className="w-full text-center py-10">
          <Link href="/sales">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
              Lihat Penawaran Villa
            </button>
          </Link>
        </div>
      </div>

      {/* ShareModal ditempatkan di luar konten utama */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={handleCloseShareModal}
        message="Bagikan Promo Melimpah dari AIT"
        shareLink={shareLink} // Use the state instead of directly accessing window
        referralCode={referralCode}
      />
    </div>
  );
}
