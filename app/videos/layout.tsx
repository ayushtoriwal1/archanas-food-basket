import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos - Preparation Process & Product Showcases",
  description: "Watch preparation process videos, product showcases, and customer reviews. See how our authentic homemade sweets are crafted with pure desi ghee and traditional recipes.",
  openGraph: { title: "Videos - Archana's Food Basket", description: "Watch our preparation process, product showcases, and customer stories." },
};

export default function VideosLayout({ children }: { children: React.ReactNode }) {
  return children;
}