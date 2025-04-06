import Image from 'next/image';

export default function BuyBackGaransi() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Buy Back Garansi 150% & Promo SUPER EKSKLUSIF Andara Imperial Terrace
      </h1>
      <p className="text-lg text-center mb-4">
        Andara Imperial Terrace menghadirkan solusi investasi properti yang aman dan menguntungkan dengan skema Buy Back Garansi 150% serta berbagai promo eksklusif bagi pemilik villa.
      </p>
      {/* <Image 
        src="/buy_back_garansi.png" 
        alt="Buy Back Garansi Andara Imperial Terrace" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      /> */}

      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Buy Back Garansi 150%: Investasi Aman & Menguntungkan</h2>
          <p className="mt-2">Dengan skema Buy Back Garansi 150%, Andara Imperial Terrace memberikan kepastian bagi investor dengan jaminan pembelian kembali properti Anda sebesar 150% dari harga awal setelah periode tertentu.</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Keamanan Finansial: Mengurangi risiko fluktuasi pasar properti.</li>
            <li>Pengembalian Investasi 50% lebih tinggi dari harga awal.</li>
            <li>Fleksibilitas: Pilihan antara menikmati kenaikan nilai properti atau menggunakan opsi buy back.</li>
            <li>Daya Tarik Investasi: Meningkatkan kepercayaan calon investor dan pembeli.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Promo SUPER EKSKLUSIF Andara Imperial Terrace</h2>
          <p className="mt-2">Dapatkan hunian mewah dengan keuntungan luar biasa melalui promo SUPER EKSKLUSIF yang dikombinasikan dengan program IMPERIAL Passive Income.</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Garansi Bangunan & Furnished selama 8 tahun.</li>
            <li>Gratis biaya maintenance selama 8 tahun.</li>
            <li>Exclusive Private Membership Club dengan berbagai fasilitas premium.</li>
            <li>Buy Back Garansi 150% untuk kepastian keuntungan investasi.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">IMPERIAL Passive Income: Investasi Mewah, Penghasilan Stabil</h2>
          <p className="mt-2">Andara Imperial Terrace menawarkan investasi properti dengan sistem bagi hasil yang transparan.</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Fleksibilitas Sewa: Penuh atau per kamar (Presidential Suite, Executive Suite, Junior Suite).</li>
            <li>60% laba bersih untuk pemilik villa, 40% untuk operasional dan pemasaran.</li>
            <li>Transparansi penuh dalam laporan keuangan & okupansi.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Andara Imperial Terrace: Kawasan Mewah Berkelas Internasional</h2>
          <p className="mt-2">Menggabungkan hunian eksklusif, akomodasi, MICE, dan destinasi wisata dalam satu kawasan di Teras, Boyolali, Solo Raya.</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Landmark Ikonik: Colosseum Day Club, Menara Eiffel, Versailles Park, dan lainnya.</li>
            <li>Fasilitas Kelas Dunia: 50+ wahana wisata, shuttle 24 jam, spa, gym, dan akomodasi premium.</li>
            <li>15 Tipe Villa Berkonsep Eropa, lengkap dengan kolam renang pribadi dan smart home system.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
