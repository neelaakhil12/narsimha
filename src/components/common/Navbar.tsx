"use client";

import { Search, User, MapPin, ChevronDown, Navigation } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";
import LocationDrawer from "./LocationDrawer";

const Navbar = () => {
  const pathname = usePathname();
  const [location, setLocation] = useState<string>("Near You");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isVisible = useScrollVisibility();

  const navLinks = [
    { name: "Home", href: "/", icon: false },
    { name: "About", href: "/about", icon: false },
    { name: "Services", href: "/#services", icon: false },
    { name: "Support", href: "/contact", icon: true },
  ];

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -120 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white text-primary shadow-sm"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Desktop Layout */}
        <div className="hidden lg:flex h-20 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center">
              <Image 
                src="/narsimha-logo.png" 
                alt="StayVago Hotels Logo" 
                width={160} 
                height={160} 
                className="h-16 w-auto object-contain" 
              />
            </Link>

            {/* Location Picker - OYO Style */}
            <div className="flex items-center space-x-2 cursor-pointer border-l border-gray-200 pl-8 group" onClick={() => setIsDrawerOpen(true)}>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-bold text-primary group-hover:text-secondary transition-colors">
                    {location}
                  </span>
                  <ChevronDown className="h-3 w-3 text-gray-400 group-hover:text-secondary" />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Right Nav - OYO Style Utility Links */}
          <div className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-bold transition-colors hover:bg-gray-50 rounded-md flex items-center gap-2",
                  "text-primary/80 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Login / Signup Button */}
            <Link href="/auth/login" className="ml-4">
              <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer group">
                <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <User className="h-4 w-4" />
                </div>
                <span className="text-sm font-bold text-primary">Login / Signup</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden h-16 items-center justify-between relative w-full px-2 overflow-hidden">
          <Link href="/" className="flex-shrink-0">
             <Image 
                src="/narsimha-logo.png" 
                alt="StayVago Hotels Logo" 
                width={140} 
                height={140} 
                className="h-14 w-auto object-contain"
              />
          </Link>
          
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Button 
                variant="ghost" 
                size="icon" 
                className="text-primary hover:bg-gray-100 rounded-full h-10 w-10"
                onClick={() => setIsDrawerOpen(true)}
              >
                <Search className="h-5 w-5" />
            </Button>
            <Link href="/auth/login" className="p-2">
              <User className="h-6 w-6 text-primary" />
            </Link>
          </div>
        </div>
      </div>

      <LocationDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        onSelect={(loc) => {
          setLocation(loc);
          setIsDrawerOpen(false);
        }}
      />
    </motion.nav>
  );
};

export default Navbar;
