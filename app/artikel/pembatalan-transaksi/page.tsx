import Image from 'next/image';

export default function PembatalanTransaksi() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Pembatalan Transaksi di Andara Imperial Terrace: Konsekuensi dan Ketentuan
      </h1>
      <p className="text-lg text-center mb-4">
        Memahami ketentuan pembatalan transaksi sangat penting sebelum mengambil keputusan besar dalam pembelian properti. Andara Imperial Terrace memiliki aturan yang jelas mengenai konsekuensi pembatalan transaksi agar pembeli dapat mengambil keputusan secara matang dan terinformasi.
      </p>
      {/* <Image 
        src="/pembatalan_transaksi.png" 
        alt="Ketentuan Pembatalan Andara Imperial Terrace" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      /> */}
      
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Konsekuensi Pembatalan</h2>
          <p>Jika transaksi pembelian properti dibatalkan setelah membayar booking fee atau uang muka (DP), berikut adalah konsekuensinya:</p>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Hangusnya Booking Fee dan DP:</strong> Booking fee dan DP yang telah dibayarkan tidak dapat dikembalikan karena digunakan untuk biaya administrasi dan kompensasi atas kesempatan bisnis yang hilang.</li>
            <li><strong>Penalti Pembatalan:</strong> Anda akan dikenakan penalti sebesar 25% dari total uang yang sudah dibayarkan sebagai kompensasi atas biaya operasional dan potensi keuntungan yang hilang.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Mengapa Penalti Diterapkan?</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Pembatalan dapat mengganggu rencana keuangan dan operasional pengembang.</li>
            <li>Biaya administrasi yang telah dikeluarkan, termasuk dokumen hukum dan pemasaran.</li>
            <li>Unit yang sudah dipesan menjadi tertahan dan tidak bisa dijual ke pembeli lain dalam periode tertentu.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Alasan Umum Pembatalan Transaksi</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Perubahan kondisi keuangan seperti kehilangan pekerjaan atau kebutuhan mendesak.</li>
            <li>Perubahan rencana hidup, misalnya pindah ke lokasi lain.</li>
            <li>Menemukan properti lain yang lebih sesuai dengan kebutuhan atau anggaran.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Prosedur Pembatalan Transaksi</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Mengajukan surat permohonan pembatalan secara tertulis dengan alasan yang jelas.</li>
            <li>Konsultasi dengan pihak pengembang untuk mendiskusikan konsekuensi dan solusi alternatif.</li>
            <li>Melunasi penalti pembatalan sesuai dengan ketentuan yang berlaku.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Tips Sebelum Membatalkan Transaksi</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Evaluasi ulang keputusan dengan mempertimbangkan alternatif seperti perubahan skema pembayaran atau memilih unit lain yang lebih sesuai.</li>
            <li>Diskusikan dengan pihak pengembang untuk mencari solusi fleksibel dalam jadwal pembayaran.</li>
            <li>Periksa ketentuan dalam surat perjanjian jual beli (PPJB) mengenai klausul pembatalan dan penalti.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Kesimpulan</h2>
          <p>Pembatalan transaksi properti di Andara Imperial Terrace memiliki konsekuensi finansial yang signifikan, termasuk hangusnya booking fee dan DP serta penalti 25%. Oleh karena itu, pastikan keputusan pembatalan sudah dipertimbangkan dengan matang. Jika memungkinkan, konsultasikan dengan pihak pengembang untuk menemukan solusi terbaik sebelum mengambil keputusan.</p>
        </section>
      </div>
    </div>
  );
}
