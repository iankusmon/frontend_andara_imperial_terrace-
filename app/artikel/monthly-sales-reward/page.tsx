import React from "react";

const MonthlySalesReward = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 pt-20">
        Reward Bulanan Agen Affiliate Berdasarkan Penjualan Unit
      </h1>
      <p className="text-gray-700 text-lg text-center mb-4">
        Hanya SHARE dapat CUAN! Tanpa Keraguan.
      </p>
      <p className="text-gray-600 mb-6">
      Program ini memberikan reward bulanan kepada Agen Affiliate berdasarkan pencapaian jumlah unit rumah yang berhasil dijual dalam satu bulan kalender. Reward ini di luar komisi 2% yang sudah diterima oleh Agen Affiliate dari setiap penjualan unit rumah. Reward akan dicairkan bersamaan dengan withdraw ke-5, yaitu saat semua konsumen yang membeli unit membayar DP 30%.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skema Reward</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Agen Silver:</strong> 2 unit - Rp 4.000.000,-</li>
            <li><strong>Agen Gold:</strong> 3 unit - Rp 6.000.000,-</li>
            <li><strong>Agen Platinum:</strong> 4 unit - Rp 8.000.000,-</li>
            <li><strong>Agen Diamond:</strong> 5 unit - Rp 10.000.000,-</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Syarat dan Ketentuan</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Penjualan dihitung dalam 1 bulan kalender.</li>
            <li>Penjualan valid jika DP 30% telah dibayar.</li>
            <li>Reward dicairkan pada withdraw tahap ke-3.</li>
            <li>Komisi 2% tetap diberikan di luar reward bulanan.</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prosedur Pencairan</h2>
        <p className="text-gray-700">Reward akan otomatis ditambahkan ke saldo withdraw Agen Affiliate di dashboard setelah semua konsumen yang membeli unit membayar DP 30%.</p>
        <p className="text-gray-700">Agen dapat mencairkan reward bersamaan dengan komisi pada withdraw tahap 3.</p>
      </div>
    </div>
  );
};

export default MonthlySalesReward;
