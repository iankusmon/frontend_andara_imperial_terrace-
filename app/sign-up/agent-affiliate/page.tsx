"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import useAuth from "@/hooks/useAuth";

export default function SignUp() {
  const router = useRouter();
  const { agent, loading } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    mobile: "",
    referral_code: "",
    nik: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Redirect ke dashboard jika sudah login
  useEffect(() => {
    if (!loading && agent) {
      router.push("/agent-affiliate-dashboard");
    }
  }, [agent, loading, router]);

  // Tampilkan loader jika masih loading
  if (loading) return <p>Loading...</p>;
  if (agent) return null;

  // Generate referral code (contoh: string acak)
  const generateReferralCode = (mobile: string): string => {
    const randomStr = Math.random().toString(36).substring(2, 10).toUpperCase();
    return randomStr;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newFormData = { ...formData, [name]: value };

    // Jika mobile diubah dan panjangnya > 5, generate referral code dan NIK
    if (name === "mobile" && value.length > 5) {
      newFormData.referral_code = generateReferralCode(value);
      // Contoh: generate NIK acak (Anda bisa menyesuaikannya)
      newFormData.nik = Math.random().toString(36).substring(2, 10).toUpperCase();
    }

    setFormData(newFormData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.andaraimperialterrace.co.id/api/agent_affiliates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        // Wrap payload into "agent_affiliate"
        body: JSON.stringify({ agent_affiliate: formData }),
      });

      if (response.ok) {
        alert("Sign Up Berhasil!");
        router.push("/agent-affiliate-dashboard");
        const data = await response.json();
        // Simpan token dan data user di localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("referralCode", data.agent.referral_code);
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: data.agent.name,
            profilePic:
              data.agent.photo_profile_url ||
              "https://w7.pngwing.com/pngs/620/1022/png-transparent-person-in-necktie-and-jacket-art-computer-icons-avatar-business-agent-icon-service-people-logo-thumbnail.png",
          })
        );
        
      } else {
        alert("Gagal Sign Up. Cek kembali data Anda.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat sign up.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg pt-40">
      <h2 className="text-2xl font-bold text-center mb-6">Agent Affiliate Sign Up</h2>
      <picture>
        <source srcSet="/slide3.png" media="(min-width: 768px)" />
        <img src="/slide_mobile3.png" alt="KPR Andara Imperial Terrace" className="w-full mb-4" />
      </picture>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="mobile"
          placeholder="Nomor Handphone"
          value={formData.mobile}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="referral_code"
          placeholder="Referral Code (Auto)"
          value={formData.referral_code}
          className="border p-2 rounded bg-gray-100"
          readOnly
        />
        {/* NIK field hidden */}
        <input type="text" name="nik" placeholder="NIK" value={formData.nik} className="hidden" />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="password_confirmation"
            placeholder="Confirm Password"
            value={formData.password_confirmation}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-2 top-2 text-gray-600"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  );
}
