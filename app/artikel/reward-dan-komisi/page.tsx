import React from "react";

const RewardDanKomisi = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 pt-20">
        Reward Dan Komisi untuk Agen Affiliate
      </h1>
      <p className="text-gray-700 text-lg text-center mb-4">
        Hanya SHARE dapat CUAN! Tanpa Keraguan.
      </p>
      <p className="text-gray-600 text-center mb-6">
        Andara Agen Affiliate Program di{' '}
        <a href="https://www.andaraimperialterrace.co.id" className="text-blue-600 underline">
          www.andaraimperialterrace.co.id
        </a>{' '}
        memberikan komisi dan reward yang bertujuan untuk memberikan apresiasi kepada agen yang berkontribusi aktif dalam menjual unit Hunian di Andara Imperial Terrace.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Reward Buka Akun */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Reward Buka Akun Rp 500.000,-
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Deskripsi:</strong> Agen Affiliate yang berhasil mendaftar dan memiliki akun Andara Agen Affiliate Program langsung mendapatkan reward Buka Akun sebesar Rp 500.000,-.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Kondisi Pencairan:</strong> Reward referral akan dicairkan bersamaan dengan komisi penjualan setelah konsumen membayar DP 30%.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Catatan:</strong> Reward referral ini di luar komisi penjualan 2%.
          </p>
        </div>
        
        {/* Flash Reward */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Flash Reward Rp 1.000.000,-
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Deskripsi:</strong> Agen Affiliate yang berhasil mendaftar dan dalam waktu kurang dari 1 bulan berhasil closing langsung mendapatkan Flash Reward sebesar Rp 1.000.000,-.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Kondisi Pencairan:</strong> Reward referral akan dicairkan bersamaan dengan komisi penjualan setelah konsumen membayar DP 30%.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Catatan:</strong> Reward referral ini di luar komisi penjualan 2%.
          </p>
        </div>
        
        {/* Komisi Penjualan */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Komisi Penjualan 2%
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Deskripsi:</strong> Setiap agen affiliate yang berhasil menjual unit di Andara Imperial Terrace akan menerima komisi sebesar 2% dari harga jual unit.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Kondisi Pencairan:</strong> Komisi akan dicairkan setelah konsumen membayar DP 30% dari harga unit.
          </p>
        </div>
        
        {/* Reward Referral */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Reward Referral Rp 1.000.000,-
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Deskripsi:</strong> Agen Affiliate yang berhasil memberikan nama calon konsumen yang melakukan survei di lokasi dan kemudian membeli unit akan mendapatkan reward referral sebesar Rp 1.000.000,-.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Kondisi Pencairan:</strong> Reward referral akan dicairkan bersamaan dengan komisi penjualan setelah konsumen membayar DP 30%.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RewardDanKomisi;
