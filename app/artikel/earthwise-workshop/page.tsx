import Image from "next/image";

export default function EarthWiseWorkshop() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 text-black">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center mb-4 pt-20">
          EarthWise Workshop: Kelas Terbuka "Eco Builder"
        </h1>
        <p className="text-lg text-center mb-6">
          Terletak di luar Menara Angin Andara, EarthWise Workshop adalah wahana edukasi interaktif di mana pengunjung dapat mengasah kreativitas dan pengetahuan mereka mengenai keberlanjutan lingkungan. Area ini dirancang untuk mengajak setiap pengunjung berkontribusi langsung dalam menjaga planet kita dengan cara yang sederhana namun berdampak besar.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold">Tempat Belajar dan Berinovasi</h2>
            <p>
              Di EarthWise Workshop, pengunjung diajak untuk mendalami konsep teknologi ramah lingkungan. Dengan suasana alami yang menyegarkan, peserta—baik anak-anak maupun orang dewasa—akan memperoleh wawasan tentang cara mendukung keberlanjutan melalui teknologi yang mudah dibuat dan berbahan dasar sederhana.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Wahana di EarthWise Workshop</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Komposter DIY:</strong> Pelajari cara mengubah sampah organik menjadi kompos dengan bahan-bahan sederhana seperti kardus, daun kering, dan sisa makanan.
              </li>
              <li>
                <strong>Turbin Mini:</strong> Rakit turbin angin kecil untuk memahami prinsip dasar energi terbarukan dan membawa pulang miniatur turbin sebagai kenang-kenangan.
              </li>
              <li>
                <strong>Sistem Penyaringan Sederhana:</strong> Buat filter air menggunakan pasir, batu, dan kerikil untuk belajar cara menjaga kualitas air dengan metode alami.
              </li>
              <li>
                <strong>Kebun Vertikal dan Hidroponik:</strong> Pelajari teknik berkebun di ruang terbatas menggunakan botol bekas dan sistem hidroponik sederhana.
              </li>
              <li>
                <strong>Edukasi Daur Ulang dengan Seni:</strong> Ubah sampah plastik menjadi karya seni seperti lampu hias atau pot tanaman, sambil memahami pentingnya daur ulang.
              </li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Keseruan Sambil Membangun Kesadaran Lingkungan</h2>
            <p>
              EarthWise Workshop mengajarkan keberlanjutan melalui pembelajaran langsung yang interaktif. Dengan bimbingan para ahli lingkungan, pengunjung mendapatkan wawasan tentang bagaimana menerapkan prinsip ramah lingkungan dalam kehidupan sehari-hari.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Menghubungkan Pengunjung dengan Alam</h2>
            <p>
              Berlokasi di sekitar taman hijau Menara Angin Andara, workshop ini menciptakan suasana yang mendukung refleksi dan kreativitas. Pengunjung bisa merasakan manfaat langsung dari apa yang mereka pelajari sambil berinteraksi dengan alam.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Simbol Tindakan Menuju Masa Depan Berkelanjutan</h2>
            <p>
              EarthWise Workshop adalah komitmen Menara Angin Andara terhadap edukasi lingkungan. Setiap proyek yang dikerjakan di sini membuktikan bahwa keberlanjutan dapat dimulai dari tindakan kecil yang berdampak besar.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
