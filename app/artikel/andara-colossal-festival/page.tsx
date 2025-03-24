import Image from "next/image";

export default function AndaraColossalFestival() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 pt-20">
          Andara Colossal Festival
        </h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Sambutlah pengalaman spektakuler di Andara Colossal Festival, sebuah pertunjukan budaya luar biasa yang memadukan keindahan tradisi lokal dengan kecanggihan teknologi modern.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold text-gray-800">Menara Imperial Terrace: Mahakarya Ikonis Boyolali</h2>
            <p className="text-gray-700">
              Sebagai tuan rumah Andara Colossal Festival, <strong>Menara Imperial Terrace</strong> berdiri megah sebagai simbol kemewahan dan kemajuan. Menara ini bukan hanya sebuah landmark, tetapi juga destinasi MICE (Meeting, Incentive, Convention, and Exhibition) terkemuka yang menjawab kebutuhan modern tanpa melupakan akar budaya lokal.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Keajaiban Pertunjukan Andara Colossal Festival</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Kolaborasi Tradisi dan Teknologi</strong>: Tarian, musik, dan drama budaya yang diperkaya dengan proyeksi visual 3D, pencahayaan dinamis, dan efek suara berkualitas tinggi.</li>
              <li><strong>Cerita Budaya yang Menginspirasi</strong>: Kisah-kisah lokal penuh makna dikemas dengan cara modern yang memikat penonton lintas generasi.</li>
              <li><strong>Ballroom Multifungsi</strong>: Desain canggih memberikan pengalaman menonton yang nyaman dan mendalam.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Kawasan Eksklusif untuk Hunian dan Wisata</h2>
            <p className="text-gray-700">
              Sebagai bagian dari Andara Imperial Terrace, Menara Imperial Terrace adalah pusat kehidupan, budaya, dan gaya modern. Kawasan ini menawarkan hunian eksklusif serta pengalaman wisata yang lengkap, menjadikannya destinasi favorit di Teras Boyolali, SoloRaya.
            </p>
          </article>
        </section>

        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            "Jadilah bagian dari Andara Colossal Festival, perayaan besar yang membawa Anda dalam perjalanan menakjubkan melintasi waktu dan budaya! 🌟🎭🏰"
          </h3>
        </div>
      </div>
    </div>
  );
}
