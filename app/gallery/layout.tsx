import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Product Photography, Packaging & Preparations",
  description: "Browse our gallery of handcrafted sweets, premium packaging, preparation process, customer deliveries, and festival orders. See the love and tradition that goes into every sweet.",
  openGraph: { title: "Gallery - Archana's Food Basket", description: "Visual journey through our handcrafted sweets and premium packaging." },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}