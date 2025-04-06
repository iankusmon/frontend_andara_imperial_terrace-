import Image from "next/image";

export default function KeuntunganDanKemudahanBagiAgenAffiliate() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold text-center pt-20">
          Kemudahan dan Keuntungan Andara Agen Affiliate Program
        </h1>
        <p className="text-gray-600">Hanya SHARE dapat CUAN! Tanpa Keraguan.</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Perbandingan: Agen Properti Tradisional vs. Agen Affiliate
        </h2>
        <p className="text-center">
          Dalam dunia agen properti, proses prospek dan closing deal membutuhkan
          usaha dan waktu yang signifikan. Namun, dengan Andara Agen Affiliate
          Program, agen bisa mendapatkan komisi dengan cara yang lebih efisien.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Proses Agen Properti Tradisional</h2>
        <ul className="list-disc pl-6">
          <li>Menghubungi leads satu per satu melalui telepon dan WhatsApp.</li>
          <li>Melakukan follow-up secara intensif untuk menilai kesiapan calon pembeli.</li>
          <li>Melakukan negosiasi harga dan syarat pembayaran.</li>
          <li>Menjalankan proses penutupan transaksi secara manual.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Proses Andara Agen Affiliate Program</h2>
        <ul className="list-disc pl-6">
          <li>Hanya perlu membagikan link referral.</li>
          <li>Pelacakan otomatis tanpa perlu follow-up manual.</li>
          <li>Survey calon konsumen dilakukan oleh CS Andara Imperial Terrace.</li>
          <li>Komisi otomatis dihitung dan dibayarkan langsung.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Keuntungan Andara Agen Affiliate Program
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Efisiensi Waktu",
              description: "Agen hanya perlu membagikan link referral, tanpa perlu menghabiskan waktu untuk follow-up manual.",
            },
            {
              title: "Komisi Otomatis",
              description: "Setiap referral yang melakukan transaksi akan otomatis tercatat, dan komisi langsung dibayarkan.",
            },
            {
              title: "Tanpa Perlu Negosiasi",
              description: "Seluruh proses pembelian dan survey calon pembeli ditangani oleh CS Andara Imperial Terrace.",
            },
            {
              title: "Reward Referral",
              description: "Agen mendapatkan reward langsung sebesar Rp 1.000.000,- untuk setiap calon pembeli yang melakukan survey.",
            },
          ].map((item, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
