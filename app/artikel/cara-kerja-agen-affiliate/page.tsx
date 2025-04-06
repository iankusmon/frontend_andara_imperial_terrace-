import Image from 'next/image';

export default function CaraKerjaAgenAffiliate() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Cara Kerja Andara Agen Affiliate Program
      </h1>
      <p className="text-lg text-center mb-4 font-semibold">
        Hanya SHARE dapat CUAN! Tanpa Keraguan.
      </p>
      {/* <Image 
        src="/andara_affiliate.png" 
        alt="Andara Agen Affiliate Program" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      /> */}
      
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">1. Pendaftaran dan Aktivasi Akun</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Calon Agen Affiliate mendaftar di www.andaraimperialterrace.co.id dengan data pribadi dan akun media sosial.</li>
            <li>Verifikasi data dilakukan oleh perusahaan untuk memastikan validitas informasi.</li>
            <li>Setelah verifikasi, Agen Affiliate menerima kode unik untuk melacak aktivitas promosi.</li>
          </ul>
          <p className="mt-2 font-semibold">Reward Buka Akun Rp 500.000,-</p>
          <ul className="list-disc pl-5">
            <li>Setiap Agen Affiliate yang berhasil mendaftar akan menerima reward Rp 500.000,-.</li>
            <li>Reward referral ini dicairkan bersamaan dengan komisi penjualan setelah konsumen membayar DP 30%.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Promosi Produk (Hanya SHARE dapat CUAN!)</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Agen Affiliate dapat menggunakan berbagai saluran promosi seperti media sosial, blog, email marketing, dan jaringan pribadi.</li>
            <li>Konten promosi dapat berupa teks, gambar, atau video dengan informasi mengenai Andara Imperial Terrace.</li>
            <li>Setiap konten harus menyertakan link afiliasi unik untuk mengarahkan calon pembeli ke website resmi.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Layanan Ekstra untuk Agen Affiliate</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Data pengunjung yang mengklik link afiliasi akan tercatat di Dashboard Agen Affiliate.</li>
            <li>Calon konsumen yang ingin survei lokasi dapat dilaporkan ke CS Andara Imperial Terrace.</li>
            <li>Dokumentasi dan laporan survei akan tersedia di Dashboard Agen Affiliate.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Pelacakan Penjualan</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>PT Andara Rejo Makmur menggunakan sistem pelacakan canggih untuk memonitor klik dan konversi.</li>
            <li>Cookie digunakan untuk memastikan atribusi penjualan kepada Agen Affiliate.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Pembayaran Komisi</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Komisi dibayarkan dalam beberapa tahap sesuai progres transaksi: NUP, booking fee, dan DP.</li>
            <li>Komisi sebesar 2% dari total harga jual unit.</li>
            <li>Pembayaran dilakukan melalui transfer bank atau metode pembayaran online lainnya.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Laporan Kinerja</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Agen Affiliate memiliki dashboard khusus untuk melihat jumlah klik, konversi, dan total komisi.</li>
            <li>Laporan berkala disediakan untuk membantu memantau efektivitas promosi.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Komisi Penjualan 2%</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Setiap Agen Affiliate yang berhasil menjual unit akan menerima komisi sebesar 2% dari harga jual.</li>
            <li>Komisi akan dicairkan setelah konsumen membayar DP 30% dari harga unit.</li>
            <li>Contoh: Jika harga unit Rp 3 miliar, komisi yang diperoleh sebesar Rp 60 juta setelah DP 30% (Rp 900 juta) dibayar.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
