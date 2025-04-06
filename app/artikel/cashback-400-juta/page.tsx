import Image from "next/image";

export default function CashbackPromo() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 text-black">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center mb-4 pt-20">Cashback Rp 400 Juta</h1>
        <h1 className="text-3xl font-bold text-center mb-4">Keuntungan Maksimal Selama Pre-Launching!</h1>
        <p className="text-lg text-center mb-6">
          Jangan lewatkan kesempatan emas untuk memiliki hunian impian di Andara Imperial Terrace dengan penawaran spesial yang luar biasa! Selama masa Pre-Launching, kami menghadirkan Cashback Eksklusif sebesar Rp 400 Juta, memberikan keuntungan finansial yang signifikan bagi Anda.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold">Mengapa Cashback Rp 400 Juta Ini Begitu Menguntungkan?</h2>
            <ul className="list-disc pl-6">
              <li><strong>Harga Lebih Ringan</strong> – Dapatkan potongan harga langsung, membuat investasi Anda semakin bernilai.</li>
              <li><strong>Penghematan Maksimal</strong> – Alokasikan cashback ini untuk kebutuhan lain, seperti interior, furnitur, atau investasi tambahan.</li>
              <li><strong>Keuntungan Lebih Cepat</strong> – Dengan harga yang lebih kompetitif, potensi keuntungan dari nilai properti yang terus meningkat semakin besar.</li>
              <li><strong>Terbatas & Eksklusif</strong> – Promo ini hanya berlaku dalam periode Pre-Launching, sehingga Anda termasuk dalam kelompok eksklusif yang menikmati keuntungan ini lebih awal.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Jangan Tunggu Terlalu Lama!</h2>
            <p>
              Promo ini hanya berlaku untuk pembelian unit tertentu selama periode Pre-Launching. Segera amankan hunian Anda di Andara Imperial Terrace dan nikmati kenyamanan serta prestise dalam lingkungan premium.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Hubungi Kami Sekarang!</h2>
            <p>
              Dapatkan informasi lebih lanjut dan jadilah bagian dari komunitas eksklusif kami. Hubungi kami sekarang untuk memastikan Anda tidak melewatkan kesempatan luar biasa ini!
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
