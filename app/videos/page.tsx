"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Youtube, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: string;
  youtubeUrl: string;
  thumbnail: string;
}

const videos: VideoItem[] = [
  { id: "1", title: "How We Make Our Signature Dry Fruit Laddoos", description: "Watch the step-by-step process of crafting our bestselling dry fruit laddoos with pure desi ghee and premium nuts.", category: "Preparation Process", youtubeUrl: "https://youtube.com/@archanasharma-ok7vl", thumbnail: "https://images.pexels.com/photos/5873976/pexels-photo-5873976.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: "2", title: "Traditional Gond Laddoo Making", description: "The authentic preparation of gond laddoos, a time-tested recipe for post-pregnancy nutrition and winter wellness.", category: "Preparation Process", youtubeUrl: "https://youtube.com/@archanasharma-ok7vl", thumbnail: "https://images.pexels.com/photos/5947095/pexels-photo-5947095.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: "3", title: "Our Premium Festive Gift Boxes", description: "See our beautifully designed gift boxes perfect for Diwali, Raksha Bandhan, and corporate celebrations.", category: "Product Showcase", youtubeUrl: "https://youtube.com/@archanasharma-ok7vl", thumbnail: "https://images.pexels.com/photos/7250686/pexels-photo-7250686.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: "4", title: "Customer Review - Priya from Delhi", description: "Priya shares her experience ordering dry fruit laddoos for her family Diwali celebration.", category: "Customer Reviews", youtubeUrl: "https://youtube.com/@archanasharma-ok7vl", thumbnail: "https://images.pexels.com/photos/6420864/pexels-photo-6420864.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: "5", title: "Pooja Prasad Preparation", description: "Special preparation process for pooja prasad orders, maintaining purity and tradition at every step.", category: "Preparation Process", youtubeUrl: "https://youtube.com/@archanasharma-ok7vl", thumbnail: "https://images.pexels.com/photos/7273030/pexels-photo-7273030.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: "6", title: "Post Pregnancy Nutrition Laddoos", description: "Learn about our specially crafted nutritional laddoos designed for new mothers' recovery and wellness.", category: "Product Showcase", youtubeUrl: "https://youtube.com/@archanasharma-ok7vl", thumbnail: "https://images.pexels.com/photos/6113591/pexels-photo-6113591.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const videoCategories = ["All", "Preparation Process", "Product Showcase", "Customer Reviews"];

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? videos : videos.filter((v) => v.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="bg-maroon-dark py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20l5-5-5-5-5 5 5 5zm0 10l5-5-5-5-5 5 5 5zM10 20l5-5-5-5-5 5 5 5z' fill='%23D4A537' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Youtube className="w-10 h-10 text-gold mx-auto mb-4" />
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-4">Videos</h1>
          <p className="text-cream/70 max-w-2xl mx-auto text-lg">Watch our preparation process, product showcases, and customer stories.</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 flex-wrap mb-8">
            {videoCategories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? "bg-maroon text-gold" : "bg-white text-maroon hover:bg-maroon/5"}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video) => (
              <AnimatedSection key={video.id}>
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-maroon-dark ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-maroon/80 text-gold text-xs px-2 py-1 rounded-full">{video.category}</div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-serif font-bold text-maroon-dark text-base mb-2">{video.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{video.description}</p>
                    <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-maroon hover:text-saffron text-sm font-medium transition-colors">
                      <Youtube className="w-4 h-4" />Watch on YouTube
                    </a>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="bg-maroon-dark rounded-2xl p-8 sm:p-12 relative overflow-hidden">
              <div className="relative">
                <Youtube className="w-12 h-12 text-gold mx-auto mb-4" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream mb-3">Subscribe to Our Channel</h2>
                <p className="text-cream/70 mb-6 max-w-lg mx-auto">Follow us on YouTube for behind-the-scenes preparation videos, new product launches, and customer stories.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#FF0000] hover:bg-[#cc0000] text-white font-semibold">
                    <a href="https://youtube.com/@archanasharma-ok7vl" target="_blank" rel="noopener noreferrer"><Youtube className="w-5 h-5 mr-2" />Subscribe on YouTube</a>
                  </Button>
                  <Button asChild size="lg" className="bg-gold text-maroon-dark hover:bg-gold-light font-semibold">
                    <a href="https://wa.me/919810622933" target="_blank" rel="noopener noreferrer"><Phone className="w-5 h-5 mr-2" />Order Now</a>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}