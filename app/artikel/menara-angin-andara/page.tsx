import Image from 'next/image';

export default function MenaraAnginAndara() {
  return (
    <div className="container mx-auto p-4 text-gray-800">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-900 pt-20">Menara Angin Andara</h1>
        <p className="text-lg text-gray-600 mt-2">Ikon Edukasi dan Lingkungan di Andara Imperial Terrace</p>
      </header>
      
      <section className="flex flex-col md:flex-row items-center gap-8 py-6">
        <div className="md:w-1/2">
          <Image src="/menara-angin.jpg" alt="Menara Angin Andara" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg leading-relaxed">
          Di jantung kawasan Andara Imperial Terrace, berdiri sebuah mahakarya yang menggabungkan estetika klasik Eropa dengan teknologi ramah lingkungan. Menara Angin Andara, terinspirasi dari kincir angin Belanda, bukan hanya ikon keindahan, tetapi juga simbol kepedulian terhadap alam dan komitmen terhadap energi terbarukan.
          Dengan tinggi menjulang 15 meter dan baling-baling berdiameter 9 meter, Menara Angin Andara tidak hanya menjadi pemandangan yang memikat mata, tetapi juga memiliki peran vital dalam menjaga kebersihan lingkungan sekitar. Lebih dari sekadar landmark, menara ini adalah sistem inovatif yang membersihkan air Sungai Butak secara alami, tanpa listrik atau bahan bakar fosil.
          </p>
        </div>
      </section>
      
      <section className="py-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Bagaimana Menara Angin Andara Bekerja?</h2>
        <p className="text-lg leading-relaxed">
        Setiap kali angin berhembus dan menggerakkan baling-baling menara, energi angin ini digunakan untuk mengangkat air keruh dari Sungai Butak ke dalam sistem penyaringan di dalam menara. Melalui mekanisme filtrasi bertahap dan gravitasi, air dialirkan ke berbagai media penyaring alami seperti pasir, kerikil, dan batu, hingga akhirnya menjadi jernih dan dikembalikan ke sungai.
        Menara ini beroperasi 100% menggunakan tenaga angin, menjadikannya contoh nyata teknologi hijau yang selaras dengan alam. Di sekeliling menara, pompa hidram turut hadir sebagai bagian dari sistem wisata edukasi. Pompa ini bekerja dengan prinsip hentakan hidrolik air untuk memompa air tanpa listrik, memperlihatkan bagaimana teknologi sederhana bisa memberikan dampak besar pada kelestarian lingkungan.
        </p>
      </section>
      
      <section className="py-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Pesona dan Edukasi di Tiga Lantai</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800">Lantai 1 - Petualangan Air Bersih</h3>
            <p>Simulasi penyaringan air, akuarium transparan, VR Journey, dan Interactive Pump Experience.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800">Lantai 2 - Jejak Filtrasi Alam</h3>
            <p>Eksplorasi media filtrasi alami, Wall of Innovation, Challenge Game, dan Workshop DIY.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800">Lantai 3 - Puncak Angin dan Cahaya</h3>
            <p>Skydeck Panorama, Wind Energy Showcase, dan Café Ramah Lingkungan.</p>
          </div>
        </div>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Wahana Tambahan di Sekitar Menara</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800">EcoRiver Adventure – "Jelajah Sungai"</h3>
            <p>Perahu dayung untuk melihat proses penyaringan air dari dekat.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800">WaterForce Garden – Taman Air Hidram</h3>
            <p>Instalasi seni sekaligus wahana edukasi tentang pompa hidram.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800">EarthWise Workshop – "Eco Builder"</h3>
            <p>Kelas terbuka untuk membuat teknologi ramah lingkungan seperti komposter dan turbin mini.</p>
          </div>
        </div>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Ikon Fotografi dan Destinasi Wisata</h2>
        <p className="text-lg leading-relaxed">
        Menara Angin Andara tidak hanya menarik dari segi fungsional, tetapi juga menjadi spot fotografi ikonik di kawasan Andara Imperial Terrace. Dengan latar langit biru dan hamparan alam sekitar, menara ini menciptakan suasana yang sempurna untuk diabadikan, terutama saat matahari terbit dan terbenam.
        Di siang hari, baling-baling besar yang berputar menambah daya tarik visual, sementara di malam hari, pencahayaan lembut di sekitar menara memberikan kesan magis dan menenangkan. Menara ini menjadi magnet bagi wisatawan dan pecinta fotografi, sekaligus tempat berkumpul bagi keluarga dan komunitas pecinta lingkungan.
        </p>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Simbol Harapan dan Masa Depan Berkelanjutan</h2>
        <p className="text-lg leading-relaxed">
        Menara Angin Andara adalah simbol dedikasi Andara Imperial Terrace dalam menjaga keseimbangan ekologi. Melalui teknologi sederhana namun berdampak besar, menara ini mengajarkan bahwa kemajuan dapat berjalan seiring dengan pelestarian alam. Setiap putaran baling-baling membawa pesan penting: "Bersama alam, kita membangun masa depan yang lebih bersih dan hijau."
        </p>
      </section>
      
      <footer className="text-center py-6 text-gray-600">
        <p>&copy; 2025 Andara Imperial Terrace</p>
      </footer>
    </div>
  );
}
