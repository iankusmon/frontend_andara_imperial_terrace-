// import AgentAffiliateLanding from '@/components/AgentAffiliateLanding'
// import MiniBanner from '@/components/MiniBanner'

// export default function AgentAffiliateDashboard() {
//   return (
//     <>
//       <AgentAffiliateLanding />
//       <MiniBanner />
//     </>
  
//   )
// }

import { FaGift, FaMoneyBillWave, FaClipboardCheck, FaBook, FaUsers, FaWallet, FaUserCog, FaComments, FaUserPlus } from 'react-icons/fa';

const stats = [
  { label: 'Total Reward', value: '10,000 Poin', icon: <FaGift /> },
  { label: 'Total Komisi', value: 'Rp 25,000,000', icon: <FaMoneyBillWave /> },
  { label: 'Jumlah Pengunjung', value: '1,200', icon: <FaUsers /> },
  { label: 'Terjual Bulan Ini', value: '15 Unit', icon: <FaClipboardCheck /> },
  { label: 'Level/Pangkat', value: 'Diamond', icon: <FaUserCog /> },
];

const dashboardItems = [
  { name: 'Reward', icon: <FaGift />, link: '/agent-affiliate-dashboard/reward' },
  { name: 'Komisi', icon: <FaMoneyBillWave />, link: '/agent-affiliate-dashboard/komisi' },
  { name: 'Survey', icon: <FaClipboardCheck />, link: '/agent-affiliate-dashboard/survey' },
  { name: 'Materi/Agent Affiliate Corner', icon: <FaBook />, link: '/agent-affiliate-dashboard/materi' },
  { name: 'Pengunjung', icon: <FaUsers />, link: '/agent-affiliate-dashboard/track-pengunjung' },
  { name: 'Withdraw', icon: <FaWallet />, link: '/agent-affiliate-dashboard/riwayat-withdraw' },
  { name: 'Kelola Akun', icon: <FaUserCog />, link: '/agent-affiliate-dashboard/kelola-akun' },
  { name: 'Konsultasi', icon: <FaComments />, link: '/report' },
  { name: 'Pengajuan Customer', icon: <FaUserPlus />, link: '/agent-affiliate-dashboard/pengajuan-customer' },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="text-4xl text-blue-500 mr-4">{stat.icon}</div>
            <div>
              <p className="text-lg font-semibold">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {dashboardItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            <div className="text-4xl text-blue-500">{item.icon}</div>
            <p className="mt-2 text-lg font-semibold">{item.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
