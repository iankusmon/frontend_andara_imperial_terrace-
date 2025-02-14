"use client";

// app/login/page.tsx
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import dari next/navigation

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Router untuk navigasi di app directory

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Email dan password dummy
    const dummyEmail = "user@example.com";
    const dummyPassword = "password123";

    // Mengecek apakah email dan password sesuai (apapun yang dimasukkan akan sukses)
    if (email && password) {
      // Cek role dari email (contoh sederhana: gunakan email untuk menentukan role)
      // if (email.includes("customer")) {
      //   router.push("/customer-dashboard");
      // } else if (email.includes("agent")) {
        router.push("/agent-affiliate-dashboard");
      // } else {
        // Redirect ke customer dashboard jika email tidak mengandung "customer" atau "agent"
        // router.push("/customer-dashboard");
    } else {
      alert("Email dan password tidak boleh kosong.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2 className="login-heading">Login</h2>
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
          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>

      {/* Styled JSX for CSS */}
      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f4f7fc;
          font-family: 'Arial', sans-serif;
        }

        .login-form-wrapper {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 40px;
          width: 100%;
          max-width: 400px;
        }

        .login-heading {
          text-align: center;
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
          box-sizing: border-box;
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

        .submit-btn:active {
          background-color: #388e3c;
        }

        @media (max-width: 480px) {
          .login-form-wrapper {
            padding: 30px;
          }

          .login-heading {
            font-size: 20px;
          }

          .input-field {
            font-size: 14px;
          }

          .submit-btn {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;

