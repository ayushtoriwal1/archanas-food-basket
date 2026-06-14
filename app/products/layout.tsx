import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Homemade Laddoos, Dry Fruit Sweets & Traditional Delicacies",
  description: "Explore our handcrafted range of authentic Indian sweets - Dry Fruit Laddoos, Gond Laddoos, Panjiri, Post Pregnancy Mix, Besan Laddoos, and Atta Laddoos. All made with pure desi ghee.",
  keywords: ["Dry Fruit Laddoos", "Gond Laddoos", "Besan Laddoo", "Atta Laddoo", "Panjiri", "Post Pregnancy Laddoos", "Pure Desi Ghee Sweets", "Homemade Sweets Online"],
  openGraph: { title: "Products - Archana's Food Basket", description: "Handcrafted Indian sweets made with pure desi ghee and premium ingredients." },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}