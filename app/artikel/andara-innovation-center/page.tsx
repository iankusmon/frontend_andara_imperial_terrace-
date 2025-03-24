import Image from "next/image";

export default function AndaraInnovationCenter() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 pt-20">
          Andara Innovation Center
        </h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Selamat datang di Andara Innovation Center, destinasi edukasi teknologi yang menghadirkan pengalaman belajar interaktif dan menyenangkan untuk semua kalangan.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold text-gray-800">Menara Imperial Terrace: Ikon Kemegahan di Teras Boyolali</h2>
            <p className="text-gray-700">
              Sebagai bagian dari mahakarya arsitektur <strong>Andara Imperial Terrace</strong>, Menara Imperial Terrace bukan sekadar landmark, melainkan pusat inovasi dan kreativitas. Dengan konsep MICE (Meeting, Incentive, Convention, and Exhibition), menara ini menggabungkan fungsi multifungsi, desain modern, dan kekayaan budaya lokal.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Eksplorasi Teknologi Canggih di Andara Innovation Center</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Zona Interaktif</strong>: Simulasi teknologi berbasis augmented reality (AR) dan virtual reality (VR) yang membawa Anda ke dunia digital secara imersif.</li>
              <li><strong>Workshop Teknologi</strong>: Pelatihan langsung dalam inovasi terbaru seperti robotika, coding, desain 3D, dan kecerdasan buatan.</li>
              <li><strong>Edukasi Ramah Anak dan Keluarga</strong>: Aktivitas yang dirancang untuk semua usia, memastikan pembelajaran yang menyenangkan.</li>
              <li><strong>Eksperimen Kreatif</strong>: Kesempatan untuk menciptakan karya teknologi dengan dukungan mentor ahli dan fasilitas lengkap.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Mengapa Harus Mengunjungi Andara Innovation Center?</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Pengalaman Belajar yang Menyenangkan</strong>: Teknologi interaktif membuat pembelajaran menjadi lebih menarik dan inspiratif.</li>
              <li><strong>Fasilitas Modern</strong>: Ruang workshop berteknologi tinggi di lantai 2 dan 3 menara menyediakan lingkungan belajar yang profesional.</li>
              <li><strong>Persiapan Masa Depan</strong>: Bangun keterampilan yang relevan dengan dunia kerja dan kehidupan di era teknologi.</li>
              <li><strong>Destinasi Wisata Modern</strong>: Kunjungan yang lebih bermakna dengan menikmati arsitektur megah Menara Imperial Terrace.</li>
            </ul>
          </article>
        </section>

        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            "Jadikan kunjungan Anda ke Andara Innovation Center sebagai langkah awal untuk menjelajahi dunia teknologi canggih sambil menikmati keindahan dan kemegahan Menara Imperial Terrace. 🌟🤖🏢"
          </h3>
        </div>
      </div>
    </div>
  );
}
