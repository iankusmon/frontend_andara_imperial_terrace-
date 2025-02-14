"use client"

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaGift, FaMoneyBillWave, FaClipboardCheck, FaBook, FaUsers, FaWallet, FaUserCog, FaComments, FaUserPlus } from 'react-icons/fa';

const stats = [
  { label: 'Total Reward', value: '0 Poin', icon: <FaGift /> },
  { label: 'Komisi Buka Akun', value: 'Rp 500,000', icon: <FaMoneyBillWave /> },
  { label: 'Komisi Referral ', value: '0', icon: <FaMoneyBillWave /> },
  { label: 'Total Komisi', value: 'Rp 500,000', icon: <FaMoneyBillWave /> },
  { label: 'Jumlah Pengunjung', value: '0', icon: <FaUsers /> },
  { label: 'Terjual Bulan Ini', value: '0', icon: <FaClipboardCheck /> },
  { label: 'Level/Pangkat', value: '-', icon: <FaUserCog /> },
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
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/agent-affiliate-dashboard") {
      alert("Selamat datang di Agent Affiliate Dashboard! Nikmati Komisi Buka Akun Rp500.000 🎉");
    }
  }, [pathname]); // Alert hanya muncul saat halaman pertama kali dimuat

  const user = {
    username: 'Agent',
    profilePic: 'https://via.placeholder.com/150', // Ganti dengan sumber foto profil yang sesuai
  };

  return (
    <div className="p-6 pt-20">
      {/* User Info */}
      <div className="flex items-center mb-6 pt-20">
        <img src={user.profilePic} alt="Profile" className="w-16 h-16 rounded-full mr-4 border-2 border-gray-300" />
        <div>
          <p className="text-xl font-bold">Hi, {user.username}</p>
          <p className="text-gray-500">Agent Affiliate</p>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pt-6">
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
      
      {/* Dashboard Menu */}
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
