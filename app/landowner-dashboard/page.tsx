"use client"

import { useState } from "react";


import { FaClipboardList, FaMoneyCheck, FaHome, FaFileInvoice, FaBuilding, FaUserCog, FaCogs, FaHistory } from 'react-icons/fa';
import Link from 'next/link';
import {
  FaGift,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaBook,
  FaUsers,
  FaWallet,
  FaComments,
  FaUserPlus,
} from "react-icons/fa";

interface DashboardStat {
  label: string;
  value: string;
  icon: JSX.Element;
}


const landOwnershipData = [
  {
    id: "RK.02 SHGB 107",
    customer: "-",
    progress: {
      NUP: "0%",
      BookingFee: "0%",
      DownPayment: "0%",
      Pelunasan: "0%",
    },
  },
  {
    id: "A.01 SHGB 116",
    customer: "-",
    progress: {
      NUP: "0%",
      BookingFee: "0%",
      DownPayment: "0%",
      Pelunasan: "0%",
    },
  },
];


const stats: DashboardStat[] = [
  { label: "Total Revenue", value: "Rp0.00", icon: <FaGift /> },
  { label: "NUP Pencairan", value: "Rp 0.00", icon: <FaMoneyBillWave /> },
  { label: "Booking Fee Pencairan", value: "Rp0.00", icon: <FaMoneyBillWave /> },
  { label: "DP 30% Pencairan", value: "Rp0.00", icon: <FaMoneyBillWave /> },
  { label: "Jumlah Pembeli", value: "0", icon: <FaUsers /> },
  { label: "Terjual Bulan Ini", value: "0", icon: <FaClipboardCheck /> },
];

const Dashboard = () => {
  const [data] = useState(landOwnershipData);

  return (
    <div className="container pt-40">
      <h1 className="text-center mt-5 pt-20">Land Owner Dashboard</h1>
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pt-20">
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

      <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Kepemilikan Lahan - Bapak Bambang Nurmei</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="border px-4 py-2">ID Lahan</th>
              <th className="border px-4 py-2">Customer</th>
              <th className="border px-4 py-2">NUP</th>
              <th className="border px-4 py-2">Booking Fee</th>
              <th className="border px-4 py-2">Down Payment</th>
              <th className="border px-4 py-2">Pelunasan</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.customer}</td>
                <td className="border px-4 py-2 text-center">{item.progress.NUP}</td>
                <td className="border px-4 py-2 text-center">{item.progress.BookingFee}</td>
                <td className="border px-4 py-2 text-center">{item.progress.DownPayment}</td>
                <td className="border px-4 py-2 text-center">{item.progress.Pelunasan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      
    </div>
  );
};

export default Dashboard;
