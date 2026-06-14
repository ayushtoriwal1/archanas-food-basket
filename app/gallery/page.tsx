"use client";

import { useState, useEffect, useRef } from "react";
import { Camera, X } from "lucide-react";

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

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  tall?: boolean;
}

const galleryImages: GalleryImage[] = [
  { src: "https://images.pexels.com/photos/5873976/pexels-photo-5873976.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Traditional Laddoos", category: "Product Photography", tall: true },
  { src: "https://images.pexels.com/photos/6420864/pexels-photo-6420864.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Dry Fruit Laddoos", category: "Product Photography" },
  { src: "https://images.pexels.com/photos/7250686/pexels-photo-7250686.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Premium Gift Packaging", category: "Packaging" },
  { src: "https://images.pexels.com/photos/5947095/pexels-photo-5947095.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Preparation Process", category: "Preparation Process" },
  { src: "https://images.pexels.com/photos/7273030/pexels-photo-7273030.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Traditional Preparation", category: "Preparation Process", tall: true },
  { src: "https://images.pexels.com/photos/7166035/pexels-photo-7166035.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Festive Gift Box", category: "Packaging" },
  { src: "https://images.pexels.com/photos/6113591/pexels-photo-6113591.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Post Pregnancy Nutrition", category: "Product Photography" },
  { src: "https://images.pexels.com/photos/6525751/pexels-photo-6525751.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Customer Delivery", category: "Customer Deliveries" },
  { src: "https://images.pexels.com/photos/5966403/pexels-photo-5966403.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Festival Celebrations", category: "Festival Orders" },
];

const categories = ["All", "Product Photography", "Packaging", "Preparation Process", "Customer Deliveries", "Festival Orders"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="bg-maroon-dark py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20l5-5-5-5-5 5 5 5zm0 10l5-5-5-5-5 5 5 5zM10 20l5-5-5-5-5 5 5 5z' fill='%23D4A537' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="w-10 h-10 text-gold mx-auto mb-4" />
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-4">Gallery</h1>
          <p className="text-cream/70 max-w-2xl mx-auto text-lg">A visual journey through our handcrafted sweets, premium packaging, and the love that goes into every preparation.</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto mb-8 -mx-4 px-4">
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? "bg-maroon text-gold" : "bg-white text-maroon hover:bg-maroon/5"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <AnimatedSection key={img.src + i}>
                <div className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl" onClick={() => setLightbox(img)}>
                  <img src={img.src} alt={img.alt} className="w-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl" style={{ height: img.tall ? "400px" : "250px" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-cream font-semibold text-sm">{img.alt}</p>
                    <p className="text-gold text-xs">{img.category}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-gold transition-colors" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <img src={lightbox.src.replace("w=600", "w=1200")} alt={lightbox.alt} className="max-w-full max-h-[85vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}