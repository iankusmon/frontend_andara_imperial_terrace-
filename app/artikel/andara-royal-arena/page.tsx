import Image from "next/image";

export default function AndaraRoyalArena() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 pt-20">
          Andara Royal Arena: Pusat Kemegahan dan Hiburan di Andara Imperial Terrace
        </h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Terletak di kawasan eksklusif Andara Imperial Terrace, Andara Royal Arena berdiri sebagai sebuah panggung megah yang dirancang untuk menciptakan pengalaman tak terlupakan dalam setiap acara.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold text-gray-800">Lokasi yang Strategis dan Menawan</h2>
            <p className="text-gray-700">
              Arena ini menghadap langsung ke Andara Versailles Park, taman klasik Prancis yang dihiasi ikon unik The Andara Signature. Dikelilingi oleh Menara Pisa Andara dan Andara Venice Canals, arena ini menawarkan pemandangan spektakuler.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Fasilitas Canggih untuk Acara Berkelas</h2>
            <p className="text-gray-700">
              Andara Royal Arena dilengkapi dengan panggung megah, videotron beresolusi tinggi, sound system canggih, serta area fleksibel yang dapat menampung ribuan pengunjung.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Destinasi Utama untuk Berbagai Acara</h2>
            <p className="text-gray-700">
              Arena ini menjadi tempat pilihan untuk konser musik, acara perusahaan, perayaan pernikahan, festival budaya, dan berbagai acara komunitas.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Keajaiban Malam di Andara Royal Arena</h2>
            <p className="text-gray-700">
              Saat malam tiba, lampu-lampu klasik menciptakan suasana romantis dan elegan, dengan refleksi cahaya di permukaan kanal yang memberikan kesan magis.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Simbol Kemewahan di Andara Imperial Terrace</h2>
            <p className="text-gray-700">
              Arena ini menjadi simbol harmoni antara arsitektur klasik Eropa, keindahan alam, dan teknologi modern, menjadikannya destinasi utama bagi para pencinta hiburan dan kemewahan.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
