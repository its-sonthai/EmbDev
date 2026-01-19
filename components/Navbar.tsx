'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Linux', href: '/linux' },
    { label: 'RTOS', href: '/rtos' },
    { label: 'Android', href: '/android' },
    { label: 'AUTOSAR', href: '/autosar' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-900">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.jpg"
              alt="EmbDev Logo"
              width={40}
              height={40}
              className="rounded-lg group-hover:opacity-80 transition-opacity"
              priority
            />
            <span className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors hidden sm:inline">
              EmbDev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-slate-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-slate-800 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-blue-400 transition-colors block py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
