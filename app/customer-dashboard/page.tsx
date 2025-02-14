import { FaClipboardList, FaMoneyCheck, FaHome, FaFileInvoice, FaBuilding, FaUserCog, FaCogs, FaHistory } from 'react-icons/fa';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Customer Dashboard</h1>
      <div className="grid-container mt-4 pt-20">
        <div className="grid-item">
          <Link href="/customer-dashboard/nup-list">
            <div className="link-item">
              <FaClipboardList size={40} />
              <h3>NUP</h3>
              <p>Track NUP status and details</p>
            </div>
          </Link>
        </div>
        <div className="grid-item">
          <Link href="/customer-dashboard/booking-fee-list">
            <div className="link-item">
              <FaMoneyCheck size={40} />
              <h3>Booking Fee</h3>
              <p>Track booking fee progress</p>
            </div>
          </Link>
        </div>
        <div className="grid-item">
          <Link href="/customer-dashboard/dp-list">
            <div className="link-item">
              <FaHome size={40} />
              <h3>Downpayment</h3>
              <p>Track downpayment status</p>
            </div>
          </Link>
        </div>
        <div className="grid-item">
          <Link href="/customer-dashboard/pelunasan-list">
            <div className="link-item">
              <FaFileInvoice size={40} />
              <h3>Pelunasan</h3>
              <p>Track pelunasan status</p>
            </div>
          </Link>
        </div>
        <div className="grid-item">
          <Link href="/customer-dashboard/kpr">
            <div className="link-item">
              <FaBuilding size={40} />
              <h3>KPR</h3>
              <p>Track KPR progress</p>
            </div>
          </Link>
        </div>
        <div className="grid-item">
          <Link href="/customer-dashboard/riwayat-beli-villa">
            <div className="link-item">
              <FaHistory size={40} />
              <h3>Riwayat Beli Villa</h3>
              <p>View your villa purchase history</p>
            </div>
          </Link>
        </div>
        <div className="grid-item">
          <Link href="/report">
            <div className="link-item">
              <FaUserCog size={40} />
              <h3>Konsultasi</h3>
              <p>View konsultasi history</p>
            </div>
          </Link>
        </div>
        <div className="grid-item">
          <Link href="/customer-dashboard/pengaturan-akun">
            <div className="link-item">
              <FaCogs size={40} />
              <h3>Pengaturan Akun</h3>
              <p>Update your account settings</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
