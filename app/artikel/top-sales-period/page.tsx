import React from "react";

const TopSalesPeriod = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 pt-20">
        Top Sales Period Reward
      </h1>
      <p className="text-gray-700 text-lg text-center mb-4">
        Hanya SHARE dapat CUAN! Tanpa Keraguan.
      </p>
      <p className="text-gray-600 mb-6">
      Program ini memberikan reward eksklusif bagi Agen Affiliate yang berhasil mencapai penjualan terbanyak selama periode penjualan Andara Imperial Terrace . Agen Affiliate akan mendapatkan piala penghargaan berdasarkan peringkat mereka dan reward berupa paket wisata internasional, di luar komisi 2% dan reward bulanan. Reward ini diberikan setelah seluruh unit rumah di Andara Imperial Terrace  habis terjual.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skema Reward</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Peringkat 4 - Piala Silver:</strong> Paket Wisata Liburan Asia Tenggara (Rp 30 Juta)</li>
            <li><strong>Peringkat 3 - Piala Gold:</strong> Paket Wisata Liburan Asia (Rp 60 Juta)</li>
            <li><strong>Peringkat 2 - Piala Platinum:</strong> Paket Wisata Liburan Eropa (Rp 90 Juta)</li>
            <li><strong>Peringkat 1 - Piala Diamond:</strong> Paket Wisata Liburan Amerika (Rp 180 Juta)</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Syarat dan Ketentuan</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Peringkat ditentukan berdasarkan jumlah unit yang berhasil dijual.</li>
            <li>Hanya penjualan dengan DP 30% yang akan dihitung.</li>
            <li>Reward diberikan setelah seluruh unit terjual.</li>
            <li>Komisi 2% tetap diberikan di luar reward eksklusif.</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prosedur Pencairan Reward</h2>
        <p className="text-gray-700">Setelah seluruh unit rumah habis terjual, pengumuman pemenang akan dilakukan oleh pihak Andara Imperial Terrace.</p>
        <p className="text-gray-700">Piala dan paket wisata akan diberikan dalam acara yang telah ditentukan oleh pihak penyelenggara.</p>
      </div>
    </div>
  );
};

export default TopSalesPeriod;
