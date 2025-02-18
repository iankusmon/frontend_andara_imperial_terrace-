"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { FaCoins, FaFrown } from "react-icons/fa";

interface Commission {
  id: number;
  commission_percentage: number;
  commission_amount: number;
  unit_price: number;
  dp_30_paid: boolean;
  paid_at: string | null;
  created_at: string;
  updated_at: string;
}

export default function CommissionPage() {
  const { agent, loading } = useAuth();
  const [commissions, setCommissions] = useState<Commission[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set mounted flag after component mounts (client-side only)
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!loading && agent) {
      const fetchCommissions = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://api.andaraimperialterrace.co.id/api/agent_affiliates/${agent.id}/commissions`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          if (!response.ok) {
            throw new Error("Failed to fetch commissions");
          }
          const data = await response.json();
          setCommissions(data.commissions);
        } catch (err: any) {
          setError(err.message || "An error occurred");
        } finally {
          setIsLoading(false);
        }
      };

      fetchCommissions();
    }
  }, [agent, loading]);

  // Don't render until client-side mount is complete to avoid hydration mismatches
  if (!mounted) return null;
  if (loading || isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6 pt-40">
      <h1 className="text-2xl font-bold mb-4">Komisi</h1>
      {commissions.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <FaFrown className="text-6xl text-gray-500 mb-4" />
          <p className="text-xl text-gray-500">Tidak ada data komisi.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {commissions.map((commission) => (
            <div key={commission.id} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
              <FaCoins className="text-3xl text-yellow-500 mr-4" />
              <div>
                <p className="font-bold">
                  Jumlah Komisi: Rp {commission.commission_amount.toLocaleString()}
                </p>
                <p>Persentase: {commission.commission_percentage}%</p>
                <p>Harga Unit: Rp {commission.unit_price.toLocaleString()}</p>
                <p>Status: {commission.dp_30_paid ? "Paid" : "Pending"}</p>
                {commission.paid_at && (
                  <p>Dibayar pada: {new Date(commission.paid_at).toLocaleString()}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4">
        <Link href="/agent-affiliate-dashboard" className="text-blue-500 hover:underline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
