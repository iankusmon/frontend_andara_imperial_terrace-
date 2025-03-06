"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

interface RegisteredCustomerPayload {
  name: string;
  email: string;
  mobile: string;
  photo_profile: File | null;
  minat_villa: string;
}

export default function PengajuanCustomerPage() {
  const { agent, loading } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState<RegisteredCustomerPayload>({
    name: "",
    email: "",
    mobile: "",
    photo_profile: null,
    minat_villa: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, photo_profile: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!agent) {
      setError("Agent not found. Please login again.");
      return;
    }

    setIsSubmitting(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("customer[name]", formData.name);
      formDataToSend.append("customer[email]", formData.email);
      formDataToSend.append("customer[mobile]", formData.mobile);
      formDataToSend.append("customer[minat_villa]", formData.minat_villa);
      if (formData.photo_profile) {
        formDataToSend.append("customer[photo_profile]", formData.photo_profile);
      }

      const response = await fetch(
        `https://api.andaraimperialterrace.co.id/api/agent_affiliates/${agent.id}/register_customer`,
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to register customer");
      }

      setSuccessMsg("Customer registered successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        photo_profile: null,
        minat_villa: "",
      });
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted || loading) return <p>Loading...</p>;

  return (
    <div className="p-6 pt-40">
      <h1 className="text-2xl font-bold mb-4">Pengajuan Customer</h1>
      <p className="mb-4">Silakan isi data customer untuk survey:</p>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMsg && <p className="text-green-500 mb-4">{successMsg}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nama:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Nama customer"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Email customer"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Nomor telepon customer"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Photo Profil:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Minat Villa:</label>
          <input
            type="text"
            name="minat_villa"
            value={formData.minat_villa}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Minat villa customer"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Register Customer"}
        </button>
      </form>
      <div className="mt-4">
        <Link href="/agent-affiliate-dashboard" className="text-blue-500 hover:underline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
