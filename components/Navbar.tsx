"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import Button from './Button'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setScrolling(true);
    } else {
      setScrolling(false);
    } 
  };

  useEffect(() => {
    // Simulasi pengecekan login
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
      setUsername(user);
    }
  }, []);

  return (
    <nav className={scrolling ? 'navbar-scroll nav-container flex justify-center py-8 fixed z-50 bg-green-600 text-white px-10 lg:px-32' : 'nav-container flex justify-between py-8 bg-green-600 text-white px-10 lg:px-32'}>
        <div className='left bg-dark'>
            <Link href='/' className='flexCenter gap-2'>
                <Image src='/LogoAITGreen.png' alt='logo' width={100} height={100}/>
                <h2 className='font-bold text-lg'>Andara Imperial Terrace</h2>
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

        <div className='right lg:flexCenter hidden gap-4' style={{ display: scrolling ? 'none' : 'flex' }}>
            {isLoggedIn ? (
                <span className='font-bold'>{username}</span>
            ) : (
                <Link href='/login'>
                    <Button type='button' title='Login' variant='btn_white' />
                </Link>
            )}
        </div>         

        <div className="block cursor-pointer lg:hidden">
        {
            !navbarOpen ? (
                <button onClick={() => setNavbarOpen(true)}>
                    <Bars3Icon className='h-5 w-5' />
                </button>
            ) : (
                <button onClick={() => setNavbarOpen(false)}>
                    <XMarkIcon className='h-5 w-5' />
                </button>
            )
        }
        </div> 
    </nav>
  )
}

export default Navbar
