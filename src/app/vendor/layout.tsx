"use client";

import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  Building2, 
  CalendarDays, 
  LayoutDashboard, 
  Settings, 
  Users, 
  LogOut,
  Bell,
  Search
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sidebarLinks = [
  { name: "Overview", href: "/vendor", icon: LayoutDashboard },
  { name: "My Hotels", href: "/vendor/hotels", icon: Building2 },
  { name: "Bookings", href: "/vendor/bookings", icon: CalendarDays },
  { name: "Guests", href: "/vendor/guests", icon: Users },
  { name: "Statistics", href: "/vendor/stats", icon: BarChart3 },
  { name: "Settings", href: "/vendor/settings", icon: Settings },
];

export default function VendorLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-primary/5 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-primary text-white flex flex-col h-full">
        <div className="p-8">
          <Link href="/" className="flex items-center space-x-3">
             <div className="h-18 w-18 bg-white rounded-2xl overflow-hidden flex items-center justify-center p-2 shadow-inner">
                <Image 
                  src="/logo.png" 
                  alt="StayVago Hotels Logo" 
                  width={80} 
                  height={80} 
                  className="h-full w-auto object-contain"
                />
             </div>
             <span className="text-xl font-serif font-bold">Vendor Pro</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-8">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all",
                  isActive 
                    ? "bg-accent text-primary font-bold shadow-lg" 
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/10">
          <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10 rounded-2xl">
            <LogOut className="mr-3 h-5 w-5" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-background border-b flex items-center justify-between px-8">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search bookings, hotels..." className="pl-10 rounded-full bg-primary/5 border-none" />
          </div>

          <div className="flex items-center space-x-4">
             <Button variant="ghost" size="icon" className="relative rounded-full">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-background" />
             </Button>
             <div className="flex items-center space-x-3 pl-4 border-l">
                <div className="text-right">
                   <p className="text-sm font-bold">Rajesh Kumar</p>
                   <p className="text-xs text-muted-foreground">Hotel Owner</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-accent text-primary font-bold flex items-center justify-center">
                   RK
                </div>
             </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
