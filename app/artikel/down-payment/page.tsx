import Image from 'next/image';

export default function DownPayment() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 pt-20">Apa Itu Down Payment (DP)?</h1>
      <p className="text-lg text-gray-700 mb-4">
        Down Payment (DP), atau uang muka, adalah pembayaran awal yang dilakukan oleh calon pembeli sebagai tanda komitmen dalam proses pembelian properti.
        DP merupakan bagian dari harga keseluruhan properti, namun tidak termasuk dalam pembiayaan Kredit Pemilikan Rumah (KPR) apabila fasilitas ini digunakan.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Di Andara Imperial Terrace, pembayaran DP juga menjadi langkah awal untuk mengamankan unit rumah impian sekaligus menunjukkan keseriusan calon pembeli.
      </p>
      <Image src="/alur_pemesanan_down_payment.png" alt="Alur Pemesanan DP" width={800} height={450} className="mx-auto my-4" />
      <h2 className="text-2xl font-semibold mt-6 mb-4">Mengapa Down Payment (DP) Penting?</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
        <li><strong>Tanda Keseriusan Pembeli:</strong> DP menunjukkan komitmen pembeli terhadap properti tertentu.</li>
        <li><strong>Persyaratan Pengajuan KPR:</strong> Sebagian besar bank mewajibkan DP antara 20% hingga 30% dari harga properti.</li>
        <li><strong>Meringankan Angsuran KPR:</strong> Membayar DP lebih besar mengurangi total pinjaman KPR dan cicilan bulanan.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Besaran DP di Andara Imperial Terrace</h2>
      <p className="text-lg text-gray-700 mb-4">
        Rata-rata DP yang harus dibayarkan adalah 30% dari harga properti dengan fleksibilitas tertentu, seperti skema cicilan hingga 12 bulan.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Contoh Simulasi Besaran DP:</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <p className="text-lg"><strong>Harga Properti:</strong> Rp3 Miliar</p>
        <p className="text-lg"><strong>DP 30%:</strong> Rp 900 Juta</p>
        <p className="text-lg"><strong>Booking Fee:</strong> Rp 50 Juta</p>
        <p className="text-lg"><strong>Sisa DP:</strong> Rp 850 Juta (Dapat dicicil hingga 12 bulan: Rp 62,5 Juta/bulan)</p>
      </div>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Keuntungan Membayar DP Selama Pre-Launching</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
        <li>Promo DP dapat dicicil hingga 12 bulan.</li>
        <li>Bonus tambahan seperti Asuransi Property All Risk (PAR) dan Full Furnished.</li>
        <li>Harga spesial pre-launching dengan potongan hingga Rp400 Juta.</li>
      </ul>
      
      <p className="text-lg text-gray-700 font-semibold mt-6">Jangan lewatkan kesempatan untuk mendapatkan unit impian Anda di Andara Imperial Terrace dengan keuntungan maksimal!</p>
    </div>
  );
}
