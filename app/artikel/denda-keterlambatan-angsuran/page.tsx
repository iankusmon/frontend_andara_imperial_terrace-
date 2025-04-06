import Image from 'next/image';

export default function DendaKeterlambatanAngsuran() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Denda Keterlambatan Angsuran di Andara Imperial Terrace
      </h1>
      <p className="text-lg text-center mb-4">
        Andara Imperial Terrace menerapkan kebijakan denda bagi nasabah yang terlambat membayar angsuran. Untuk menghindari konsekuensi finansial yang tidak diinginkan, penting bagi nasabah untuk memahami besaran denda dan mekanisme perhitungannya secara rinci.
      </p>
      {/* <Image 
        src="/denda_keterlambatan.png" 
        alt="Denda Keterlambatan Andara Imperial Terrace" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      /> */}
      
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Mengapa Informasi Besaran Denda Penting?</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Memudahkan perencanaan keuangan agar dapat mengantisipasi biaya tambahan akibat keterlambatan.</li>
            <li>Mencegah eskalasi tunggakan dengan meningkatkan disiplin pembayaran.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Faktor Penentu Besaran Denda</h2>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Ketentuan Perjanjian Jual Beli:</strong> Denda keterlambatan diatur dalam perjanjian yang telah disepakati kedua belah pihak.</li>
            <li><strong>Suku Bunga Keterlambatan:</strong> Biasanya dihitung berdasarkan jumlah angsuran tertunggak dan durasi keterlambatan.</li>
            <li><strong>Kebijakan Internal Pengembang:</strong> Setiap pengembang memiliki aturan spesifik terkait nilai denda yang diberlakukan.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Bagaimana Mengetahui Besaran Denda?</h2>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Membaca Perjanjian Jual Beli:</strong> Pastikan memahami isi perjanjian, khususnya bagian yang mengatur sanksi keterlambatan.</li>
            <li><strong>Berkonsultasi dengan Pihak Pengembang:</strong> Hubungi tim marketing atau customer service untuk mendapatkan informasi resmi.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Contoh Simulasi Perhitungan Denda</h2>
          <p className="mt-2">Berikut adalah simulasi sederhana untuk memahami cara perhitungan denda keterlambatan:</p>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Besar Angsuran:</strong> Rp100.000.000</li>
            <li><strong>Tanggal Jatuh Tempo:</strong> 5 setiap bulan</li>
            <li><strong>Tanggal Pembayaran:</strong> 10 (terlambat 5 hari)</li>
            <li><strong>Suku Bunga Keterlambatan:</strong> 2% per bulan</li>
          </ul>
          <p className="mt-2">Perhitungan Denda:</p>
          <p className="bg-gray-100 p-4 rounded-lg">Tunggakan: Rp100.000.000 × 2% × (5/30) = Rp333.333</p>
          <p>Dengan demikian, denda keterlambatan dalam kasus ini adalah Rp333.333. Catatan: Nilai aktual dapat berbeda berdasarkan kebijakan perusahaan.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Konsekuensi Jika Tidak Membayar Denda</h2>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Pembatalan Transaksi:</strong> Pengembang dapat membatalkan perjanjian, sehingga nasabah kehilangan hak atas properti.</li>
            <li><strong>Tindakan Hukum:</strong> Pengembang berhak mengambil langkah hukum untuk menagih tunggakan dan denda.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Tips Menghindari Keterlambatan Pembayaran</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Gunakan pengingat di kalender atau aplikasi untuk mencatat tanggal jatuh tempo.</li>
            <li>Otomatiskan pembayaran dengan fitur auto debit agar tidak terlambat.</li>
            <li>Periksa saldo rekening secara rutin untuk memastikan dana cukup.</li>
            <li>Simpan bukti pembayaran sebagai referensi jika terjadi kesalahan pencatatan.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
