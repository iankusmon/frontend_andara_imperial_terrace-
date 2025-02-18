"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { FaFrown, FaCoins } from "react-icons/fa";

interface Revenue {
  id: number;
  name: string;
  percentage: number;
  fixed: number;
  month: string;
  year: string;
  bank_account_number: string;
  bank_account_name: string;
  bank_name: string;
  bank_branch_name: string;
  created_at: string;
  updated_at: string;
}

export default function WithdrawHistoryPage() {
  const { agent, loading } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [revenues, setRevenues] = useState<Revenue[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Set mounted flag on client side to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!loading && agent) {
      const fetchRevenues = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://api.andaraimperialterrace.co.id/api/agent_affiliates/${agent.id}/revenues`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          if (!response.ok) {
            throw new Error("Failed to fetch withdraw history");
          }
          const data = await response.json();
          setRevenues(data.revenues);
        } catch (err: any) {
          setError(err.message || "An error occurred");
        } finally {
          setIsLoading(false);
        }
      };

      fetchRevenues();
    }
  }, [agent, loading]);

  if (!mounted || loading || isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6 pt-40">
      <h1 className="text-2xl font-bold mb-4">Riwayat Withdraw</h1>
      {revenues.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <FaFrown className="text-6xl text-gray-500 mb-4" />
          <p className="text-xl text-gray-500">Tidak ada riwayat withdraw.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {revenues.map((rev) => (
            <div key={rev.id} className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
              <FaCoins className="text-3xl text-yellow-500 mr-4" />
              <div>
                <p className="font-bold">{rev.name}</p>
                <p>
                  Commission: {rev.percentage}% | Fixed: Rp {rev.fixed.toLocaleString()}
                </p>
                <p>
                  Periode: {rev.month}/{rev.year}
                </p>
                <p>
                  Bank: {rev.bank_name} ({rev.bank_branch_name})
                </p>
                <p>
                  A/N: {rev.bank_account_name} | No. Rekening: {rev.bank_account_number}
                </p>
                <p>Dibuat pada: {new Date(rev.created_at).toLocaleString()}</p>
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
