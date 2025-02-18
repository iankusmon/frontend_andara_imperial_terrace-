"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://api.andaraimperialterrace.co.id/api/agent_affiliates/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login gagal!");
      }

      // Simpan token dan data user di localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: data.agent.name,
          profilePic:
            data.agent.photo_profile_url ||
            "https://w7.pngwing.com/pngs/620/1022/png-transparent-person-in-necktie-and-jacket-art-computer-icons-avatar-business-agent-icon-service-people-logo-thumbnail.png",
        })
      );

      router.push("/agent-affiliate-dashboard");
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan saat login.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2 className="login-heading">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        {/* Tombol Sign Up as Agent Affiliate */}
        <div className="signup-link">
          <p>Don't have an account?</p>
          <button
            type="button"
            onClick={() => router.push("/sign-up/agent-affiliate")}
            className="signup-btn"
          >
            Sign Up as Agent Affiliate
          </button>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f4f7fc;
          font-family: "Arial", sans-serif;
        }
        .login-form-wrapper {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 40px;
          width: 100%;
          max-width: 400px;
          text-align: center;
        }
        .error-message {
          color: red;
          margin-bottom: 10px;
        }
        .login-heading {
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
        }
        .login-form {
          display: flex;
          flex-direction: column;
        }
        .input-group {
          margin-bottom: 20px;
          text-align: left;
        }
        .input-group label {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 5px;
          color: #333;
        }
        .input-field {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 5px;
          outline: none;
          transition: border-color 0.3s;
        }
        .input-field:focus {
          border-color: #4caf50;
        }
        .submit-btn {
          padding: 12px;
          font-size: 16px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .submit-btn:hover {
          background-color: #45a049;
        }
        .signup-link {
          margin-top: 20px;
        }
        .signup-link p {
          margin: 0;
          font-size: 14px;
          color: #555;
        }
        .signup-btn {
          margin-top: 10px;
          padding: 12px;
          font-size: 16px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
          width: 100%;
        }
        .signup-btn:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
