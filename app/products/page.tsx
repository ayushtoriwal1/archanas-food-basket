"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Gift, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  ingredients: string[];
  packaging: string[];
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: "dry-fruit-laddoo", name: "Dry Fruit Laddoo", category: "dry-fruit-laddoo",
    description: "Premium laddoos loaded with almonds, cashews, pistachios, and walnuts. Made with pure desi ghee and sweetened naturally with dates and honey. A perfect blend of taste and nutrition.",
    ingredients: ["Pure Desi Ghee", "Almonds", "Cashews", "Pistachios", "Walnuts", "Dates", "Honey", "Cardamom"],
    packaging: ["250g Box", "500g Box", "1kg Box", "Custom Gift Box"],
    image: "https://images.pexels.com/photos/6420864/pexels-photo-6420864.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Bestseller",
  },
  {
    id: "gond-laddoo", name: "Gond Laddoo", category: "gond-laddoo",
    description: "Traditional gond (edible gum) laddoos packed with nutrition. Especially beneficial for post-pregnancy recovery and winter wellness. Made with pure desi ghee, dry fruits, and traditional spices.",
    ingredients: ["Pure Desi Ghee", "Gond (Edible Gum)", "Almonds", "Cashews", "Coconut", "Makhana", "Ajwain", "Black Pepper"],
    packaging: ["250g Box", "500g Box", "1kg Box", "Post-Pregnancy Pack"],
    image: "https://images.pexels.com/photos/5873976/pexels-photo-5873976.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Traditional",
  },
  {
    id: "panjiri", name: "Panjiri", category: "panjiri",
    description: "A traditional North Indian delicacy made with whole wheat flour, desi ghee, dry fruits, and aromatic spices. Perfect for pooja prasad and winter nutrition. Often served as prasad in temples.",
    ingredients: ["Whole Wheat Flour", "Pure Desi Ghee", "Almonds", "Cashews", "Raisins", "Coconut", "Ajwain", "Cardamom", "Sugar"],
    packaging: ["250g Box", "500g Box", "1kg Box", "Pooja Prasad Pack"],
    image: "https://images.pexels.com/photos/7273030/pexels-photo-7273030.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Pooja Special",
  },
  {
    id: "post-pregnancy", name: "Post Pregnancy Mix", category: "post-pregnancy",
    description: "Specially crafted traditional nutritional mix for new mothers. A time-tested combination of gond, dry fruits, and warming spices to support post-delivery recovery and lactation.",
    ingredients: ["Pure Desi Ghee", "Gond", "Almonds", "Cashews", "Makhana", "Ajwain", "Saunth (Dry Ginger)", "Black Pepper", "Jaggery"],
    packaging: ["500g Pack", "1kg Pack", "Complete Nutrition Box", "Gift Pack for New Moms"],
    image: "https://images.pexels.com/photos/6113591/pexels-photo-6113591.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "For New Moms",
  },
  {
    id: "besan-laddoo", name: "Besan Laddoo", category: "besan-laddoo",
    description: "Classic Indian besan (gram flour) laddoos roasted to perfection in pure desi ghee. Soft, melt-in-mouth texture with the perfect balance of sweetness and aromatic cardamom.",
    ingredients: ["Besan (Gram Flour)", "Pure Desi Ghee", "Sugar", "Cardamom", "Cashews", "Raisins"],
    packaging: ["250g Box", "500g Box", "1kg Box", "Festival Gift Box"],
    image: "https://images.pexels.com/photos/5947095/pexels-photo-5947095.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "atta-laddoo", name: "Atta Laddoo", category: "atta-laddoo",
    description: "Wholesome whole wheat laddoos made with pure desi ghee and crunchy dry fruits. A healthy yet delicious option for everyday snacking and festive occasions alike.",
    ingredients: ["Whole Wheat Flour", "Pure Desi Ghee", "Sugar", "Almonds", "Cashews", "Cardamom", "Coconut"],
    packaging: ["250g Box", "500g Box", "1kg Box", "Custom Pack"],
    image: "https://images.pexels.com/photos/7166035/pexels-photo-7166035.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const categoryTabs = [
  { value: "all", label: "All Products" },
  { value: "dry-fruit-laddoo", label: "Dry Fruit Laddoo" },
  { value: "gond-laddoo", label: "Gond Laddoo" },
  { value: "panjiri", label: "Panjiri" },
  { value: "post-pregnancy", label: "Post Pregnancy" },
  { value: "besan-laddoo", label: "Besan Laddoo" },
  { value: "atta-laddoo", label: "Atta Laddoo" },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const filtered = activeTab === "all" ? products : products.filter((p) => p.category === activeTab);

  return (
    <div className="pt-20">
      <section className="bg-maroon-dark py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20l5-5-5-5-5 5 5 5zm0 10l5-5-5-5-5 5 5 5zM10 20l5-5-5-5-5 5 5 5z' fill='%23D4A537' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Handcrafted With Love</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mt-2 mb-4">Our Products</h1>
          <p className="text-cream/70 max-w-2xl mx-auto text-lg">Every product is made to order using pure desi ghee, premium dry fruits, and traditional family recipes.</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="overflow-x-auto mb-8 -mx-4 px-4">
              <TabsList className="bg-white shadow-sm h-auto p-1 flex-wrap gap-1 inline-flex">
                {categoryTabs.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value} className="text-xs sm:text-sm data-[state=active]:bg-maroon data-[state=active]:text-gold">
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <TabsContent value={activeTab} className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <AnimatedSection key={product.id}>
                    <Card id={product.id} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group bg-white">
                      <div className="relative h-56 overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        {product.badge && (
                          <div className="absolute top-4 left-4 bg-gold text-maroon-dark px-3 py-1 rounded-full text-xs font-bold">{product.badge}</div>
                        )}
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-serif font-bold text-maroon-dark text-lg mb-2">{product.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.description}</p>
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-maroon mb-1.5 uppercase tracking-wide">Key Ingredients</p>
                          <div className="flex flex-wrap gap-1.5">
                            {product.ingredients.slice(0, 5).map((ing) => (
                              <span key={ing} className="bg-gold/10 text-maroon text-xs px-2 py-0.5 rounded-full">{ing}</span>
                            ))}
                            {product.ingredients.length > 5 && <span className="text-muted-foreground text-xs px-2 py-0.5">+{product.ingredients.length - 5} more</span>}
                          </div>
                        </div>
                        <div className="mb-5">
                          <p className="text-xs font-semibold text-maroon mb-1.5 uppercase tracking-wide">Packaging Options</p>
                          <div className="flex flex-wrap gap-1.5">
                            {product.packaging.map((pkg) => (
                              <span key={pkg} className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Check className="w-3 h-3 text-gold" />{pkg}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button asChild size="sm" className="flex-1 bg-gold text-maroon-dark hover:bg-gold-light font-semibold text-xs">
                            <a href="https://wa.me/919810622933" target="_blank" rel="noopener noreferrer">
                              <Phone className="w-3.5 h-3.5 mr-1.5" />Order
                            </a>
                          </Button>
                          <Button asChild variant="outline" size="sm" className="flex-1 border-maroon/20 text-maroon hover:bg-maroon/5 text-xs">
                            <a href={`mailto:orders@archanasfoodbasket.com?subject=Inquiry about ${product.name}`}>Inquire</a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-maroon-dark rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A537' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
              <div className="relative">
                <Gift className="w-12 h-12 text-gold mx-auto mb-4" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream mb-3">Special Seasonal Products</h2>
                <p className="text-cream/70 mb-6 max-w-lg mx-auto">We create special festive sweets for Diwali, Holi, Raksha Bandhan, Navratri, and other celebrations. Contact us for seasonal specialties and custom orders.</p>
                <Button asChild size="lg" className="bg-gold text-maroon-dark hover:bg-gold-light font-semibold">
                  <a href="https://wa.me/919810622933" target="_blank" rel="noopener noreferrer"><Phone className="w-5 h-5 mr-2" />Ask About Seasonal Specials</a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}