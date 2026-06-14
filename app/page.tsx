"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Phone, Heart, ShieldCheck, Package, Settings2, Sparkles,
  Baby, Truck, Building2, ArrowRight, Star, ChevronRight,
  Leaf, Award, Gift, Clock,
} from "lucide-react";
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

interface CategoryItem {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  image: string;
}

interface WhyChooseItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

interface CustomerLoveItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const categories: CategoryItem[] = [
  { title: "Traditional Laddoos", desc: "Handcrafted with pure desi ghee using age-old family recipes", icon: Leaf, href: "/products#besan-laddoo", image: "https://images.pexels.com/photos/5873976/pexels-photo-5873976.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Dry Fruit Laddoos", desc: "Premium almonds, cashews, and pistachios in every bite", icon: Award, href: "/products#dry-fruit-laddoo", image: "https://images.pexels.com/photos/6420864/pexels-photo-6420864.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Post Pregnancy Laddoos", desc: "Traditional nutrition crafted specially for new mothers", icon: Baby, href: "/products#post-pregnancy", image: "https://images.pexels.com/photos/6113591/pexels-photo-6113591.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Pooja Prasad Orders", desc: "Sacred preparations for religious functions and temple offerings", icon: Sparkles, href: "/products#panjiri", image: "https://images.pexels.com/photos/7273030/pexels-photo-7273030.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Festive Gift Boxes", desc: "Premium packaging for Diwali, Rakhi, and every celebration", icon: Gift, href: "/products", image: "https://images.pexels.com/photos/7250686/pexels-photo-7250686.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "Corporate Gifting", desc: "Custom branded hampers for employees and clients", icon: Building2, href: "/corporate", image: "https://images.pexels.com/photos/7166035/pexels-photo-7166035.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const whyChoose: WhyChooseItem[] = [
  { icon: Heart, title: "Pure Desi Ghee", desc: "Every sweet is prepared using authentic pure desi ghee for rich, traditional taste" },
  { icon: Award, title: "Premium Ingredients", desc: "Only high-quality dry fruits, nuts, and carefully selected ingredients" },
  { icon: Clock, title: "Made To Order", desc: "Freshly prepared according to your requirements, never from stock" },
  { icon: Settings2, title: "Customized Orders", desc: "Custom ingredients, packaging, and gifting solutions tailored for you" },
  { icon: Sparkles, title: "Pooja Prasad Specialists", desc: "Special preparations for religious functions and temple offerings" },
  { icon: Baby, title: "Post Pregnancy Nutrition", desc: "Traditional laddoos and nutritional mixes for new mothers" },
  { icon: Truck, title: "Pan India Delivery", desc: "Fresh deliveries across India with careful packaging" },
  { icon: Building2, title: "Corporate Gifting", desc: "Customized festive and event gifting solutions for organizations" },
];

const customerLove: CustomerLoveItem[] = [
  { icon: Heart, label: "Homemade" },
  { icon: Clock, label: "Fresh" },
  { icon: ShieldCheck, label: "Hygienic" },
  { icon: Package, label: "Premium Packaging" },
  { icon: Settings2, label: "Custom Orders" },
  { icon: Truck, label: "Nationwide Delivery" },
];

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <WhyChooseSection items={whyChoose} />
      <CustomerLoveSection items={customerLove} />
      <FounderSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-maroon-dark via-maroon to-royal-red" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A537' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Since 2019 | Noida, India</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream leading-[1.1] mb-6">
              Authentic Homemade Sweets <span className="text-gold">Crafted With Love</span>
            </h1>
            <p className="text-cream/80 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Pure Desi Ghee \u2022 Traditional Recipes \u2022 Premium Ingredients \u2022 Delivered Across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-gold text-maroon-dark hover:bg-gold-light font-semibold text-base px-8 h-12">
                <a href="https://wa.me/919810622933" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />Order on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gold/50 text-gold hover:bg-gold/10 font-semibold text-base px-8 h-12">
                <Link href="/products">Explore Products<ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full bg-gold/10 animate-pulse" />
              <div className="relative rounded-full overflow-hidden border-4 border-gold/30 shadow-2xl">
                <img src="https://images.pexels.com/photos/5873976/pexels-photo-5873976.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Traditional Indian Laddoos" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gold text-maroon-dark px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">Pure Desi Ghee</div>
              <div className="absolute -top-4 -right-4 bg-white text-maroon-dark px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">Made to Order</div>
              <div className="absolute top-1/2 -right-6 bg-saffron text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">Pan India Delivery</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}

