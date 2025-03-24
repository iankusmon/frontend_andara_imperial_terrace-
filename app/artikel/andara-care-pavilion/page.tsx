import Image from "next/image";

export default function AndaraCarePavilion() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 text-black">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center mb-4 pt-20">
          Andara Care Pavilion: Fasilitas Komunal Berkelas Dunia di Andara Imperial Terrace
        </h1>
        <p className="text-lg text-center mb-6">
          Sebagai destinasi premium yang memadukan hunian mewah, fasilitas MICE (Meetings, Incentives, Conferences, and Exhibitions), 
          Day Club, serta destinasi wisata modern, Andara Imperial Terrace tidak hanya unggul dalam desain arsitektur dan fasilitas utama. 
          Kawasan ini juga menunjukkan perhatian mendalam pada kebutuhan pengunjung dan penghuni melalui Andara Care Pavilion, 
          sebuah fasilitas komunal yang menawarkan kenyamanan, kepraktisan, dan aksesibilitas di setiap sudut kawasan.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold">Konsep Modern yang Menjawab Kebutuhan Harian</h2>
            <p>
              Dirancang dengan mengedepankan kombinasi estetika dan fungsi, Andara Care Pavilion adalah bukti bagaimana detail terkecil 
              di kawasan ini dipikirkan secara matang. Memadukan keindahan arsitektur khas Eropa dengan fungsi modern, fasilitas ini 
              tersebar strategis di berbagai titik untuk memastikan setiap kebutuhan pengunjung dapat terpenuhi tanpa harus berjalan jauh.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Fasilitas Utama di Andara Care Pavilion</h2>

            <h3 className="text-lg font-semibold mt-4">1. Mushola: Tempat Ibadah yang Nyaman dan Tenang</h3>
            <p>
              Ruang ibadah luas dengan pencahayaan alami, fasilitas wudhu modern, serta lokasi strategis memastikan kenyamanan bagi pengunjung yang beribadah.
            </p>

            <h3 className="text-lg font-semibold mt-4">2. Toilet: Kebersihan dan Modernitas</h3>
            <p>
              Toilet dilengkapi teknologi modern seperti wastafel otomatis dan sistem sanitasi canggih, serta tersedia fasilitas ramah difabel.
            </p>

            <h3 className="text-lg font-semibold mt-4">3. Loker: Penyimpanan Aman dan Praktis</h3>
            <p>
              Loker dengan sistem keamanan berbasis kunci manual memastikan barang pribadi pengunjung tetap aman selama beraktivitas di kawasan ini.
            </p>

            <h3 className="text-lg font-semibold mt-4">4. Ruangan Ibu Menyusui: Kenyamanan untuk Ibu dan Bayi</h3>
            <p>
              Dilengkapi kursi ergonomis, meja ganti bayi, dan suasana privat yang nyaman bagi ibu menyusui.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Keunggulan Andara Care Pavilion: Lebih dari Sekadar Fasilitas</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Lokasi Strategis:</strong> Terletak di titik utama seperti MICE, Day Club, dan wahana.</li>
              <li><strong>Desain Estetis dan Fungsional:</strong> Mengusung arsitektur modern khas Eropa.</li>
              <li><strong>Ramah Lingkungan:</strong> Menggunakan pencahayaan LED hemat energi dan sistem pengelolaan air otomatis.</li>
              <li><strong>Kebersihan & Keamanan:</strong> Tim kebersihan dan sistem keamanan yang memastikan kenyamanan pengunjung.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Pusat Kenyamanan di Jantung Kawasan Andara Imperial Terrace</h2>
            <p>
              Andara Care Pavilion bukan sekadar fasilitas pendukung, tetapi juga bagian penting dari pengalaman mewah yang ditawarkan oleh kawasan ini. 
              Dengan memastikan kenyamanan pengunjung di setiap langkah, Andara Care Pavilion membuktikan bahwa perhatian pada detail kecil dapat menciptakan 
              perbedaan besar dalam memberikan pengalaman yang tak terlupakan.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
