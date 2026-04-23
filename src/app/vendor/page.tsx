"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  CalendarCheck, 
  IndianRupee, 
  TrendingUp,
  ArrowUpRight,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    title: "Total Bookings",
    value: "1,284",
    change: "+12.5%",
    icon: CalendarCheck,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Total Revenue",
    value: "₹8.42L",
    change: "+18.2%",
    icon: IndianRupee,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Active Hotels",
    value: "4",
    change: "0%",
    icon: Building2,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Occupancy Rate",
    value: "78%",
    change: "+4.1%",
    icon: TrendingUp,
    color: "bg-orange-500/10 text-orange-500",
  },
];

const recentBookings = [
  { id: "#BK1042", hotel: "The Grand Palace", guest: "Amit Shah", date: "21 Apr 2026", status: "Confirmed", amount: "₹31,000" },
  { id: "#BK1043", hotel: "Ocean Breeze Resort", guest: "Sneha Kapoor", date: "20 Apr 2026", status: "Pending", amount: "₹17,800" },
  { id: "#BK1044", hotel: "Himalayan Retreat", guest: "Vikram Seth", date: "19 Apr 2026", status: "Completed", amount: "₹12,800" },
];

export default function VendorOverview() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
         <div>
            <h1 className="text-4xl font-serif font-bold text-primary">Overview</h1>
            <p className="text-muted-foreground mt-1">Welcome back, here&apos;s what&apos;s happening with your hotels today.</p>
         </div>
         <Button className="rounded-full px-6">
            <TrendingUp className="mr-2 h-4 w-4" /> Download Report
         </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="rounded-3xl border-none shadow-sm overflow-hidden bg-background">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-2xl ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <span className="flex items-center text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                  {stat.change} <ArrowUpRight className="ml-1 h-3 w-3" />
                </span>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground font-medium">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Bookings List */}
        <Card className="lg:col-span-2 rounded-3xl border-none shadow-sm bg-background overflow-hidden">
          <CardHeader className="p-8 border-b border-primary/5">
             <div className="flex items-center justify-between">
                <CardTitle className="font-serif text-xl font-bold text-primary">Recent Bookings</CardTitle>
                <Button variant="ghost" className="text-secondary text-sm">View all</Button>
             </div>
          </CardHeader>
          <CardContent className="p-0">
             <div className="divide-y divide-primary/5">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-6 hover:bg-primary/5 transition-colors">
                     <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                           <Clock className="h-5 w-5" />
                        </div>
                        <div>
                           <p className="font-bold text-primary">{booking.guest}</p>
                           <p className="text-xs text-muted-foreground">{booking.hotel} • {booking.id}</p>
                        </div>
                     </div>
                     <div className="text-right">
                        <p className="font-bold text-primary">{booking.amount}</p>
                        <p className={`text-[10px] font-bold uppercase ${
                          booking.status === 'Confirmed' ? 'text-green-500' : 
                          booking.status === 'Pending' ? 'text-orange-500' : 'text-blue-500'
                        }`}>{booking.status}</p>
                     </div>
                  </div>
                ))}
             </div>
          </CardContent>
        </Card>

        {/* Quick Actions / Tips */}
        <div className="space-y-6">
           <Card className="rounded-3xl bg-primary text-white border-none p-8 overflow-hidden relative">
              <TrendingUp className="absolute -right-8 -bottom-8 h-48 w-48 text-white/5" />
              <h3 className="text-xl font-serif font-bold relative z-10">Optimise your pricing</h3>
              <p className="mt-2 text-white/70 text-sm relative z-10 leading-relaxed">
                 Weekend bookings are up by 25%. Consider adjusting your seasonal pricing for the upcoming holidays.
              </p>
              <Button className="mt-6 w-full bg-accent text-primary font-bold rounded-2xl hover:bg-accent/90 relative z-10">
                 Apply Suggestions
              </Button>
           </Card>

           <Card className="rounded-3xl bg-secondary text-white border-none p-8 overflow-hidden relative">
              <h3 className="text-xl font-serif font-bold">Need assistance?</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                 Our dedicated vendor support manager is available 24/7 to help you manage your properties.
              </p>
              <Button variant="outline" className="mt-6 w-full border-white/20 text-white rounded-2xl hover:bg-white/10">
                 Chat with Support
              </Button>
           </Card>
        </div>
      </div>
    </div>
  );
}
