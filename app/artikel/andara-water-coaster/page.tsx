import Image from "next/image";

export default function AndaraWaterCoaster() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 pt-20">
          Andara Water Coaster: Petualangan Seru Wahana Air di Andara Imperial Terrace
        </h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Jika Anda mencari pengalaman air yang mendebarkan sekaligus penuh keindahan, Andara Water Coaster adalah jawabannya. Wahana air spektakuler sepanjang 500 meter ini menghadirkan sensasi tak terlupakan yang menyatu dengan panorama eksotis Andara Imperial Terrace.
        </p>

        <Image src="/water_coaster.png" alt="Andara Water Coaster" width={800} height={400} className="rounded-lg mx-auto mb-6" />

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold text-gray-800">Sensasi Meluncur dari Ketinggian</h2>
            <p className="text-gray-700">
              Andara Water Coaster menawarkan pengalaman meluncur dari ketinggian yang memacu adrenalin. Dengan jalur melingkar yang mendebarkan, wahana ini membawa Anda melewati berbagai pemandangan luar biasa sebelum akhirnya berhenti di dekat Andara Safari Zoo.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Jalur Wahana yang Mengagumkan</h2>
            <p className="text-gray-700">
              Sepanjang perjalanan di Andara Water Coaster, Anda akan disuguhkan dengan pemandangan ikonik yang membuat wahana ini lebih dari sekadar atraksi air biasa, seperti Infinity Pool, Kincir Angin Belanda, Andara Aqua Garden, dan Restoran Nusantara Sagara Rasa.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Kemudahan untuk Melanjutkan Petualangan</h2>
            <p className="text-gray-700">
              Setelah menyelesaikan perjalanan penuh sensasi, Anda bisa langsung melanjutkan ke Andara E-Bike Tour, Andara Animal Adventure, atau menikmati kuliner di Saung Nusantara.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Pengalaman yang Cocok untuk Semua Usia</h2>
            <p className="text-gray-700">
              Andara Water Coaster dirancang untuk memberikan pengalaman yang aman dan menyenangkan bagi pengunjung dari segala usia. Setiap elemen di wahana ini menciptakan pengalaman yang memukau, baik secara visual maupun emosional.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Keajaiban di Tengah Kemegahan Andara Imperial Terrace</h2>
            <p className="text-gray-700">
              Sebagai bagian dari kawasan Andara Imperial Terrace, wahana ini adalah simbol harmonisasi antara desain arsitektur megah, lanskap tropis yang indah, dan teknologi modern.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}