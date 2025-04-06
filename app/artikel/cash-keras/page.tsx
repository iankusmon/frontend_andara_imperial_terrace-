import Image from 'next/image';

export default function CashKeras() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Metode Pembayaran Tunai (Cash Keras) di Andara Imperial Terrace
      </h1>
      <p className="text-lg text-center mb-4">
        Pembayaran tunai atau cash keras adalah metode pembayaran di mana pembeli melunasi seluruh harga properti secara langsung dan sekaligus tanpa melalui proses pinjaman bank.
      </p>
      {/* <Image 
        src="/cash_payment.png" 
        alt="Metode Pembayaran Tunai di Andara Imperial Terrace" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      /> */}
      
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Keuntungan Memilih Pembayaran Tunai (Cash Keras)</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Proses cepat tanpa perlu pengajuan kredit.</li>
            <li>Mendapatkan harga khusus dan penawaran eksklusif.</li>
            <li>Transaksi lebih mudah tanpa birokrasi perbankan.</li>
            <li>Promo istimewa berupa cashback dan fasilitas tambahan.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Syarat dan Ketentuan Pembayaran Tunai (Cash Keras)</h2>
          <h3 className="text-lg font-semibold mt-4">Prioritas Pemesanan</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>Memiliki Nomor Urut Pemesanan (NUP) yang diperoleh selama sesi Pre-Launching (Februari 2025).</li>
            <li>Biaya pendaftaran NUP sebesar Rp2,5 juta tidak dapat dikembalikan jika terjadi pembatalan.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Booking Fee</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>Setelah memiliki NUP, pembeli harus membayar booking fee sebesar Rp50 juta selama Soft Launching (Maret 2025).</li>
            <li>Booking fee akan mengurangi total harga properti.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Pelunasan dan Serah Terima</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Pelunasan tunai harus dilakukan paling lambat pada April 2025.</li>
            <li>Setelah pelunasan, dilakukan penandatanganan Akta Jual Beli (AJB) di hadapan notaris.</li>
            <li>Pembangunan unit akan dimulai pada Juli 2025.</li>
            <li>Serah terima unit dan Sertifikat Hak Guna Bangunan (SHGB) dijadwalkan pada Maret 2026.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Ketentuan Pembatalan</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Pembatalan setelah pembayaran booking fee akan mengakibatkan booking fee sebesar Rp50 juta hangus.</li>
            <li>Dikenakan penalti sebesar 25% dari total pembayaran yang telah dilakukan.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Promo dan Cashback Eksklusif</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Bebas biaya PPJB, AJB, Biaya Balik Nama, BPHTB, dan PPN.</li>
            <li>Promo Full Furnish: Termasuk AC, TV, Kulkas, Sofa, Meja Tamu, Kompor Listrik, Kitchen Set, dan Springbed.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Tips untuk Pembayaran Tunai (Cash Keras)</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Konsultasi dengan tim marketing untuk memahami seluruh proses dan persyaratan.</li>
            <li>Siapkan dokumen pendukung seperti KTP, KK, dan NPWP untuk memperlancar transaksi.</li>
            <li>Manfaatkan promo pre-launching untuk mendapatkan diskon hingga Rp400 juta dan fasilitas premium seperti kolam renang pribadi dan teknologi smart home.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Contoh Perhitungan Pembayaran Tunai (Cash Keras)</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Harga normal Villa Tipe Athena Height: Rp3,15 Miliar.</li>
            <li>Harga Pre-Launching (Diskon): Rp2,75 Miliar.</li>
            <li>Booking Fee: Rp50 juta.</li>
            <li>Sisa pelunasan: Rp2,7 Miliar (dibayarkan pada April 2025).</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
