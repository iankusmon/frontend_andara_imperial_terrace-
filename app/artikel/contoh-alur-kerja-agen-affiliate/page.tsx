import Image from 'next/image';

export default function AlurAgenAffiliate() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Contoh Alur Kerja Andara Agen Affiliate Program
      </h1>
      <p className="text-lg text-center mb-4">
        Hanya SHARE dapat CUAN! Tanpa Keraguan.
      </p>
      {/* <Image 
        src="/affiliate_workflow.png" 
        alt="Alur Kerja Agen Affiliate" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      /> */}
      
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">1. Agen Affiliate Membagikan Materi Promosi</h2>
          <p className="mt-2">Agen Affiliate membagikan materi promosi yang tersedia di website resmi Andara Imperial Terrace ke berbagai platform media sosial mereka. Setiap postingan otomatis menyertakan link afiliasi unik yang diberikan oleh program.</p>
          <p className="font-semibold mt-2">Contoh Materi Promosi:</p>
          <ul className="list-disc pl-5">
            <li>Konten tentang kawasan Andara Imperial Terrace</li>
            <li>Harga dan promo properti</li>
            <li>Simulasi KPR dan pajak properti</li>
            <li>Paket wisata, menginap, dan acara</li>
            <li>Fasilitas komunitas dan gaya hidup</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Pengguna Mengklik Link Afiliasi</h2>
          <p className="mt-2">Ketika pengguna tertarik dengan materi yang dibagikan oleh Agen Affiliate, mereka mengklik link afiliasi yang secara otomatis mengarahkan mereka ke halaman resmi Andara Imperial Terrace.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Pengguna Mendaftar dan Memulai Transaksi</h2>
          <p className="mt-2">Setelah masuk ke website, pengguna dapat melihat informasi lebih lanjut mengenai proyek properti dan memulai proses pemesanan:</p>
          <ul className="list-disc pl-5">
            <li>Mendaftar NUP (Nomor Urut Pemesanan)</li>
            <li>Melakukan pembayaran booking fee</li>
            <li>Melanjutkan pembayaran DP sesuai ketentuan</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Sistem Melacak Transaksi dari Agen Affiliate</h2>
          <p className="mt-2">Sistem secara otomatis mencatat bahwa transaksi berasal dari link afiliasi Agen Affiliate. Semua aktivitas mulai dari pendaftaran NUP hingga pembayaran DP akan tercatat dalam sistem.</p>
        </section>
      </div>
    </div>
  );
}
