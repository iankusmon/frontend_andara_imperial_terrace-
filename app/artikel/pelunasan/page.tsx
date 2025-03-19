import Image from "next/image";

export default function PelunasanPembayaran() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4 pt-20">
        Pelunasan Pembayaran: Langkah Terakhir Menuju Kepemilikan Properti di Andara Imperial Terrace
      </h1>
      <p className="text-lg mb-4">
        Pelunasan pembayaran adalah tahap final dalam proses pembelian properti di Andara Imperial Terrace.
        Pada tahap ini, Anda akan melunasi seluruh sisa pembayaran sesuai kesepakatan awal. Pelunasan
        pembayaran menjadi penanda resmi bahwa Anda telah menyelesaikan kewajiban finansial Anda dan siap
        menjadi pemilik sah properti tersebut.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">Apa Itu Pelunasan Pembayaran?</h2>
      <p className="mb-4">
        Pelunasan pembayaran adalah proses penyelesaian seluruh kewajiban pembayaran yang tersisa untuk
        properti yang telah Anda beli. Proses ini mencakup berbagai skema pembayaran seperti tunai, tempo,
        maupun KPR, sesuai kesepakatan yang dibuat antara Anda dan pengembang.
      </p>
      <div className="flex justify-center mt-6">
        <Image src="/alur_pemesanan_pelunasan.png" alt="Alur Pemesanan Pelunasan" width={600} height={400} />
      </div>
      <h2 className="text-2xl font-semibold mt-6">Mengapa Pelunasan Penting?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Penyelesaian Transaksi:</strong> Menandai selesainya transaksi jual beli.</li>
        <li><strong>Syarat Penerbitan Akta Jual Beli (AJB):</strong> Pelunasan adalah syarat utama untuk penerbitan AJB.</li>
        <li><strong>Resmi Menjadi Pemilik:</strong> Setelah pelunasan dan AJB selesai, Anda secara hukum menjadi pemilik sah properti.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">Cara Melakukan Pelunasan Pembayaran</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Tunai:</strong> Pembayaran langsung melalui transfer bank atau setoran ke rekening pengembang.</li>
        <li><strong>Cash Tempo:</strong> Pelunasan secara bertahap sesuai jadwal yang telah disepakati.</li>
        <li><strong>KPR:</strong> Pelunasan melalui bank pemberi kredit sesuai tenor dan angsuran yang telah ditentukan.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">Apa yang Terjadi Setelah Pelunasan?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Penerbitan Akta Jual Beli (AJB):</strong> Diproses oleh pengembang di hadapan notaris.</li>
        <li><strong>Penandatanganan AJB:</strong> Anda dan pengembang menandatangani dokumen resmi.</li>
        <li><strong>Serah Terima Unit:</strong> Properti siap diserahterimakan kepada Anda.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">Dokumen yang Dibutuhkan</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Surat Perjanjian Jual Beli (SPJB)</li>
        <li>Bukti Pembayaran</li>
        <li>Identitas Diri (KTP, NPWP, dll.)</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">Tips Melakukan Pelunasan Pembayaran</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Persiapkan Dana dengan Baik:</strong> Pastikan dana mencukupi sesuai jadwal.</li>
        <li><strong>Verifikasi Data:</strong> Periksa kembali dokumen pembayaran.</li>
        <li><strong>Simpan Bukti Pembayaran:</strong> Dokumentasikan semua transaksi sebagai arsip.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">Keunggulan Memiliki Properti di Andara Imperial Terrace</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Fasilitas Premium:</strong> Colosseum Day Club, Menara Eiffel, Andara Versailles Park.</li>
        <li><strong>Keuntungan Investasi:</strong> Lokasi strategis dengan harga yang terus meningkat.</li>
        <li><strong>Fasilitas Gaya Hidup:</strong> Jogging track, gym, spa, dan area kuliner premium.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">Kesimpulan</h2>
      <p className="mb-4">
        Pelunasan pembayaran adalah langkah terakhir yang krusial dalam kepemilikan properti di Andara Imperial
        Terrace. Dengan menyelesaikan kewajiban ini, Anda dapat menikmati hunian eksklusif dengan fasilitas
        premium dan investasi yang terus berkembang. Segera selesaikan pelunasan dan wujudkan impian Anda!
      </p>
    </div>
  );
}
