import Image from "next/image";

export default function TarifSewa() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 text-black">
      <div className="max-w-4xl w-full p-6">
        <h1 className="text-3xl font-bold text-center mb-4 pt-20">
          Tarif Sewa Andara Imperial Terrace
        </h1>
        <p className="text-lg text-center mb-6">
          Pemilik villa di Andara Imperial Terrace memiliki fleksibilitas penuh dalam menyewakan properti mereka, baik secara keseluruhan maupun per kamar. Berikut adalah daftar tarif sewa berdasarkan tipe villa dan tipe kamar:
        </p>

        <section className="space-y-6">
          <article>
            <h2 className="text-xl font-semibold">Tarif Sewa per Villa (Sewa Keseluruhan)</h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Tipe Villa</th>
                  <th className="border border-gray-300 p-2">Tarif per Malam</th>
                  <th className="border border-gray-300 p-2">Tarif per Minggu</th>
                  <th className="border border-gray-300 p-2">Tarif per Bulan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Da Vinci Residence", "Rp 7.500.000", "Rp 45.000.000", "Rp 160.000.000"],
                  ["Amsterdam Royale", "Rp 7.250.000", "Rp 43.500.000", "Rp 155.000.000"],
                  ["Athena Height", "Rp 7.000.000", "Rp 42.000.000", "Rp 150.000.000"],
                  ["Versailles Mansion", "Rp 7.750.000", "Rp 46.500.000", "Rp 165.000.000"],
                  ["Barcelona Estate", "Rp 7.500.000", "Rp 45.000.000", "Rp 160.000.000"],
                  ["Vienna Classic", "Rp 7.250.000", "Rp 43.500.000", "Rp 155.000.000"],
                  ["Monaco Elite", "Rp 8.000.000", "Rp 48.000.000", "Rp 170.000.000"],
                  ["Kaiser Residence", "Rp 7.750.000", "Rp 46.500.000", "Rp 165.000.000"],
                  ["Prague Palace", "Rp 7.500.000", "Rp 45.000.000", "Rp 160.000.000"],
                  ["Florence Heritage", "Rp 8.250.000", "Rp 49.500.000", "Rp 175.000.000"],
                  ["Danish Residence", "Rp 8.000.000", "Rp 48.000.000", "Rp 170.000.000"],
                  ["Swiss Horizon", "Rp 7.750.000", "Rp 46.500.000", "Rp 165.000.000"],
                  ["Porto Vista", "Rp 8.500.000", "Rp 51.000.000", "Rp 180.000.000"],
                  ["Stockholm Serenity", "Rp 8.250.000", "Rp 49.500.000", "Rp 175.000.000"],
                  ["Rome Royale", "Rp 8.250.000", "Rp 49.500.000", "Rp 175.000.000"]
                ].map((villa, index) => (
                  <tr key={index} className="border border-gray-300">
                    {villa.map((item, idx) => (
                      <td key={idx} className="border border-gray-300 p-2 text-center">{item}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Tarif Sewa per Kamar (Jika Disewakan Secara Terpisah)</h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Tipe Kamar</th>
                  <th className="border border-gray-300 p-2">Tarif per Malam</th>
                  <th className="border border-gray-300 p-2">Tarif per Minggu</th>
                  <th className="border border-gray-300 p-2">Tarif per Bulan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Presidential Suite", "Rp 3.500.000", "Rp 21.000.000", "Rp 75.000.000"],
                  ["Executive Suite", "Rp 2.500.000", "Rp 15.000.000", "Rp 55.000.000"],
                  ["Junior Suite", "Rp 1.800.000", "Rp 10.800.000", "Rp 40.000.000"]
                ].map((room, index) => (
                  <tr key={index} className="border border-gray-300">
                    {room.map((item, idx) => (
                      <td key={idx} className="border border-gray-300 p-2 text-center">{item}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Ketentuan Sewa</h2>
            <ul className="list-disc pl-5">
              <li>Minimal sewa untuk mingguan dan bulanan memerlukan pembayaran di muka.</li>
              <li>Pembatalan dalam waktu 48 jam sebelum check-in akan dikenakan biaya 50% dari total pembayaran.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Fasilitas yang Termasuk</h2>
            <ul className="list-disc pl-5">
              <li>Akses penuh ke semua fasilitas villa (private pool, rooftop, BBQ area, smart home system, dll.).</li>
              <li>Layanan kebersihan harian.</li>
              <li>Keamanan 24 jam dengan CCTV dan akses smartlock.</li>
              <li>Wi-Fi berkecepatan tinggi.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-semibold">Promosi & Diskon</h2>
            <ul className="list-disc pl-5">
              <li>Diskon 10% untuk pemesanan lebih dari 7 hari.</li>
              <li>Diskon 15% untuk pemesanan lebih dari 30 hari.</li>
              <li>Paket Honeymoon & Family Staycation tersedia dengan harga khusus.</li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  );
}
