import Image from "next/image";

export default function FreeNotaryPromo() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 text-black">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center mb-4 pt-20">
          GRATIS BIAYA AKAD DAN NOTARIS – INVESTASI TANPA BEBAN!
        </h1>
        <p className="text-lg text-center mb-6">
          Nikmati kemudahan memiliki hunian mewah di Andara Imperial Terrace tanpa perlu khawatir dengan biaya legalitas! Semua biaya Akta Jual Beli (AJB), balik nama Sertifikat Hak Guna Bangunan (SHGB), dan biaya notaris ditanggung sepenuhnya oleh pengembang.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold">Detail Biaya yang Ditanggung</h2>
            <p>
              <strong>1. Bea Balik Nama (BBN)</strong><br />
              Biaya resmi untuk mengganti nama sertifikat tanah ke pemilik baru. Biasanya sekitar 2% dari harga transaksi, namun di Andara Imperial Terrace, ini ditanggung sepenuhnya oleh pengembang.
            </p>
            <p>
              <strong>2. Biaya Pembuatan Akta Jual Beli (AJB)</strong><br />
              Dokumen resmi yang menjadi bukti sah peralihan kepemilikan properti. Umumnya sekitar 1% dari harga transaksi, namun Anda mendapatkan ini secara gratis!
            </p>
            <p>
              <strong>3. Biaya Notaris</strong><br />
              Meliputi pengurusan legalitas jual beli, cek sertifikat tanah, dan keabsahan dokumen. Biaya ini bervariasi tergantung nilai properti dan di Andara Imperial Terrace, ini juga ditanggung sepenuhnya.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Simulasi Gratis Biaya Akad dan Notaris</h2>
            <p>
              Berikut adalah estimasi biaya yang ditanggung oleh pengembang untuk setiap tipe villa di Andara Imperial Terrace:
            </p>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr>
                  <th className="border p-2">Tipe Villa</th>
                  <th className="border p-2">Harga</th>
                  <th className="border p-2">BBN</th>
                  <th className="border p-2">AJB</th>
                  <th className="border p-2">Notaris</th>
                  <th className="border p-2">Total Gratis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Da Vinci Residence</td>
                  <td className="border p-2">Rp2.850.000.000</td>
                  <td className="border p-2">Rp57.000.000</td>
                  <td className="border p-2">Rp28.500.000</td>
                  <td className="border p-2">Rp28.500.000</td>
                  <td className="border p-2">Rp114.000.000</td>
                </tr>
                <tr>
                  <td className="border p-2">Amsterdam Royale</td>
                  <td className="border p-2">Rp2.800.000.000</td>
                  <td className="border p-2">Rp56.000.000</td>
                  <td className="border p-2">Rp28.000.000</td>
                  <td className="border p-2">Rp28.000.000</td>
                  <td className="border p-2">Rp112.000.000</td>
                </tr>
                <tr>
                  <td className="border p-2">Athena Height</td>
                  <td className="border p-2">Rp2.750.000.000</td>
                  <td className="border p-2">Rp55.000.000</td>
                  <td className="border p-2">Rp27.500.000</td>
                  <td className="border p-2">Rp27.500.000</td>
                  <td className="border p-2">Rp110.000.000</td>
                </tr>
              </tbody>
            </table>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Promo Spesial Andara Imperial Terrace</h2>
            <p>
              Andara Imperial Terrace menawarkan 197 villa eksklusif bergaya Eropa di Solo Raya, lengkap dengan fasilitas bintang lima.
            </p>
            <ul className="list-disc ml-6">
              <li>Lokasi premium dengan fasilitas wisata dan bisnis.</li>
              <li>Sistem sewa dengan passive income – bagi hasil 60% untuk pemilik.</li>
              <li>Dikelola profesional oleh PT. Andara Rejo Makmur.</li>
              <li>Fasilitas eksklusif seperti Day Club, Sky Spa, dan AquaTech Adventure.</li>
              <li>Kuliner berkelas seperti Imperial Dine & Lounge.</li>
              <li>Keamanan 24/7 di lingkungan eksklusif.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Promo Eksklusif Pre-Launching</h2>
            <p>
              Dapatkan berbagai keuntungan saat pre-launching:
            </p>
            <ul className="list-disc ml-6">
              <li>Cashback hingga Rp400 juta.</li>
              <li>Bebas pajak sesuai skema pembayaran.</li>
              <li>Full furnished premium & smart home system.</li>
              <li>Asuransi properti all risk.</li>
              <li>Cicilan tanpa bunga 12 bulan.</li>
              <li>Bonus referral hingga Rp60 juta.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Jadwal Pre-Launching</h2>
            <p>
              Jangan lewatkan jadwal pre-launching berikut ini:
            </p>
            <ul className="list-disc ml-6">
              <li>5 Feb 2025: The Royale Elegance (26 unit)</li>
              <li>23 Mar 2025: The Continental Estate (46 unit)</li>
              <li>23 Apr 2025: The Imperial Palace (45 unit)</li>
              <li>23 Mei 2025: The Grand Horizon (41 unit)</li>
              <li>23 Juni 2025: The Prestige Crown (39 unit)</li>
            </ul>
            <p>Hubungi kami sekarang dan amankan unit impian Anda sebelum harga naik!</p>
          </article>
        </section>
      </div>
    </div>
  );
}
