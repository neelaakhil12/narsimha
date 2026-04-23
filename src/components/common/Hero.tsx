"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users, Navigation, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (location.trim()) {
      router.push(`/hotel?city=${encodeURIComponent(location.trim().toLowerCase())}`);
    } else {
      router.push("/hotel");
    }
  };

  const handleNearMe = () => {
    if ("geolocation" in navigator) {
      setLocation("Detecting Location...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In a real app, you'd reverse geocode here. 
          // For now, we'll simulate finding the city.
          setLocation("Current Location");
        },
        (error) => {
          setLocation("");
          console.error("Error detecting location", error);
        }
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="relative w-full">
      {/* Background Image with Overlay */}
      <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden">
        <Image
          src="/hero.png"
          alt="Luxury Hotel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Over 174,000+ hotels and homes across 35 countries
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Search Bar Block - Overlapping the Hero */}
      <div className="container mx-auto px-4 relative -mt-10 md:-mt-24 z-20 max-w-7xl">
        <div className="bg-white rounded-xl md:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-1.5 flex flex-col md:flex-row items-stretch md:items-center border border-gray-100 hover:shadow-[0_8px_35px_rgb(0,0,0,0.15)] transition-shadow">
          
          {/* Location Input */}
          <div className="flex-[1.5] flex items-center px-4 md:px-6 py-4 md:py-3 border-b md:border-b-0 md:border-r border-gray-100 group cursor-text">
            <div className="mr-3 p-2 bg-gray-50 rounded-full group-hover:bg-primary/5 transition-colors">
              <MapPin className="h-4 w-4 text-gray-400 group-hover:text-primary" />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Where to?</span>
              <input 
                type="text" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search by city, hotel, or neighborhood" 
                className="w-full outline-none text-sm font-bold text-primary placeholder:text-gray-300 placeholder:font-normal bg-transparent"
              />
            </div>
            <div 
              onClick={handleNearMe}
              className="flex items-center gap-1.5 ml-2 cursor-pointer hover:bg-primary/5 p-2 rounded-lg transition-colors flex-shrink-0 group/location"
            >
               <Navigation className="h-3 w-3 text-primary" />
               <span className="text-[10px] font-bold text-primary whitespace-nowrap">Near me</span>
            </div>
          </div>

          {/* Date Range Picker Placeholder */}
          <div className="flex-1 flex items-center px-4 py-4 md:py-3 border-b md:border-b-0 md:border-r border-gray-100 group cursor-pointer hover:bg-gray-50/50 transition-colors min-w-0">
            <div className="mr-3 p-2 bg-gray-50 rounded-full group-hover:bg-primary/5 transition-colors flex-shrink-0">
              <Calendar className="h-4 w-4 text-gray-400 group-hover:text-primary" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Dates</span>
              <span className="text-sm font-bold text-primary truncate">Fri, 24 Apr - Sat, 25 Apr</span>
            </div>
          </div>

          {/* Rooms and Guests Placeholder */}
          <div className="flex-1 flex items-center px-4 py-4 md:py-3 group cursor-pointer hover:bg-gray-50/50 transition-colors min-w-0">
            <div className="mr-3 p-2 bg-gray-50 rounded-full group-hover:bg-primary/5 transition-colors flex-shrink-0">
              <Users className="h-4 w-4 text-gray-400 group-hover:text-primary" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Guests</span>
              <span className="text-sm font-bold text-primary truncate">1 Room, 2 Guests</span>
            </div>
            <ChevronDown className="ml-auto h-4 w-4 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" />
          </div>

          {/* Search Button */}
          <div className="p-1.5">
            <Button 
              onClick={handleSearch}
              className="w-full md:w-auto h-14 md:px-14 rounded-xl md:rounded-full bg-secondary hover:bg-secondary/90 text-white font-bold text-lg border-none shadow-lg shadow-secondary/20 transition-all active:scale-95 group"
            >
              Search
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Trending Tags below search - Hidden on Desktop per user request */}
        <div className="mt-8 flex flex-col md:hidden animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
           <div className="flex items-center gap-2 text-gray-500 md:text-white/80">
             <div className="w-8 h-[1px] bg-gray-300 md:bg-white/30" />
             <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Trending Cities</span>
           </div>
           <div className="flex flex-wrap gap-2 md:gap-2.5">
             {["Bangalore", "Hyderabad", "Mumbai", "Delhi", "Chennai"].map((city) => (
                <div 
                  key={city} 
                  onClick={() => {
                    setLocation(city);
                    router.push(`/hotel?city=${city.toLowerCase()}`);
                  }}
                  className="px-4 py-2 bg-white md:bg-white/10 hover:bg-white/20 rounded-full text-[10px] md:text-xs font-bold text-gray-700 md:text-white border border-gray-200 md:border-white/20 cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-md md:shadow-none whitespace-nowrap"
                >
                  {city}
                </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
