import React from "react";

const Komparasi = () => {
  const data = [
    {
      title: "Affiliate",
      definition:
        "Affiliate adalah individu atau entitas yang mempromosikan produk atau layanan orang lain melalui link afiliasi. Mereka mendapatkan komisi berdasarkan aksi (klik atau pembelian) yang dilakukan melalui link tersebut.",
      benefits: [
        "Komisi Fleksibel",
        "Tidak Ada Tanggung Jawab Penjualan",
        "Fleksibilitas Waktu dan Tempat",
        "Diversifikasi Produk",
        "Pengalaman Pemasaran Digital",
      ],
    },
    {
      title: "Agen Properti",
      definition:
        "Agen properti adalah profesional yang berlisensi untuk membantu klien dalam membeli, menjual, atau menyewa properti. Mereka bertanggung jawab untuk memfasilitasi transaksi real estate dan memberikan saran kepada klien.",
      benefits: [
        "Komisi Tinggi dari Transaksi",
        "Hubungan Langsung dengan Klien",
        "Pengetahuan Mendalam tentang Pasar",
        "Akses ke Alat dan Sumber Daya",
        "Layanan Langsung",
      ],
    },
    {
      title: "Agen Affiliate di Andara",
      definition:
        "Agen Affiliate adalah individu yang berperan sebagai perantara antara perusahaan dan konsumen, memanfaatkan sistem afiliasi untuk mendapatkan komisi sambil melakukan aktivitas agen properti.",
      benefits: [
        "Pendapatan Ganda",
        "Transparansi Data Pengunjung",
        "Layanan Survey Konsumen",
        "Dukungan dari Perusahaan",
        "Kendali Penuh atas Proses Penjualan",
      ],
    },
  ];

  const tableData = [
    ["Kriteria", "Affiliate", "Agen Properti", "Agen Affiliate"],
    ["Definisi", "Memasarkan produk orang lain", "Profesional berlisensi dalam transaksi properti", "Perantara antara perusahaan dan calon konsumen"],
    ["Pendapatan", "Komisi berdasarkan klik atau transaksi", "Komisi tinggi per transaksi", "Pendapatan ganda dari komisi afiliasi dan penjualan"],
    ["Hubungan dengan Klien", "Tidak ada hubungan langsung", "Hubungan jangka panjang dengan klien", "Hubungan lebih dekat dengan konsumen"],
    ["Pengetahuan Pasar", "Umumnya terbatas", "Pengetahuan mendalam tentang properti", "Memadukan pengetahuan dengan data pengunjung"],
    ["Akses Alat dan Sumber Daya", "Terbatas pada alat afiliasi", "Akses alat pemasaran dan database klien", "Akses sumber daya dari perusahaan dan program afiliasi"],
    ["Fleksibilitas Waktu", "Sangat fleksibel", "Terikat pada jadwal klien", "Fleksibilitas tinggi dalam promosi"],
    ["Layanan Personal", "Tidak ada", "Layanan langsung saat transaksi", "Menawarkan survey lokasi yang lebih personal"],
    ["Transparansi Data", "Terbatas", "Tidak ada sistem pelaporan", "Transparansi data pengunjung melalui Dashboard"],
    ["Dukungan Pemasaran", "Tidak ada", "Dukungan terbatas", "Dukungan penuh dari perusahaan"],
    ["Pengembangan Keterampilan", "Pemasaran digital", "Keterampilan penjualan dan negosiasi", "Pengembangan keterampilan di kedua area"],
  ];

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-6 pt-20">Perbandingan Affiliate, Agen Properti, dan Agen Affiliate</h1>
      <p className="text-center text-gray-600 mb-8">Hanya SHARE dapat CUAN! Tanpa Keraguan.</p>
      
      {/* Card Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.definition}</p>
            <ul className="list-disc list-inside text-gray-700">
              {item.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Table Section */}
      <div className="overflow-x-auto mt-10">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              {tableData[0].map((header, i) => (
                <th key={i} className="border p-3">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.slice(1).map((row, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50">
                {row.map((cell, i) => (
                  <td key={i} className="border p-3">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Kesimpulan */}
      <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Kesimpulan</h2>
        <p className="text-gray-700">
          Andara Agen Affiliate Program menawarkan kombinasi terbaik dari kemudahan dan keuntungan bagi Agen Affiliate, memadukan fleksibilitas affiliate dengan kekuatan hubungan dan pengetahuan pasar dari agen properti. Dengan model ini, Agen Affiliate memiliki potensi untuk meningkatkan pendapatan mereka secara signifikan, sementara juga memberikan layanan yang lebih personal kepada konsumen. Dengan dukungan dari perusahaan dan akses ke transparansi data, Agen Affiliate di Andara Agen Affiliate Program dapat meningkatkan peluang closing dan memaksimalkan pendapatan mereka.
        </p>
      </div>
    </div>
  );
};

export default Komparasi;
