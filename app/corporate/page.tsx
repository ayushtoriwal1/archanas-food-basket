"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Building2, Gift, Users, PartyPopper, Tag, Package, CheckCircle2, Mail } from "lucide-react";
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

const corporateFeatures = [
  { icon: Gift, title: "Festive Gifting", desc: "Custom Diwali, Holi, and festival gift hampers tailored for your organization" },
  { icon: Users, title: "Employee Appreciation", desc: "Show your team you care with premium homemade sweet boxes" },
  { icon: PartyPopper, title: "Event Hampers", desc: "Custom hampers for corporate events, launches, and celebrations" },
  { icon: Tag, title: "Custom Branding", desc: "Add your company logo and message to our premium packaging" },
  { icon: Package, title: "Bulk Order Support", desc: "Seamless bulk ordering with dedicated account management" },
  { icon: Building2, title: "Dedicated Coordinator", desc: "Personal coordinator for your corporate gifting needs" },
];

const trustedBy = ["HSBC", "Spark Minda Foundation", "KUL"];

const corporateBenefits = [
  "Customized packaging with company branding",
  "Bulk pricing for orders of 50+ boxes",
  "Dedicated account manager",
  "Pan-India delivery to multiple locations",
  "Flexible payment terms for corporates",
  "Pre-event tasting samples",
  "On-time delivery guarantee",
  "Special seasonal collections",
];

export default function CorporatePage() {
  return (
    <div className="pt-20">
      <section className="bg-maroon-dark py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20l5-5-5-5-5 5 5 5zm0 10l5-5-5-5-5 5 5 5zM10 20l5-5-5-5-5 5 5 5z' fill='%23D4A537' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="text-gold font-medium text-sm tracking-wider uppercase">B2B Solutions</span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mt-2 mb-6">
                Corporate Gifting &<br /><span className="text-gold">Bulk Orders</span>
              </h1>
              <p className="text-cream/70 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                Impress clients, appreciate employees, and celebrate milestones with premium handmade sweet hampers from Archana's Food Basket.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-gold text-maroon-dark hover:bg-gold-light font-semibold">
                  <a href="https://wa.me/919810622933" target="_blank" rel="noopener noreferrer"><Phone className="w-5 h-5 mr-2" />Discuss Requirements</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-gold/50 text-gold hover:bg-gold/10 font-semibold">
                  <a href="mailto:corporatesales@archanasfoodbasket.com"><Mail className="w-5 h-5 mr-2" />Corporate Sales</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.pexels.com/photos/7250686/pexels-photo-7250686.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Corporate Gift Hampers" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-saffron font-medium text-sm tracking-wider uppercase">What We Offer</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon-dark mt-2 mb-4">Corporate Gifting Solutions</h2>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateFeatures.map((feat) => (
              <AnimatedSection key={feat.title}>
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-maroon/10 flex items-center justify-center mb-4">
                      <feat.icon className="w-6 h-6 text-maroon" />
                    </div>
                    <h3 className="font-serif font-bold text-maroon-dark text-lg mb-2">{feat.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-maroon-dark mb-8">Trusted By Leading Organizations</h2>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              {trustedBy.map((name) => (
                <div key={name} className="flex items-center justify-center w-40 h-24 bg-cream rounded-xl border border-gold/20 hover:border-gold/40 transition-colors">
                  <span className="font-serif font-bold text-maroon/60 text-lg">{name}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-maroon-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A537' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-3">Why Corporates Choose Us</h2>
              <p className="text-cream/60 max-w-xl mx-auto">From 50 boxes to 5000, we deliver premium quality at scale</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl mx-auto">
              {corporateBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-cream/80 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-maroon-dark mb-4">Ready to Discuss Your Corporate Gifting Needs?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Our corporate sales team is ready to create the perfect gifting solution for your organization.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold text-maroon-dark hover:bg-gold-light font-semibold">
                <a href="https://wa.me/919810622933" target="_blank" rel="noopener noreferrer"><Phone className="w-5 h-5 mr-2" />Call Corporate Sales</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-maroon/30 text-maroon hover:bg-maroon/5 font-semibold">
                <a href="mailto:corporatesales@archanasfoodbasket.com"><Mail className="w-5 h-5 mr-2" />Email Corporate Sales</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}