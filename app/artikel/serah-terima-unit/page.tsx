import Image from 'next/image';

export default function SerahTerimaUnit() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Serah Terima Unit: Tahap Akhir Menuju Hunian Idaman Anda di Andara Imperial Terrace
      </h1>
      <p className="text-lg text-center mb-4">
        Serah terima unit merupakan momen penting bagi setiap pembeli properti, termasuk Anda yang telah memilih hunian di Andara Imperial Terrace. Proses ini menandai penyelesaian transaksi pembelian dan memastikan kepemilikan resmi atas unit yang Anda beli.
      </p>
      {/* <Image 
        src="/serah_terima_unit.png" 
        alt="Serah Terima Unit Andara Imperial Terrace" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      /> */}
      
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Apa Itu Serah Terima Unit?</h2>
          <p>Serah terima unit adalah tahap akhir dalam transaksi properti di mana pengembang secara resmi menyerahkan kunci, kepemilikan unit, serta dokumen legal kepada pembeli.</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Bukti kepemilikan resmi: Anda menerima unit beserta dokumen legal seperti Akta Jual Beli (AJB) dan sertifikat hak milik.</li>
            <li>Pengecekan fisik unit: Memastikan kondisi unit sesuai dengan spesifikasi yang dijanjikan.</li>
            <li>Pemindahan utilitas: Proses peralihan kepemilikan listrik, air, dan internet atas nama Anda.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Tahapan Sebelum Serah Terima Unit</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Pelunasan pembayaran, termasuk biaya tambahan seperti balik nama sertifikat.</li>
            <li>Penerbitan Akta Jual Beli (AJB) dan proses balik nama sertifikat.</li>
            <li>Inspeksi akhir oleh pengembang untuk memastikan unit siap diserahkan.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Proses Serah Terima Unit</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Pengecekan bersama kondisi unit antara pembeli dan perwakilan pengembang.</li>
            <li>Penyerahan kunci sebagai tanda kepemilikan resmi.</li>
            <li>Penyerahan dokumen penting seperti sertifikat kepemilikan dan buku panduan penghuni.</li>
            <li>Panduan pemindahan utilitas untuk kemudahan penggunaan fasilitas.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Hal yang Perlu Diperhatikan</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Periksa kondisi unit, termasuk dinding, lantai, plafon, dan fasilitas.</li>
            <li>Pastikan semua dokumen telah diterima dan sesuai.</li>
            <li>Konfirmasi fasilitas tambahan yang dijanjikan, seperti smart home atau kolam renang pribadi.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Menikmati Hunian Impian Anda</h2>
          <p>Dengan serah terima unit yang lancar, Anda kini bisa menikmati kehidupan di Andara Imperial Terrace. Hunian eksklusif ini menawarkan kenyamanan, prestise, dan nilai investasi tinggi.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Tips Membeli Hunian di Andara Imperial Terrace</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Manfaatkan fase pre-launching untuk mendapatkan diskon hingga Rp400 juta dan fasilitas premium.</li>
            <li>Pilih tipe hunian sesuai kebutuhan dari berbagai pilihan desain arsitektur Eropa.</li>
            <li>Daftarkan Nomor Urut Pemesanan (NUP) lebih awal untuk mendapatkan hak prioritas memilih unit terbaik.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
