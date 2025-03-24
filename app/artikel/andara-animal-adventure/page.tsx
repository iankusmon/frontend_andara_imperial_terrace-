import Image from "next/image";

export default function AndaraAnimalAdventure() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 pt-20">
          Andara Animal Adventure
        </h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Temukan sensasi berbeda di Andara Animal Adventure, sebuah pengalaman yang membawa Anda lebih dekat dengan alam sambil menjelajahi keindahan Landmark Andara Imperial Terrace!
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold text-gray-800">Berkeliling Taman dengan Kuda Ramah</h2>
            <p className="text-gray-700">
              Didampingi oleh pemandu profesional, Anda akan diajak berkeliling taman eksklusif di atas <strong>kuda-kuda terlatih</strong> yang ramah dan bersahabat. Rasakan kelembutan langkah mereka sambil menikmati keindahan taman yang dihiasi arsitektur megah, air mancur, dan lanskap hijau yang memukau.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Sesi Foto Eksklusif di Landmark Ikonik</h2>
            <p className="text-gray-700">
              Tak hanya sekadar berkuda, Andara Animal Adventure juga menawarkan kesempatan untuk mengabadikan momen spesial Anda. Dengan latar belakang landmark seperti:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Menara Imperial Terrace</li>
              <li>Andara Venice Canals</li>
              <li>Menara Pisa Andara</li>
              <li>Colosseum Day Club by Andara</li>
            </ul>
            <p className="text-gray-700">
              Setiap foto Anda akan terlihat eksklusif dan elegan, cocok untuk pasangan, keluarga, atau bahkan <strong>pre-wedding photoshoot</strong>!
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Pengalaman Aman dan Menyenangkan</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Kuda Terlatih dan Profesional</strong>: Setiap kuda dipilih dengan hati-hati untuk memastikan pengalaman yang nyaman dan aman.</li>
              <li><strong>Pendampingan Pemandu Ahli</strong>: Anda akan didampingi oleh tim berpengalaman untuk memastikan perjalanan berjalan lancar.</li>
              <li><strong>Aktivitas untuk Semua Usia</strong>: Baik anak-anak maupun dewasa dapat menikmati pengalaman berkuda yang santai ini.</li>
            </ul>
          </article>
        </section>

        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            "Biarkan langkah lembut kuda membawa Anda ke pengalaman yang tak terlupakan, penuh keindahan dan gaya. 🐎🌿📸"
          </h3>
        </div>
      </div>
    </div>
  );
}
