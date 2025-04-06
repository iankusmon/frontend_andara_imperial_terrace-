import Image from 'next/image';

export default function InputCustomerLayananSurvey() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Alur Kerja Proses Memasukkan Nama Calon Konsumen untuk Survey di Lokasi di Website www.andaraimperialterrace.co.id
      </h1>
      
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Langkah 1: Agen Affiliate Mendapatkan Calon Konsumen yang Berminat</h2>
          <p>Agen Affiliate menarik minat calon konsumen melalui promosi di media sosial, blog, atau kontak pribadi. Konsumen yang tertarik kemudian menunjukkan keinginan untuk melakukan survey langsung ke lokasi proyek Andara Imperial Terrace.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Langkah 2: Login ke Dashboard Agen Affiliate</h2>
          <p>Agen Affiliate login ke akun mereka di website theb.andararejomakmur.co.id menggunakan email dan kata sandi yang telah didaftarkan. Setelah berhasil login, agen akan diarahkan ke halaman Dashboard yang menampilkan informasi kampanye dan menu input data calon konsumen.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Langkah 3: Mengakses Formulir Input Data Calon Konsumen</h2>
          <p>Di Dashboard, Agen Affiliate memilih menu "Tambah Calon Konsumen" atau "Formulir Survey Konsumen" untuk mengakses formulir input data.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Langkah 4: Mengisi Data Calon Konsumen</h2>
          <p>Agen Affiliate memasukkan informasi calon konsumen, termasuk:</p>
          <ul className="list-disc pl-5">
            <li>Nama Lengkap</li>
            <li>Nomor Telepon</li>
            <li>Email (opsional)</li>
            <li>Foto Wajah untuk validasi</li>
            <li>Preferensi waktu survey</li>
            <li>Tipe rumah yang diminati</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Langkah 5: Konfirmasi dan Pengiriman Formulir</h2>
          <p>Setelah semua data diisi, Agen Affiliate menekan tombol "Kirim". Sistem akan menampilkan pesan konfirmasi bahwa data calon konsumen telah dikirim ke tim Customer Service (CS) Andara Imperial Terrace.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Langkah 6: Pemberitahuan kepada Customer Service</h2>
          <p>Tim CS akan memproses permintaan, menghubungi calon konsumen untuk mengonfirmasi jadwal survey, dan mengatur waktu kunjungan.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Langkah 7: Pemantauan Status di Dashboard</h2>
          <p>Agen Affiliate dapat memantau status survey melalui Dashboard, mulai dari konfirmasi jadwal hingga laporan hasil survey.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Langkah 8: Penerimaan Laporan Hasil Survey</h2>
          <p>Setelah survey selesai, CS akan mengunggah laporan hasil survey ke Dashboard Agen Affiliate, mencakup:</p>
          <ul className="list-disc pl-5">
            <li>Foto dan video survey</li>
            <li>Catatan tanggapan calon konsumen</li>
            <li>Konfirmasi reward referral Rp 1.000.000,- bagi Agen Affiliate</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Langkah 9: Proses Penjualan dan Komisi</h2>
          <p>Jika calon konsumen melanjutkan ke pembelian, transaksi selanjutnya seperti pendaftaran NUP, pembayaran booking fee, dan DP akan tercatat di Dashboard. Agen Affiliate akan menerima komisi penuh jika penjualan berhasil.</p>
        </section>
      </div>
    </div>
  );
}