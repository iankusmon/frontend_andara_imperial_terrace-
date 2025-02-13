"use client"

"use client";

import { useState } from "react";

export default function AgentAffiliateCorner() {
  const [selected, setSelected] = useState<number | null>(null);
  const fileUrl =
    "https://drive.google.com/uc?export=download&id=1GpUL0kSjwhcY8YDHYgL9ReMtFpW9Qdw-";

  const sections = [
    {
      title: "Penghasilan Tidak Terbatas",
      content:
        "Sebagai agen affiliate Andara Imperial Terrace, Anda memiliki potensi untuk mendapatkan komisi dari setiap penjualan unit properti yang Anda referensikan. Komisi langsung 2% dari setiap unit terjual dan tambahan dari pembayaran NUP, booking fee, hingga DP.",
    },
    {
      title: "Fleksibilitas Waktu Kerja",
      content:
        "Anda bisa bekerja secara fleksibel tanpa harus mengikuti jam kantor. Memanfaatkan waktu luang untuk pemasaran melalui media sosial atau bertemu calon pembeli di akhir pekan.",
    },
    {
      title: "Akses ke Proyek Prestisius",
      content:
        "Andara Imperial Terrace menawarkan hunian mewah dengan konsep arsitektur Eropa, dekat dengan fasilitas utama seperti bandara dan tol, menjadikannya investasi properti yang menjanjikan.",
    },
    {
      title: "Komisi Tambahan dari Referral Agen Baru",
      content:
        "Dapatkan Rp 5 juta per agen baru yang Anda referensikan dan berhasil menjual unit properti, serta bonus referral ganda untuk lebih dari 5 agen.",
    },
    {
      title: "Layanan Data Pengunjung yang Transparan",
      content:
        "Agen mendapatkan akses ke dashboard yang menampilkan data real-time tentang pengunjung yang mengakses link afiliasi mereka, memungkinkan evaluasi strategi pemasaran.",
    },
    {
      title: "Layanan Customer Survey",
      content:
        "Agen dapat mengatur survei lokasi untuk calon pembeli dengan tim Andara Imperial Terrace dan mendapatkan bonus Rp 1.000.000,- per referensi nama calon konsumen.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Keuntungan Menjadi Agen Affiliate Andara Imperial Terrace
      </h1>
      <p className="text-lg text-center mb-10">Hanya SHARE dapat CUAN! Tanpa Keraguan.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelected(selected === index ? null : index)}
          >
            <h2 className="text-xl font-semibold">{section.title}</h2>
            {selected === index && <p className="mt-4 text-gray-700">{section.content}</p>}
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <h2 className="text-xl font-bold mb-4">Unduh File</h2>
        <a href={fileUrl} download>
          <button className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
            Unduh Product Knowledge Andara Program Affilate Sekarang
          </button>
        </a>
      </div>
    </div>
  );
}

