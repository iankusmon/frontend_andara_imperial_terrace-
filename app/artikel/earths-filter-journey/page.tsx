import Image from "next/image";

export default function EarthsFilterJourney() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 text-black">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center mb-4 pt-20">
          Lantai Kedua – Earth’s Filter Journey
        </h1>
        <p className="text-lg text-center mb-6">
          Setelah mengalami petualangan interaktif di Lantai Pertama, pengunjung akan melanjutkan perjalanan edukasi mereka ke Lantai Kedua, yang mengusung tema "Earth’s Filter Journey". Di sini, pengunjung diajak untuk mengeksplorasi cara-cara alam dan teknologi hijau bekerja sama dalam proses penyaringan air, sebuah bagian integral dari sistem Menara Angin Andara yang ramah lingkungan.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold">Lab Alam: Menyelami Rahasia Alam</h2>
            <p>
              Begitu memasuki Lab Alam, pengunjung akan disambut oleh rangkaian media filtrasi alami yang dapat mereka sentuh dan pelajari secara langsung. Di sini, mereka dapat menjelajahi bagaimana unsur-unsur alam seperti pasir, batu zeolit, dan kerikil bekerja dalam menyaring air secara alami.
              Zona ini dipenuhi dengan berbagai eksperimen interaktif yang memungkinkan pengunjung untuk mencoba menyaring air keruh menggunakan kombinasi media tersebut.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Wall of Innovation: Menyaksikan Inovasi Hijau</h2>
            <p>
              Di sepanjang dinding interaktif yang diberi nama Wall of Innovation, pengunjung akan terpesona dengan penjelasan visual mengenai berbagai teknologi ramah lingkungan yang diadaptasi dari kearifan lokal dan global.
              Dinding ini menampilkan inovasi-inovasi terbaru dalam filtrasi air yang terinspirasi oleh teknik tradisional dan teknologi canggih.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Challenge Game: Menyusun Jalur Filtrasi yang Tepat</h2>
            <p>
              Setelah terinspirasi oleh inovasi hijau, pengunjung dapat beralih ke Challenge Game, sebuah permainan edukasi berbentuk puzzle yang mengajak mereka untuk menyusun jalur filtrasi yang benar.
              Dalam permainan ini, pengunjung akan belajar cara memilih bahan filtrasi yang tepat dan mengatur sistem filtrasi yang efisien.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Workshop DIY: Membangun Filter Air Sederhana</h2>
            <p>
              Menutup pengalaman edukasi ini adalah Workshop DIY, yang memberi kesempatan kepada pengunjung untuk langsung terlibat dalam proses pembuatan filter air sederhana yang bisa mereka bawa pulang dan aplikasikan di rumah.
              Ini adalah bagian dari upaya untuk membangkitkan kesadaran tentang betapa mudahnya kita semua dapat berkontribusi dalam menjaga kelestarian lingkungan.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Kesimpulan: Edukasi, Hiburan, dan Kecintaan terhadap Alam</h2>
            <p>
              Dengan "Jejak Filtrasi Alam", Lantai Kedua Menara Angin Andara menawarkan pengalaman yang tidak hanya menarik dan interaktif, tetapi juga memperkaya pengetahuan tentang pentingnya filtrasi alam dan teknologi hijau dalam menjaga kelestarian air dan lingkungan.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
