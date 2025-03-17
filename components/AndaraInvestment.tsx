"use client";

import React from "react";
import { FaMoneyBillWave, FaBuilding, FaHandshake, FaShieldAlt } from "react-icons/fa";
import { FaHotel, FaBriefcase, FaCocktail, FaTree } from "react-icons/fa";
import Button from "@/components/ui/Button"; // Pastikan Button ini ada di lokasi yang benar

const investmentFeatures = [
  {
    icon: <FaMoneyBillWave className="text-gold-500 text-4xl" />,
    title: "Passive Income Menguntungkan",
    description: "Dapatkan 60% dari laba bersih sebagai penghasilan pasif tanpa perlu repot mengelola properti.",
  },
  {
    icon: <FaBuilding className="text-gold-500 text-4xl" />,
    title: "Fleksibilitas Sewa",
    description: "Sewakan seluruh villa atau per kamar untuk memaksimalkan pendapatan.",
  },
  {
    icon: <FaHandshake className="text-gold-500 text-4xl" />,
    title: "Dikelola Profesional",
    description: "PT. Andara Rejo Makmur mengelola operasional dengan okupansi tinggi dan layanan terbaik.",
  },
  {
    icon: <FaShieldAlt className="text-gold-500 text-4xl" />,
    title: "Keamanan Investasi",
    description: "Garansi buyback 150% memberikan kepastian keuntungan yang lebih tinggi dari harga pembelian.",
  },
];

const AndaraInvestment: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Imperial Passive Income</h2>
        <p className="text-lg text-gray-700 mt-4">
          Investasi Menguntungkan di Andara Imperial Terrace, Kawasan Modern Berkelas Internasional di Solo Raya
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {investmentFeatures.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Investment Details */}
      {/* <div className="bg-white p-10 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">Mengapa Memilih Andara Imperial Terrace?</h3>
        <p className="text-gray-700 leading-relaxed">
          Andara Imperial Terrace menawarkan kesempatan istimewa bagi Anda untuk memiliki hunian eksklusif dengan desain
          arsitektur khas Eropa di lokasi strategis Solo Raya. Proyek ini terdiri dari <strong>197 villa dengan 15 tipe pilihan</strong>, 
          dirancang untuk memenuhi kebutuhan gaya hidup modern dan prestisius.
        </p>

        <h4 className="text-2xl font-bold text-gray-900 mt-6 flex items-center">
          <FaMoneyBillWave className="text-gold-500 mr-3" /> Passive Income Menguntungkan
        </h4>
        <p className="text-gray-700">
          Dengan konsep <strong>IMPERIAL Passive Income</strong>, pemilik villa dapat memperoleh penghasilan pasif yang stabil melalui 
          sistem bagi hasil yang dikelola secara profesional oleh <strong>PT. Andara Rejo Makmur</strong>.
        </p>

        <h4 className="text-2xl font-bold text-gray-900 mt-6 flex items-center">
          <FaMoneyBillWave className="text-gold-500 mr-3" /> Sistem Bagi Hasil yang Transparan
        </h4>
        <ul className="list-disc pl-6 text-gray-700">
          <li>60% dari laba bersih diberikan kepada pemilik villa sebagai passive income.</li>
          <li>40% digunakan untuk operasional dan pemasaran resort.</li>
          <li>Pemilik mendapatkan laporan keuangan dan okupansi secara berkala.</li>
        </ul>

        <h4 className="text-2xl font-bold text-gray-900 mt-6 flex items-center">
          <FaMoneyBillWave className="text-gold-500 mr-3" /> Promo SUPER EKSKLUSIF
        </h4>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Garansi Bangunan & Furnished selama 8 Tahun</strong> - Jaminan kualitas terbaik.</li>
          <li><strong>Gratis Biaya Maintenance selama 8 Tahun</strong> - Pengembang menanggung biaya IPL.</li>
          <li><strong>Exclusive Private Membership Club</strong> - Fasilitas premium untuk gaya hidup modern.</li>
          <li><strong>Buy Back Garansi 150%</strong> - Jaminan buyback lebih tinggi dari harga pembelian.</li>
        </ul>

      </div> */}
    </section>
  );
};

const features = [
  {
    icon: FaHotel,
    title: "Akomodasi Kelas Dunia",
    description: "Hotel & resort eksklusif yang meningkatkan daya tarik wisata dan nilai properti."
  },
  {
    icon: FaBriefcase,
    title: "MICE & Bisnis",
    description: "Pusat bisnis dan konferensi modern yang mendukung event nasional hingga internasional."
  },
  {
    icon: FaCocktail,
    title: "Day Club & Lifestyle Hub",
    description: "Destinasi hiburan premium untuk wisatawan kelas atas dengan suasana eksklusif."
  },
  {
    icon: FaTree,
    title: "Wisata Modern & Nature Living",
    description: "Harmoni antara kemewahan dan keseimbangan alam dalam satu lokasi strategis."
  }
];

export default AndaraInvestment;
