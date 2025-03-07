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
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  // Set mounted flag untuk menghindari masalah hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Pre-fill data ketika agent tersedia
  useEffect(() => {
    if (!loading && agent) {
      setProfile({
        name: agent.name || "",
        email: agent.email || "",
        photo_profile_url: agent.photo_profile_url || "",
        mobile: agent.mobile || "",
        referral_code: agent.referral_code || "",
        full_name: agent.full_name || "",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);
    if (!agent) {
      setError("Agent tidak ditemukan. Silakan login kembali.");
      return;
    }
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      Object.entries(profile).forEach(([key, value]) => {
        formData.append(`agent_affiliate[${key}]`, value);
      });
      if (photoFile) {
        formData.append("agent_affiliate[photo_profile]", photoFile);
      }

      const response = await fetch(`https://api.andaraimperialterrace.co.id/api/agent_affiliates/${agent.id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Gagal mengupdate profil");
      }

      const data = await response.json();
      alert("Profil berhasil diperbarui!");
      setSuccessMsg("Profil berhasil diperbarui!");
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: data.agent.name,
          profilePic: data.agent.photo_profile_url,
        })
      );
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Hanya render setelah mounted dan loading selesai
  if (!mounted || loading) return <p>Loading...</p>;

  // Generate referral link jika agent sudah ada
  const referralLink = `${window.location.origin}/sign-up/customer?referral_code=${profile.referral_code}`;

  return (
    <div className="container mx-auto px-4 py-8 pt-80">
      <h1 className="text-3xl font-bold mb-6 text-center pt-40">
        Kelola Akun Agent Affiliate
      </h1>
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
              placeholder="Masukkan nama"
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
              placeholder="Masukkan email"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Upload Foto Profil:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
          />
        </div>
        <div>
          <label className="block text-gray-700">Nomor Telepon:</label>
          <input
            type="text"
            name="mobile"
            value={profile.mobile}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Masukkan nomor telepon"
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
            disabled={true}
            className="w-full border p-2 rounded bg-gray-100"
            placeholder="Referral Code (otomatis)"
          />
        </div>
        <div>
          <label className="block text-gray-700">Nama Lengkap:</label>
          <input
            type="text"
            name="full_name"
            value={profile.full_name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Masukkan nama lengkap"
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
            placeholder="Masukkan NIK"
          />
        </div>
        <div>
          <label className="block text-gray-700">Pekerjaan:</label>
          <input
            type="text"
            name="occupation"
            value={profile.occupation}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Masukkan pekerjaan"
          />
        </div>
        <div>
          <label className="block text-gray-700">Usia:</label>
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Masukkan usia"
          />
        </div>
        <div>
          <label className="block text-gray-700">Jenis Kelamin:</label>
          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Pilih gender</option>
            <option value="pria">Pria</option>
            <option value="wanita">Wanita</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Status Perkawinan:</label>
          <select
            name="married_status"
            value={profile.married_status}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Pilih status</option>
            <option value="menikah">Menikah</option>
            <option value="lajang">Lajang</option>
            <option value="duda">Duda</option>
            <option value="janda">Janda</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Pendidikan:</label>
          <input
            type="text"
            name="education"
            value={profile.education}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Masukkan pendidikan"
          />
        </div>
        <div>
          <label className="block text-gray-700">Rentang Gaji:</label>
          <input
            type="text"
            name="salary_range"
            value={profile.salary_range}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Masukkan rentang gaji"
          />
        </div>
        <div>
          <label className="block text-gray-700">Alamat:</label>
          <textarea
            name="address"
            value={profile.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Masukkan alamat"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email Darurat:</label>
          <input
            type="email"
            name="emergency_email"
            value={profile.emergency_email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Masukkan email darurat"
          />
        </div>
        <div>
          <label className="block text-gray-700">Nomor Telepon Darurat:</label>
          <input
            type="text"
            name="emergency_mobile_number"
            value={profile.emergency_mobile_number}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Masukkan nomor telepon darurat"
          />
        </div>
        <div>
          <label className="block text-gray-700">Alamat Darurat:</label>
          <textarea
            name="emergency_address"
            value={profile.emergency_address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Masukkan alamat darurat"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Nama Bank:</label>
            <input
              type="text"
              name="bank"
              value={profile.bank}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Masukkan nama bank"
            />
          </div>
          <div>
            <label className="block text-gray-700">Cabang Bank:</label>
            <input
              type="text"
              name="bank_branch"
              value={profile.bank_branch}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Masukkan cabang bank"
            />
          </div>
          <div>
            <label className="block text-gray-700">Nomor Rekening:</label>
            <input
              type="text"
              name="account_number"
              value={profile.account_number}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Masukkan nomor rekening"
            />
          </div>
          <div>
            <label className="block text-gray-700">Atas Nama Rekening:</label>
            <input
              type="text"
              name="account_name"
              value={profile.account_name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Masukkan atas nama rekening"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Perbarui Profil"}
        </button>
      </form>
      {/* Generate Referral Link */}
      {agent && (
        <div className="mt-6 text-center">
          <p className="font-bold">Link Referral:</p>
          <input
            type="text"
            readOnly
            value={`${window.location.origin}/sign-up/customer?referral_code=${profile.referral_code}`}
            className="w-full border p-2 rounded mt-2"
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(`${window.location.origin}/sign-up/customer?referral_code=${profile.referral_code}`);
              alert("Link referral telah disalin!");
            }}
            className="mt-2 bg-blue-600 text-white py-1 px-3 rounded"
          >
            Salin Link Referral
          </button>
        </div>
      )}
      <div className="mt-4 text-center">
        <Link href="/agent-affiliate-dashboard" className="text-blue-500 hover:underline">
          Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
}
