import Image from 'next/image';

export default function BookingFee() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6 pt-20">Apa Itu Booking Fee?</h1>
      <p className="text-lg mb-4">
        Booking Fee adalah langkah awal dalam proses pembelian properti di Andara Imperial Terrace, berupa pembayaran awal sebagai komitmen Anda untuk mengamankan unit pilihan. Dengan membayar Booking Fee, unit yang Anda pilih akan diblokir untuk pembeli lain, menunjukkan keseriusan Anda untuk menjadi bagian dari kawasan hunian prestisius ini.
      </p>
      <div className="mt-6 flex justify-center">
        <Image 
          src="/alur_pemesanan_booking_fee.png" 
          alt="Alur Pemesanan Booking Fee" 
          width={800} 
          height={600} 
          className="w-full max-w-lg"
        />
      </div>
      <h2 className="text-2xl font-semibold mt-6">Mengapa Penting Melakukan Booking Fee?</h2>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li><strong>Mengamankan Unit yang Diinginkan:</strong> Memastikan unit pilihan tidak ditawarkan kepada pembeli lain.</li>
        <li><strong>Tanda Keseriusan Anda:</strong> Menunjukkan komitmen nyata dalam pembelian properti.</li>
        <li><strong>Harga dan Promo Khusus:</strong> Mendapatkan harga spesial dan promo menarik selama soft launching.</li>
        <li><strong>Langkah Awal Proses Pembelian:</strong> Melanjutkan ke tahap berikutnya seperti pembayaran DP dan PPJB.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">Proses Pemilihan Unit</h2>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li><strong>Kunjungi Website atau Marketing Gallery:</strong> Akses informasi lengkap di <a href="https://www.andaraimperialterrace.co.id" className="text-blue-600 underline">website resmi</a> atau kunjungi langsung.</li>
        <li><strong>Pilih Unit Sesuai Kebutuhan:</strong> Sesuaikan pilihan berdasarkan tipe, lokasi, fasilitas, dan legalitas.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">Proses Pembayaran Booking Fee</h2>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li><strong>Konsultasi dengan Sales Marketing:</strong> Informasikan unit pilihan Anda.</li>
        <li><strong>Pembayaran Booking Fee:</strong> Transfer sebesar Rp50.000.000,- ke rekening resmi pengembang.</li>
        <li><strong>Penerimaan Bukti Pembayaran:</strong> Bukti pembayaran resmi akan diterima untuk proses lebih lanjut.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">Keuntungan Booking Fee pada Periode Soft Launching</h2>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        <li><strong>Harga Spesial dan Diskon Eksklusif:</strong> Harga lebih kompetitif dibanding harga normal.</li>
        <li><strong>Prioritas untuk Pemilik NUP:</strong> Mendapatkan kesempatan lebih besar memilih unit terbaik.</li>
        <li><strong>Promo dan Fasilitas Tambahan:</strong> Cashback pajak dan penawaran full-furnishing.</li>
      </ul>
    </div>
  );
}
