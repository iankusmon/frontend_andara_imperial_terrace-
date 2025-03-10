"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ username: string; profilePic: string; role: string } | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showSignupDropdown, setShowSignupDropdown] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setIsLoggedIn(true);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    router.push("/login/customer");
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) // ✅ Konversi event.target ke Node
      ) {
        setShowDropdown(false);
        setShowLoginDropdown(false);
        setShowSignupDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dashboardPath =
    user?.role === "agent" ? "/agent-affiliate-dashboard" : "/customer-dashboard";

  return (
    <nav className="flex justify-between fixed z-50 text-white w-full py-4 px-4 lg:px-16 nav-container">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo dan judul */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/LogoAIT3.svg" alt="logo" width={60} height={60} />
            <h4 className="font-bold text-sm lg:text-base text-center">Andara Imperial Terrace</h4>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-4 pt-2">
          {NAV_LINKS.map((link) => (
            <Link key={link.key} href={link.href} className="text-white text-sm">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Profile/Login Section for Desktop */}
        <div className="hidden lg:flex gap-2 pt-2 relative">
          {!isLoggedIn && (
            <Link
              href="/sign-up/agent-affiliate"
              className="bg-white text-black border border-gray-300 hover:bg-gray-200 px-4 py-2 rounded"
            >
              Daftar Affiliate
            </Link>
          )}
          {isLoggedIn && user ? (
            <div className="relative">
              <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center gap-2 focus:outline-none">
                <Image
                  src={user.profilePic}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-bold text-sm">{user.username}</span>
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                  <Link
                    href={dashboardPath}
                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left text-sm"
                  >
                    Go to Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left text-sm"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2 relative">
              <div>
                <button onClick={() => {
                  setShowLoginDropdown(!showLoginDropdown);
                  setShowSignupDropdown(false);
                }} className="btn_white px-4 py-2 rounded">
                  Login
                </button>
                {showLoginDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                    <Link href="/login/customer" className="block px-4 py-2 hover:bg-gray-200 text-sm">
                      Customer
                    </Link>
                    <Link href="/login" className="block px-4 py-2 hover:bg-gray-200 text-sm">
                      Agent Affiliate
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <button onClick={() => {
                  setShowSignupDropdown(!showSignupDropdown);
                  setShowLoginDropdown(false);
                }} className="btn_white px-4 py-2 rounded">
                  Sign Up
                </button>
                {showSignupDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                    <Link href="/sign-up/customer" className="block px-4 py-2 hover:bg-gray-200 text-sm">
                      Customer
                    </Link>
                    <Link href="/sign-up/agent-affiliate" className="block px-4 py-2 hover:bg-gray-200 text-sm">
                      Agent Affiliate
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="block lg:hidden pt-2 relative z-50">
          {navbarOpen ? (
            <button onClick={() => setNavbarOpen(false)}>
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(true)}>
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu: ditempatkan tepat di bawah navbar */}
      {navbarOpen && (
        <div className="absolute top-full left-0 w-full bg-green-custom text-white p-5 flex flex-col items-center lg:hidden z-40">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-white text-sm py-2 pt-10"
              onClick={() => setNavbarOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {!isLoggedIn && (
            <Link
              href="/sign-up/agent-affiliate"
              className="bg-white text-black border hover:bg-gray-200 px-4 py-2 rounded"
            >
              Daftar Affiliate
            </Link>
          )}
          {isLoggedIn && user ? (
            <div className="flex flex-col items-center gap-2 mt-2">
              <div className="flex items-center gap-2">
                <Image
                  src={user.profilePic}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-white font-bold text-sm">{user.username}</span>
              </div>
              <Link href={dashboardPath} className="text-white hover:underline text-sm" onClick={() => setNavbarOpen(false)}>
                Go to Dashboard
              </Link>
              <button onClick={handleLogout} className="text-white hover:underline text-sm">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2 relative">
              <div className="dropdown-menu">
                <button onClick={() => {
                  setShowLoginDropdown(!showLoginDropdown);
                  setShowSignupDropdown(false);
                }} className="btn_white px-4 py-2 rounded">
                  Login
                </button>
                {showLoginDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                    <Link href="/login/customer" className="block px-4 py-2 hover:bg-gray-200 text-sm">
                      Customer
                    </Link>
                    <Link href="/login" className="block px-4 py-2 hover:bg-gray-200 text-sm">
                      Agent Affiliate
                    </Link>
                  </div>
                )}
              </div>
              <div className="dropdown-menu">
                <button onClick={() => {
                  setShowSignupDropdown(!showSignupDropdown);
                  setShowLoginDropdown(false);
                }} className="btn_white px-4 py-2 rounded">
                  Sign Up
                </button>
                {showSignupDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                    <Link href="/sign-up/customer" className="block px-4 py-2 hover:bg-gray-200 text-sm">
                      Customer
                    </Link>
                    <Link href="/sign-up/agent-affiliate" className="block px-4 py-2 hover:bg-gray-200 text-sm">
                      Agent Affiliate
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
