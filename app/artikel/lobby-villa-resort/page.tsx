"use client";

import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ShareModal from "../../../components/ShareModal"; // sesuaikan path jika diperlukan

const articles = [
  { id: 1, src: "/lobby_villa_resort.jpg" },
];

export default function KawasanAIT() {
  const [showAlert, setShowAlert] = useState(false);

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

  const handleDownload = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <div className="relative container mx-auto px-4 py-8 pt-40">
      <button
          onClick={handleOpenShareModal}
          className="border rounded-full p-2 bg-white shadow hover:shadow-md transition fixed top-20 right-5 z-50"
        >
          <Image src="/share.svg" alt="Share" width={24} height={24} />
      </button>
      <h1 className="text-3xl font-bold text-center mb-6 pt-20">
      Temukan Kelengkapan dan Kemewahab Lobby Villa Resort di Solo Raya!
      </h1>
      <p className="text-lg mb-4">
        Kemewahan dan Prestise Andara Imperial Terrace mengutamakan kemewahan dalam setiap aspek desain dan fasilitasnya. Inspirasi arsitektur dari ikon Eropa seperti Colosseum, Menara Eiffel, Menara Pisa, kincir Angin Belanda, dan Kanal Venice mencerminkan estetika kelas dunia yang menghadirkan nuansa prestise dan eksklusivitas.
      </p>
      <p className="text-lg mb-4">
        Kreativitas dan Inovasi: Setiap elemen kawasan dikembangkan dengan pendekatan kreatif dan inovatif, mulai dari fasilitas wisata modern seperti Menara Imperial Terrace, Colosseum Day Club by Andara, Menara Pisa Andara, Andara Play Story, Dunia Avatar Andara hingga konsep smart home di hunian. Inovasi ini menciptakan pengalaman unik yang memadukan hiburan dan teknologi.
      </p>
      <p className="text-lg mb-4">
        Kualitas dan Ketelitian: Andara Imperial Terrace berkomitmen menjaga standar tinggi dalam pemilihan material dan pengerjaan, memastikan ketahanan dan estetika yang sesuai dengan konsep kemewahan. Setiap detail, mulai dari hunian hingga atraksi wisata, dikerjakan dengan ketelitian maksimal.
      </p>
      <p className="text-lg mb-4">
        Harmoni Budaya dan Alam: Kawasan ini menggabungkan kemewahan arsitektur Eropa dengan sentuhan budaya tradisional dan alam sekitar. Program seperti Andara Colossal Festival, Andara Cow Milk, Andara Fashion Story, dan Andara Tumang Copper menonjolkan budaya lokal, sementara taman-taman tematik dan atraksi air menghadirkan keseimbangan dengan alam.
      </p>
      <p className="text-lg mb-4">
        Kebersamaan dan Komunitas: Andara Imperial Terrace menciptakan ruang interaksi yang mendukung terbentuknya hubungan harmonis dan berkembang, seperti coworking space, Lobby & Lounge, area MICE, serta festival tematik yang menjadi wadah bagi penghuni dan pengunjung untuk berinteraksi.
      </p>
      <p className="text-lg mb-4">
        Keberlanjutan dan Ramah Lingkungan: Dirancang dengan prinsip ramah lingkungan dan keberlanjutan, pengelolaan air, energi, serta taman hijau luas memastikan kehidupan modern berjalan selaras dengan alam.
      </p>
      <p className="text-lg mb-4">
        Pengalaman Berkesan dan Berkelas: Menawarkan akomodasi mewah, atraksi wisata modern, dan layanan eksklusif yang meninggalkan kesan mendalam pada setiap kunjungan.
      </p>
      <p className="text-lg mb-4">
        Kemakmuran dan Keberkahan: Filosofi angka 99 dalam logo mencerminkan harapan untuk menghadirkan keberkahan dan kemakmuran bagi semua stakeholder, menjadikan kawasan ini pusat pertumbuhan ekonomi jangka panjang.
      </p>
      <p className="text-lg mb-4">
        Eksklusivitas dan Privasi: Hunian eksklusif dengan private pool, rooftop, dan taman pribadi menciptakan suasana resort mewah di dalam kenyamanan rumah sendiri.
      </p>
      <p className="text-lg mb-4">
        Pengalaman Kuliner Berkelas: Menyajikan cita rasa internasional dan tradisional, seperti Imperial Dine & Lounge by Andara dan Nusantara Sagara Rasa by Andara, untuk memanjakan penghuni dan pengunjung.
      </p>
      <p className="text-lg mb-4">
        Nilai-nilai tersebut mencerminkan esensi dari Andara Imperial Terrace sebagai kawasan akomodasi, MICE, Day Club, dan wisata modern yang memadukan kemewahan, inovasi, dan harmoni budaya untuk menciptakan pengalaman hidup spektakuler serta investasi tinggi.
      </p>

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

      <div className="text-center mt-4">
      {showAlert && (
        <div className="bg-green-500 text-white px-4 py-2 rounded-lg mb-4 shadow-md animate-fade-in">
          ✅ Sukses Unduh Product Knowledge
        </div>
      )}
      <a
        href="https://drive.google.com/uc?export=download&id=1oKt-hyEWDwP6RmRQwsduWFp_kcoIfGVU"
        download
        onClick={handleDownload}
        className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition inline-block"
      >
        Unduh Product Knowledge
      </a>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>

      {/* Gabung Sekarang hanya muncul jika user belum login */}
      {/* Asumsikan pengecekan login dilakukan dengan localStorage */}
      {typeof window !== "undefined" && !localStorage.getItem("user") && (
        <div className="text-center mt-6">
          <Link 
            href="/sign-up/customer/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition inline-block"
          >
            Investasi Sekarang
          </Link>
        </div>
      )}
      {/* ShareModal ditempatkan di luar konten utama */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={handleCloseShareModal}
        message="Temukan Kelengkapan dan Kemewahab Lobby Villa Resort di Solo Raya!"
        shareLink={shareLink} // Use the state instead of directly accessing window
        referralCode={referralCode}
      />
    </div>
  );
}
