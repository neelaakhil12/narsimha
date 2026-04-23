"use client";

import Navbar from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "919014526685";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello StayVago! 🙏\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Subject:* ${form.subject}\n\n*Message:*\n${form.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 bg-primary/5">
        <section className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Get in Touch</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you have a question about booking, partnerships, or just want to say Namaste, our team is here for you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <Card className="rounded-3xl border-none shadow-xl bg-primary text-white p-6 sm:p-8 relative overflow-hidden group">
                  <div className="absolute -right-8 -bottom-8 h-48 w-48 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500" />
                  <CardContent className="p-0 relative z-10">
                    <h3 className="text-2xl font-serif font-bold mb-8">Contact Information</h3>
                    <div className="space-y-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/10 rounded-2xl">
                          <Phone className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm text-white/70 uppercase font-bold tracking-widest mb-1">Call Us</p>
                          <p className="text-lg font-bold">+91 90145 26685</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/10 rounded-2xl">
                          <Mail className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm text-white/70 uppercase font-bold tracking-widest mb-1">Email Us</p>
                          <p className="text-sm sm:text-lg font-bold break-all">concierge@stayvago.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/10 rounded-2xl">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm text-white/70 uppercase font-bold tracking-widest mb-1">Visit Us</p>
                          <p className="text-base sm:text-lg font-bold">Heritage Square, Jaipur, Rajasthan</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* WhatsApp Contact Form */}
              <div className="lg:col-span-2">
                <Card className="rounded-3xl border-none shadow-sm bg-background p-8 md:p-12">
                  <CardContent className="p-0">
                    <form className="space-y-6" onSubmit={handleSend}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-primary uppercase tracking-widest">Full Name</label>
                          <Input
                            name="name"
                            placeholder="John Doe"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="rounded-2xl h-14 bg-primary/5 border-none focus-visible:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-primary uppercase tracking-widest">Email Address</label>
                          <Input
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="rounded-2xl h-14 bg-primary/5 border-none focus-visible:ring-primary/20"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary uppercase tracking-widest">Subject</label>
                        <Input
                          name="subject"
                          placeholder="E.g. Booking Query"
                          value={form.subject}
                          onChange={handleChange}
                          required
                          className="rounded-2xl h-14 bg-primary/5 border-none focus-visible:ring-primary/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary uppercase tracking-widest">Message</label>
                        <Textarea
                          name="message"
                          placeholder="Tell us how we can help..."
                          value={form.message}
                          onChange={handleChange}
                          required
                          className="rounded-3xl min-h-[200px] bg-primary/5 border-none focus-visible:ring-primary/20 p-4"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-14 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 bg-[#25D366] hover:bg-[#128C7E] text-white"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Send via WhatsApp
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
