"use client";

import React from "react";

const CashTempo = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 lg:p-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 pt-10">
        Pembayaran Tunai Bertahap (Cash Tempo) di Andara Imperial Terrace
      </h1>
      
      <section className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Apa Itu Pembayaran Tunai Bertahap (Cash Tempo)?
        </h2>
        <p className="text-gray-700">
          Tunai Bertahap adalah sistem pembayaran di mana pembeli melunasi harga properti secara tunai tetapi dengan cara mencicil dalam periode tertentu, seperti 3, 6, atau 12 bulan. Tidak ada bunga, sehingga pembeli hanya membayar sesuai dengan harga unit properti.
        </p>
      </section>

      <section className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kelebihan Tunai Bertahap</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Lebih Fleksibel Dibandingkan Cash Keras:</strong> Tidak perlu membayar seluruh harga properti sekaligus.</li>
          <li><strong>Harga Lebih Terjangkau Dibandingkan KPR:</strong> Tidak ada bunga atau biaya tambahan.</li>
          <li><strong>Proses Sederhana dan Cepat:</strong> Tanpa melibatkan pihak ketiga, sehingga lebih cepat dan efisien.</li>
        </ul>
      </section>

      <section className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kekurangan Tunai Bertahap</h2>
        <p className="text-gray-700">
          Meski lebih fleksibel dibandingkan cash keras, metode ini tetap membutuhkan kesiapan dana besar karena durasi pembayaran maksimal hanya 12 bulan.
        </p>
      </section>

      <section className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Siapa yang Cocok untuk Skema Tunai Bertahap?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Memiliki sebagian besar dana tetapi belum cukup untuk pembayaran cash keras.</li>
          <li>Tidak ingin menggunakan fasilitas KPR karena keterbatasan waktu atau bunga tinggi.</li>
          <li>Mengutamakan proses pembayaran yang cepat dan transparan langsung kepada pengembang.</li>
        </ul>
      </section>

      <section className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Proses Pembayaran Tunai Bertahap di Andara Imperial Terrace</h2>
        <ol className="list-decimal list-inside text-gray-700">
          <li><strong>Pembayaran Booking Fee:</strong> Rp 50.000.000 untuk mengamankan unit Villa Da Vinci Residence.</li>
          <li><strong>Pembayaran Uang Muka (DP):</strong> Dalam waktu satu bulan, bayar DP sebesar 30% dari harga unit.</li>
          <li><strong>Pelunasan Sisa Pembayaran:</strong> Dibayar sesuai tenor pilihan (3, 6, atau 12 bulan).</li>
          <li><strong>Penandatanganan PPJB dan AJB:</strong> Setelah pembayaran selesai, akan dilakukan Perjanjian Pengikatan Jual Beli (PPJB) dan Akta Jual Beli (AJB).</li>
        </ol>
      </section>
    </div>
  );
};

export default CashTempo;
