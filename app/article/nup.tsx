import Link from 'next/link';

const NUP: React.FC = () => {
  return (
    <div className="article">
      <h1>NUP (Nomor Urut Pemesanan)</h1>
      <p>
        NUP (Nomor Urut Pemesanan) dalam pembelian villa atau rumah unit biasanya digunakan oleh pengembang atau developer properti untuk mencatat urutan pemesanan dari calon pembeli. NUP menunjukkan bahwa pembeli telah melakukan pemesanan dan akan diberikan hak untuk membeli unit properti yang dimaksud. Nomor ini berguna untuk memprioritaskan pembeli yang telah melakukan pemesanan lebih awal.
      </p>
      <p>
        Prosesnya sering kali terjadi saat launching proyek baru, di mana calon pembeli yang tertarik akan mendapatkan NUP sebagai tanda bukti pemesanan sebelum melakukan transaksi lebih lanjut, seperti pembayaran uang muka atau tanda jadi. NUP juga membantu developer mengatur dan mendata pembeli sesuai urutan pemesanan.
      </p>
      <Link href="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default NUP;
