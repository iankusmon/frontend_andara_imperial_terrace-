"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function SignUpCustomerContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    mobile: "",
    referral_code: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // If there's a referral_code in the query, prefill it
  useEffect(() => {
    const refCode = searchParams.get("referral_code");
    if (refCode) {
      setFormData((prev) => ({ ...prev, referral_code: refCode }));
    }
  }, [searchParams]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // If referral_code comes from query, don't update it manually.
    if (name === "referral_code" && searchParams.get("referral_code")) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({ customer: formData }),
      });

      if (response.ok) {
        alert("Sign Up Berhasil!");
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify({ username: data.customer.name }));
        router.push("/customer-dashboard");
        setFormData({
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
          mobile: "",
          referral_code: "",
        });
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
      <h2 className="text-2xl font-bold text-center mb-6">Customer Sign Up</h2>
      <picture>
        <source srcSet="/slide2.png" media="(min-width: 768px)" />
        <img src="/slide_mobile2.png" alt="KPR Andara Imperial Terrace" className="w-full mb-4" />
      </picture>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-2 rounded" required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="mobile" placeholder="Nomor Handphone" value={formData.mobile} onChange={handleChange} className="border p-2 rounded" required />
        <input
          type="text"
          name="referral_code"
          placeholder="Referral Code (Auto)"
          value={formData.referral_code}
          onChange={handleChange}
          className="border p-2 rounded bg-gray-100"
          readOnly={!!searchParams.get("referral_code")}
        />
        <div className="relative">
          <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="border p-2 rounded w-full" required />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2 text-gray-600">
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div className="relative">
          <input type={showConfirmPassword ? "text" : "password"} name="password_confirmation" placeholder="Confirm Password" value={formData.password_confirmation} onChange={handleChange} className="border p-2 rounded w-full" required />
          <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-2 top-2 text-gray-600">
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Sign Up</button>
      </form>
    </div>
  );
}
