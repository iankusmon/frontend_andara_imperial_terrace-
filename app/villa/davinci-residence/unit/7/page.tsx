"use client"
import React, { useState, useEffect, useRef } from "react";
import ShareModal from "../../../../../components/ShareModal"; // sesuaikan path jika diperlukan
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faBath } from '@fortawesome/free-solid-svg-icons';

const VillaDaVinci = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [referralCode, setReferralCode] = useState("");

  useEffect(() => {
    const referral = localStorage.getItem("referralCode") || "";
    setReferralCode(referral);
  }, []);

  const handleOpenShareModal = () => {
    setIsShareModalOpen(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.autoplay = true;
      video.play().catch(error => console.error("Video play failed", error));
    }
  }, []);

  const galleryImages = [
    // "/davinci_10_1.png",
    "/davinci_11_1.png",
    "/davinci_12_1.png",
    "/davinci_13_1.png",
    "/davinci_14_1.png",
    // "/davinci_8_1.png",
  ];

  const exclusiveRooms = ["/davinci_10_1.png", "/davinci_11_1.png"];
  const otherFacilities = ["/davinci_10_1.png", "/davinci_11_1.png", "/davinci_12_1.png", "/davinci_13_1.png"];

  return (
    <div className="relative w-full min-h-screen bg-gray-100 pt-20">
      {/* Full-width Autoplay Video */}
        <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[900px] overflow-hidden">
        <video
          ref={videoRef}
          src="/davinci_vidio_2.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
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
          message="Bagikan Kemewahan Villa Unit DV7 Davinci Residence"
          shareLink="/sign-up/customer"
          referralCode={referralCode}
        />
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 pt-6">

        {/* Slider Galeri */}
        <div className="mt-6">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {galleryImages.map((src, index) => (
              <div key={index} className="h-[250px] sm:h-[400px] md:h-[600px] lg:h-[800px] relative">
                <Image src={src} alt={`Gallery ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
            ))}
          </Carousel>
        </div>
        
        {/* Narasi */}
        <div className="mt-8 text-center px-5 mx-auto">
          <h1 className="text-3xl font-bold">Villa Da Vinci Residence</h1>
          <p className="mt-4 text-lg text-gray-700 w-full max-w-4xl text-center px-5x mx-auto">
          Villa Da Vinci Residence bukan hanya menawarkan keindahan dan kenyamanan sebagai tempat tinggal,
            tetapi juga peluang investasi yang luar biasa. Dengan desain elegan ala Eropa klasik dan fasilitas
            sekelas resor hotel bintang 5, villa ini menjadi pilihan terbaik untuk investasi properti yang
            menjanjikan profit tinggi dan manfaat jangka panjang.
          </p>
          <p className="mt-4 text-lg text-gray-700 w-full max-w-4xl text-center px-5x mx-auto">
          Andara Imperial Terrace tidak hanya menawarkan kemewahan, tetapi juga kesempatan investasi yang cerdas. Dengan desain arsitektur klasik yang abadi, fasilitas premium, serta lokasi strategis, properti ini memiliki potensi keuntungan tinggi baik dari kenaikan nilai jual kembali maupun pendapatan pasif melalui penyewaan jangka pendek atau panjang.

          </p>
        </div>

        <div className="w-full max-w-4xl text-center px-5 mx-auto mt-10">
        <h2 className="text-lg font-bold text-blue-600 mb-4"> Spesifikasi Villa Amsterdam Royale:</h2>
        <ul className="text-left text-lg text-gray-700 mb-6 list-inside">
          <li>📏 Luas Tanah / Bangunan: <strong>72/129m²</strong></li>
          <li>🏠 Jumlah Lantai: <strong>2</strong></li>
          <li>🛏 Kamar Tidur: <strong>3</strong> (Executive Suite, Junior Suite, Presidential Suite)</li>
          <li><FontAwesomeIcon icon={faBath} className="text-blue-500" /> Kamar Mandi: <strong>5</strong></li>
          <li><FontAwesomeIcon icon={faTv} className="text-blue-500" /> TV: <strong>5</strong></li>
          <li>🔑 Kunci Smartlock: <strong>6</strong> (5 Pintu dan 1 Gerbang Garasi)</li>
          <li>❄️ Kulkas: <strong>4</strong> (3 di Kamar, 1 di Ruang Tamu)</li>
          <li>🔒 Brankas: <strong>3</strong> (Di Lemari Kamar Tidur)</li>
          <li>🏊 Private Pool</li>
          <li>🍽 Dapur</li>
          <li>🍽 Ruang Makan</li>
          <li>🏡 Ruang Tamu</li>
          <li>🌱 Rooftop & BBQ Area</li>
          <li>🎨 Full Dekorasi Interior & Furnished seperti Resort Hotel Bintang 5</li>
          <li>📱 Internet of Things (IoT), CCTV, Telephone Kabel, Wifi Router</li>
          <li>🧯 Keamanan: APAR, Fire Detector, First Aid Kit, Hidran Kebakaran</li>
          <li>🛡 Asuransi Property All Risk (PAR)</li>
        </ul>
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

        {/* Harga */}
        <div className="mt-4 text-center">
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">
            Harga: <span className="text-red-500 line-through">Rp 3,25 M</span> <span className="text-green-600 font-bold">Rp 2,85 M</span>
          </h2>
        </div>

        {/* Button NUP */}
        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/nup")}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg text-sm sm:text-lg font-semibold hover:bg-blue-700 transition"
          >
            Segera NUP Sekarang
          </button>
        </div>

        {/* Spesifikasi Kamar */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-bold text-center">Spesifikasi Kamar</h2>

          {/* Presidential Suite */}
          <div className="mt-6">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 text-center">Presidential Suite</h3>
            <p className="mt-4 text-lg text-gray-700 w-full max-w-4xl text-center px-5x mx-auto">
            Presidential Suite Room adalah kamar tidur utama yang luas dan mewah. Dilengkapi dengan kamar mandi pribadi yang memiliki bathtub di dekat jendela kaca Bay Window, menciptakan suasana spa pribadi yang menenangkan. Fasilitas dalam kamar mencakup king-size bed, TV, AC, mini refrigerator, brankas, hair dryer, coffee & tea maker, lemari pakaian, rak sandal, meja kerja, dan sofa kecil. Dekorasi elegan dengan lukisan, lampu baca, lampu LED, dan lampu tidur menambah kesan mewah. Kamar mandi pribadi dilengkapi dengan air panas/dingin serta perlengkapan lengkap seperti handuk, cermin besar, dan soap dispenser.

            </p>
            
           {/* Container untuk gambar */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="w-full sm:w-1/2">
                <Image src="/davinci_7_1.png" alt="Presidential Suite" width={800} height={600} className="rounded-lg w-full" />
              </div>
              <div className="w-full sm:w-1/2">
                <Image src="/davinci_bath_presidensial.png" alt="Presidential Suite" width={800} height={600} className="rounded-lg w-full" />
              </div>
            </div>
          </div>

          {/* Executive Suite */}
          <div className="mt-6">

            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 text-center">Executive Suite</h3>
              <p className="mt-4 text-lg text-gray-700 w-full max-w-4xl text-center px-5x mx-auto">
                Executive Suite Room berlokasi di lantai pertama dan menawarkan kenyamanan maksimal. Dilengkapi dengan ranjang king-size yang empuk, TV, AC, mini refrigerator, dan brankas, kamar ini juga memiliki fasilitas lengkap seperti coffee & tea maker, lemari pakaian, dan sofa kecil yang menciptakan pengalaman menginap yang berkualitas.
              </p>
              
            {/* Container untuk gambar */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="w-full sm:w-1/2">
                  <Image src="/davinci_8_1.png" alt="Presidential Suite" width={800} height={600} className="rounded-lg w-full" />
                </div>
                <div className="w-full sm:w-1/2">
                  <Image src="/davinci_bed_executive.png" alt="Presidential Suite" width={800} height={600} className="rounded-lg w-full" />
                </div>
              </div>
          </div>

          {/* Junior Suite */}
          <div className="mt-6">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 text-center">Junior Suite Suite</h3>
              <p className="mt-4 text-lg text-gray-700 w-full max-w-4xl text-center px-5x mx-auto">
                Junior Suite Room dilengkapi dengan fasilitas premium, termasuk king-size bed, TV, AC, mini refrigerator, brankas, hair dryer, coffee & tea maker, lemari pakaian, rak sandal, meja kerja, dan sofa kecil. Kelebihan utama kamar ini adalah akses langsung ke rooftop, yang tidak tersedia bagi penghuni Executive Suite Room. Rooftop BBQ Area menjadi tempat sempurna untuk menikmati malam bersama keluarga atau teman dengan pergola, kursi gantung, dan peralatan BBQ lengkap.
              </p> 
            {/* Container untuk gambar */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 mb-10">
              <div className="w-full sm:w-1/2">
                <Image src="/davinci_9_1.png" alt="Presidential Suite" width={800} height={600} className="rounded-lg w-full" />
              </div>
            <div className="w-full sm:w-1/2">
              <Image src="/davinci_bath_junior.png" alt="Presidential Suite" width={800} height={600} className="rounded-lg w-full" />
            </div>
          </div>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default VillaDaVinci;
