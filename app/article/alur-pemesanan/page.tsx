import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: 'Tahap 1: Pendaftaran NUP (Pra-Launching Tahap I The Royale Elegance)',
    image: '/alur_pemesanan_1.png',
    description: `Isi formulir pendaftaran: Lengkapi formulir pendaftaran NUP yang tersedia, baik secara online melalui website resmi atau secara offline di marketing gallery.
    Bayar biaya pendaftaran: Lakukan pembayaran biaya pendaftaran NUP mulai dari Rp2.500.000.
    Dapatkan nomor urut: Setelah pembayaran terkonfirmasi, Anda akan menerima Nomor Urut Pemesanan (NUP), yang akan digunakan untuk pemilihan unit.`,
  },
  {
    id: 2,
    title: 'Tahap 2: Booking Fee dan Pemilihan Unit',
    image: '/alur_pemesanan_2.png',
    description: `Pilih unit: Setelah memasuki periode soft launching, Anda dapat memilih unit yang diinginkan sesuai dengan nomor urut NUP.
    Pilih metode pembayaran: Cash Keras, Cash Tempo (3-12 bulan), atau KPR.
    Bayar booking fee: Lakukan pembayaran booking fee sesuai ketentuan yang berlaku.
    Tandatangani SPKB: Surat Pemilihan Kavling dan Bangunan sebagai bukti pemesanan unit.`,
  },
  {
    id: 3,
    title: 'Tahap 3: Pembayaran DP dan PPJB',
    image: '/alur_pemesanan_3.png',
    description: `Pembayaran DP: DP 30% dari harga jual.
    Penandatanganan PPJB: Perjanjian hukum antara Anda dan pengembang.`,
  },
  {
    id: 4,
    title: 'Tahap 4: Pelunasan dan AJB',
    image: '/alur_pemesanan_4.png',
    description: `Pelunasan: Sesuai dengan metode pembayaran yang disepakati.
    Penandatanganan AJB: Akta Jual Beli sebagai bukti sah kepemilikan properti.`,
  },
  {
    id: 5,
    title: 'Tahap 5: Serah Terima',
    image: '/alur_pemesanan_5.png',
    description: `Serah terima unit: Pengembang menyerahkan kunci dan dokumen terkait.
    Serah terima SHGB: Setelah proses balik nama selesai, Anda akan menerima Sertifikat Hak Guna Bangunan (SHGB).`,
  },
];

export default function AlurPemesanan() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Andara Imperial Terrace</h1>
      <p className="text-gray-700 mb-4">
        Andara Imperial Terrace menawarkan kesempatan istimewa bagi Anda untuk memiliki hunian eksklusif dengan desain arsitektur khas Eropa di lokasi strategis Solo Raya. Proyek ini terdiri dari 197 villa dengan 15 tipe pilihan. Andara Imperial Terrace menjadi pilihan ideal karena kawasan terintegrasi dengan Akomodasi,
      </p>

      <h2 className="text-2xl font-semibold mb-3">Tahapan Alur Pemesanan</h2>
      {steps.map((step) => (
        <div key={step.id} className="mb-6">
          <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
          <div className="relative w-full h-64 my-4">
            <Image
              src={step.image}
              alt={step.title}
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="text-gray-700 whitespace-pre-line">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
