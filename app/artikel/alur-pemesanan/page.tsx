import Image from 'next/image';

export default function NUPArticle() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Alur Pemesanan dan Proses Pembelian Hunian di Andara Imperial Terrace
      </h1>
      <p className="text-lg text-center mb-4">
        Andara Imperial Terrace menawarkan kesempatan istimewa bagi Anda untuk memiliki hunian eksklusif dengan desain arsitektur khas Eropa di lokasi strategis Solo Raya.
      </p>
      <Image 
        src="/alur_pemesanan_1.png" 
        alt="Alur Pemesanan Andara Imperial Terrace" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      />
      
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Tahap 1: Pendaftaran NUP (Pra-Launching Tahap I The Royale Elegance)</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Lengkapi formulir pendaftaran NUP secara online atau offline.</li>
            <li>Lakukan pembayaran biaya pendaftaran mulai dari Rp2.500.000.</li>
            <li>Setelah pembayaran terkonfirmasi, Anda akan menerima Nomor Urut Pemesanan (NUP).</li>
          </ul>
          <p className="mt-2 font-semibold">Aturan:</p>
          <ul className="list-disc pl-5">
            <li>NUP tidak dapat dialihkan ke pihak lain.</li>
            <li>NUP hanya berlaku untuk sesi pre-launching yang sama.</li>
            <li>NUP akan hangus jika tidak digunakan dalam periode soft launching yang sesuai.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Tahap 2: Booking Fee dan Pemilihan Unit</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Pilih unit sesuai nomor urut NUP.</li>
            <li>Pilih metode pembayaran: Cash Keras, Cash Tempo, atau KPR.</li>
            <li>Lakukan pembayaran booking fee sebagai tanda jadi pemesanan unit.</li>
            <li>Tandatangani SPKB (Surat Pemilihan Kavling dan Bangunan).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Tahap 3: Pembayaran DP dan PPJB</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Bayar DP sebesar 30% dari harga jual.</li>
            <li>Tandatangani PPJB di hadapan notaris sebagai perjanjian jual beli.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Tahap 4: Pelunasan dan AJB</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Pelunasan sisa pembayaran sesuai metode yang dipilih.</li>
            <li>Tandatangani Akta Jual Beli (AJB) di hadapan notaris.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Tahap 5: Serah Terima</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Serah terima unit secara fisik setelah administrasi selesai.</li>
            <li>Serah terima Sertifikat Hak Guna Bangunan (SHGB) atas nama pembeli.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
