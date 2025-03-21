import Image from 'next/image';

export default function ColosseumArticle() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 pt-20">
        Colosseum Day Club by Andara
      </h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        Destinasi Wisata Premium di Andara Imperial Terrace, SoloRaya
      </p>
      
      <div className="flex justify-center mb-6">
        <Image 
          src="/colosseum.jpg" 
          alt="Colosseum Day Club" 
          width={800} 
          height={500} 
          className="rounded-lg shadow-lg w-full max-w-3xl"
        />
      </div>
      
      <p className="text-lg text-gray-700 mb-4">
        Colosseum Day Club by Andara, yang terletak di Andara Imperial Terrace, merupakan ikon baru wisata di kawasan SoloRaya. Terinspirasi oleh kemegahan Colosseum Roma, bangunan ini memiliki desain setengah lingkaran dengan diameter 90 meter dan luas total 32.500 m², menyatu dengan perbukitan dan sawah terasering khas Ubud Bali.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Akses Strategis dan Kemudahan Transportasi</h2>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
        <li>10 menit dari 2 Exit Tol</li>
        <li>20 menit dari Bandara Adi Soemarmo dan Stasiun KAI Adi Soemarmo</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Fasilitas Eksklusif</h2>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
        <li><strong>Infinity Pool 3 Tingkat:</strong> 125 meter panjang dengan air mancur dan cabana</li>
        <li><strong>Jacuzzi Outdoor:</strong> Air hangat & dingin</li>
        <li><strong>Restoran & Bar:</strong> Imperial Dine & Lounge dengan kapasitas 750 tempat duduk</li>
        <li><strong>Fasilitas Kebugaran:</strong> Sauna, Spa, Gym</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Pengalaman yang Tak Terlupakan</h2>
      <p className="text-lg text-gray-700 mb-6">
        Nikmati keindahan alam dengan floating brunch, infinity pool, serta hiburan DJ malam hari di Colosseum Beat Arena. Rasakan pengalaman wisata premium di kawasan eksklusif Andara Imperial Terrace.
      </p>
      
      {/* <div className="text-center mt-8">
        <a href="#" className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700">
          Kunjungi Sekarang
        </a>
      </div> */}
    </div>
  );
}