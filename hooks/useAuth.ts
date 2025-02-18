// hooks/useAuth.ts
import { useEffect, useState } from "react";
import { Agent } from "@/types/agent";

const useAuth = () => {
  const [agent, setAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example: Fetch agent data from your API (or from localStorage)
    // Here, we simulate fetching agent data.
    const token = localStorage.getItem("token");
    if (token) {
      fetch("https://api.andaraimperialterrace.co.id/api/agent_affiliates/profile", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAgent(data.agent); // Ensure your API returns an object matching Agent interface
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          localStorage.removeItem("token");
        });
    } else {
      setLoading(false);
    }
  }, []);

  return { agent, loading };
};

export default useAuth;
