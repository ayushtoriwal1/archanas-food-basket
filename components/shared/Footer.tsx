"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/corporate", label: "Corporate Orders" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/gallery", label: "Gallery" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact Us" },
];

const productLinks = [
  { href: "/products#dry-fruit-laddoo", label: "Dry Fruit Laddoo" },
  { href: "/products#gond-laddoo", label: "Gond Laddoo" },
  { href: "/products#panjiri", label: "Panjiri" },
  { href: "/products#post-pregnancy", label: "Post Pregnancy Mix" },
  { href: "/products#besan-laddoo", label: "Besan Laddoo" },
  { href: "/products#atta-laddoo", label: "Atta Laddoo" },
];

const socialLinks = [
  { href: "https://www.facebook.com/share/17afr4j399/", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/archanasfoodbasket", icon: Instagram, label: "Instagram" },
  { href: "https://youtube.com/@archanasharma-ok7vl", icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <span className="text-maroon-dark font-serif font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-gold font-serif font-bold text-lg">Archana's</h3>
                <p className="text-gold-light text-xs tracking-wider">FOOD BASKET</p>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-4">
              Tradition in Every Bite. Authentic homemade sweets crafted with pure desi ghee and delivered across India.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold/40 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-gold" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gold font-serif font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/70 hover:text-gold text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-serif font-semibold text-base mb-4">Our Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/70 hover:text-gold text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-serif font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-cream/70 text-sm">D-42, Sector-52, Noida, Gautam Buddh Nagar, Uttar Pradesh \u2013 201301</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+919810622933" className="text-cream/70 hover:text-gold text-sm transition-colors">+91 9810622933</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:orders@archanasfoodbasket.com" className="text-cream/70 hover:text-gold text-sm transition-colors">orders@archanasfoodbasket.com</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:corporatesales@archanasfoodbasket.com" className="text-cream/70 hover:text-gold text-sm transition-colors">corporatesales@archanasfoodbasket.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-xs\">&copy; {new Date().getFullYear()} Archana's Food Basket. All rights reserved.</p>
          <p className="text-cream/50 text-xs">Homemade Sweetness Delivered Across India</p>
        </div>
      </div>
    </footer>
  );
}