"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShoppingBag, Send, Facebook, Instagram, Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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

const orderingOptions = [
  { icon: MessageSquare, title: "WhatsApp", detail: "9810622933", href: "https://wa.me/919810622933", color: "bg-[#25D366]" },
  { icon: ShoppingBag, title: "Zomato", detail: "Homemade Laddoos By Archana Sharma", href: "https://zomato.com", color: "bg-[#E23744]" },
  { icon: Mail, title: "Email", detail: "orders@archanasfoodbasket.com", href: "mailto:orders@archanasfoodbasket.com", color: "bg-maroon" },
  { icon: BuildingIcon, title: "Corporate Orders", detail: "corporatesales@archanasfoodbasket.com", href: "mailto:corporatesales@archanasfoodbasket.com", color: "bg-saffron" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/17afr4j399/", color: "bg-[#1877F2]" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/archanasfoodbasket", color: "bg-[#E4405F]" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@archanasharma-ok7vl", color: "bg-[#FF0000]" },
];

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" />
    </svg>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi! I'm ${formData.name}.\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919810622933?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20">
      <section className="bg-maroon-dark py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20l5-5-5-5-5 5 5 5zm0 10l5-5-5-5-5 5 5 5zM10 20l5-5-5-5-5 5 5 5z' fill='%23D4A537' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-medium text-sm tracking-wider uppercase">Get In Touch</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mt-2 mb-4">Contact Us</h1>
          <p className="text-cream/70 max-w-2xl mx-auto text-lg">We'd love to hear from you. Reach out for orders, inquiries, or just to say hello!</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection>
              <Card className="border-0 shadow-md bg-white h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-4"><MapPin className="w-6 h-6 text-maroon" /></div>
                  <h3 className="font-serif font-bold text-maroon-dark mb-2">Visit Us</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">D-42, Sector-52, Noida,<br />Gautam Buddh Nagar,<br />Uttar Pradesh \u2013 201301</p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection>
              <Card className="border-0 shadow-md bg-white h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-4"><Phone className="w-6 h-6 text-maroon" /></div>
                  <h3 className="font-serif font-bold text-maroon-dark mb-2">Call / WhatsApp</h3>
                  <a href="tel:+919810622933" className="text-maroon hover:text-saffron text-sm transition-colors block mb-1">+91 9810622933</a>
                  <a href="mailto:orders@archanasfoodbasket.com" className="text-muted-foreground hover:text-saffron text-sm transition-colors block">orders@archanasfoodbasket.com</a>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection>
              <Card className="border-0 shadow-md bg-white h-full sm:col-span-2 lg:col-span-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-4"><Clock className="w-6 h-6 text-maroon" /></div>
                  <h3 className="font-serif font-bold text-maroon-dark mb-2">Business Hours</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Mon \u2013 Sat: 9:00 AM \u2013 7:00 PM<br />Sunday: 10:00 AM \u2013 4:00 PM<br /><span className="text-saffron text-xs">Orders accepted 24/7 via WhatsApp</span></p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-maroon-dark mb-2">Order Now</h2>
              <p className="text-muted-foreground">Multiple ways to place your order</p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {orderingOptions.map((opt) => (
              <AnimatedSection key={opt.title}>
                <a href={opt.href} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white h-full group">
                    <CardContent className="p-5 text-center">
                      <div className={`w-10 h-10 rounded-lg ${opt.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                        <opt.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-maroon-dark text-sm mb-1">{opt.title}</h3>
                      <p className="text-muted-foreground text-xs">{opt.detail}</p>
                    </CardContent>
                  </Card>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-8">
                  <Send className="w-8 h-8 text-gold mx-auto mb-3" />
                  <h2 className="font-serif text-2xl font-bold text-maroon-dark mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground text-sm">Fill out the form and we'll get back to you via WhatsApp</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-maroon-dark text-sm font-medium">Your Name</Label>
                      <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter your name" required className="border-gold/20 focus:border-gold" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-maroon-dark text-sm font-medium">Email</Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" required className="border-gold/20 focus:border-gold" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-maroon-dark text-sm font-medium">Phone</Label>
                      <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 XXXXXXXXXX" className="border-gold/20 focus:border-gold" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-maroon-dark text-sm font-medium">Subject</Label>
                      <Input id="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="Order inquiry, Custom request..." required className="border-gold/20 focus:border-gold" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-maroon-dark text-sm font-medium">Message</Label>
                    <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your order or inquiry..." rows={4} required className="border-gold/20 focus:border-gold" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gold text-maroon-dark hover:bg-gold-light font-semibold" disabled={submitted}>
                    {submitted ? "Opening WhatsApp..." : <><Send className="w-4 h-4 mr-2" />Send via WhatsApp</>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="relative h-64 sm:h-80 lg:h-96 bg-gray-100 overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.36!3d28.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzEyLjAiTiA3N8KwMjEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1600000000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Archana's Food Basket Location" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-maroon-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream mb-3">Follow Us</h2>
            <p className="text-cream/60 mb-8">Stay connected for updates, new products, and festive offers</p>
            <div className="flex justify-center gap-4 sm:gap-6">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="group">
                  <div className={`w-14 h-14 ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <social.icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-cream/70 text-xs mt-2 group-hover:text-gold transition-colors">{social.label}</p>
                </a>
              ))}
              <a href="https://share.google/dzjH6WFmItcBssif5" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-14 h-14 bg-[#4285F4] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <ExternalLink className="w-7 h-7 text-white" />
                </div>
                <p className="text-cream/70 text-xs mt-2 group-hover:text-gold transition-colors">Google</p>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}