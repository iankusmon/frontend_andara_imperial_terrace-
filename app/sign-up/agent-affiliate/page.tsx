'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import { ChangeEvent } from "react";

export default function SignUp() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    mobile: '',
    referral_code: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const generateReferralCode = (mobile: string): string => {
    const randomStr = Math.random().toString(36).substring(2, 10).toUpperCase();
    return `${randomStr}`;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newFormData = { ...formData, [name]: value };
  
    // Jika mobile diubah, generate referral code otomatis
    if (name === "mobile" && value.length > 5) {
      newFormData.referral_code = generateReferralCode(value);
    }
  
    setFormData(newFormData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.andaraimperialterrace.co.id/api/agent_affiliates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors', // Pastikan CORS diaktifkan
        body: JSON.stringify({ agent_affiliate: formData }),
      });
  
      if (response.ok) {
        alert('Sign Up Berhasil!');
        setFormData({
          name: '', email: '', password: '', password_confirmation: '',
          mobile: '', referral_code: '',
        });
  
        router.push('/agent-affiliate-dashboard');
      } else {
        alert('Gagal Sign Up. Cek kembali data Anda.');
      }
    } catch (error) {
      console.error('Error:', error);
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
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-2 rounded" required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="mobile" placeholder="Nomor Handphone" value={formData.mobile} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="referral_code" placeholder="Referral Code (Auto)" value={formData.referral_code} className="border p-2 rounded bg-gray-100" readOnly />
        
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
