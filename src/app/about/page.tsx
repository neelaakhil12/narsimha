"use client";

import Navbar from "@/components/common/Navbar";
import { Landmark, Award, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image 
            src="/hero.png" 
            alt="About StayVago" 
            fill 
            className="object-cover brightness-50" 
          />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Our Heritage</h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Redefining luxury since 2024 through the lens of Indian hospitality and modern elegance.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto text-center">
              <Landmark className="h-12 w-12 text-primary mx-auto mb-8" />
              <h2 className="text-4xl font-serif font-bold text-primary mb-8">The StayVago Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                StayVago was founded with a single vision: to bridge the gap between traditional heritage stays and modern luxury expectations. We believe that every journey should be an immersion into the culture and grandeur of the land.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By partnering with the finest property owners across India, we curate a collection of stays that offer more than just a room—they offer a portal to the past, wrapped in the comfort of the present.
              </p>
           </div>
        </section>

        {/* Values Section */}
        <section className="bg-primary/5 py-24">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 <div className="text-center">
                    <div className="h-16 w-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-primary mx-auto mb-6">
                       <Award className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">Excellence</h3>
                    <p className="text-muted-foreground font-sans">We set the highest benchmarks for quality, ensuring every stay is worthy of the StayVago name.</p>
                 </div>
                 <div className="text-center">
                    <div className="h-16 w-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-primary mx-auto mb-6">
                       <ShieldCheck className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">Trust</h3>
                    <p className="text-muted-foreground font-sans">Transparency in booking and data security are the cornerstones of our relationship with you.</p>
                 </div>
                 <div className="text-center">
                    <div className="h-16 w-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-primary mx-auto mb-6">
                       <Users className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">Hospitality</h3>
                    <p className="text-muted-foreground font-sans">Rooted in the philosophy of &apos;Atithi Devo Bhava&apos;, we treat every guest as a divine visitor.</p>
                 </div>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}
