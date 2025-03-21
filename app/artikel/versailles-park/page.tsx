import Image from 'next/image';

export default function AndaraVersaillesPark() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 pt-20">
        Andara Versailles Park
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Destinasi Hijau Multifungsi di Andara Imperial Terrace
      </p>
      
      <div className="flex justify-center mb-8">
        <Image
          src="/versailles_park.jpg"
          alt="Andara Versailles Park"
          width={800}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      <section className="text-gray-700 space-y-6">
        <p>
          Andara Versailles Park adalah perpaduan megah antara keindahan lanskap klasik dan teknologi modern, 
          menjadikannya ikon hijau multifungsi di kawasan eksklusif Andara Imperial Terrace.
        </p>
        <p>
          Terinspirasi dari keanggunan Taman Versailles di Prancis, taman ini menghadirkan pengalaman unik 
          dengan teknologi tenda portable canggih yang memungkinkan berbagai acara outdoor dan indoor.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">Fungsi Utama Andara Versailles Park</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Area rekreasi dan relaksasi dengan air mancur ikonik.</li>
          <li>Jalur pedestrian yang mengelilingi taman, cocok untuk yoga dan kebugaran.</li>
          <li>Spot interaktif seperti Andara Cow Milk dan Andara Koi Odyssey.</li>
          <li>Pusat aktivitas komunal untuk festival, bazar, dan konser.</li>
          <li>Spot edukasi dan wisata fotografi dengan arsitektur klasik Eropa.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800">Fasilitas Unggulan</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Air mancur klasik dan penerangan malam bergaya vintage.</li>
          <li>Tenda portable canggih untuk berbagai acara.</li>
          <li>Wi-Fi area dan kafetaria modern.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800">Andara Versailles Park: Ikon Gaya Hidup</h2>
        <p>
          Andara Versailles Park adalah simbol harmoni antara teknologi dan tradisi, 
          memperkuat posisi Andara Imperial Terrace sebagai kawasan elit yang menawarkan pengalaman premium.
        </p>
        <p>
          Kunjungi Andara Versailles Park dan rasakan keajaiban taman hijau dengan suasana Eropa klasik. 
          Jadikan pengalaman Anda tak terlupakan dengan aktivitas interaktif, fasilitas unggulan, 
          dan keindahan yang memanjakan mata dan jiwa.
        </p>
      </section>
    </div>
  );
}