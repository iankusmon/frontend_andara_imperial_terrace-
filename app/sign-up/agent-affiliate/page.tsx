'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    photo_profile_url: '',
    mobile: '',
    referral_code: '',
    fullName: '',
    nik: '',
    occupation: '',
    age: '',
    gender: 'Male',
    married_status: 'Single',
    education: '',
    salary_range: '',
    address: '',
    emergency_email: '',
    emergency_mobile_number: '',
    emergency_address: '',
  });

  // **Tambahkan tipe data untuk parameter event**
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/agent_affiliates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agent_affiliate: formData }),
      });

      if (response.ok) {
        alert('Sign Up Berhasil!');
        setFormData({
          name: '', email: '', password: '', password_confirmation: '', photo_profile_url: '',
          mobile: '', referral_code: '', fullName: '', nik: '', occupation: '', age: '',
          gender: 'Male', married_status: 'Single', education: '', salary_range: '', address: '',
          emergency_email: '', emergency_mobile_number: '', emergency_address: '',
        });

        // **Redirect ke halaman dashboard setelah berhasil signup**
        router.push('/agent-affiliate-dashboard');
      } else {
        alert('Gagal Sign Up. Cek kembali data Anda.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
      <picture>
        <source srcSet="/slide3.png" media="(min-width: 768px)" />
        <img src="/slide_mobile3.png" alt="Andara Agent Affiliate Program" className="w-full mb-4" />
      </picture>
      <h2 className="text-2xl font-bold text-center mb-6">Agent Affiliate Sign Up</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-2 rounded" required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 rounded" required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="border p-2 rounded" required />
        <input type="password" name="password_confirmation" placeholder="Confirm Password" value={formData.password_confirmation} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="referral_code" placeholder="Referral Code (optional)" value={formData.referral_code} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="nik" placeholder="NIK" value={formData.nik} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} className="border p-2 rounded" required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="border p-2 rounded" required />
        <select name="gender" value={formData.gender} onChange={handleChange} className="border p-2 rounded">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select name="married_status" value={formData.married_status} onChange={handleChange} className="border p-2 rounded">
          <option value="Single">Single</option>
          <option value="Married">Married</option>
        </select>
        <input type="text" name="education" placeholder="Education" value={formData.education} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="salary_range" placeholder="Salary Range" value={formData.salary_range} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="border p-2 rounded" required />
        <input type="email" name="emergency_email" placeholder="Emergency Contact Email" value={formData.emergency_email} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="emergency_mobile_number" placeholder="Emergency Mobile" value={formData.emergency_mobile_number} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="emergency_address" placeholder="Emergency Address" value={formData.emergency_address} onChange={handleChange} className="border p-2 rounded" required />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Sign Up</button>
      </form>
    </div>
  );
}
