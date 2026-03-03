"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top bar with phone number (dark blue) */}
      <div className="bg-primary text-white text-sm py-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-end items-center gap-4">
          <a href="tel:07786136470" className="hover:text-accent transition-colors">
            07786 136470
          </a>
          <a href="mailto:claire.lim@meditestscreening.com" className="hover:text-accent transition-colors">
            claire.lim@meditestscreening.com
          </a>
        </div>
      </div>

      {/* Main navigation (white background so logo shows properly) */}
      <div className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Meditest Screening"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-dark-text hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <Link href="/services" className="text-dark-text hover:text-accent transition-colors font-medium">
              Services
            </Link>
            <Link href="/about" className="text-dark-text hover:text-accent transition-colors font-medium">
              About
            </Link>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-hover text-white px-5 py-2 rounded-lg font-medium transition-colors"
            >
              Book a Screening
            </Link>
          </nav>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-primary transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden px-4 py-4 flex flex-col gap-4 border-t border-border">
            <Link href="/" className="text-dark-text hover:text-accent transition-colors font-medium" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/services" className="text-dark-text hover:text-accent transition-colors font-medium" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link href="/about" className="text-dark-text hover:text-accent transition-colors font-medium" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-hover text-white px-5 py-2 rounded-lg font-medium transition-colors text-center"
              onClick={() => setMenuOpen(false)}
            >
              Book a Screening
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
