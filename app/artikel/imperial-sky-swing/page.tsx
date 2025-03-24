import Image from "next/image";

export default function ImperialSkySwing() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 text-black">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center mb-4 pt-20">
          Imperial Sky Swing: Sensasi Terbang di Atas Keindahan Alam dari Ketinggian
        </h1>
        <p className="text-lg text-center mb-6">
          Selamat datang di Imperial Sky Swing, salah satu wahana unggulan di rooftop Imperial Dine & Lounge yang ada di Colosseum Day Club by Andara. Dengan pemandangan menakjubkan yang membentang di depan mata dan sensasi terbang yang menggugah adrenalin, Imperial Sky Swing adalah destinasi wajib bagi Anda yang mencari pengalaman unik dan berkesan.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold">Dua Pilihan Swing untuk Semua Pengunjung</h2>
            <p>
              Imperial Sky Swing menghadirkan dua wahana ayunan raksasa yang dirancang untuk memberikan pengalaman seru, menyenangkan, sekaligus menantang:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Swing Single:</strong> Ayunan ini dikhususkan untuk pengunjung yang ingin menikmati pengalaman terbang sendiri, memberikan momen introspektif yang mendalam di atas ketinggian.
              </li>
              <li>
                <strong>Swing Tandem:</strong> Ayunan ini dirancang untuk pasangan atau teman yang ingin berbagi pengalaman seru bersama, memberikan kebersamaan yang tak terlupakan.
              </li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Pengalaman dari Ketinggian yang Menggugah Adrenalin</h2>
            <p>
              Imperial Sky Swing terletak di rooftop berbentuk melingkar dengan diameter 18 meter, memberikan latar belakang spektakuler yang menghadap langsung ke hamparan sawah terasering khas Boyolali dan infinity pool bertingkat Colosseum Day Club. Dari ketinggian ini, Anda tidak hanya merasakan sensasi terbang, tetapi juga keindahan alam yang menyejukkan mata.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Spot Instagramable yang Memukau</h2>
            <p>
              Imperial Sky Swing bukan hanya wahana, tetapi juga spot foto yang sangat Instagramable. Dengan latar belakang langit biru cerah di siang hari atau semburat jingga matahari terbenam, foto Anda di Imperial Sky Swing akan menjadi kenangan visual yang indah dan penuh cerita.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Desain dan Keamanan Berstandar Internasional</h2>
            <p>
              Imperial Sky Swing dirancang dengan teknologi dan material berkualitas tinggi untuk memastikan keamanan maksimal bagi setiap pengunjung. Setiap ayunan dilengkapi dengan sabuk pengaman dan mekanisme pengunci yang diuji secara berkala.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Suasana Eksklusif di Rooftop Imperial Dine & Lounge</h2>
            <p>
              Setelah menikmati Imperial Sky Swing, Anda bisa melanjutkan pengalaman dengan bersantai di Imperial Dine & Lounge, yang terkenal dengan hidangan kelas dunia dan suasana elegannya.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
