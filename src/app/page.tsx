"use client";

import Navbar from "@/components/common/Navbar";
import Hero from "@/components/common/Hero";
import LocationBar from "@/components/common/LocationBar";
import HotelCard from "@/components/hotel/HotelCard";
import ScrollReveal from "@/components/common/ScrollReveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Landmark, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Clock,
  Lock
} from "lucide-react";

const FEATURED_HOTELS = [
  {
    id: "1",
    name: "The Grand Palace",
    location: "Udaipur, Rajasthan",
    price: 15500,
    rating: 4.9,
    image: "/hotels/palace.png",
    amenities: ["Spa", "Infinite Pool", "Fine Dining", "Lakeside View"],
  },
  {
    id: "2",
    name: "Ocean Breeze Resort",
    location: "South Goa, Goa",
    price: 8900,
    rating: 4.7,
    image: "/hotels/beach.png",
    amenities: ["Beach Access", "Gym", "Bar", "Water Sports"],
  },
  {
    id: "3",
    name: "Himalayan Retreat",
    location: "Manali, Himachal Pradesh",
    price: 6400,
    rating: 4.8,
    image: "/hero.png",
    amenities: ["Mountain View", "Fireplace", "Yoga Center", "Trekking"],
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#faf9f6]">
      <Navbar />
      <LocationBar />
      <main className="flex-1">
        <Hero />
        
        {/* Featured Hotels Section */}
        <section className="container mx-auto py-12 md:py-16 px-4 max-w-7xl overflow-hidden">
          <ScrollReveal>
             <div className="mb-8 border-b border-gray-100 pb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Featured Stays in India</h2>
                <p className="mt-1 text-gray-500 text-sm">Explore our highest rated hotels and resorts.</p>
             </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 gap-6">
             {FEATURED_HOTELS.map((hotel, index) => (
               <ScrollReveal key={hotel.id} delay={index * 0.1}>
                 <HotelCard {...hotel} />
               </ScrollReveal>
             ))}
          </div>
          
          <div className="mt-12 flex justify-center">
             <Link href="/hotel">
                <Button variant="outline" className="rounded-full px-12 py-6 text-lg font-bold border-gray-200 hover:bg-gray-50">
                  View All Stays <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
             </Link>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <ScrollReveal direction="right">
                <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/hero.png" alt="Heritage Decor" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary/20" />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="left">
                <div className="space-y-6 md:space-y-8 mt-8 md:mt-0">
                  <Landmark className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary leading-tight">Defining Luxury Through Heritage</h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    StayVago was founded with a single vision: to bridge the gap between traditional heritage stays and modern luxury expectations. We believe that every journey should be an immersion into the culture and grandeur of the land.
                  </p>
                  <Link href="/about">
                    <Button size="lg" className="rounded-full px-8 w-full sm:w-auto">
                      View Our Full Story
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-primary/5 py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Why StayVago?</h2>
            </ScrollReveal>
            <div className="mt-8 md:mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { title: "Premium Selection", desc: "Only the finest hotels and resorts are listed on our platform after rigorous quality checks.", icon: "1" },
                { title: "Best Price Guarantee", desc: "We ensure you get the most competitive rates for your luxury stay without compromising on quality.", icon: "2" },
                { title: "24/7 VIP Support", desc: "Our dedicated concierge team is always available to handle every detail of your journey.", icon: "3" }
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.2}>
                  <div className="p-8 bg-background rounded-3xl shadow-sm border border-primary/5 h-full transition-transform hover:-translate-y-2">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 text-accent text-2xl font-bold">
                      {item.icon}
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-bold text-primary">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Smart Deals Section */}
        <section className="bg-white py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-7xl overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Smart Deals for You</h2>
                <p className="text-gray-500 font-medium">Handpicked hotels with maximum discounts.</p>
              </div>
              <div className="flex bg-gray-50 p-1.5 rounded-2xl w-full md:w-fit overflow-x-auto no-scrollbar">
                 {["Under ₹999", "Near Landmark", "Highly Rated"].map((filter, index) => (
                    <button key={filter} className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-bold transition-all ${index === 0 ? 'bg-white shadow-md text-primary' : 'text-gray-400 hover:text-gray-600'}`}>
                      {filter}
                    </button>
                 ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
               {FEATURED_HOTELS.map((hotel, index) => (
                 <ScrollReveal key={hotel.id} delay={index * 0.1}>
                   <HotelCard {...hotel} />
                 </ScrollReveal>
               ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/hotel">
                <Button className="h-14 px-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl shadow-primary/20 transition-all active:scale-95">
                  View All Smart Stays <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* trust and safety banner */}
        <section className="bg-[#f3f5f7] py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="bg-white rounded-3xl md:rounded-[40px] p-6 md:p-16 shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center gap-8 md:gap-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="flex-1 space-y-6 relative z-10 text-center lg:text-left min-w-0 w-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-black text-xs uppercase tracking-widest">
                  <ShieldCheck className="h-4 w-4" /> 100% Safe & Secure
                </div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-primary leading-[1.1]">Your Trusted Travel Partner</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                   <div className="space-y-2">
                     <h4 className="font-black text-lg text-primary">Sanitized Stays</h4>
                     <p className="text-sm text-gray-500 font-medium leading-relaxed">Our hotels follow rigorous cleaning protocols ensuring your safety.</p>
                   </div>
                   <div className="space-y-2">
                     <h4 className="font-black text-lg text-primary">Instant Support</h4>
                     <p className="text-sm text-gray-500 font-medium leading-relaxed">Dedicated 24/7 concierge for every booking you make.</p>
                   </div>
                </div>
              </div>
              <div className="flex-shrink-0 relative w-full lg:w-[400px] h-[220px] md:h-[300px] rounded-[30px] overflow-hidden shadow-2xl">
                 <img src="/hero.png" alt="Trust" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-bottom p-8">
                    <div className="mt-auto">
                       <p className="text-white font-black text-2xl">Over 1M+ Happy Travelers</p>
                       <p className="text-white/80 text-sm font-bold">Joining thousands every day.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-24 bg-primary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6">Need Assistance?</h2>
                  <p className="text-lg md:text-xl text-white/70">Our concierge team is ready to help you plan your perfect stay.</p>
                </div>
              </ScrollReveal>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <ScrollReveal direction="right">
                  <div className="space-y-6 md:space-y-8 mb-8 md:mb-0">
                    <div className="flex items-center gap-4 md:gap-6 min-w-0">
                      <div className="p-3 md:p-4 bg-white/10 rounded-2xl flex-shrink-0">
                        <Phone className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] md:text-sm text-white/50 uppercase tracking-widest font-bold">Call Us</p>
                        <p className="text-lg md:text-xl font-bold">+91 90145 26685</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 md:gap-6 min-w-0">
                      <div className="p-3 md:p-4 bg-white/10 rounded-2xl flex-shrink-0">
                        <Mail className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] md:text-sm text-white/50 uppercase tracking-widest font-bold">Email Us</p>
                        <p className="text-base md:text-xl font-bold truncate">concierge@stayvago.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 md:gap-6 min-w-0">
                      <div className="p-3 md:p-4 bg-white/10 rounded-2xl flex-shrink-0">
                        <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] md:text-sm text-white/50 uppercase tracking-widest font-bold">Visit Us</p>
                        <p className="text-base md:text-xl font-bold">Heritage Square, Jaipur</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal direction="left">
                  <div className="bg-white rounded-3xl p-6 md:p-8 text-primary space-y-4 md:space-y-6 text-center">
                    <h3 className="text-xl md:text-2xl font-serif font-bold">Send a Message</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Fill out our quick contact form and we&apos;ll get back to you within 2 hours.</p>
                    <Link href="/contact">
                      <Button className="w-full rounded-2xl h-12 md:h-14 text-base md:text-lg font-bold">
                        Open Contact Form
                      </Button>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
