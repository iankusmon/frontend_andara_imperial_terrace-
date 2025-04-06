import Image from 'next/image';

export default function CicilanTanpaBunga() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Cicilan Tanpa Bunga 12 Bulan: Kemudahan dan Fleksibilitas dalam Pembayaran
      </h1>
      <p className="text-lg text-center mb-4">
        Andara Imperial Terrace memberikan kemudahan bagi Anda yang ingin memiliki properti mewah tanpa beban finansial yang berat melalui program Cicilan Tanpa Bunga 12 Bulan. Program ini dirancang khusus untuk memudahkan pembeli dengan cara pembayaran yang fleksibel dan tanpa tambahan biaya bunga.
      </p>
      {/* <Image 
        src="/cicilan_tanpa_bunga.png" 
        alt="Cicilan Tanpa Bunga Andara Imperial Terrace" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      /> */}
      
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Keunggulan Cicilan Tanpa Bunga 12 Bulan:</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Pembayaran tanpa bunga tambahan selama periode cicilan.</li>
            <li>Fleksibilitas dalam pembayaran yang memungkinkan perencanaan keuangan lebih baik.</li>
            <li>Cocok untuk pembeli pertama atau investor yang ingin menghindari pinjaman bank.</li>
            <li>Pembayaran langsung ke pengembang untuk transaksi yang lebih aman dan transparan.</li>
            <li>Angsuran tetap setiap bulan untuk memudahkan pengelolaan anggaran.</li>
            <li>Akses lebih cepat ke properti tanpa prosedur kredit yang rumit.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Simulasi Pembayaran Cicilan Tanpa Bunga 12 Bulan:</h2>
          <table className="w-full border-collapse border border-gray-300 mt-4 text-sm md:text-base">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Tipe Villa</th>
                <th className="border border-gray-300 px-4 py-2">Harga Pre-Launching</th>
                <th className="border border-gray-300 px-4 py-2">Booking Fee</th>
                <th className="border border-gray-300 px-4 py-2">Harga Setelah Booking Fee</th>
                <th className="border border-gray-300 px-4 py-2">DP 30%</th>
                <th className="border border-gray-300 px-4 py-2">Angsuran 3 Bulan</th>
                <th className="border border-gray-300 px-4 py-2">Angsuran 6 Bulan</th>
                <th className="border border-gray-300 px-4 py-2">Angsuran 12 Bulan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Da Vinci Residence</td>
                <td className="border border-gray-300 px-4 py-2">Rp2.850.000.000</td>
                <td className="border border-gray-300 px-4 py-2">Rp50.000.000</td>
                <td className="border border-gray-300 px-4 py-2">Rp2.800.000.000</td>
                <td className="border border-gray-300 px-4 py-2">Rp840.000.000</td>
                <td className="border border-gray-300 px-4 py-2">Rp653.333.333</td>
                <td className="border border-gray-300 px-4 py-2">Rp326.666.667</td>
                <td className="border border-gray-300 px-4 py-2">Rp163.333.333</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Amsterdam Royale</td>
                <td className="border border-gray-300 px-4 py-2">Rp2.800.000.000</td>
                <td className="border border-gray-300 px-4 py-2">Rp50.000.000</td>
                <td className="border border-gray-300 px-4 py-2">Rp2.750.000.000</td>
                <td className="border border-gray-300 px-4 py-2">Rp825.000.000</td>
                <td className="border border-gray-300 px-4 py-2">Rp641.666.667</td>
                <td className="border border-gray-300 px-4 py-2">Rp320.833.333</td>
                <td className="border border-gray-300 px-4 py-2">Rp160.416.667</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Athena Height</td>
                <td className="border border-gray-300 px-4 py-2">Rp2.750.000.000</td>
                <td className="border border-gray-300 px-4 py-2">Rp50.000.000</td>
                <td className="border border-gray-300 px-4 py-2">Rp2.700.000.000</td>
                <td className="border border-gray-300 px-4 py-2">Rp810.000.000</td>
                <td className="border border-gray-300 px-4 py-2">Rp630.000.000</td>
                <td className="border border-gray-300 px-4 py-2">Rp315.000.000</td>
                <td className="border border-gray-300 px-4 py-2">Rp157.500.000</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}