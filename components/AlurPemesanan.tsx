'use client'
import Link from 'next/link';

const AlurPemesanan = () => {
  return (
    <section className="alur-pemesanan">
      <h2>Alur Pemesanan</h2>
      <div className="steps">
        <div className="step">
          <h3>NUP</h3>
          <p>Pelajari lebih lanjut mengenai NUP (Nomor Urut Pemesanan)</p>
          <Link href="/article/nup">
            <button className="button">Lihat Detail</button>
          </Link>
        </div>
        <div className="step">
          <h3>Booking Fee</h3>
          <p>Informasi tentang Booking Fee yang perlu dibayar terlebih dahulu.</p>
          <Link href="/article/booking-fee">
            <button className="button">Lihat Detail</button>
          </Link>
        </div>
        <div className="step">
          <h3>Down Payment</h3>
          <p>Detail mengenai pembayaran DP (Down Payment) untuk pemesanan.</p>
          <Link href="/article/down-payment">
            <button className="button">Lihat Detail</button>
          </Link>
        </div>
        <div className="step">
          <h3>Pelunasan</h3>
          <p>Pelajari cara melakukan pelunasan untuk pemesanan banner.</p>
          <Link href="/article/pelunasan">
            <button className="button">Lihat Detail</button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .alur-pemesanan {
          padding: 2rem;
          background-color: #f9f9f9;
        }

        h2 {
          text-align: center;
          margin-bottom: 2rem;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .step {
          padding: 1.5rem;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .step h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .step p {
          margin-bottom: 1.5rem;
        }

        .button {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background-color: #0070f3;
          color: white;
          text-align: center;
          text-decoration: none;
          border-radius: 4px;
        }

        .button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </section>
  );
};

export default AlurPemesanan;

