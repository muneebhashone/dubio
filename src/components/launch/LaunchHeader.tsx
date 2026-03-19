"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function LaunchHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "launch-glass-scrolled" : "launch-glass"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/launch" className="flex-shrink-0">
            <Image
              src="/images/mainlogo.png"
              alt="Dubio"
              width={100}
              height={32}
              className="h-8 md:h-10 w-auto"
              unoptimized
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors font-[family-name:var(--font-syne)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={process.env.NEXT_PUBLIC_APP_URL || "https://app.dubio.ai"}
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold text-sm transition-colors font-[family-name:var(--font-syne)]"
          >
            Start Free
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden launch-glass-scrolled border-t border-white/5"
        >
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white text-base py-2 font-[family-name:var(--font-syne)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={process.env.NEXT_PUBLIC_APP_URL || "https://app.dubio.ai"}
              className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#F59E0B] text-black font-semibold text-sm mt-2 font-[family-name:var(--font-syne)]"
            >
              Start Free
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
