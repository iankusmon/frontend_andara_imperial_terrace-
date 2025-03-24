import Image from 'next/image';

export default function AndaraRoyaleFrame() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Andara Royale Frame: Icon Kawasan Wisata Andara Imperial Terrace
      </h1>
      <p className="text-gray-700 text-lg text-center mb-6 max-w-2xl">
        Andara Royale Frame adalah spot foto ikonik yang menonjolkan keindahan dan kemegahan Andara Imperial Terrace.
      </p>

      <section className="max-w-3xl w-full space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Lokasi Strategis</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Menyambut pengunjung dengan patung selamat datang pertama, menggambarkan keanggunan dan kehangatan sambutan khas Andara.</li>
            <li>Entrance & Receptionist – Patung selamat datang kedua berfungsi sebagai pusat perhatian dan latar foto.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">Keunggulan Wahana</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Ikonik dan Berkesan:</strong> Spot foto ini dirancang untuk menjadi tempat yang dikenang sepanjang masa.</li>
            <li><strong>Merchandise Gratis:</strong> Pengunjung yang mengunggah foto di media sosial dan mengetag akun resmi akan mendapatkan merchandise eksklusif.</li>
            <li><strong>Dekorasi Megah:</strong> Patung-patung dihiasi dengan detail artistik dan pencahayaan yang memukau.</li>
            <li><strong>Ramah Keluarga:</strong> Cocok untuk foto bersama keluarga, teman, atau rombongan wisata.</li>
          </ul>
        </div>
      </section>

      <div className="mt-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900">"Abadikan Momenmu, Bawa Pulang Kenangan dari Andara Royale Frame."</h3>
      </div>
    </div>
  );
}