"use client";

import { useState } from "react";
import Logo from "./Logo";

const PHONE = "(510) 999-1514";
const PHONE_RAW = "+15109991514";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Get a Quote" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="shrink-0">
          <Logo variant="light" size="sm" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_RAW}`}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-5 rounded-lg text-sm transition-colors shadow-sm"
          >
            📞 {PHONE}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-gray-700 dark:text-gray-200 py-2 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_RAW}`}
            className="block bg-emerald-500 text-white font-bold py-3 px-5 rounded-xl text-center text-base mt-2"
          >
            📞 Call Now – {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
