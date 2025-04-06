import Image from 'next/image';

export default function TombolShare() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Tombol Share - Hanya SHARE dapat CUAN! Tanpa Keraguan.
      </h1>
      <p className="text-lg text-center mb-4">
        Berikut adalah alur kerja terperinci mengenai tombol "Share" yang dirancang untuk setiap gambar dan artikel di website www.andaraimperialterrace.co.id untuk Agen Affiliate. Alur ini menjelaskan langkah-langkah, interaksi, dan sistem pelacakan yang diterapkan untuk meningkatkan efisiensi berbagi konten oleh agen.
      </p>
      {/* <Image 
        src="/tombol_share.png" 
        alt="Tombol Share Andara Imperial Terrace" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      /> */}
      
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">1. Identifikasi Konten</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Agen Affiliate mengakses website www.andaraimperialterrace.co.id dan menjelajahi berbagai konten yang tersedia.</li>
            <li>Agen memilih gambar atau artikel yang ingin dibagikan dengan mengklik tombol "Share".</li>
            <li>Berbagai kategori konten dapat dibagikan, termasuk:
              <ul className="list-disc pl-5 mt-2">
                <li>Kawasan Andara Imperial Terrace</li>
                <li>Pricelist dan Promo</li>
                <li>Simulasi KPR & Pajak Properti</li>
                <li>Paket Wisata, Menginap, Rapat, dan Tour</li>
                <li>Wahana Wisata dan Landmark</li>
                <li>MICE (Meetings, Incentives, Conferences, and Exhibitions)</li>
                <li>Colosseum Day Club by Andara</li>
                <li>Taman Tematik, Arena Kuliner, dan Fasilitas Komunitas</li>
                <li>Akomodasi: 15 tipe villa dengan konsep beragam</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Tampilan Tombol Share</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Tombol "Share" ditempatkan strategis di setiap gambar dan artikel.</li>
            <li>Dilengkapi dengan ikon berbagai platform media sosial (Facebook, Instagram, Twitter, WhatsApp, dll.).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Interaksi dengan Tombol Share</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Muncul jendela pop-up atau dropdown dengan pilihan platform media sosial.</li>
            <li>Menampilkan preview konten sebelum dibagikan, termasuk gambar, judul, dan deskripsi singkat.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Memilih Platform untuk Share</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Agen memilih platform yang diinginkan.</li>
            <li>Sistem menyesuaikan konten dengan format platform tersebut.</li>
            <li>Agen dapat menambahkan teks, keterangan, atau tagar sebelum membagikan.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Proses Share</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Konten dibagikan ke media sosial yang dipilih.</li>
            <li>Sistem mencatat dan melacak performa berbagi konten oleh agen.</li>
            <li>Data analitik tersedia bagi agen untuk melihat jumlah klik dan interaksi dari konten yang dibagikan.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
