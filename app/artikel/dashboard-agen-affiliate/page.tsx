import Image from 'next/image';

export default function DashboardAgenAffiliate() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Dashboard Agen Affiliate
      </h1>
      <p className="text-lg text-center mb-4">
        Hanya SHARE dapat CUAN! Tanpa Keraguan.
      </p>
      {/* <Image 
        src="/dashboard_affiliate.png" 
        alt="Dashboard Agen Affiliate Andara Imperial Terrace" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      /> */}
      
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">1. Tampilan Utama Dashboard</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Header menampilkan nama agen dan logo Andara Imperial Terrace.</li>
            <li>Menu navigasi untuk mengakses fitur dashboard dengan mudah.</li>
            <li>Ringkasan komisi: total komisi yang diperoleh, komisi tertunda, dan komisi yang telah dicairkan.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Menu Navigasi</h2>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Beranda:</strong> Informasi performa agen dan pengumuman terbaru.</li>
            <li><strong>Data Pengunjung:</strong> Statistik kunjungan melalui link afiliasi.</li>
            <li><strong>Komisi:</strong> Rincian komisi yang telah diperoleh dan status pembayaran.</li>
            <li><strong>Laporan Survey:</strong> Data dan notulensi hasil interaksi dengan calon konsumen.</li>
            <li><strong>Pengaturan Akun:</strong> Opsi untuk mengelola profil dan keamanan akun.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Fitur Dashboard</h2>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Ringkasan Komisi:</strong> Menampilkan total penghasilan dari link afiliasi.</li>
            <li><strong>Data Pengunjung:</strong> Statistik real-time jumlah klik, sumber trafik, dan riwayat interaksi pengunjung.</li>
            <li><strong>Komisi:</strong> Daftar transaksi komisi berdasarkan status pembayaran.</li>
            <li><strong>Laporan Survey:</strong> Dokumentasi interaksi agen dengan calon pembeli.</li>
            <li><strong>Pengaturan Akun:</strong> Mengelola informasi agen dan pengaturan keamanan akun.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Kesimpulan</h2>
          <p>Dashboard Agen Affiliate Andara Imperial Terrace adalah alat yang dirancang untuk memberikan kemudahan dan transparansi bagi agen dalam mengelola aktivitas pemasaran mereka. Dengan fitur yang komprehensif, agen dapat memantau performa mereka, menganalisis data, serta memastikan setiap aktivitas promosi memberikan hasil yang maksimal.</p>
        </section>
      </div>
    </div>
  );
}
