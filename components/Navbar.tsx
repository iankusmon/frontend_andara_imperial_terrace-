"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ username: string; profilePic: string } | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Baca data user dari localStorage
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
    router.push("/login");
  };

  return (
    <nav className="nav-container flex justify-between py-8 bg-green-600 text-white px-10 lg:px-32">
      <div className="left">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/LogoAIT3.svg" alt="logo" width={80} height={80} />
          <h4 className="font-bold">Andara Imperial Terrace</h4>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-12 pt-5">
        {NAV_LINKS.map((link) => (
          <Link key={link.key} href={link.href} className="text-white text-md">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Profile/Login Section for Desktop */}
      <div className="hidden lg:flex gap-4 pt-5">
        {isLoggedIn && user ? (
          <div className="relative">
            <button onClick={() => setNavbarOpen(!navbarOpen)} className="flex items-center gap-2 focus:outline-none">
              <Image
                src={user.profilePic}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold">{user.username}</span>
            </button>
            {navbarOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <Link
                  href="/agent-affiliate-dashboard"
                  className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                >
                  Go to Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login">
            <Button type="button" title="Login" variant="btn_white" />
          </Link>
        )}
      </div>

      {/* Hamburger Button for Mobile */}
      <div className="block cursor-pointer lg:hidden">
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

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="absolute top-16 left-0 w-full bg-green-600 text-white p-5 flex flex-col items-center lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-white text-lg py-2"
              onClick={() => setNavbarOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {isLoggedIn && user ? (
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src={user.profilePic}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-white font-bold">{user.username}</span>
              </div>
              <Link
                href="/agent-affiliate-dashboard"
                className="text-white hover:underline"
                onClick={() => setNavbarOpen(false)}
              >
                Go to Dashboard
              </Link>
              <button onClick={handleLogout} className="text-white hover:underline">
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login">
              <Button type="button" title="Login" variant="btn_white_login" />
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;