"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'  // Tambahkan ini
import { NAV_LINKS } from '@/constants'
import Button from './Button'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const pathname = usePathname();  // Dapatkan pathname halaman saat ini

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setScrolling(window.scrollY > 120);
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
      setUsername(user);
    }
  }, []);

  // Daftar halaman yang tidak menampilkan login navbar
  const hideLoginNavbar = ["/agent-affiliate-dashboard", "/customer-dashboard"].includes(pathname);

  return (
    <nav className={scrolling ? 'navbar-scroll nav-container flex justify-center py-8 fixed z-50 bg-green-600 text-white px-10 lg:px-32' : 'nav-container flex justify-between py-8 bg-green-600 text-white px-10 lg:px-32'}>
      
        <div className='left bg-dark'>
            <Link href='/' className='flexCenter gap-2'>
                <Image src='/LogoAIT3.svg' alt='logo' width={80} height={80}/>
                <h4 className='font-bold'>Andara Imperial Terrace</h4>
            </Link>            
        </div>

        {!scrolling && (
          <div className='middle'>
              <ul className="hidden h-full gap-12 lg:flex">
                  {NAV_LINKS.map((link) => (
                      <Link href={link.href} key={link.key} className="flexCenter cursor-pointer transition-all hover:font-bold">
                          {link.label}
                      </Link>
                  ))}
              </ul>
          </div>
        )}

        {/* Sembunyikan login navbar jika di halaman tertentu */}
        {!hideLoginNavbar && (
          <div className='right lg:flexCenter hidden gap-4' style={{ display: scrolling ? 'none' : 'flex' }}>
              {isLoggedIn ? (
                  <span className='font-bold'>{username}</span>
              ) : (
                  <Link href='/sign-up/agent-affiliate'>
                      <Button type='button' title='Sign Up' variant='btn_white' />
                  </Link>
              )}
          </div>
        )}      

        {/* Hamburger Button for Mobile */}
        <div className="block cursor-pointer lg:hidden">
          {navbarOpen ? (
            <button onClick={() => setNavbarOpen(false)}>
                <XMarkIcon className='h-5 w-5' />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(true)}>
                <Bars3Icon className='h-5 w-5' />
            </button>
          )}
        </div> 

        {/* Mobile Menu */}
        <div className={`mobile-menu ${navbarOpen ? 'open' : ''}`}>
          <ul className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="text-white text-lg" onClick={() => setNavbarOpen(false)}>
                {link.label}
              </Link>
            ))}
            {!hideLoginNavbar && !isLoggedIn ? (
              <Link href='/sign-up/agent-affiliate'>
                <Button type='button' title='Sign Up' variant='btn_white_login' />
              </Link>
            ) : !hideLoginNavbar ? (
              <span className='text-white font-bold'>{username}</span>
            ) : null}
          </ul>
        </div>
    </nav>
  )
}

export default Navbar
