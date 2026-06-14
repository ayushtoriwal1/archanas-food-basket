import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Testimonials - Reviews & Feedback",
  description: "Read what our customers say about Archana's Food Basket. Reviews on dry fruit laddoos, post pregnancy nutrition, corporate gift boxes, and traditional sweets. Trusted by 500+ happy customers.",
  openGraph: { title: "Testimonials - Archana's Food Basket", description: "Customer reviews and testimonials for authentic homemade sweets." },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}