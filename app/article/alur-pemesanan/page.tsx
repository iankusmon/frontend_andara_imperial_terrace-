'use client'

import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ShareModal from "../../../components/ShareModal"; // sesuaikan path jika diperlukan

const steps = [
  {
    id: 1,
    title: 'Tahap 1: Pendaftaran NUP (Pra-Launching Tahap I The Royale Elegance)',
    image: '/alur_pemesanan_1.png',
    description: `Isi formulir pendaftaran: Lengkapi formulir pendaftaran NUP yang tersedia, baik secara online melalui website resmi atau secara offline di marketing gallery.
    Bayar biaya pendaftaran: Lakukan pembayaran biaya pendaftaran NUP mulai dari Rp2.500.000.
    Dapatkan nomor urut: Setelah pembayaran terkonfirmasi, Anda akan menerima Nomor Urut Pemesanan (NUP), yang akan digunakan untuk pemilihan unit.`,
  },
  {
    id: 2,
    title: 'Tahap 2: Booking Fee dan Pemilihan Unit',
    image: '/alur_pemesanan_2.png',
    description: `Pilih unit: Setelah memasuki periode soft launching, Anda dapat memilih unit yang diinginkan sesuai dengan nomor urut NUP.
    Pilih metode pembayaran: Cash Keras, Cash Tempo (3-12 bulan), atau KPR.
    Bayar booking fee: Lakukan pembayaran booking fee sesuai ketentuan yang berlaku.
    Tandatangani SPKB: Surat Pemilihan Kavling dan Bangunan sebagai bukti pemesanan unit.`,
  },
  {
    id: 3,
    title: 'Tahap 3: Pembayaran DP dan PPJB',
    image: '/alur_pemesanan_3.png',
    description: `Pembayaran DP: DP 30% dari harga jual.
    Penandatanganan PPJB: Perjanjian hukum antara Anda dan pengembang.`,
  },
  {
    id: 4,
    title: 'Tahap 4: Pelunasan dan AJB',
    image: '/alur_pemesanan_4.png',
    description: `Pelunasan: Sesuai dengan metode pembayaran yang disepakati.
    Penandatanganan AJB: Akta Jual Beli sebagai bukti sah kepemilikan properti.`,
  },
  {
    id: 5,
    title: 'Tahap 5: Serah Terima',
    image: '/alur_pemesanan_5.png',
    description: `Serah terima unit: Pengembang menyerahkan kunci dan dokumen terkait.
    Serah terima SHGB: Setelah proses balik nama selesai, Anda akan menerima Sertifikat Hak Guna Bangunan (SHGB).`,
  },
];

export default function AlurPemesanan() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [shareLink, setShareLink] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareLink(`/${window.location.pathname}?referral_code=${referralCode}`);
    }
  }, [referralCode]);

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
  
  return (
    <div className="relative max-w-3xl mx-auto p-6 pt-20">
      <button
          onClick={handleOpenShareModal}
          className="border rounded-full p-2 bg-white shadow hover:shadow-md transition fixed top-20 right-5 z-50"
        >
          <Image src="/share.svg" alt="Share" width={24} height={24} />
        </button>

      <h2 className="text-2xl font-semibold mb-3">Tahapan Alur Pemesanan</h2>
      {steps.map((step) => (
        <div key={step.id} className="mb-6">
          <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
          <div className="relative w-full h-64 my-4">
            <Image
              src={step.image}
              alt={step.title}
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />  
          </div>
          <p className="text-gray-700 whitespace-pre-line">{step.description}</p>
        </div>
      ))}
      {/* ShareModal ditempatkan di luar konten utama */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={handleCloseShareModal}
        message="Bagikan Alur Pemesanan Villa AIT"
        shareLink={shareLink} // Use the state instead of directly accessing window
        referralCode={referralCode}
      />
    </div>
  );
}
