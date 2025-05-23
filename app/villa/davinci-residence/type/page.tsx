"use client"

import React, { useState, useEffect, useRef } from "react";
import ShareModal from "../../../../components/ShareModal"; // sesuaikan path jika diperlukan
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const DavinciResidence = () => {
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

  const sliderImages = [
    "/davinci_1_1.png",
    "/davinci_2_1.png",
    "/davinci_3_1.png",
    "/davinci_4_1.png",
    "/davinci_5_1.png",
    "/davinci_6_1.png",
  ];

  const totalUnits = 10;
  const availableUnits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.autoplay = true;
      video.play().catch(error => console.error("Video play failed", error));
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gray-100 pt-20">
      {/* Video Section */}
      <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[900px] overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/davinci_vidio_2.mp4"
          autoPlay
          loop
          playsInline
        />
        {/* Tombol share dengan icon di pojok kanan atas */}
        <button
          onClick={handleOpenShareModal}
          className="absolute top-5 right-5 border rounded-full p-2 bg-white shadow hover:shadow-md transition z-10"
        >
          <Image src="/share.svg" alt="Share" width={24} height={24} />
        </button>
        {/* ShareModal diposisikan di atas dengan properti z-index */}
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={handleCloseShareModal}
          message="Bagikan Kemewahan Villa Type Davinci Residence"
          // shareLink="/sign-up/customer"
          shareLink={shareLink} // Use the state instead of directly accessing window
          referralCode={referralCode}
        />
      </div>

      {/* Image Slider */}
      <div className="w-full py-8">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Davinci Residence ${index + 1}`}
                width={1200}
                height={600}
                className="w-full rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Narasi */}
      <div className="mt-6 text-center px-5 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold">Villa Da Vinci Residence</h1>
        <p className="mt-4 text-lg text-gray-700 w-full max-w-4xl text-center px-5x mx-auto">
          Villa Da Vinci Residence bukan hanya menawarkan keindahan dan kenyamanan sebagai tempat tinggal,
          tetapi juga peluang investasi yang luar biasa. Dengan desain elegan ala Eropa klasik dan fasilitas
          sekelas resor hotel bintang 5, villa ini menjadi pilihan terbaik untuk investasi properti yang
          menjanjikan profit tinggi dan manfaat jangka panjang.
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

      {/* Available Units Section */}
      <picture>
        <source srcSet="/masterplan_kavling.png" media="(min-width: 768px)" />
        <img
          src="/masterplan_kavling.png"
          alt="KPR Andara Imperial Terrace"
          className="w-full mb-4 pt-10"
        />
      </picture>
      <h2 className="text-center text-2xl font-bold text-gray-800 my-4">Available Units</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center p-4">
        {Array.from({ length: totalUnits }, (_, i) => i + 1).map((unit) => (
          <Link
            key={unit}
            href={`/villa/davinci-residence/unit/${unit}`}
            className={`p-4 rounded-lg shadow-lg font-bold transition ${
              availableUnits.includes(unit)
                ? "bg-gold text-white hover:bg-black"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <p className="text-lg">Unit DV.{unit}</p>
            <p className="text-sm">
              {availableUnits.includes(unit) ? "Available" : "Sold Out"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DavinciResidence;
