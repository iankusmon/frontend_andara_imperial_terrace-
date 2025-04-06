import Image from 'next/image';

export default function FreeBiayaMaintenance() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        GRATIS BIAYA MAINTENANCE SELAMA 8 TAHUN
      </h1>
      <p className="text-lg text-center mb-4 font-semibold">
        KENYAMANAN & EFISIENSI BIAYA JANGKA PANJANG
      </p>
      <p className="text-lg text-justify">
        Dalam rangka memberikan pengalaman investasi dan hunian terbaik bagi para pemilik properti, 
        Andara Imperial Terrace menghadirkan Promo SUPER EKSKLUSIF yang mencakup Gratis Biaya Maintenance (IPL) 
        selama 8 tahun. Keuntungan luar biasa ini memberikan kebebasan finansial dan jaminan kenyamanan bagi para pemilik unit, 
        khususnya dalam program IMPERIAL Passive Income.
      </p>

      {/* <Image 
        src="/promo_super_eksklusif.png" 
        alt="Promo SUPER EKSKLUSIF Andara Imperial Terrace" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg my-6" 
      /> */}

      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Manfaat Gratis Biaya Maintenance (IPL) selama 8 Tahun</h2>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Bebas Beban Operasional:</strong> Pengembang menanggung seluruh biaya maintenance (IPL) selama 8 tahun.</li>
            <li><strong>Jaminan Kenyamanan:</strong> Fasilitas dan lingkungan dikelola profesional oleh PT. Andara Rejo Makmur.</li>
            <li><strong>Efisiensi Biaya:</strong> Mengurangi pengeluaran tahunan bagi penghuni dan investor.</li>
            <li><strong>Nilai Properti Meningkat:</strong> Lingkungan yang terawat menjaga kualitas dan harga jual properti.</li>
            <li><strong>Daya Tarik bagi Investor:</strong> Properti bebas biaya maintenance lebih diminati di pasar sewa.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Keuntungan Promo SUPER EKSKLUSIF</h2>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Garansi Bangunan & Furnished Selama 8 Tahun:</strong> Kualitas bangunan terbaik dan furnished premium.</li>
            <li><strong>Gratis Biaya Maintenance Selama 8 Tahun:</strong> Pengembang menanggung IPL untuk efisiensi biaya penghuni.</li>
            <li><strong>Exclusive Private Membership Club:</strong> Akses ke fasilitas premium seperti Exclusive Lounge, Private Dining, dan Concierge.</li>
            <li><strong>Buy Back Guarantee 150%:</strong> Jaminan investasi aman dengan pengembalian hingga 150% dari harga pembelian.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">IMPERIAL Passive Income: Investasi Mewah, Penghasilan Stabil</h2>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Fleksibilitas Sewa:</strong> Pemilik dapat menyewakan seluruh villa atau per kamar.</li>
            <li><strong>Sistem Bagi Hasil Transparan:</strong> 60% laba bersih untuk pemilik, 40% dikelola untuk operasional dan pemasaran.</li>
            <li><strong>Keuntungan Imperial Passive Income:</strong> Investasi tanpa ribet, okupansi tinggi, dan transparansi penuh.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Miliki Hunian Mewah Sekaligus Investasi Menguntungkan!</h2>
          <p className="text-lg text-justify">
            Dengan Promo SUPER EKSKLUSIF & IMPERIAL Passive Income, Andara Imperial Terrace menghadirkan pengalaman 
            tinggal luar biasa sekaligus peluang investasi stabil dan menguntungkan. Segera miliki villa impian Anda & nikmati keuntungan maksimal!
          </p>
        </section>
      </div>
    </div>
  );
}
