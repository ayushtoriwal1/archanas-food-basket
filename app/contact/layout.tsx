import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Order Homemade Sweets Online",
  description: "Contact Archana's Food Basket for orders, inquiries, and custom requests. Order via WhatsApp, email, or Zomato. Located in Noida, Sector-52. Pan India delivery available.",
  keywords: ["Order Homemade Sweets", "WhatsApp Order Laddoos", "Contact Archana's Food Basket", "Sweets Delivery Noida", "Custom Sweet Orders"],
  openGraph: { title: "Contact Us - Archana's Food Basket", description: "Order homemade sweets via WhatsApp, email, or Zomato. Pan India delivery." },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}