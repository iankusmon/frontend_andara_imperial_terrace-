import { FaCalculator, FaCheckCircle, FaChartLine, FaFileSignature, FaUserCog } from 'react-icons/fa';
import Link from 'next/link';

const KPRDashboard = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-5">KPR Dashboard</h2>
      <div className="grid-container mt-4">
        <div className="grid-item">
          <Link href="/customer-dashboard/kpr/simulasi-pembayaran">
            <div className="link-item">
              <FaCalculator size={40} />
              <h3>Simulasi Pembayaran</h3>
              <p>Calculate your payment simulation</p>
            </div>
          </Link>
        </div>
        <div className="grid-item">
          <Link href="/customer-dashboard/kpr/simulasi-kelayakan">
            <div className="link-item">
              <FaCheckCircle size={40} />
              <h3>Simulasi Kelayakan</h3>
              <p>Check your eligibility</p>
            </div>
          </Link>
        </div>
        <div className="grid-item">
          <Link href="/customer-dashboard/kpr/simulasi-kemampuan">
            <div className="link-item">
              <FaChartLine size={40} />
              <h3>Simulasi Kemampuan</h3>
              <p>Simulate your financial capability</p>
            </div>
          </Link>
        </div>
        <div className="grid-item">
          <Link href="/customer-dashboard/kpr/pengajuan">
            <div className="link-item">
              <FaFileSignature size={40} />
              <h3>Pengajuan</h3>
              <p>Submit your KPR application</p>
            </div>
          </Link>
        </div>
        <div className="grid-item">
          <Link href="/report">
            <div className="link-item">
              <FaUserCog size={40} />
              <h3>Konsultasi</h3>
              <p>Consult with our experts</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KPRDashboard;
