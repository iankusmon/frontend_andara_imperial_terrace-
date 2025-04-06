import Image from "next/image";

export default function BreakEvenPoint() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 text-black">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center mb-4 pt-20">
          Break-Even Point (BEP) Investasi Villa di Andara Imperial Terrace
        </h1>
        <p className="text-lg text-center mb-6">
          Analisis Break-Even Point (BEP) untuk investor properti di Andara Imperial Terrace, menggambarkan kapan investasi akan mencapai titik impas berdasarkan tingkat okupansi dan strategi bagi hasil dengan PT Andara Rejo Makmur.
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold">Perhitungan BEP Berdasarkan Okupansi</h2>
            <p>
              BEP dihitung dengan mempertimbangkan harga villa, pendapatan sewa per bulan, dan sistem bagi hasil (60% untuk pemilik, 40% untuk PT Andara Rejo Makmur). Biaya operasional diperkirakan sebesar 30% dari total pendapatan sebelum pembagian hasil.
            </p>
          </article>

          <article className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Hasil Perhitungan BEP</h2>
            <p>Estimasi waktu BEP berdasarkan tiga skenario okupansi:</p>
            <ul className="list-disc pl-5">
              <li><strong>Slow (40% okupansi):</strong> 6.18 - 7.25 tahun</li>
              <li><strong>Moderat (50% okupansi):</strong> 5.34 - 5.80 tahun</li>
              <li><strong>Agresif (60% okupansi):</strong> 4.45 - 4.83 tahun</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Harga Villa</h2>
            <p>
              Harga villa di Andara Imperial Terrace berkisar antara Rp 3.150.000.000 hingga Rp 3.500.000.000.
            </p>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Tarif Sewa per Kamar</h2>
            <p>
              <strong>Presidential Suite:</strong> Rp 75.000.000/bulan<br/>
              <strong>Executive Suite:</strong> Rp 55.000.000/bulan<br/>
              <strong>Junior Suite:</strong> Rp 40.000.000/bulan
            </p>
          </article>

          <article className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Return on Investment (ROI)</h2>
            <p>
              ROI tahunan dihitung berdasarkan pendapatan bersih tahunan dibandingkan dengan harga villa. Berdasarkan skenario okupansi:
            </p>
            <ul className="list-disc pl-5">
              <li><strong>Slow (40% okupansi):</strong> 6.18% - 6.88%</li>
              <li><strong>Moderat (50% okupansi):</strong> 7.73% - 8.60%</li>
              <li><strong>Agresif (60% okupansi):</strong> 9.27% - 10.32%</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Kesimpulan</h2>
            <p>
              Dengan okupansi agresif (60%), investor dapat mencapai BEP dalam 4.5 hingga 5 tahun, menjadikan investasi ini pilihan yang menarik di industri properti premium.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}