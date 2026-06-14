import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Gifting & Bulk Orders - Festive Gift Hampers",
  description: "Premium corporate gifting solutions with custom branded hampers. Diwali gifts, employee appreciation boxes, event hampers, and bulk orders. Trusted by HSBC, Spark Minda Foundation, and KUL.",
  keywords: ["Corporate Gift Hampers", "Bulk Sweet Orders", "Diwali Corporate Gifts", "Employee Appreciation Gifts", "Custom Branded Gift Boxes", "Festive Gifting Solutions"],
  openGraph: { title: "Corporate Gifting - Archana's Food Basket", description: "Premium corporate gifting with custom branded hampers and bulk ordering." },
};

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return children;
}