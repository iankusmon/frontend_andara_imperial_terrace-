"use client";

import Image from "next/image";

const images = [
  "/colosseum_2.png",
  "/infinity_pool.png",
  "/segara_rasa.png",
  "/menara_imperial_terrace.png",
  "/water_coaster.png",
  "/davinci_residence.png",
  "/amsterdam_royale.png",
  "/athena_height.png",
];

const sections = [
  {
    title: "Kemewahan dan Prestise",
    content:
      "Andara Imperial Terrace mengutamakan kemewahan dalam setiap aspek desain dan fasilitasnya. Inspirasi arsitektur dari ikon Eropa seperti Colosseum, Menara Eiffel, Menara Pisa, kincir Angin Belanda dan Kanal Venice mencerminkan estetika kelas dunia yang menghadirkan nuansa prestise dan eksklusivitas.",
  },
  {
    title: "Kreativitas dan Inovasi",
    content:
      "Setiap elemen kawasan dikembangkan dengan pendekatan kreatif dan inovatif, mulai dari fasilitas wisata modern seperti Menara Imperial Terrace, Colosseum Day Club by Andara, Menara Pisa Andara, Andara Play Story, Dunia Avatar Andara hingga konsep smart home di hunian. Inovasi ini menciptakan pengalaman unik yang memadukan hiburan dan teknologi.",
  },
  {
    title: "Kualitas dan Ketelitian",
    content:
      "Andara Imperial Terrace berkomitmen menjaga standar tinggi dalam pemilihan material dan pengerjaan, memastikan ketahanan dan estetika yang sesuai dengan konsep kemewahan. Setiap detail, mulai dari hunian hingga atraksi wisata, dikerjakan dengan ketelitian maksimal.",
  },
  {
    title: "Harmoni Budaya dan Alam",
    content:
      "Kawasan ini menggabungkan kemewahan arsitektur Eropa dengan sentuhan budaya tradisional dan alam sekitar. Program seperti Andara Colossal Festival, Andara Cow Milk, Andara Fashion Story dan Andara Tumang Copper menonjolkan budaya lokal, sementara taman-taman tematik dan atraksi air menghadirkan keseimbangan dengan alam.",
  },
  {
    title: "Kebersamaan dan Komunitas",
    content:
      "Andara Imperial Terrace menciptakan ruang interaksi komunitas yang mendukung terbentuknya hubungan harmonis dan berkembang. Coworking space, Lobby & Lounge, area MICE, serta festival tematik menjadi wadah bagi penghuni dan pengunjung untuk saling berinteraksi dan tumbuh bersama.",
  },
  {
    title: "Keberlanjutan dan Ramah Lingkungan",
    content:
      "Kawasan ini dirancang dengan mengedepankan prinsip ramah lingkungan dan keberlanjutan. Pengelolaan air, energi, serta pengembangan taman hijau luas memastikan bahwa kehidupan modern dapat berjalan selaras dengan alam.",
  },
  {
    title: "Pengalaman Berkesan dan Berkelas",
    content:
      "Andara Imperial Terrace menawarkan pengalaman yang tak terlupakan melalui akomodasi mewah, atraksi wisata modern, dan layanan eksklusif. Setiap kunjungan dirancang untuk meninggalkan kesan mendalam dan membawa kebahagiaan bagi pengunjung.",
  },
  {
    title: "Kemakmuran dan Keberkahan",
    content:
      "Filosofi angka 99 dalam logo Andara Imperial Terrace mencerminkan harapan untuk menghadirkan keberkahan dan kemakmuran bagi semua stakeholder. Kawasan ini menjadi pusat pertumbuhan ekonomi yang memberikan keuntungan jangka panjang bagi investor dan penghuni.",
  },
  {
    title: "Eksklusivitas dan Privasi",
    content:
      "Hunian di Andara Imperial Terrace menawarkan tingkat privasi tinggi dengan desain villa eksklusif yang dilengkapi private pool, rooftop, dan taman pribadi. Hal ini menciptakan suasana resort mewah di dalam kenyamanan rumah sendiri.",
  },
  {
    title: "Pengalaman Kuliner Berkelas",
    content:
      "Andara Imperial Terrace menghadirkan pengalaman kuliner yang menggabungkan cita rasa internasional dan tradisional, seperti Imperial Dine & Lounge by Andara dan Nusantara Sagara Rasa by Andara. Konsep ini memberikan variasi kuliner berkelas dunia yang memanjakan penghuni dan pengunjung.",
  },
];

const KawasanAIT = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Andara Imperial Terrace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="text-gray-700">{section.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="Andara Imperial Terrace Image"
            width={300}
            height={200}
            className="rounded-xl shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default KawasanAIT;