function CategoriesSection({ categories }: { categories: CategoryItem[] }) {
  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-saffron font-medium text-sm tracking-wider uppercase">Our Specialties</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon-dark mt-2 mb-4">Featured Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From traditional laddoos to corporate gift hampers, discover our handcrafted range of authentic Indian sweets</p>
          </div>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <AnimatedSection key={cat.title}>
              <Link href={cat.href}>
                <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-1">
                        <cat.icon className="w-5 h-5 text-gold" />
                        <h3 className="text-cream font-serif font-bold text-lg">{cat.title}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-4 pb-5">
                    <p className="text-muted-foreground text-sm mb-3">{cat.desc}</p>
                    <span className="inline-flex items-center text-maroon text-sm font-medium group-hover:text-saffron transition-colors">
                      Explore <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection({ items }: { items: WhyChooseItem[] }) {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-saffron font-medium text-sm tracking-wider uppercase">Our Promise</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon-dark mt-2 mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Every order from Archana's Food Basket carries the warmth, taste, and tradition of home</p>
          </div>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <AnimatedSection key={item.title}>
              <div className="text-center p-6 rounded-xl bg-cream hover:bg-gold/5 transition-colors group">
                <div className="w-14 h-14 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-7 h-7 text-maroon group-hover:text-gold-dark transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-maroon-dark text-base mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomerLoveSection({ items }: { items: CustomerLoveItem[] }) {
  return (
    <section className="py-16 sm:py-20 bg-maroon-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20l5-5-5-5-5 5 5 5zm0 10l5-5-5-5-5 5 5 5zM10 20l5-5-5-5-5 5 5 5z' fill='%23D4A537' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mb-3">Why Customers Love Us</h2>
            <p className="text-cream/60 max-w-xl mx-auto">The qualities that keep our customers coming back, celebration after celebration</p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item) => (
            <AnimatedSection key={item.label}>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/30 transition-colors">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <p className="text-cream font-medium text-sm">{item.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.pexels.com/photos/5947095/pexels-photo-5947095.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Archana Sharma - Founder" className="w-full h-[400px] sm:h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-maroon-dark p-6 rounded-xl shadow-lg hidden sm:block">
                <p className="font-serif font-bold text-2xl">Since</p>
                <p className="font-serif font-bold text-4xl">2019</p>
              </div>
            </div>
            <div>
              <span className="text-saffron font-medium text-sm tracking-wider uppercase">Our Story</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon-dark mt-2 mb-6">Meet Archana Sharma</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Archana's Food Basket began its journey in 2019 with a simple vision \u2013 bringing the authentic taste of homemade traditional Indian sweets to people living away from home.</p>
                <p>Every product is handcrafted using traditional family recipes, Pure Desi Ghee, premium dry fruits, and carefully selected ingredients. Our specialty lies in customized preparation, premium packaging, festive gifting solutions, and traditional wellness laddoos.</p>
                <p>Whether it's a family celebration, pooja, festival, gifting occasion, or post-pregnancy nutrition, we ensure every order carries the warmth and taste of home.</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}
                </div>
                <span className="text-maroon font-semibold text-sm">Trusted by 500+ Happy Customers</span>
              </div>
              <div className="mt-6">
                <Button asChild className="bg-maroon hover:bg-maroon-dark text-gold font-semibold">
                  <Link href="/contact">Get In Touch<ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="bg-maroon-dark rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A537' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
            <div className="relative">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-cream mb-4">Homemade Sweetness Delivered Across India</h2>
              <p className="text-cream/70 mb-8 max-w-xl mx-auto">Place your order today and experience the authentic taste of traditional Indian sweets, handcrafted with love and pure desi ghee.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gold text-maroon-dark hover:bg-gold-light font-semibold text-base px-8 h-12">
                  <a href="https://wa.me/919810622933" target="_blank" rel="noopener noreferrer"><Phone className="w-5 h-5 mr-2" />Order on WhatsApp</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-gold/50 text-gold hover:bg-gold/10 font-semibold text-base px-8 h-12">
                  <a href="mailto:orders@archanasfoodbasket.com">Email Us</a>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}