"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaMoneyBillWave } from "react-icons/fa"; // Import icon uang
import useAuth from "@/hooks/useAuth";

interface Reward {
  id: number;
  reward_type: string;
  reward_amount: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export default function RewardPage() {
  const { agent, loading } = useAuth();
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingRewards, setIsLoadingRewards] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!loading && agent) {
      const fetchRewards = async () => {
        setIsLoadingRewards(true);
        try {
          const response = await fetch(
            `https://api.andaraimperialterrace.co.id/api/agent_affiliates/${agent.id}/rewards`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          if (!response.ok) {
            throw new Error("Failed to fetch rewards");
          }
          const data = await response.json();
          setRewards(data.rewards);
        } catch (err: any) {
          setError(err.message || "An error occurred");
        } finally {
          setIsLoadingRewards(false);
        }
      };

      fetchRewards();
    }
  }, [agent, loading]);

  if (loading || isLoadingRewards) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6 pt-40">
      <h1 className="text-2xl font-bold mb-4">Reward</h1>
      {rewards.length === 0 ? (
        <p>No rewards found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {rewards.map((reward) => (
            <div key={reward.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <FaMoneyBillWave className="text-2xl text-green-500 mr-2" />
                <p className="font-bold">{reward.reward_type}</p>
              </div>
              <p>Amount: Rp {reward.reward_amount.toLocaleString()}</p>
              <p>Status: {reward.status}</p>
              <p>Created at: {new Date(reward.created_at).toLocaleString()}</p>
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
