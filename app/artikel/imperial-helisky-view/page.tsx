import Image from "next/image";

export default function ImperialHeliSkyView() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 text-black">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center mb-4 pt-20">
          Imperial HeliSky View: Puncak Kemewahan dan Keindahan Alam
        </h1>
        <p className="text-lg text-center mb-6">
          Di puncak Imperial Dine & Lounge by Andara, sebuah wahana spektakuler menanti untuk memukau setiap pengunjung: Imperial HeliSky View. Terletak di rooftop eksklusif Colosseum Day Club by Andara, wahana ini menawarkan pengalaman yang tak hanya memanjakan mata tetapi juga memenuhi harapan akan kemewahan dan prestise yang tak tertandingi.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold">Helipad Ikonis untuk Foto Instagramable</h2>
            <p>
              Salah satu fitur paling ikonik dari Imperial HeliSky View adalah tulisan besar "H" yang mencolok di helipad, menjadi tempat yang sangat populer untuk berfoto. Dengan pemandangan alam yang luas di sekelilingnya, setiap pengunjung akan merasa seperti bagian dari dunia eksklusif yang hanya bisa diakses oleh sedikit orang beruntung.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Gardu Pandang 360 Derajat</h2>
            <p>
              Imperial HeliSky View bukan sekadar helipad, melainkan sebuah gardu pandang utama yang menawarkan pemandangan 360 derajat dari Andara Imperial Terrace:
            </p>
            <ul className="list-disc pl-6">
              <li>Ke arah timur, hamparan sawah terasering yang menawan, mirip dengan pemandangan di Ubud Bali.</li>
              <li>Ke arah barat, nikmati sunset yang memukau dengan langit berwarna oranye dan ungu.</li>
              <li>Ke arah utara, keindahan Colosseum Day Club dengan infinity pool yang menakjubkan.</li>
              <li>Ke arah selatan, pemandangan luas sawah terasering dengan nuansa hijau yang menenangkan.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Tempat untuk Momen Spesial dan Acara Eksklusif</h2>
            <p>
              Imperial HeliSky View juga merupakan tempat yang ideal untuk acara-acara spesial seperti pre-wedding photoshoot, acara ulang tahun, atau dinner romantis.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Menikmati Keindahan Alam dan Kuliner Premium</h2>
            <p>
              Imperial Dine & Lounge by Andara menyajikan pengalaman kuliner kelas dunia dengan menu internasional bertaraf tinggi seperti Grilled Wagyu Steak, Lobster Thermidor, dan Japanese Omakase Platter.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Bar Eksklusif dan Fasilitas Lengkap</h2>
            <p>
              Imperial Dine & Lounge memiliki tiga bar eksklusif dengan minuman premium, koktail istimewa, dan wine pilihan. Fasilitas lainnya mencakup sauna, spa, gym modern, serta locker pribadi dan umum.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Lokasi Strategis dan Akses Mudah</h2>
            <p>
              Imperial Dine & Lounge terletak hanya beberapa menit dari exit tol, serta 20 menit dari Bandara Adi Soemarmo dan Stasiun KAI Adi Soemarmo.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
