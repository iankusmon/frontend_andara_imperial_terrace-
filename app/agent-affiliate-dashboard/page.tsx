"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaGift,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaBook,
  FaUsers,
  FaWallet,
  FaUserCog,
  FaComments,
  FaUserPlus,
} from "react-icons/fa";
import useAuth from "@/hooks/useAuth";

interface DashboardStat {
  label: string;
  value: string;
  icon: JSX.Element;
}

interface DashboardItem {
  name: string;
  icon: JSX.Element;
  link: string;
}

export default function Dashboard() {
  const { agent, loading } = useAuth();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted flag after component mounts (client-side only)
    setMounted(true);
    // Optional: log welcome message
    if (pathname === "/agent-affiliate-dashboard") {
      console.log("Welcome to Agent Affiliate Dashboard! Enjoy your commission bonus!");
    }
  }, [pathname]);

  // Do not render until after the component has mounted to avoid hydration mismatches
  if (!mounted || loading) return <p>Loading...</p>;

  const stats: DashboardStat[] = [
    { label: "Total Reward", value: "0 Poin", icon: <FaGift /> },
    { label: "Komisi Buka Akun", value: "Rp 500,000", icon: <FaMoneyBillWave /> },
    { label: "Komisi Referral", value: "0", icon: <FaMoneyBillWave /> },
    { label: "Total Komisi", value: "Rp 500,000", icon: <FaMoneyBillWave /> },
    { label: "Jumlah Pengunjung", value: "0", icon: <FaUsers /> },
    { label: "Terjual Bulan Ini", value: "0", icon: <FaClipboardCheck /> },
    { label: "Level/Pangkat", value: "-", icon: <FaUserCog /> },
  ];

  const dashboardItems: DashboardItem[] = [
    { name: "Reward", icon: <FaGift />, link: "/agent-affiliate-dashboard/reward" },
    { name: "Komisi", icon: <FaMoneyBillWave />, link: "/agent-affiliate-dashboard/komisi" },
    { name: "Survey", icon: <FaClipboardCheck />, link: "/agent-affiliate-dashboard/survey" },
    { name: "Materi/Agent Affiliate Corner", icon: <FaBook />, link: "/agent-affiliate-dashboard/materi" },
    { name: "Pengunjung", icon: <FaUsers />, link: "/agent-affiliate-dashboard/track-pengunjung" },
    { name: "Withdraw", icon: <FaWallet />, link: "/agent-affiliate-dashboard/riwayat-withdraw" },
    { name: "Kelola Akun", icon: <FaUserCog />, link: "/agent-affiliate-dashboard/kelola-akun" },
    { name: "Konsultasi", icon: <FaComments />, link: "/report" },
    { name: "Pengajuan Customer", icon: <FaUserPlus />, link: "/agent-affiliate-dashboard/pengajuan-customer" },
  ];

  return (
    <div className="p-6 pt-40">
      {/* User Info */}
      <div className="flex items-center mb-6">
        <img
          src={
            agent?.photo_profile_url ||
            "https://w7.pngwing.com/pngs/620/1022/png-transparent-person-in-necktie-and-jacket-art-computer-icons-avatar-business-agent-icon-service-people-logo-thumbnail.png"
          }
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4 border-2 border-gray-300"
        />
        <div>
          <p className="text-xl font-bold">Hi, {agent?.name || "Agent"}</p>
          <p className="text-gray-500">Agent Affiliate</p>
        </div>
      </div>

      {/* Stats Section */}
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

      {/* Dashboard Menu */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {dashboardItems.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            <div className="text-4xl text-blue-500">{item.icon}</div>
            <p className="mt-2 text-lg font-semibold">{item.name}</p>
          </Link>
        ))}
      </div>

      {/* Back to Dashboard link if needed */}
      <div className="mt-4">
        <Link href="/agent-affiliate-dashboard" className="text-blue-500 hover:underline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
