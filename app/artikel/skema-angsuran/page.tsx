import Image from 'next/image';

export default function SkemaAngsuran() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Panduan Lengkap Skema Angsuran dan Konsekuensi Keterlambatan di Andara Imperial Terrace
      </h1>
      <p className="text-lg text-center mb-4">
        Pembelian unit di Andara Imperial Terrace menawarkan berbagai pilihan skema pembayaran untuk memenuhi kebutuhan calon pembeli. Namun, memahami jadwal pembayaran serta konsekuensi keterlambatan sangat penting untuk memastikan kelancaran transaksi. Artikel ini akan menjelaskan secara mendetail skema angsuran yang tersedia serta dampak jika terjadi keterlambatan pembayaran.
      </p>
      {/* <Image 
        src="/skema_angsuran.png" 
        alt="Skema Angsuran Andara Imperial Terrace" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      /> */}
      
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Pilihan Skema Pembayaran Angsuran</h2>
          <p className="mt-2">
            Untuk memberikan fleksibilitas kepada pembeli, Andara Imperial Terrace menawarkan beberapa metode pembayaran:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Cash Tempo:</strong> Pembayaran bertahap dalam 3, 6, atau 12 bulan tanpa bunga tambahan.</li>
            <li><strong>DP Cicil 12x:</strong> Skema cicilan uang muka dalam 12 kali pembayaran untuk meringankan beban awal.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Jadwal Pembayaran Angsuran</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Pembayaran dilakukan setiap bulan sesuai dengan Perjanjian Jual Beli (PJB).</li>
            <li>Jadwal pembayaran dicantumkan secara resmi dan wajib dipatuhi.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Akta Jual Beli (AJB)</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Setelah semua pembayaran diselesaikan, pembeli akan menandatangani AJB sebagai bukti sah kepemilikan.</li>
            <li>Dokumen ini menjadi dasar hukum dalam transaksi properti.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Dampak Keterlambatan Pembayaran</h2>
          <p className="mt-2">
            Untuk menjaga ketertiban dalam transaksi, keterlambatan pembayaran akan dikenakan sanksi sebagai berikut:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Surat Peringatan Pertama (SP1):</strong> Dikirimkan setelah keterlambatan pembayaran. Denda sebesar 0,5–1% per hari mulai diberlakukan.</li>
            <li><strong>Surat Peringatan Kedua (SP2):</strong> Jika pembayaran belum dilakukan dalam 14 hari setelah SP1, denda bertambah.</li>
            <li><strong>Surat Peringatan Ketiga (SP3):</strong> Jika tidak ada pembayaran dalam 14 hari setelah SP2, diberikan batas waktu terakhir untuk melunasi.</li>
            <li><strong>Pembatalan Transaksi:</strong> Jika setelah SP3 pembayaran tidak dilakukan, transaksi dibatalkan dengan konsekuensi:
              <ul className="list-disc pl-5 mt-2">
                <li>Seluruh pembayaran yang telah dilakukan hangus.</li>
                <li>Hak kepemilikan kembali ke pihak pengembang.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Pentingnya Pembayaran Tepat Waktu</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Mencegah denda tambahan yang dapat membebani finansial.</li>
            <li>Menjaga kepemilikan properti tetap aman tanpa risiko pembatalan.</li>
            <li>Menghindari catatan buruk dalam transaksi properti.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Tips Menghindari Keterlambatan</h2>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Gunakan Pengingat:</strong> Catat jadwal pembayaran di kalender atau aplikasi keuangan.</li>
            <li><strong>Aktifkan Pembayaran Otomatis:</strong> Setting transfer otomatis ke rekening developer.</li>
            <li><strong>Siapkan Dana Darurat:</strong> Pastikan selalu ada cadangan dana untuk pembayaran angsuran.</li>
            <li><strong>Simpan Bukti Pembayaran:</strong> Dokumentasikan setiap transaksi sebagai referensi.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
