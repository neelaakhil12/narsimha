"use client";

import Navbar from "@/components/common/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowRight, Heart, History } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { generateInvoice } from "@/lib/invoice";

const RECENT_BOOKINGS = [
  {
    id: "BK-92834",
    hotel: "The Grand Palace",
    location: "Udaipur",
    checkIn: "25 Apr 2026",
    status: "Upcoming",
    image: "/hotels/palace.png",
  },
];

const WISHLIST = [
  {
    id: "2",
    name: "Ocean Breeze Resort",
    location: "South Goa",
    price: 8900,
    image: "/hotels/beach.png",
  }
];

export default function CustomerDashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-primary/5">
      <Navbar />
      
      <main className="flex-1 container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
           <div>
              <h1 className="text-4xl font-serif font-bold text-primary">Welcome, Traveler</h1>
              <p className="text-muted-foreground mt-2">Manage your bookings and explore your curated wishlist.</p>
           </div>
           <Link href="/hotel">
             <Button className="rounded-full px-8 h-12 shadow-lg">
                Book Your Next Stay <ArrowRight className="ml-2 h-4 w-4" />
             </Button>
           </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           {/* Bookings Section */}
           <div className="lg:col-span-2 space-y-8">
              <section>
                 <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-serif font-bold text-primary flex items-center">
                       <Calendar className="mr-2 h-6 w-6" /> Upcoming Stays
                    </h2>
                    <Button variant="ghost" className="text-secondary">View all</Button>
                 </div>

                 {RECENT_BOOKINGS.length > 0 ? (
                   RECENT_BOOKINGS.map((booking) => (
                      <Card key={booking.id} className="rounded-3xl border-none shadow-sm overflow-hidden bg-background group">
                         <CardContent className="p-0 flex flex-col md:flex-row">
                            <div className="md:w-48 h-40 relative overflow-hidden">
                               <Image src={booking.image} alt={booking.hotel} fill className="object-cover" />
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-between">
                               <div className="flex justify-between items-start">
                                  <div>
                                     <h3 className="text-xl font-bold text-primary">{booking.hotel}</h3>
                                     <p className="flex items-center text-sm text-muted-foreground mt-1">
                                        <MapPin className="mr-1 h-3 w-3" /> {booking.location}
                                     </p>
                                  </div>
                                  <span className="bg-green-500/10 text-green-600 text-[10px] uppercase font-black px-3 py-1 rounded-full tracking-widest">{booking.status}</span>
                               </div>
                               <div className="mt-4 flex items-center justify-between border-t pt-4 border-primary/5">
                                  <div className="flex items-center text-sm text-muted-foreground">
                                     <Clock className="mr-2 h-4 w-4" />
                                     Check-in: <span className="font-bold text-primary ml-1">{booking.checkIn}</span>
                                  </div>
                                  <Button 
                                    size="sm" 
                                    variant="outline" 
                                    className="rounded-full"
                                    onClick={() => generateInvoice({
                                      bookingId: booking.id,
                                      hotelName: booking.hotel,
                                      customerName: "Rajesh Kumar",
                                      checkIn: booking.checkIn,
                                      checkOut: "27 Apr 2026",
                                      totalPrice: 15500
                                    })}
                                  >
                                    Download Invoice
                                  </Button>
                               </div>
                            </div>
                         </CardContent>
                      </Card>
                   ))
                 ) : (
                    <div className="text-center py-12 rounded-3xl bg-background border border-dashed">
                       <p className="text-muted-foreground">No upcoming bookings found.</p>
                    </div>
                 )}
              </section>

              <section>
                 <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-serif font-bold text-primary flex items-center">
                       <History className="mr-2 h-6 w-6" /> Past Stays
                    </h2>
                    <Button variant="ghost" className="text-secondary text-sm">Booking History</Button>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="rounded-2xl border-none shadow-sm p-4 bg-background/50 opacity-60">
                       <p className="text-sm italic text-muted-foreground">History is currently being synced...</p>
                    </Card>
                 </div>
              </section>
           </div>

           {/* Sidebar - Wishlist & Profile */}
           <div className="space-y-8">
              <section className="rounded-3xl bg-primary p-8 text-white shadow-xl relative overflow-hidden">
                 <div className="relative z-10">
                    <h3 className="text-xl font-serif font-bold">Your Profile</h3>
                    <div className="mt-6 flex items-center space-x-4">
                       <div className="h-16 w-16 rounded-2xl bg-accent flex items-center justify-center text-white text-2xl font-bold">
                          RK
                       </div>
                       <div>
                          <p className="text-lg font-bold">Rajesh Kumar</p>
                          <p className="text-sm text-white/60">rajesh.k@example.com</p>
                       </div>
                    </div>
                    <Button className="mt-8 w-full bg-white text-primary rounded-xl font-bold hover:bg-white/90">
                       Edit Profile
                    </Button>
                 </div>
              </section>

              <section className="bg-background rounded-3xl p-8 border shadow-sm">
                 <h3 className="text-xl font-serif font-bold text-primary flex items-center mb-6">
                    <Heart className="mr-2 h-5 w-5 text-accent fill-accent" /> Wishlist
                 </h3>
                 <div className="space-y-6">
                    {WISHLIST.map((item) => (
                       <div key={item.id} className="flex items-center space-x-4 group cursor-pointer border-b border-primary/5 pb-4">
                          <div className="h-16 w-16 relative rounded-xl overflow-hidden shrink-0">
                             <Image src={item.image} alt={item.name} fill className="object-cover" />
                          </div>
                          <div>
                             <h4 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">{item.name}</h4>
                             <p className="text-xs text-muted-foreground flex items-center">
                                <MapPin className="h-3 w-3 mr-1" /> {item.location}
                             </p>
                             <p className="text-sm font-bold mt-1">₹{item.price}</p>
                          </div>
                       </div>
                    ))}
                    <Button variant="ghost" className="w-full text-secondary text-sm font-bold">
                       View Complete Wishlist
                    </Button>
                 </div>
              </section>
           </div>

        </div>
      </main>
    </div>
  );
}
