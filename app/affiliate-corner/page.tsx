"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ShareModal from "../../components/ShareModal"; // sesuaikan path jika diperlukan
import { useRouter } from "next/navigation";

const articles = [
  { id: 1, src: "/artikel_affiliate_1.png" },
  { id: 2, src: "/artikel_affiliate_2.png" },
  { id: 3, src: "/artikel_affiliate_3.png" },
  { id: 4, src: "/artikel_affiliate_4.png" },
  { id: 5, src: "/artikel_affiliate_5.png" },
];

export default function AffiliateCorner() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();
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
    // Cek localStorage apakah ada data user
    const userData = localStorage.getItem("user");
    setIsLoggedIn(!!userData);
  }, []);

  const handleDownload = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <div className="relatice container mx-auto px-4 py-8 pt-40">
      <button
        onClick={handleOpenShareModal}
        className="fixed top-20 right-5 border rounded-full p-2 bg-white shadow hover:shadow-md transition z-50"
      >
        <Image src="/share.svg" alt="Share" width={24} height={24} />
      </button>
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
      {showAlert && (
        <div className="bg-green-500 text-white px-4 py-2 rounded-lg mb-4 shadow-md animate-fade-in">
          ✅ Sukses Unduh Product Knowledge
        </div>
      )}
      <a
        href="https://drive.google.com/uc?export=download&id=1O9ZKwjolqq2cQSCIk5W2rISnzY3yttZ7"
        download
        onClick={handleDownload}
        className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition inline-block"
      >
        Unduh Product Knowledge
      </a>
  
    </div>

      {/* Gabung Sekarang hanya muncul jika user belum login */}
      {/* Asumsikan pengecekan login dilakukan dengan localStorage */}
      {typeof window !== "undefined" && !localStorage.getItem("user") && (
      <div className="text-center mt-6">
        <Link 
          href="/sign-up/agent-affiliate"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition inline-block"
        >
          Gabung Sekarang
        </Link>
        {/* ShareModal ditempatkan di luar konten utama */}
        <ShareModal
            isOpen={isShareModalOpen}
            onClose={handleCloseShareModal}
            message="Yuk Gabung di Agent Affiliate"
            shareLink="/sign-up/agent-affiliate"
            referralCode={referralCode}
          />
      </div>
      )}

<style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f4f7fc;
          font-family: "Arial", sans-serif;
        }
        .login-form-wrapper {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 40px;
          width: 100%;
          max-width: 400px;
          text-align: center;
        }
        .error-message {
          color: red;
          margin-bottom: 10px;
        }
        .login-heading {
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
        }
        .login-form {
          display: flex;
          flex-direction: column;
        }
        .input-group {
          margin-bottom: 20px;
          text-align: left;
        }
        .input-group label {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 5px;
          color: #333;
        }
        .input-field {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 5px;
          outline: none;
          transition: border-color 0.3s;
        }
        .input-field:focus {
          border-color: #4caf50;
        }
        .submit-btn {
          padding: 12px;
          font-size: 16px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .submit-btn:hover {
          background-color: #45a049;
        }
        .signup-link {
          margin-top: 20px;
          width: 50%;
          text-align: center;
        }
        .signup-link p {
          margin: 0;
          font-size: 14px;
          color: #555;
        }
        .signup-btn {
          margin-top: 10px;
          padding: 12px;
          text-align: center;
          font-size: 16px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
          width: 100%;
        }
        .signup-btn:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}
