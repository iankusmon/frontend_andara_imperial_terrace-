import Image from "next/image";

export default function AndaraSmartRoom() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 pt-20">
          Andara Smart Room: Transformasi Pembelajaran dan Hiburan Berbasis Teknologi
        </h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Ruang Masa Depan yang Menghidupkan Imajinasi. Terletak di Lantai 2 dan 3 Menara Imperial Terrace, Andara Smart Room menghadirkan pengalaman edukasi dan hiburan berbasis teknologi.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold text-gray-800">Keunggulan Teknologi Interaktif</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Smart Interactive Wall</strong>: Dinding interaktif dengan teknologi layar sentuh dan augmented reality (AR) memungkinkan pengunjung menggambar seni digital, bermain game edukasi, dan menjelajahi peta dunia secara virtual.</li>
              <li><strong>Virtual Reality (VR) Experience Zone</strong>: Menawarkan simulasi edukatif seperti eksplorasi luar angkasa, penggalian artefak kuno, dan eksperimen ilmiah.</li>
              <li><strong>AI-Powered Learning Pods</strong>: Pod pembelajaran berbasis AI yang menyesuaikan konten edukasi dengan minat dan tingkat pemahaman pengguna.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Aktivitas Edukasi dan Hiburan</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Andara Learning Quest</strong>: Misi edukatif interaktif yang menggabungkan pembelajaran dan tantangan logika.</li>
              <li><strong>Digital Creativity Corner</strong>: Zona kreativitas digital, memungkinkan pengunjung membuat animasi, musik digital, dan seni 3D.</li>
              <li><strong>HoloInteractive Storytelling</strong>: Pengalaman mendongeng berbasis hologram yang interaktif dan imersif.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Manfaat dan Nilai yang Ditawarkan</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Edukasi Berbasis Pengalaman</strong>: Pembelajaran interaktif yang praktis dan mendalam.</li>
              <li><strong>Peningkatan Kreativitas</strong>: Aktivitas di Andara Smart Room dirancang untuk mendorong inovasi.</li>
              <li><strong>Hiburan yang Mendidik</strong>: Cocok untuk keluarga, pelajar, dan wisatawan yang mencari pengalaman unik.</li>
            </ul>
          </article>
        </section>

        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            "Datanglah dan rasakan sendiri bagaimana Andara Smart Room mengubah cara Anda belajar dan bersenang-senang! 🌟📚🎮"
          </h3>
        </div>
      </div>
    </div>
  );
}
