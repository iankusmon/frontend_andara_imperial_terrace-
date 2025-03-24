import Image from "next/image";

export default function AndaraTumangCopper() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 pt-20">
          Andara Tumang Copper: Eksplorasi Seni Tembaga dan Tradisi Bersejarah
        </h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Andara Tumang Copper bukan sekadar tempat belajar, melainkan sebuah pengalaman mendalam yang mengajak Anda menyelami seni tradisional pembuatan tembaga yang memukau. Terletak strategis di kawasan prestisius Andara Imperial Terrace, workshop interaktif ini berada dekat dengan loket Wahana Andara Water Coaster, diapit oleh keindahan Colosseum Day Club by Andara yang megah dan kemegahan klasik Menara Angin Andara.
        </p>

        {/* <Image src="/tumang_copper.png" alt="Andara Tumang Copper" width={800} height={400} className="rounded-lg mx-auto mb-6" /> */}

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold text-gray-800">Jelajahi Proses Kreatif Pembuatan Suvenir Tembaga</h2>
            <p className="text-gray-700">
              Di Andara Tumang Copper, Anda memiliki kesempatan untuk tidak hanya melihat, tetapi juga langsung terlibat dalam proses pembuatan kerajinan tembaga yang memukau. Workshop ini menawarkan pengalaman interaktif dalam setiap tahap proses, termasuk menatah, membakar, dan menghaluskan hingga menghasilkan karya unik.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Kenakan Kostum Tematik untuk Pengalaman yang Lebih Berkesan</h2>
            <p className="text-gray-700">
              Untuk memberikan pengalaman yang lebih autentik, Andara Tumang Copper memungkinkan pengunjung untuk mengenakan kostum tematik selama beraktivitas di workshop. Kostum ini dapat disewa di Andara Fashion Story, yang menyediakan berbagai pilihan pakaian menarik, seperti Kostum Ala Prajurit Roma dan Kostum Adat Nusantara.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Lokasi yang Strategis dengan Pemandangan Ikonik</h2>
            <p className="text-gray-700">
              Andara Tumang Copper terletak di lokasi yang sangat strategis, dikelilingi oleh berbagai landmark memukau seperti Colosseum Day Club by Andara dan Menara Angin Andara. Selain itu, lokasinya yang dekat dengan Wahana Andara Water Coaster memungkinkan Anda untuk melanjutkan petualangan setelah berkreasi di workshop.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Lebih dari Sekadar Suvenir: Sebuah Kenangan Tak Tergantikan</h2>
            <p className="text-gray-700">
              Kerajinan yang Anda buat di Andara Tumang Copper bukan hanya sebuah suvenir biasa. Setiap karya mencerminkan perjalanan kreatif Anda, membawa nilai emosional dan estetika yang mendalam.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Pengalaman untuk Semua Kalangan</h2>
            <p className="text-gray-700">
              Andara Tumang Copper dirancang untuk semua usia dan latar belakang, mulai dari keluarga, pasangan, hingga grup wisatawan. Tempat ini tidak hanya menawarkan pengalaman edukatif tetapi juga kesempatan untuk mempererat hubungan melalui aktivitas kreatif.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Abadikan Momen Anda di Andara Tumang Copper</h2>
            <p className="text-gray-700">
              Dengan perpaduan seni, budaya, dan keindahan arsitektur di sekitarnya, Andara Tumang Copper memberikan pengalaman yang luar biasa untuk diabadikan. Jangan lupa mengabadikan momen Anda mengenakan kostum tematik sembari menciptakan karya seni unik Anda sendiri.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
