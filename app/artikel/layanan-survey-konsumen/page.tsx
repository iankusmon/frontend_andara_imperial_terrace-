import Image from 'next/image';

export default function LayananSurveyKonsumen() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 pt-20">
        Layanan Survey Konsumen
      </h1>
      <p className="text-lg text-center mb-4 font-semibold">
        Hanya SHARE dapat CUAN ! Tanpa Keraguan
      </p>
      {/* <Image 
        src="/survey_konsumen.png" 
        alt="Layanan Survey Konsumen" 
        width={800} 
        height={400} 
        className="w-full rounded-lg shadow-lg" 
      /> */}
      
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Langkah 1: Calon Konsumen Tertarik untuk Survey di Lokasi</h2>
          <p>Seorang calon konsumen yang melihat promosi Agen Affiliate tertarik untuk melakukan survey langsung ke lokasi Kawasan Terintegrasi Andara Imperial Terrace.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Langkah 2: Agen Affiliate Mengajukan Nama Calon Konsumen</h2>
          <p>Agen Affiliate memasukkan nama calon konsumen tersebut melalui formulir khusus di Dashboard Agen Affiliate atau menghubungi Customer Service (CS) Andara Imperial Terrace untuk mengatur jadwal survey.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Langkah 3: Konfirmasi Jadwal dan Layanan oleh CS Andara Imperial Terrace</h2>
          <p>CS Andara Imperial Terrace akan segera menindaklanjuti dan mengatur waktu survey yang sesuai dengan calon konsumen. CS juga akan menginformasikan Agen Affiliate mengenai jadwal yang telah ditentukan.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Langkah 4: Proses Survey di Lokasi</h2>
          <p>Pada hari survey, calon konsumen akan disambut dan dilayani oleh tim CS Andara Imperial Terrace di lokasi Kawasan Terintegrasi. Selama survey berlangsung, CS akan memberikan penjelasan detail terkait properti yang diinginkan konsumen.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Langkah 5: Reward Referral Rp 1.000.000,- untuk Agen Affiliate</h2>
          <p>Setelah calon konsumen menyelesaikan proses survey, Agen Affiliate akan langsung mendapatkan reward referral sebesar Rp 1.000.000,- sebagai bentuk apresiasi atas referensinya.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Langkah 6: Dokumentasi Survey</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Foto dan video calon konsumen yang sedang mengunjungi lokasi dan melihat-lihat properti.</li>
            <li>Notulensi: Catatan lengkap tentang tanggapan, minat, serta hal-hal yang dibahas antara calon konsumen dan tim CS Andara Imperial Terrace.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Langkah 7: Pelaporan Hasil Survey di Dashboard Agen Affiliate</h2>
          <p>Setelah survey selesai, semua hasil dokumentasi (foto, video, dan notulensi) akan diunggah ke Dashboard Agen Affiliate.</p>
          <p>Agen Affiliate dapat melihat:</p>
          <ul className="list-disc pl-5">
            <li>Foto dan video yang merekam momen penting selama survey.</li>
            <li>Hasil notulensi yang menjelaskan tingkat minat calon konsumen serta rincian informasi properti yang diminati.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Langkah 8: Proses Penjualan dan Closing</h2>
          <p>Jika calon konsumen memutuskan untuk membeli properti, mereka akan melanjutkan ke tahap pendaftaran NUP, pembayaran booking fee, dan DP. Semua tahapan transaksi ini juga akan tercatat di Dashboard Agen Affiliate.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Langkah 9: Pembayaran Komisi Penuh untuk Agen Affiliate</h2>
          <p>Jika transaksi berhasil dan calon konsumen melakukan closing (penandatanganan PPJB dan pembayaran DP), Agen Affiliate akan mendapatkan komisi sesuai ketentuan.</p>
          <p>Komisi ini akan dihitung secara otomatis dan dilaporkan di Dashboard, mencakup detail seperti:</p>
          <ul className="list-disc pl-5">
            <li><strong>Komisi Tahap 1:</strong> Setelah pendaftaran NUP.</li>
            <li><strong>Komisi Tahap 2:</strong> Setelah pembayaran booking fee.</li>
            <li><strong>Komisi Tahap 3:</strong> Setelah pembayaran DP.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
