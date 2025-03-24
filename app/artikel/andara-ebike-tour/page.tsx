import Image from "next/image";

export default function AndaraEBikeTour() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 pt-20">
          Andara e-Bike Tour
        </h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Setelah menikmati segarnya minuman hasil racikan bartender di Milk Bar, kini saatnya melanjutkan pengalaman Anda di Andara Versailles Park dengan aktivitas yang lebih dinamis: <strong>Andara e-Bike Tour!</strong>
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold text-gray-800">Nikmati Keindahan Andara Imperial Terrace dengan Nyaman</h2>
            <p className="text-gray-700">
              Dengan sepeda listrik modern dan ramah lingkungan, Anda diajak berkeliling <strong>Andara Imperial Terrace</strong>, sebuah kawasan indah yang penuh dengan keunikan arsitektur dan pemandangan menawan. Rute sepanjang <strong>2 kilometer</strong> ini dirancang khusus untuk memberikan Anda pemandangan terbaik dari taman-taman, air mancur, hingga lanskap hijau yang memanjakan mata.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Pengalaman Bersepeda yang Mudah dan Menyenangkan</h2>
            <p className="text-gray-700">
              Tak perlu khawatir lelah! Dengan teknologi sepeda listrik canggih, Anda dapat menikmati perjalanan yang nyaman dan bebas hambatan, baik untuk pemula maupun penggemar sepeda. Sepeda ini dilengkapi fitur keselamatan terkini, sehingga sangat aman untuk digunakan oleh semua usia.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Rasakan Harmoni Alam dan Kemewahan</h2>
            <p className="text-gray-700">
              Sepanjang perjalanan, Anda akan merasakan harmoni antara alam dan <strong>Landmark Arsitektur Eropa</strong> yang menjadi ciri khas Andara Imperial Terrace seperti:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Menara Imperial Terrace</li>
              <li>Andara Venice Canals</li>
              <li>Menara Pisa Andara</li>
              <li>Colosseum Day Club by Andara</li>
            </ul>
            <p className="text-gray-700">
              Nikmati suasana segar dengan semilir angin dan cuitan burung, sambil mengabadikan momen di spot-spot foto yang <strong>Instagrammable</strong>.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Mengapa Memilih Andara e-Bike Tour?</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Ramah Lingkungan</strong>: Berkontribusi pada pelestarian lingkungan dengan transportasi bebas emisi.</li>
              <li><strong>Santai dan Bebas Stres</strong>: Bersepeda tanpa perlu tenaga ekstra berkat fitur listriknya.</li>
              <li><strong>Cocok untuk Semua</strong>: Aktivitas yang dapat dinikmati oleh keluarga, pasangan, atau solo traveler.</li>
            </ul>
          </article>
        </section>

        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            "Jangan lewatkan kesempatan untuk menjelajahi keindahan Andara Imperial Terrace dengan cara yang berbeda dan menyenangkan. Andara e-Bike Tour adalah cara sempurna untuk melengkapi kunjungan Anda ke Andara Versailles Park. 🌿🚲✨"
          </h3>
        </div>
      </div>
    </div>
  );
}
