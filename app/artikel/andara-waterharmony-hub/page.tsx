import Image from "next/image";

export default function AndaraWaterHarmonyHub() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 pt-20">
          Andara WaterHarmony Hub – Menyelami Keajaiban Penampungan dan Distribusi Air di Menara Pisa Andara
        </h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Selamat datang di Andara WaterHarmony Hub, wahana yang berada di Lantai 3 Menara Pisa Andara, tempat yang menghubungkan teknologi penampungan dan distribusi air dengan pemahaman yang lebih dalam tentang keberlanjutan.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold text-gray-800">Tur di Tangki Transparan – Melihat Proses Penampungan dari Dekat</h2>
            <p className="text-gray-700">
              Pengunjung dapat melihat langsung bagaimana air bersih disimpan dan didistribusikan dengan efisien menggunakan teknologi gravitasi, mengurangi ketergantungan pada pompa listrik.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Pameran Efisiensi Energi – Menjaga Bumi Lewat Pengelolaan yang Cerdas</h2>
            <p className="text-gray-700">
              Pameran ini menampilkan teknologi hemat energi dalam pengelolaan air, mulai dari penggunaan alat hemat energi hingga sistem distribusi berbasis gravitasi.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Fotobooth Bertema Air – Abadikan Momen dengan Tema Keberlanjutan</h2>
            <p className="text-gray-700">
              Pengunjung dapat berpose di berbagai spot bertema air dan keberlanjutan, serta mendapatkan foto cetak gratis dan pin “Champion of Sustainability”.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Simbol Keberlanjutan – Pin “Champion of Sustainability”</h2>
            <p className="text-gray-700">
              Setiap pengunjung akan mendapatkan pin sebagai simbol komitmen terhadap pengelolaan air dan energi yang bijak.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold text-gray-800">Tiket Terjangkau</h2>
            <p className="text-gray-700">
              Dengan harga tiket Rp 20.000 per orang, Anda bisa menikmati pengalaman edukatif yang interaktif dan menarik.
            </p>
          </article>
        </section>

        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            "Jadilah bagian dari gerakan keberlanjutan air dan energi! 💧🌍"
          </h3>
          <p className="text-gray-700 text-lg mt-4">
            Kunjungi Andara WaterHarmony Hub dan pelajari bagaimana teknologi bisa menciptakan masa depan yang lebih baik.
          </p>
        </div>
      </div>
    </div>
  );
}
