import Image from "next/image";

export default function AndaraEcoTrail() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 pt-20">
          Andara Eco Trail: Jelajah Edukasi di Jantung Keberlanjutan
        </h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Andara Eco Trail adalah salah satu wahana outdoor gratis yang menjadi primadona di kawasan Menara Pisa Andara. Jalur pejalan kaki ini didesain sebagai perjalanan menyeluruh yang menghubungkan pengunjung dengan keindahan alam sekitar dan mengedukasi tentang pelestarian ekosistem air.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold text-gray-800">Awal Perjalanan: Gerbang Edukasi</h2>
            <p className="text-gray-700">
              Petualangan dimulai dari gerbang bertema ekosistem air dengan instalasi seni berbentuk tetesan air raksasa. Panel informasi digital memberikan pengantar tentang pentingnya air bagi kehidupan dan bagaimana ekosistem air mendukung keberlanjutan lingkungan.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Jalur Hijau yang Memikat</h2>
            <p className="text-gray-700">
              Pengunjung diajak menyusuri jalur setapak sepanjang 1,5 km yang dikelilingi taman hijau dengan berbagai tanaman khas ekosistem perairan. Titik edukasi seperti Zona Air Tanah, Zona Flora dan Fauna Air, serta Zona Krisis Air memberikan pengalaman interaktif dan informatif.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Air Mancur Harmoni</h2>
            <p className="text-gray-700">
              Sebuah air mancur kecil dikelilingi tempat duduk amfiteater menjadi area istirahat dan pertunjukan edukatif tentang konservasi air.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Tantangan Ekosistem Anak</h2>
            <p className="text-gray-700">
              Anak-anak dapat mengikuti petunjuk untuk memecahkan teka-teki lingkungan dan mendapatkan lencana “Pahlawan Lingkungan” di akhir jalur.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Keindahan Akhir: Danau Refleksi</h2>
            <p className="text-gray-700">
              Danau kecil yang dikelilingi jembatan kayu dan taman bunga air menjadi tempat tenang untuk merenungkan perjalanan edukasi.
            </p>
          </article>
        </section>

        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            "Jelajahi, Belajar, dan Cintai Alam di Andara Eco Trail! 🌿💧"
          </h3>
          <p className="text-gray-700 text-lg mt-4">
            Perjalanan yang menginspirasi, membangun kesadaran lingkungan, dan menawarkan pengalaman yang tak terlupakan.
          </p>
        </div>
      </div>
    </div>
  );
}
