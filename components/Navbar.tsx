"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Fade in navbar after scrolling past ~80px
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: scrolled ? 1 : 0,
          y: scrolled ? 0 : -20,
          pointerEvents: scrolled ? "auto" : "none",
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 pt-4"
      >
        <nav className="w-full max-w-5xl glass-panel rounded-2xl px-4 py-2.5 sm:px-6 sm:py-3 flex items-center justify-between shadow-2xl border border-white/10 backdrop-blur-xl">
          {/* Brand Monogram */}
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/10 group-hover:border-cyan-400/50 transition-colors">
              <Image
                src="/assets/vk-logo.svg"
                alt="VK Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-cyan-400 transition-colors hidden sm:inline-block">
              Vansh Khotyan
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action: Status Pill & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-500/40 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="hidden sm:inline">Open to internships</span>
              <span className="sm:hidden">Available</span>
            </a>

            {/* Resume Quick Link */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-medium text-cyan-300 hover:bg-cyan-500/20 transition-colors"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden glass-panel rounded-2xl p-4 border border-white/10 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between px-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-400 flex items-center gap-1 font-medium py-1"
                >
                  Download Resume <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="mailto:vanshkhotyan@gmail.com"
                  className="text-xs text-slate-400 py-1"
                >
                  vanshkhotyan@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
