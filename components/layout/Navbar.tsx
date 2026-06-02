"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Beranda", href: "#" },
    { label: "Program", href: "#program" },
    { label: "Keunggulan", href: "#keunggulan" },
    // { label: "Jadwal", href: "#jadwal" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl h-[68px] border-b border-brand-off flex items-center">
      <div className="max-w-[1160px] mx-auto px-[5%] md:px-[6%] w-full flex items-center justify-between">

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-brand-ink p-1"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Jedu Bimbel Logo" width={36} height={36} className="mr-3 object-contain rounded-md" />
            <p className="font-serif font-bold text-xl text-brand-ink">
              Jedu <span className="text-brand-green">Bimbel</span>
            </p>
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-[0.88rem] font-medium text-brand-ink hover:text-brand-green transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          <Link
            href="#daftar"
            className="bg-brand-green text-white text-sm font-medium rounded-full px-6 py-2.5 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all"
          >
            Daftar
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[68px] left-0 w-full bg-white border-b border-brand-off shadow-lg sm:hidden py-4 px-[5%] flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-brand-ink font-medium py-2 w-full border-b border-brand-off/50 last:border-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
