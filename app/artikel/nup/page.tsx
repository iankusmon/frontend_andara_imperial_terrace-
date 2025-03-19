import Image from 'next/image';

const NUPArticle = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6 pt-20">
        Nomor Urut Pemesanan (NUP) di Andara Imperial Terrace
      </h1>
      <p className="text-lg mb-4">
        Nomor Urut Pemesanan (NUP) adalah salah satu aspek yang sangat penting dalam
        proses pembelian hunian di Andara Imperial Terrace. NUP memberikan prioritas bagi
        para calon pembeli untuk memilih unit yang mereka inginkan dalam proyek eksklusif ini.
      </p>
      <div className="w-full flex justify-center mb-6">
        <Image
          src="/alur_pemesanan_nup.png"
          alt="Alur Pemesanan NUP"
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-4">Mengapa NUP Itu Penting?</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Prioritas Pemilihan Unit:</strong> Anda mendapatkan kesempatan lebih besar
          untuk memilih unit yang sesuai dengan kebutuhan dan keinginan Anda.
        </li>
        <li>
          <strong>Harga Terbaik:</strong> Dengan mendaftar lebih awal, Anda berpeluang mendapatkan
          harga lebih rendah sebelum harga resmi meningkat.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Contoh Perubahan Harga</h2>
      <p className="mb-4">
        Harga Tipe Athena Height meningkat dari Rp 2,75 M di Februari 2025 menjadi Rp 3,15 M pada
        Agustus 2025.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Tipe Villa Athena Height</h2>
      <p className="mb-4">
        Andara Imperial Terrace mempersembahkan Type Villa Athena Height, sebuah mahakarya arsitektur
        Yunani dengan kenyamanan dan kemewahan tingkat tinggi.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Spesifikasi</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Luas Tanah (LT) / Luas Bangunan (LB): 72/124 m²</li>
        <li>Jumlah Lantai: 2</li>
        <li>Kamar Tidur: 3 (Executive Suite, Junior Suite, Presidential Suite)</li>
        <li>Private Pool, Rooftop & BBQ Area, Full Furnished</li>
        <li>Internet of Things (IoT), CCTV, Keamanan Ekstra</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Hal-Hal yang Perlu Diketahui Tentang NUP</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>NUP memerlukan biaya administrasi yang tidak dapat dikembalikan.</li>
        <li>Setiap sesi peluncuran membutuhkan NUP baru.</li>
        <li>Dokumen yang dibutuhkan: KTP, NPWP, bukti pembayaran.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Proses Pembelian Hunian</h2>
      <ol className="list-decimal pl-6 mb-6">
        <li>Daftar NUP untuk mendapatkan prioritas pemilihan unit.</li>
        <li>Bayar booking fee untuk mengamankan unit pilihan Anda.</li>
        <li>Bayar DP dan tanda tangan PPJB.</li>
        <li>Serah terima unit dan sertifikat SHGB.</li>
      </ol>
      <p className="text-lg font-semibold text-center">
        Segera daftar NUP Anda untuk mendapatkan harga terbaik dan unit impian!
      </p>
    </div>
  );
};

export default NUPArticle;
