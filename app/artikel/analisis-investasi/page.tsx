import Image from 'next/image';

export default function AnalisisInvestasi() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Layak Dibeli atau Tidak?
      </h1>
      <p className="text-lg text-center mb-4">
        Berdasarkan analisis Break-Even Point (BEP) dan Return on Investment (ROI), hunian mewah di Andara Imperial Terrace layak dibeli, terutama bagi calon investor yang mengincar passive income dari penyewaan villa.
      </p>
      {/* <Image 
        src="/alur_pemesanan_1.png" 
        alt="Analisis Investasi Andara Imperial Terrace" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      /> */}
      
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">1. Break-Even Point (BEP) & Periode Balik Modal</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>BEP tercepat: Porto Vista (4.45 tahun di okupansi agresif).</li>
            <li>BEP terlama: Athena Height (7.25 tahun di okupansi slow).</li>
            <li>Mayoritas villa bisa balik modal dalam 4.5–5 tahun jika okupansi agresif (60%) tercapai.</li>
            <li>Jika okupansi moderat (50%), BEP rata-rata 5.4–5.8 tahun, masih tergolong wajar dalam investasi properti.</li>
            <li>Jika okupansi slow (40%), BEP sekitar 7 tahun, yang tetap dalam batas investasi jangka menengah.</li>
          </ul>
          <p className="mt-2 font-semibold">Kesimpulan:</p>
          <p>Dengan strategi pemasaran yang tepat, target balik modal 4.5–5 tahun sangat realistis.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Return on Investment (ROI)</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>ROI tertinggi: Athena Height (10.32% per tahun di skenario agresif).</li>
            <li>ROI terendah: Porto Vista (6.18% per tahun di skenario slow).</li>
            <li>Rata-rata ROI moderat: 8%–8.5%, lebih tinggi dibandingkan investasi properti konvensional (biasanya 5%–7% per tahun).</li>
          </ul>
          <p className="mt-2 font-semibold">Kesimpulan:</p>
          <p>ROI cukup menarik, terutama jika okupansi bisa dijaga di level 50%–60%.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Analisis Risiko & Potensi Keuntungan</h2>
          <h3 className="font-semibold mt-2">Keunggulan:</h3>
          <ul className="list-disc pl-5">
            <li>Properti premium di lokasi strategis dengan potensi kenaikan harga tanah.</li>
            <li>Pendapatan pasif dari sewa kamar/villa dengan sistem manajemen profesional.</li>
            <li>Bagi hasil dengan PT Andara Rejo Makmur (60%-40%) mengurangi beban operasional pemilik.</li>
            <li>Kombinasi BEP cepat & ROI tinggi membuatnya lebih menarik dibandingkan deposito atau saham berisiko tinggi.</li>
          </ul>
          <h3 className="font-semibold mt-2">Potensi Risiko & Tantangan:</h3>
          <ul className="list-disc pl-5">
            <li>Okupansi harus dijaga minimal 50%-60% agar BEP tercapai dalam 5 tahun.</li>
            <li>Persaingan dengan villa lain di area premium dapat memengaruhi harga sewa dan okupansi.</li>
            <li>Manajemen operasional & perawatan villa harus optimal agar tidak menurunkan nilai properti.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Rekomendasi untuk Calon Pembeli</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Pilih villa dengan BEP tercepat & ROI tertinggi → Misalnya Athena Height, Amsterdam Royale, dan Da Vinci Residence.</li>
            <li>Gunakan strategi pemasaran & manajemen okupansi agresif → Targetkan okupansi di atas 50%.</li>
            <li>Optimalkan pemanfaatan properti → Kombinasikan sewa bulanan & harian untuk meningkatkan pendapatan.</li>
            <li>Pantau kenaikan harga properti → Jika tren kenaikan tinggi, bisa dijual sebelum BEP tercapai untuk untung lebih besar.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Kesimpulan Akhir: Layak Dibeli atau Tidak?</h2>
          <p>✅ YA, hunian mewah di Andara Imperial Terrace layak dibeli sebagai investasi properti premium.</p>
          <p>Dengan BEP rata-rata 4.5–5.8 tahun dan ROI 8%–10% per tahun, properti ini dapat menjadi pilihan investasi yang menguntungkan, terutama dengan strategi okupansi yang optimal.</p>
        </section>
      </div>
    </div>
  );
}
