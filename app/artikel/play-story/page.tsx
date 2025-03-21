import Image from 'next/image';

export default function AndaraPlayStory() {
  const sections = [
    {
      title: "Awal Petualangan: Tiket Menuju Dunia Fantasi",
      items: [
        "Tiket Masuk: Akses ke seluruh atraksi di Kawasan Wisata dan Day Club.",
        "Paket Wisata Terintegrasi: Tur berpemandu, wahana edukasi, dan pengalaman VR.",
        "Tiket Online: Pesan tiket melalui aplikasi atau situs web resmi.",
        "Pembayaran Digital: Transaksi dengan QR code, kartu kredit, atau e-wallet."
      ]
    },
    {
      title: "Jelajahi Dengan Mudah: Layanan Shuttle 24 Jam",
      items: [
        "Shuttle Tour: Kelilingi kompleks dengan 197 hunian dan 15 tipe villa.",
        "Layanan Non-Stop: Shuttle beroperasi sepanjang hari.",
        "Akses Ramah Difabel: Shuttle dilengkapi fasilitas khusus."
      ]
    },
    {
      title: "Andara PlayMart Merchandise",
      items: [
        "Miniatur Landmark: Menara Angin Andara, Colosseum Day Club, dan Andara Venice Canals.",
        "Souvenir Khas: Kaos, tas, dan cangkir eksklusif.",
        "Premium Merchandise: Produk edisi terbatas.",
        "Layanan Bungkus Hadiah: Buat kenangan Anda lebih spesial."
      ]
    },
    {
      title: "Andara Kingdom Game",
      items: [
        "Arcade Games: Permainan klasik dan modern.",
        "Wahana Ketangkasan: Lempar bola, panahan mini, dan lainnya.",
        "Turnamen Mingguan: Ikuti kompetisi dan menangkan hadiah.",
        "Escape Room: Pecahkan teka-teki menantang."
      ]
    },
    {
      title: "Andara Food Mart",
      items: [
        "Street Food Court: Jajanan khas Solo dan camilan Eropa.",
        "Dessert Corner: Waffle Belgia, gelato Italia, dan lainnya.",
        "Signature Drinks: Andara Venetian Coffee dan Imperial Lemonade.",
        "Kelas Memasak: Belajar bersama chef berpengalaman."
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 pt-20">Andara Play Story</h1>
      <p className="text-center text-lg mb-8">
        Gerbang Kisah Petualangan di Andara Imperial Terrace
      </p>
      <Image src="/play_story.jpg" alt="Andara Play Story" width={800} height={450} className="mx-auto my-4" />
      
      {sections.map((section, index) => (
        <section key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      ))}

      <footer className="text-center py-8">
        <h2 className="text-2xl font-bold">Andara Play Story – Tempat Di Mana Cerita Indah Dimulai</h2>
        <p className="mt-4">Selamat datang di dunia petualangan, hiburan, dan edukasi di Andara Imperial Terrace.</p>
      </footer>
    </div>
  );
}