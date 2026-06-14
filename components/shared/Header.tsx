"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/corporate", label: "Corporate" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/gallery", label: "Gallery" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-maroon-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-maroon-dark font-serif font-bold text-lg sm:text-xl">A</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-gold font-serif font-bold text-lg leading-tight">Archana's</h1>
              <p className="text-gold-light text-xs tracking-wider">FOOD BASKET</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream/90 hover:text-gold px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all group-hover:w-3/4" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="sm" className="bg-gold text-maroon-dark hover:bg-gold-light font-semibold">
              <a href="https://wa.me/919810622933" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-1.5" />
                Order Now
              </a>
            </Button>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-gold p-2" aria-label="Toggle menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-maroon-dark/98 backdrop-blur-md border-t border-gold/20">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-cream/90 hover:text-gold hover:bg-gold/10 px-4 py-3 rounded-lg text-base font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gold/20">
              <Button asChild className="w-full bg-gold text-maroon-dark hover:bg-gold-light font-semibold">
                <a href="https://wa.me/919810622933" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-1.5" />
                  Order on WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}