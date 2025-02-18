"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

interface AgentProfile {
  name: string;
  email: string;
  password?: string;
  password_confirmation?: string;
  photo_profile_url: string;
  mobile: string;
  referral_code: string;
  last_login_at?: string;
  full_name: string;
  nik: string;
  occupation: string;
  age: number | "";
  gender: string;
  married_status: string;
  education: string;
  salary_range: string;
  address: string;
  emergency_email: string;
  emergency_mobile_number: string;
  emergency_address: string;
  bank: string;
  bank_branch: string;
  account_number: string;
  account_name: string;
}

export default function KelolaAkunPage() {
  const { agent, loading } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [profile, setProfile] = useState<AgentProfile>({
    name: "",
    email: "",
    photo_profile_url: "",
    mobile: "",
    referral_code: "",
    full_name: "",
    nik: "",
    occupation: "",
    age: "",
    gender: "",
    married_status: "",
    education: "",
    salary_range: "",
    address: "",
    emergency_email: "",
    emergency_mobile_number: "",
    emergency_address: "",
    bank: "",
    bank_branch: "",
    account_number: "",
    account_name: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Set mounted flag on client side to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Pre-fill form data when agent is available
  useEffect(() => {
    if (!loading && agent) {
      setProfile({
        name: agent.name || "",
        email: agent.email || "",
        photo_profile_url: agent.photo_profile_url || "",
        mobile: agent.mobile || "",
        referral_code: agent.referral_code || "",
        full_name: agent.full_name || "", // pastikan konsisten (camelCase atau snake_case)
        nik: agent.nik || "",
        occupation: agent.occupation || "",
        age: agent.age || "",
        gender: agent.gender || "",
        married_status: agent.married_status || "",
        education: agent.education || "",
        salary_range: agent.salary_range || "",
        address: agent.address || "",
        emergency_email: agent.emergency_email || "",
        emergency_mobile_number: agent.emergency_mobile_number || "",
        emergency_address: agent.emergency_address || "",
        bank: agent.bank || "",
        bank_branch: agent.bank_branch || "",
        account_number: agent.account_number || "",
        account_name: agent.account_name || "",
      });
    }
  }, [agent, loading]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
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
      const response = await fetch(
        `https://api.andaraimperialterrace.co.id/api/agent_affiliates/${agent.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ agent_affiliate: profile }),
        }
      );

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to update profile");
      }

      const data = await response.json();
      setSuccessMsg("Profile updated successfully!");
      // Optionally update localStorage with new profile data
      localStorage.setItem("user", JSON.stringify({
        username: data.agent.name,
        profilePic: data.agent.photo_profile_url,
      }));
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted || loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8 pt-80">
      <h1 className="text-3xl font-bold mb-6 text-center pt-40">Kelola Akun Agent Affiliate</h1>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      {successMsg && <p className="text-green-500 mb-4 text-center">{successMsg}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Nama:</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Nama"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Photo Profil URL:</label>
          <input
            type="text"
            name="photo_profile_url"
            value={profile.photo_profile_url}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="URL Photo Profil"
          />
        </div>
        <div>
          <label className="block text-gray-700">Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={profile.mobile}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Nomor Telepon"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Referral Code:</label>
          <input
            type="text"
            name="referral_code"
            value={profile.referral_code}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Referral Code"
          />
        </div>
        <div>
          <label className="block text-gray-700">Full Name:</label>
          <input
            type="text"
            name="full_name"
            value={profile.full_name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Full Name"
          />
        </div>
        <div>
          <label className="block text-gray-700">NIK:</label>
          <input
            type="text"
            name="nik"
            value={profile.nik}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="NIK"
          />
        </div>
        <div>
          <label className="block text-gray-700">Occupation:</label>
          <input
            type="text"
            name="occupation"
            value={profile.occupation}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Occupation"
          />
        </div>
        <div>
          <label className="block text-gray-700">Age:</label>
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Age"
          />
        </div>
        <div>
          <label className="block text-gray-700">Gender:</label>
          <input
            type="text"
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Gender"
          />
        </div>
        <div>
          <label className="block text-gray-700">Married Status:</label>
          <input
            type="text"
            name="married_status"
            value={profile.married_status}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Married Status"
          />
        </div>
        <div>
          <label className="block text-gray-700">Education:</label>
          <input
            type="text"
            name="education"
            value={profile.education}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Education"
          />
        </div>
        <div>
          <label className="block text-gray-700">Salary Range:</label>
          <input
            type="text"
            name="salary_range"
            value={profile.salary_range}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Salary Range"
          />
        </div>
        <div>
          <label className="block text-gray-700">Address:</label>
          <textarea
            name="address"
            value={profile.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Address"
          />
        </div>
        <div>
          <label className="block text-gray-700">Emergency Email:</label>
          <input
            type="email"
            name="emergency_email"
            value={profile.emergency_email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Emergency Email"
          />
        </div>
        <div>
          <label className="block text-gray-700">Emergency Mobile Number:</label>
          <input
            type="text"
            name="emergency_mobile_number"
            value={profile.emergency_mobile_number}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Emergency Mobile Number"
          />
        </div>
        <div>
          <label className="block text-gray-700">Emergency Address:</label>
          <textarea
            name="emergency_address"
            value={profile.emergency_address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Emergency Address"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Bank:</label>
            <input
              type="text"
              name="bank"
              value={profile.bank}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Bank Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Bank Branch:</label>
            <input
              type="text"
              name="bank_branch"
              value={profile.bank_branch}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Bank Branch"
            />
          </div>
          <div>
            <label className="block text-gray-700">Account Number:</label>
            <input
              type="text"
              name="account_number"
              value={profile.account_number}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Account Number"
            />
          </div>
          <div>
            <label className="block text-gray-700">Account Name:</label>
            <input
              type="text"
              name="account_name"
              value={profile.account_name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Account Name"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Update Profile"}
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link href="/agent-affiliate-dashboard" className="text-blue-500 hover:underline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
