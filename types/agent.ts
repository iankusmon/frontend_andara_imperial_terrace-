// types/agent.ts
export interface Agent {
  id: number;
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
  // Add other fields as necessary...
}
