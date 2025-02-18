"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const articles = [
  { id: 1, src: "/artikel_affiliate_1.png" },
  { id: 2, src: "/artikel_affiliate_2.png" },
  { id: 3, src: "/artikel_affiliate_3.png" },
  { id: 4, src: "/artikel_affiliate_4.png" },
  { id: 5, src: "/artikel_affiliate_5.png" },
];

export default function AffiliateCorner() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Cek localStorage apakah ada data user
    const userData = localStorage.getItem("user");
    setIsLoggedIn(!!userData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 pt-40">
      <h1 className="text-3xl font-bold text-center mb-6 pt-40">
        Kemudahan dan Keuntungan Andara Agen Affiliate Program
      </h1>
      <p className="text-lg mb-4">
        Sebagai agen properti, proses prospek dan closing deal merupakan inti dari pekerjaan Anda.
        Namun, Andara Agen Affiliate Program menawarkan cara baru yang lebih efisien dan menguntungkan untuk mendapatkan komisi.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Komisi dan Reward</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Reward Buka Akun: Rp 500.000 setelah mendaftar.</li>
        <li>Flash Reward: Rp 1.000.000 jika berhasil closing dalam 1 bulan.</li>
        <li>Komisi Penjualan: 2% dari harga unit.</li>
        <li>Reward Referral: Rp 1.000.000 untuk setiap calon konsumen yang berhasil membeli unit.</li>
        <li>Monthly Sales Reward: Hingga Rp 10.000.000 berdasarkan jumlah unit terjual.</li>
        <li>Top Sales Period Reward: Liburan ke Asia/Eropa untuk agen terbaik.</li>
      </ul>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {articles.map((article) => (
          <Image
            key={article.id}
            src={article.src}
            alt={`Artikel ${article.id}`}
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Hanya SHARE dapat CUAN! Tanpa Keraguan.</h2>
      <p className="mb-4">
        Mulai dari menghubungi leads via telepon dan WhatsApp hingga mengonversi mereka menjadi hot prospek yang siap membeli,
        setiap langkah memerlukan usaha dan waktu. Namun, dengan Andara Agen Affiliate Program, Anda hanya perlu membagikan link afiliasi
        dari{" "}
        <a href="https://www.andaraimperialterrace.co.id" className="text-blue-500">
          www.andaraimperialterrace.co.id
        </a>
        .
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Perbandingan Agen Properti Tradisional vs. Program Affiliate
      </h2>
      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Aspek</th>
            <th className="border p-2">Agen Properti Tradisional</th>
            <th className="border p-2">Andara Agen Affiliate Program</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Komunikasi</td>
            <td className="border p-2">Intensif via telepon & WhatsApp</td>
            <td className="border p-2">Hanya perlu membagikan link</td>
          </tr>
          <tr>
            <td className="border p-2">Kualifikasi Prospek</td>
            <td className="border p-2">Analisis & follow-up manual</td>
            <td className="border p-2">Otomatis</td>
          </tr>
          <tr>
            <td className="border p-2">Negosiasi</td>
            <td className="border p-2">Perlu negosiasi harga</td>
            <td className="border p-2">Tidak ada negosiasi</td>
          </tr>
          <tr>
            <td className="border p-2">Penutupan Transaksi</td>
            <td className="border p-2">Memerlukan dokumen & tatap muka</td>
            <td className="border p-2">Sistem otomatis</td>
          </tr>
          <tr>
            <td className="border p-2">Pembayaran Komisi</td>
            <td className="border p-2">Setelah transaksi selesai</td>
            <td className="border p-2">Otomatis</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-4">Keuntungan Andara Agen Affiliate Program</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Efisiensi Waktu - Tidak perlu follow-up manual.</li>
        <li>Minimal Usaha - Hanya perlu membagikan link.</li>
        <li>Penghasilan Pasif - Komisi otomatis dihitung.</li>
        <li>Dukungan Promosi - Materi marketing siap pakai.</li>
        <li>Transparansi - Dashboard real-time untuk pemantauan.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Layanan Survey Konsumen</h2>
      <ol className="list-decimal pl-6">
        <li>Calon Konsumen mengajukan survey.</li>
        <li>Agen Affiliate mengajukan data ke dashboard.</li>
        <li>CS Andara mengatur jadwal survey.</li>
        <li>Survey dilakukan oleh tim CS tanpa agen.</li>
        <li>Dokumentasi tersedia di dashboard.</li>
        <li>Reward referral Rp 1.000.000 diberikan.</li>
        <li>Update progres tersedia di dashboard.</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Hanya SHARE dapat CUAN! Tanpa Keraguan.</h2>
      <p className="mb-4">
        Anda hanya perlu membagikan link afiliasi dari{" "}
        <a href="https://www.andaraimperialterrace.co.id" className="text-blue-500">
          www.andaraimperialterrace.co.id
        </a>
        .
      </p>

      <div className="text-center mt-4">
        <a
          href="https://drive.google.com/uc?export=download&id=1GpUL0kSjwhcY8YDHYgL9ReMtFpW9Qdw-"
          download
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition inline-block"
        >
          Download Product Knowledge
        </a>
      </div>

      {/* Tampilkan Gabung Sekarang hanya jika user belum login */}
      {!isLoggedIn && (
        <div className="text-center mt-6">
          <Link
            href="/sign-up/agent-affiliate/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition inline-block"
          >
            Gabung Sekarang
          </Link>
        </div>
      )}
    </div>
  );
}
