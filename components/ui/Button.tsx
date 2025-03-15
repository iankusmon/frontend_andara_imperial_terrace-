import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-6 py-3 bg-gold-500 text-black text-lg font-semibold rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; // <-- Pastikan ini ada!
