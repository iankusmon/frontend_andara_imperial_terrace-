import Image from "next/image";

export default function AndaraAquaTechAdventure() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 pt-20">
          Andara AquaTech Adventure: Menyelami Dunia Teknologi Pengeboran Air di Menara Pisa Andara
        </h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Selamat datang di Andara AquaTech Adventure, wahana wisata interaktif di Lantai 1 Menara Pisa Andara, yang membawa pengunjung dalam perjalanan menarik untuk mengeksplorasi teknologi pengeboran air dalam secara mendalam.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold text-gray-800">Wahana Interaktif Sumur Dalam (Virtual Reality Experience)</h2>
            <p className="text-gray-700">
              Menggunakan perangkat VR yang canggih, pengunjung akan diajak untuk merasakan pengalaman seolah-olah mereka sedang melakukan pengeboran sumur dalam di lapisan tanah yang dalam. Anda akan merasakan sensasi mendalamnya proses pengeboran dari kedalaman bawah tanah hingga mencapai sumber air tanah yang melimpah.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Zona Observasi Langsung: Menyaksikan Teknologi Secara Real-Time</h2>
            <p className="text-gray-700">
              Di Zona Observasi Langsung, Anda dapat melihat langsung proses pengeboran yang sedang berlangsung. Dengan dilengkapi layar interaktif, pengunjung akan mendapatkan penjelasan rinci tentang setiap tahap pengeboran.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Eksperimen Miniatur Pengeboran: Aktivitas Edukatif untuk Keluarga dan Anak-Anak</h2>
            <p className="text-gray-700">
              Bagi anak-anak dan keluarga, Andara AquaTech Adventure menawarkan kesempatan unik untuk mencoba eksperimen miniatur pengeboran air. Aktivitas ini sangat menyenangkan dan mendidik, mengajarkan konsep dasar teknologi pengeboran dengan cara yang mudah dimengerti.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Suasana yang Menyenangkan dan Edukatif</h2>
            <p className="text-gray-700">
              Selain wahana-wahana interaktif, Andara AquaTech Adventure juga dilengkapi dengan desain ruang yang modern dan nyaman, membuat pengunjung merasa seolah-olah sedang berada di dalam sebuah laboratorium canggih.
            </p>
          </article>
        </section>

        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            "Ajak keluarga dan teman-teman Anda untuk merasakan pengalaman luar biasa ini di Andara AquaTech Adventure! 🌊🔬"
          </h3>
        </div>
      </div>
    </div>
  );
}
