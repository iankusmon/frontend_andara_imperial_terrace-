import Image from 'next/image';

const AndaraVeniceCanals = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 pt-20">Andara Venice Canals</h1>
      <p className="text-center text-lg text-gray-700 mb-6">
        Oase Eropa di Solo Raya dari Andara Imperial Terrace
      </p>
      <div className="flex justify-center mb-6">
        <Image 
          src="/venice_canals_2.jpg" 
          alt="Andara Venice Canals" 
          width={800} 
          height={500} 
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="text-gray-700 leading-relaxed">
        Selamat datang di Andara Venice Canals – destinasi wisata eksklusif yang membawa pesona klasik Eropa ke jantung Solo Raya.
        Sepanjang 850 meter, kanal ini menawarkan pengalaman luar biasa yang akan membekas di hati setiap pengunjung. Terletak di kawasan
        Andara Imperial Terrace, Andara Venice Canals berdiri megah di tengah Menara Imperial Terrace, Menara Pisa Andara, Andara Versailles Park,
        dan Colosseum Day Club by Andara.
      </p>
      <h2 className="text-2xl font-semibold mt-8">Wahana Spektakuler di Andara Venice Canals</h2>
      <ul className="list-disc ml-6 mt-4 space-y-4 text-gray-700">
        <li><strong>Andara Venice Cruise</strong> – Sensasi romantis menyusuri kanal sepanjang 350 meter diapit bangunan Eropa klasik.</li>
        <li><strong>Andara Venice Bridge</strong> – Jembatan ikonik, spot favorit untuk fotografi dengan arsitektur khas Eropa.</li>
        <li><strong>Andara Koi Odyssey</strong> – Ribuan koi berenang bebas, aktivitas edukatif dan interaktif bagi keluarga.</li>
        <li><strong>Andara Water Coaster</strong> – Wahana air penuh sensasi sepanjang 500 meter yang berakhir di samping Andara Safari Zoo.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8">Pesona Andara Venice Canals: Kenangan yang Tak Terlupakan</h2>
      <p className="mt-4 text-gray-700">
        Andara Venice Canals bukan hanya sekadar destinasi wisata, melainkan juga perjalanan ke dunia Eropa yang dihadirkan di tengah Solo Raya.
        Suasana eksklusif, arsitektur klasik, dan wahana interaktif menjadikannya destinasi yang memberikan kenangan tak terlupakan.
      </p>
      <h3 className="text-xl font-semibold mt-6">Mengapa Andara Venice Canals Istimewa?</h3>
      <ul className="list-disc ml-6 mt-4 space-y-4 text-gray-700">
        <li>Eksklusivitas Tanpa Batas: Pengalaman kanal khas Venice 850 meter pertama di Indonesia.</li>
        <li>Keindahan Eropa di Tengah Solo: Perpaduan kanal romantis, arsitektur megah, dan taman bergaya klasik Eropa.</li>
        <li>Spot Fotografi Terbaik: Jembatan kanal, taman, dan bangunan ikonik menjadi spot sempurna untuk mengabadikan setiap momen.</li>
        <li>Aktivitas Keluarga & Edukasi: Wahana interaktif dan edukatif yang cocok untuk seluruh keluarga.</li>
      </ul>
      <p className="mt-6 text-gray-700 font-semibold text-center">
        Selamat menikmati keajaiban Eropa di Andara Imperial Terrace!
      </p>
    </div>
  );
};

export default AndaraVeniceCanals;
