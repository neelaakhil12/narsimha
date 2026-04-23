"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Info, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";

const MOBILE_LINKS = [
  { name: "Home", href: "/", icon: Home },
  { name: "Hotels", href: "/hotel", icon: Search },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Phone },
];

export default function MobileNav() {
  const pathname = usePathname();
  const isVisible = useScrollVisibility();

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 block md:hidden"
    >
      <div className="bg-background/90 backdrop-blur-md border-t border-primary/10 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto max-w-lg px-6 py-3 flex items-center justify-between">
          {MOBILE_LINKS.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex flex-col items-center group relative pt-1"
              >
                <div 
                  className={cn(
                    "p-2 rounded-2xl transition-all duration-300",
                    isActive 
                      ? "bg-primary text-white shadow-lg shadow-primary/20 scale-110" 
                      : "text-muted-foreground group-hover:text-primary group-hover:bg-primary/5"
                  )}
                >
                  <Icon className={cn("h-6 w-6", isActive ? "stroke-[2.5]" : "stroke-[1.5]")} />
                </div>
                <span className={cn(
                  "text-[10px] mt-1 font-bold uppercase tracking-wider transition-colors duration-300",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                )}>
                  {link.name}
                </span>
                
                {isActive && (
                  <motion.div 
                    layoutId="mobile-indicator"
                    className="absolute -bottom-1 h-1 w-1 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
