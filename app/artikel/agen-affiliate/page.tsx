import Image from 'next/image';

export default function AgenAffiliate() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Andara Agen Affiliate Program
      </h1>
      <p className="text-lg text-center mb-4">
        Hanya SHARE dapat CUAN! Tanpa Keraguan.
      </p>
      {/* <Image 
        src="/andara_affiliate.png" 
        alt="Andara Agen Affiliate Program" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      /> */}
      
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Apa Itu Andara Agen Affiliate Program?</h2>
          <p>Andara Agen Affiliate Program adalah program kemitraan dari PT Andara Rejo Makmur yang memungkinkan individu untuk memperoleh komisi dari penjualan properti yang berhasil mereka referensikan hanya dengan melakukan aktivitas share.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Cara Kerja Program</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Calon Agen Affiliate mendaftar di portal <a href="https://www.andaraimperialterrace.co.id" className="text-blue-600">www.andaraimperialterrace.co.id</a>.</li>
            <li>Mendapatkan kode unik Agen Affiliate.</li>
            <li>Promosi menggunakan kode unik di media sosial atau jaringan pribadi.</li>
            <li>Data calon konsumen yang mengunjungi website melalui link Agen akan ditampilkan di Dashboard Agen.</li>
            <li>Agen bisa mengajukan nama calon konsumen yang ingin melakukan survey.</li>
            <li>Jika terjadi transaksi, Agen Affiliate mendapatkan fee dan komisi penuh.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Reward Referral Rp 1.000.000,-</h2>
          <p>Agen Affiliate yang berhasil memberikan nama calon konsumen yang melakukan survei di lokasi dan kemudian membeli unit akan mendapatkan reward referral sebesar Rp 1.000.000,-.</p>
          <p><strong>Kondisi Pencairan:</strong> Reward referral dicairkan bersamaan dengan komisi penjualan setelah konsumen membayar DP 30%.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Keuntungan Menjadi Agen Affiliate</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Potensi penghasilan tambahan melalui komisi yang signifikan.</li>
            <li>Fleksibilitas bekerja tanpa batasan waktu dan lokasi.</li>
            <li>Transparansi data calon konsumen di Dashboard Agen.</li>
            <li>Dukungan dari PT Andara Rejo Makmur dalam bentuk materi promosi dan informasi produk.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Struktur Komisi</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Komisi dasar: 2% dari nilai penjualan.</li>
            <li>Potongan pajak sesuai peraturan berlaku.</li>
            <li>Pembayaran komisi dilakukan bertahap sesuai progres transaksi (NUP, Booking Fee, DP 30%).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Layanan Survey Konsumen</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Calon konsumen tertarik melakukan survey di lokasi.</li>
            <li>Agen Affiliate mengajukan nama calon konsumen melalui Dashboard atau menghubungi CS.</li>
            <li>CS mengatur jadwal survey dan melaporkan ke Agen Affiliate.</li>
            <li>Survey dilakukan dengan pendampingan tim CS.</li>
            <li>Dokumentasi survey berupa foto, video, dan notulensi akan dilaporkan di Dashboard Agen.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
