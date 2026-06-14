"use client";

import { useState, useEffect, useRef } from "react";
import { Star, Quote, Phone, MessageSquare } from "lucide-react";
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

const testimonials = [
  { name: "Priya Mehta", location: "Delhi", rating: 5, review: "The dry fruit laddoos are absolutely divine! You can taste the pure desi ghee and premium dry fruits in every bite. Reminds me of my grandmother's homemade sweets. Will definitely order again for Diwali!", product: "Dry Fruit Laddoo", initials: "PM" },
  { name: "Rajesh Kumar", location: "Mumbai", rating: 5, review: "We ordered corporate gift boxes for our Diwali celebration at HSBC. The packaging was stunning and the laddoos were fresh and delicious. Archana's team handled our 200-box order flawlessly. Highly recommended for corporate gifting!", product: "Corporate Gift Box", initials: "RK" },
  { name: "Sneha Sharma", location: "Bangalore", rating: 5, review: "The post pregnancy laddoos were a blessing during my recovery. Traditional recipe with pure ingredients, exactly what new mothers need. My mother-in-law was impressed with the quality. Thank you, Archana ji!", product: "Post Pregnancy Laddoo", initials: "SS" },
  { name: "Ankit Verma", location: "Noida", rating: 5, review: "Ordered gond laddoos for my wife after delivery. The quality is unmatched, and you can genuinely taste the difference of pure desi ghee. Delivery was prompt and packaging was beautiful. Best homemade sweets in Noida!", product: "Gond Laddoo", initials: "AV" },
  { name: "Meera Patel", location: "Ahmedabad", rating: 5, review: "The pooja prasad was perfect for our temple function. Freshly prepared, beautifully packaged, and the taste was authentic. Archana's attention to detail for religious preparations is truly special.", product: "Pooja Prasad", initials: "MP" },
  { name: "Vikram Singh", location: "Gurgaon", rating: 4, review: "Ordered besan laddoos for a family gathering and everyone loved them. The melt-in-mouth texture shows the quality of desi ghee used. Great experience overall!", product: "Besan Laddoo", initials: "VS" },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <section className="bg-maroon-dark py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20l5-5-5-5-5 5 5 5zm0 10l5-5-5-5-5 5 5 5zM10 20l5-5-5-5-5 5 5 5z' fill='%23D4A537' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Love From Our Customers</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mt-2 mb-4">Testimonials</h1>
          <p className="text-cream/70 max-w-2xl mx-auto text-lg">Hear what our customers say about their experience with Archana's Food Basket.</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <AnimatedSection key={t.name}>
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow bg-white relative">
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-gold/30 mb-3" />
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, si) => (
                        <Star key={si} className={`w-4 h-4 ${si < t.rating ? "fill-gold text-gold" : "text-gray-200"}`} />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">\"{{t.review}}\"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center">
                        <span className="text-maroon font-serif font-bold text-sm">{t.initials}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-maroon-dark text-sm">{t.name}</p>
                        <p className="text-muted-foreground text-xs">{t.location} \u2022 {t.product}</p>
                      </div>
                    </div>
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
                <MessageSquare className="w-12 h-12 text-gold mx-auto mb-4" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream mb-3">Share Your Experience</h2>
                <p className="text-cream/70 mb-6 max-w-lg mx-auto">We love hearing from our customers! Share your experience with Archana's Food Basket.</p>
                <Button asChild size="lg" className="bg-gold text-maroon-dark hover:bg-gold-light font-semibold">
                  <a href="https://wa.me/919810622933" target="_blank" rel="noopener noreferrer"><Phone className="w-5 h-5 mr-2" />Share Your Feedback</a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}