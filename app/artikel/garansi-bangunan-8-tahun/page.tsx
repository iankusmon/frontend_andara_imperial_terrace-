import Image from 'next/image';

export default function NUPArticle() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Garansi Bangunan dan Furnished Selama 8 Tahun
      </h1>
      <p className="text-lg text-center mb-4">
        Di Andara Imperial Terrace, kami memahami bahwa hunian bukan hanya tentang tempat tinggal, tetapi juga tentang kenyamanan, kualitas, dan investasi jangka panjang. Oleh karena itu, kami menghadirkan Garansi Bangunan dan Furnished selama 8 Tahun sebagai bagian dari Promo SUPER EKSKLUSIF sebagai bentuk penghargaan dari program IMPERIAL Passive Income untuk memberikan ketenangan dan jaminan terbaik bagi setiap pemilik properti.
      </p>
      {/* <Image 
        src="/garansi_bangunan.png" 
        alt="Garansi Bangunan Andara Imperial Terrace" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      /> */}
      
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Jaminan Kualitas Bangunan yang Prima</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Material Berkualitas Tinggi: Setiap unit dibangun menggunakan material premium yang tahan lama dan sesuai standar modern.</li>
            <li>Konstruksi Kokoh dan Aman: Dirancang oleh arsitek dan insinyur terbaik untuk ketahanan terhadap gempa dan kondisi lingkungan.</li>
            <li>Perawatan dan Perbaikan Tanpa Biaya Tambahan: Jika terjadi kerusakan struktural akibat kesalahan konstruksi, kami akan memperbaikinya tanpa biaya tambahan.</li>
            <li>Layanan Pemeliharaan Cepat dan Profesional: Tim teknisi khusus siap menangani perbaikan dengan layanan respons cepat.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Furnished Premium untuk Pengalaman Tinggal Mewah Tanpa Repot</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Interior Mewah dan Ergonomis: Setiap unit hadir dengan desain interior eksklusif yang mengutamakan estetika dan fungsionalitas.</li>
            <li>Perabotan Berkualitas Internasional: Furnitur menggunakan material terbaik dari merek ternama, menjamin ketahanan jangka panjang.</li>
            <li>Perawatan dan Penggantian Furnitur: Jika terjadi keausan pada perabotan akibat pemakaian normal, kami menyediakan perbaikan atau penggantian tanpa biaya tambahan.</li>
            <li>Smart Home Integration: Setiap hunian dilengkapi dengan sistem rumah pintar untuk kemudahan dalam mengatur pencahayaan, suhu ruangan, serta keamanan.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Manfaat Lebih dengan Promo SUPER EKSKLUSIF</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Gratis Biaya Maintenance selama 8 Tahun – Pemilik tidak perlu membayar biaya pemeliharaan properti dan lingkungan.</li>
            <li>Exclusive Private Membership Club – Akses eksklusif ke fasilitas premium seperti lounge, private dining, dan spa.</li>
            <li>Buy Back Garansi 150% – Jaminan investasi aman dengan opsi buyback hingga 150% dari harga pembelian.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Investasi Aman, Hunian Nyaman</h2>
          <p>
            Garansi selama 8 tahun untuk bangunan dan furnished di Andara Imperial Terrace bukan hanya sekadar keuntungan tambahan, tetapi juga bentuk komitmen kami dalam memberikan hunian yang berkualitas, nyaman, dan bernilai investasi tinggi. Dengan sistem passive income dari IMPERIAL Passive Income, properti ini juga menawarkan potensi penghasilan pasif yang stabil bagi pemiliknya.
          </p>
          <p>
            Jadikan Andara Imperial Terrace pilihan utama untuk hunian mewah dan investasi cerdas Anda. Segera miliki unit impian dan nikmati pengalaman tinggal tanpa khawatir dengan garansi terbaik di kelasnya!
          </p>
        </section>
      </div>
    </div>
  );
}
