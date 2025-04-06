import React from "react";

const KeuntunganAgenAffiliate = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6 pt-20">
        Kemudahan dan Keuntungan Andara Agen Affiliate Program bagi Agen Properti: Perbandingan Praktis
      </h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Hanya SHARE dapat CUAN! Tanpa Keraguan.
      </p>
      
      <section className="bg-white p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">1. Proses Agen Properti Tradisional</h2>
        <p className="text-gray-700 mb-2">
          Proses agen properti tradisional membutuhkan keterlibatan aktif dalam setiap tahap penjualan.
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Menghubungi leads via telepon dan WhatsApp</li>
          <li>Kualifikasi prospek melalui komunikasi intensif</li>
          <li>Negosiasi dan penutupan transaksi dengan dokumen dan pertemuan tatap muka</li>
        </ul>
      </section>

      <section className="bg-white p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">2. Andara Agen Affiliate Program</h2>
        <p className="text-gray-700 mb-2">Program ini menawarkan cara yang lebih efisien dan menguntungkan.</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Hanya perlu membagikan link referral</li>
          <li>Sistem otomatis menangani tracking dan kualifikasi</li>
          <li>Komisi otomatis tanpa negosiasi atau pertemuan tatap muka</li>
        </ul>
      </section>

      <section className="bg-white p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Perbandingan: Agen Properti Tradisional vs. Andara Agen Affiliate</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Aspek</th>
              <th className="border border-gray-300 p-2">Agen Properti Tradisional</th>
              <th className="border border-gray-300 p-2">Andara Agen Affiliate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Komunikasi</td>
              <td className="border border-gray-300 p-2">Telepon & WhatsApp</td>
              <td className="border border-gray-300 p-2">Bagikan link referral</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Kualifikasi Prospek</td>
              <td className="border border-gray-300 p-2">Follow-up manual</td>
              <td className="border border-gray-300 p-2">Otomatis</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Penutupan Transaksi</td>
              <td className="border border-gray-300 p-2">Dokumen & tatap muka</td>
              <td className="border border-gray-300 p-2">Sistem otomatis</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Pembayaran Komisi</td>
              <td className="border border-gray-300 p-2">Setelah transaksi selesai</td>
              <td className="border border-gray-300 p-2">Otomatis</td>
            </tr>
          </tbody>
        </table>
      </section>

      <p className="text-gray-700 text-center font-semibold">
        Dengan Andara Agen Affiliate Program, agen dapat menghemat waktu dan mendapatkan penghasilan pasif dengan mudah!
      </p>
    </div>
  );
};

export default KeuntunganAgenAffiliate;
