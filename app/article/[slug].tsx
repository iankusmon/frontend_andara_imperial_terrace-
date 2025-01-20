// app/article/[slug].tsx
'use client'; // Jangan lupa untuk menambahkan ini jika menggunakan hooks seperti `useRouter`

import { useRouter } from 'next/router';

const ArticlePage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query; // Mengambil slug dari URL

  console.log('Slug:', slug); // Cek apakah slug terdeteksi dengan benar

  const articles: { [key: string]: JSX.Element } = {
    nup: (
      <div>
        <h1>NUP (Nomor Urut Pemesanan)</h1>
        <p>
          NUP (Nomor Urut Pemesanan) dalam pembelian villa atau rumah unit biasanya digunakan oleh pengembang atau developer properti untuk mencatat urutan pemesanan dari calon pembeli...
        </p>
      </div>
    ),
    'booking-fee': (
      <div>
        <h1>Booking Fee</h1>
        <p>
          Booking Fee dalam pembelian villa atau rumah unit biasanya merupakan biaya awal yang dibayarkan oleh pembeli untuk menunjukkan keseriusan dan mengamankan unit yang dipilih...
        </p>
      </div>
    ),
    'down-payment': (
      <div>
        <h1>Down Payment (DP)</h1>
        <p>
          Dalam transaksi pembelian villa atau rumah unit, dokumen Perjanjian Pengikatan Jual Beli (PPJB) juga merupakan dokumen penting yang terlibat setelah pembayaran uang muka (Down Payment)...
        </p>
      </div>
    ),
    pelunasan: (
      <div>
        <h1>Pelunasan</h1>
        <p>
          Pelunasan dalam pembelian villa atau rumah unit adalah tahap akhir dari proses transaksi properti, di mana pembeli menyelesaikan pembayaran sisa harga properti setelah membayar uang muka dan cicilan yang telah disepakati...
        </p>
      </div>
    ),
  };

  // Menampilkan artikel berdasarkan slug
  return articles[slug as string] || <p>Artikel tidak ditemukan</p>;
};

export default ArticlePage;
