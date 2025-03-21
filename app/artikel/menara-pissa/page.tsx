import React from "react";
import Image from "next/image";

const floors = [
  {
    level: "Lantai 1 - Zona Sejarah dan Inovasi",
    description: "Menampilkan sejarah teknologi air dan pengolahan air, instalasi interaktif sistem pengeboran, serta mini museum proyek Andara Imperial Terrace."
  },
  {
    level: "Lantai 2 - Galeri Pengolahan Air",
    description: "Simulasi pengolahan air bersih, zona eksperimen interaktif, serta pameran inovasi teknologi lingkungan."
  },
  {
    level: "Lantai 3 - Observatorium dan Edukasi",
    description: "Platform observasi dengan pemandangan kawasan Andara, ruang edukasi keberlanjutan, serta pengalaman VR tentang perjalanan air dari sumber ke konsumen."
  },
  {
    level: "Lantai 4 - Rooftop dan Panorama 360°",
    description: "Area terbuka dengan spot foto terbaik, taman hijau dengan konsep eco-living, serta restoran dan café bertema air."
  }
];

const attractions = [
  {
    title: "Zona Eksplorasi Teknologi Pengeboran",
    price: "Rp 20.000/orang",
    facilities: [
      "Akses ke Wahana Interaktif Sumur Dalam menggunakan perangkat VR.",
      "Pemanduan di Zona Observasi Langsung dengan layar interaktif.",
      "Kesempatan mencoba Eksperimen Miniatur pengeboran air untuk anak-anak dan keluarga.",
      "Sertifikat ‘Explorer’ untuk peserta eksperimen miniatur."
    ]
  },
  {
    title: "Galeri Teknologi Pengolahan Air",
    price: "Rp 20.000/orang",
    facilities: [
      "Partisipasi dalam Simulasi Sistem Pengolahan Air, termasuk filtrasi dan ozonisasi.",
      "Akses ke Pameran Hidup Sehat dengan instalasi seni interaktif.",
      "Area khusus anak di Zona Sains Anak, dengan permainan edukatif.",
      "Suvenir edukasi berupa brosur ‘Langkah Menuju Hidup Sehat dengan Air Bersih.’"
    ]
  },
  {
    title: "Zona Penampungan dan Distribusi",
    price: "Rp 20.000/orang",
    facilities: [
      "Tur di Tangki Transparan, dilengkapi panduan audio-visual.",
      "Edukasi tentang efisiensi energi di Pameran Efisiensi Energi.",
      "Akses ke Fotobooth Bertema Air dengan hasil cetak foto gratis.",
      "Pin bertema ‘Champion of Sustainability.’"
    ]
  },
  {
    title: "Taman Air dan Pemandangan Spektakuler",
    price: "Rp 25.000/orang",
    facilities: [
      "Akses ke Taman Edukasi Air dengan instalasi siklus air.",
      "Pengalaman unik di Zona Air Mancur Interaktif dengan sensor gerak.",
      "Spot foto berteknologi AR di Panorama Virtual.",
      "Diskon 10% untuk menu di Kafe Air & Cahaya."
    ]
  }
];

const MenaraPisaAndara = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-4 md:p-8 lg:p-10">
      <h1 className="text-3xl font-bold text-center mb-4 sm:text-2xl md:text-4xl pt-20">Menara Pisa Andara</h1>
      <p className="text-center text-gray-600 mb-6 sm:text-sm md:text-lg">
        Ikon Teknologi dan Keberlanjutan di Solo Raya
      </p>
      <div className="flex justify-center mb-6">
        <Image src="/menara_pissa_2.jpg" width={800} height={500} alt="Menara Pisa Andara" className="rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2" />
      </div>
      <p className="text-gray-700 mb-6 text-justify sm:text-sm md:text-base">
        Menara Pisa Andara di kawasan Andara Imperial Terrace bukan hanya sekadar landmark wisata, tetapi juga menjadi simbol inovasi teknologi dan keberlanjutan lingkungan. Menara ini memiliki sistem pengeboran, pengolahan, dan penampungan air yang dirancang dengan teknologi canggih dan ramah lingkungan.
      </p>

      {/* Struktur Lantai Menara */}
      <h2 className="text-2xl font-semibold mt-6 mb-4 sm:text-xl text-center">Struktur Lantai Menara Pisa Andara</h2>
      {floors.map((floor, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg shadow-md sm:p-3 md:p-5">
          <h3 className="text-xl font-bold sm:text-lg">{floor.level}</h3>
          <p className="text-gray-700 mt-2 sm:text-sm md:text-base">{floor.description}</p>
        </div>
      ))}

      {/* Wahana Wisata */}
      <h2 className="text-2xl font-semibold mt-6 mb-4 sm:text-xl">Wahana Wisata dan Harga Tiket</h2>
      {attractions.map((attraction, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg shadow-md sm:p-3 md:p-5">
          <h3 className="text-xl font-bold sm:text-lg">{attraction.title}</h3>
          <p className="text-gray-600 font-semibold sm:text-sm">{attraction.price}</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 sm:text-sm md:text-base">
            {attraction.facilities.map((facility, i) => (
              <li key={i}>{facility}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Paket Terpadu */}
      <h2 className="text-2xl font-semibold mt-6 sm:text-xl">Paket Terpadu</h2>
      <p className="text-gray-700 mt-2 sm:text-sm">Harga: Rp 50.000/orang</p>
      <ul className="list-disc list-inside text-gray-700 mt-2 sm:text-sm md:text-base">
        <li>Akses tanpa antrean ke semua lantai dan area outdoor.</li>
        <li>Panduan wisata eksklusif.</li>
        <li>Diskon 15% untuk pembelian makanan dan suvenir.</li>
      </ul>
    </div>
  );
};

export default MenaraPisaAndara;
