import Image from "next/image";

export default function SkylineAquaGarden() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 pt-20">
          Skyline Aqua Garden: Wahana Edukasi dan Keindahan Alam di Puncak Menara Pisa Andara
        </h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Terletak di puncak Menara Pisa Andara, Skyline Aqua Garden menawarkan pemandangan menakjubkan dan menghadirkan wahana edukasi yang menghubungkan teknologi dengan keberlanjutan alam.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold text-gray-800">Taman Edukasi Air: Menyelami Siklus Air Alam</h2>
            <p className="text-gray-700">
              Taman ini memiliki instalasi interaktif yang menggambarkan perjalanan air dari sumber hingga kembali ke alam. Dengan kombinasi elemen teknologi dan suara alam, pengunjung dapat memahami pentingnya keseimbangan ekosistem air.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Zona Air Mancur Interaktif</h2>
            <p className="text-gray-700">
              Menggunakan sensor gerak, zona ini memungkinkan pengunjung memengaruhi pola air mancur yang menyembur dinamis. Ini adalah hiburan sekaligus edukasi tentang teknologi pengelolaan air.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Panorama Virtual: Fotografi dengan Sentuhan AR</h2>
            <p className="text-gray-700">
              Spot foto berteknologi AR memungkinkan pengunjung berfoto dengan latar belakang yang dinamis, seperti aliran air, hujan, atau pelangi, memberikan pengalaman unik yang tak terlupakan.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Kafe Air & Cahaya</h2>
            <p className="text-gray-700">
              Nikmati hidangan sehat di kafe bertema keberlanjutan, dengan dekorasi hidroponik dan bahan makanan organik. Pengunjung dengan tiket Skyline Aqua Garden mendapatkan diskon 10%.
            </p>
          </article>
        </section>

        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            "Nikmati pemandangan spektakuler dan edukasi lingkungan di Skyline Aqua Garden! 🌊🌿"
          </h3>
          <p className="text-gray-700 text-lg mt-4">
            Gabungkan hiburan dan edukasi dalam satu pengalaman tak terlupakan di puncak Menara Pisa Andara.
          </p>
        </div>
      </div>
    </div>
  );
}
