"use client";

import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  ShieldCheck, 
  LayoutDashboard, 
  Settings, 
  Users, 
  LogOut,
  Bell,
  Search,
  AlertCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sidebarLinks = [
  { name: "Admin Home", href: "/admin", icon: LayoutDashboard },
  { name: "Approve Hotels", href: "/admin/approvals", icon: ShieldCheck },
  { name: "Manage Vendors", href: "/admin/vendors", icon: Users },
  { name: "Transactions", href: "/admin/transactions", icon: BarChart3 },
  { name: "System Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-white flex flex-col h-full shadow-2xl">
        <div className="p-8">
          <Link href="/" className="flex items-center space-x-3">
             <div className="h-18 w-18 rounded-2xl overflow-hidden flex items-center justify-center p-2">
                <Image 
                  src="/narsimha-logo.png" 
                  alt="StayVago Hotels Logo" 
                  width={80} 
                  height={80} 
                  className="h-full w-auto object-contain"
                />
             </div>
             <span className="text-xl font-serif font-bold tracking-tight">Super Admin</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-8">
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
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                )}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/5">
          <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl">
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b flex items-center justify-between px-8">
          <div className="relative w-96 font-sans">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input placeholder="Search hotels, vendors, transactions..." className="pl-10 rounded-full bg-slate-100 border-none" />
          </div>

          <div className="flex items-center space-x-4">
             <div className="flex items-center space-x-2 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full border border-amber-100 text-sm font-bold">
                <AlertCircle className="h-4 w-4" />
                <span>4 Pending Approvals</span>
             </div>
             <Button variant="ghost" size="icon" className="relative rounded-full">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white" />
             </Button>
             <div className="flex items-center space-x-3 pl-4 border-l">
                <div className="text-right">
                   <p className="text-sm font-bold">Admin Portal</p>
                   <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Master Control</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary text-white font-bold flex items-center justify-center">
                   A
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
