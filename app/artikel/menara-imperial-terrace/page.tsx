import Image from 'next/image';

const MenaraImperialTerrace = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6 pt-20">Menara Imperial Terrace</h1>
      <p className="text-center text-lg">Destinasi MICE dan Wisata Modern di Andara Imperial Terrace</p>
      <div className="mt-6">
        <Image 
          src="/menara_imperial_terrace_2.jpg" 
          alt="Menara Imperial Terrace" 
          width={800} 
          height={500} 
          className="rounded-lg mx-auto"
        />
      </div>
      
      <section className="mt-6">
        <p>
          Menara Imperial Terrace adalah mahakarya arsitektur ikonis yang menjadi simbol kemegahan Andara Imperial Terrace, kawasan hunian dan wisata eksklusif di Teras Boyolali. Mengusung konsep MICE (Meeting, Incentive, Convention, and Exhibition) serta destinasi wisata modern, menara ini memadukan keindahan desain, fungsi multifungsi, dan keunikan budaya lokal.
        </p>
        <p className="mt-4">
          Terinspirasi oleh Menara Eiffel, Menara Imperial Terrace memiliki ketinggian 35 meter dengan 5 lantai dan puncak observatorium (Meteora). Setiap lantainya memberikan pengalaman berbeda, menjadikannya daya tarik wisata dan pusat kegiatan kelas dunia.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Struktur dan Desain Menara</h2>
        <p className="mt-4">Menara ini dilengkapi dengan lift outdoor kaca dan tangga darurat dengan desain menyerupai menara masjid, menambah estetika ikonisnya.</p>
        <ul className="mt-4 list-disc list-inside">
          <li><strong>Lantai 1:</strong> Lobi utama, ballroom serbaguna, dan Andara Colossal Festival.</li>
          <li><strong>Lantai 2 & 3:</strong> Ruang MICE, edukasi interaktif, Andara Innovation Center, dan Andara Smart Room.</li>
          <li><strong>Lantai 4:</strong> Meteora - Observatorium dengan Andara CosmoSphere dan Meteora Wonders.</li>
          <li><strong>Lantai 5:</strong> Al Eiffel Mushola - tempat ibadah dengan konsep modern.</li>
          <li><strong>Puncak Menara:</strong> Pemandangan panorama dengan fasilitas eksklusif.</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Paket Acara MICE</h2>
        <p className="mt-4">Menara ini mendukung berbagai acara bisnis, sosial, pendidikan, hingga hiburan.</p>
        <ul className="mt-4 list-disc list-inside">
          <li><strong>Bisnis:</strong> Rapat, peluncuran produk, pameran dagang.</li>
          <li><strong>Sosial:</strong> Pernikahan, reuni, pesta eksklusif.</li>
          <li><strong>Pendidikan:</strong> Seminar, workshop, acara kampus.</li>
          <li><strong>Hiburan:</strong> Konser kecil, pertunjukan seni.</li>
          <li><strong>Kesehatan:</strong> Yoga retreat, wellness program.</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Destinasi Wisata Modern</h2>
        <p className="mt-4">Selain MICE, menara ini menawarkan berbagai wahana wisata unik.</p>
        <ul className="mt-4 list-disc list-inside">
          <li><strong>Andara Colossal Festival:</strong> Pertunjukan budaya dengan teknologi modern.</li>
          <li><strong>Lift Kaca Tembus Pandang:</strong> Menampilkan pemandangan spektakuler.</li>
          <li><strong>Gardu Pandang 360°:</strong> Panorama Andara Venice Cruise dan Colosseum Day Club.</li>
          <li><strong>Observatorium Astronomi:</strong> Teropong bintang, workshop astronomi.</li>
          <li><strong>Flying Fox ke Imperial Dine & Lounge:</strong> Jalur 150 meter yang penuh adrenalin.</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Kesimpulan</h2>
        <p className="mt-4">
          Menara Imperial Terrace adalah destinasi yang menggabungkan arsitektur, teknologi modern, dan fungsi multifungsi untuk berbagai acara dan wisata. Dengan wahana unik dan pemandangan luar biasa, menara ini menjadi pilihan utama untuk pengalaman tak terlupakan.
        </p>
      </section>
    </div>
  );
};

export default MenaraImperialTerrace;
