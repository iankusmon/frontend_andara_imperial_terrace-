"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

interface RegisteredCustomer {
  id: number;
  name: string;
  email: string;
  mobile: string;
  created_at: string;
}

export default function TrackPengunjungPage() {
  const { agent, loading } = useAuth();
  const [registeredCustomers, setRegisteredCustomers] = useState<RegisteredCustomer[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component only renders on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch registered customers once agent data is available
  useEffect(() => {
    if (!loading && agent) {
      const fetchRegisteredCustomers = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://api.andaraimperialterrace.co.id/api/agent_affiliates/${agent.id}/registered_customers`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          if (!response.ok) {
            throw new Error("Failed to fetch registered customers");
          }
          const data = await response.json();
          setRegisteredCustomers(data.registered_customers);
        } catch (err: any) {
          setError(err.message || "An error occurred");
        } finally {
          setIsLoading(false);
        }
      };
      fetchRegisteredCustomers();
    }
  }, [agent, loading]);

  if (!mounted || loading || isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6 pt-40">
      <h1 className="text-2xl font-bold mb-4">Track Customer</h1>
      {registeredCustomers.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-xl text-gray-500">No tracked customers found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {registeredCustomers.map((customer) => (
            <div key={customer.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="font-bold">{customer.name}</p>
              <p>Email: {customer.email}</p>
              <p>Mobile: {customer.mobile}</p>
              <p>
                Registered at: {new Date(customer.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4">
        <Link
          href="/agent-affiliate-dashboard"
          className="text-blue-500 hover:underline"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
