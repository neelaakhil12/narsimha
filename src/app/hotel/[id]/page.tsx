"use client";

import Navbar from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, Star, Wifi, Coffee, Car, Wind, ShieldCheck, Share2, Heart, 
  Tv, Monitor, Power, ShowerHead, CheckCircle2, Languages, User
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const MOCK_HOTEL = {
  id: "1",
  name: "The Grand Palace",
  location: "Udaipur, Rajasthan",
  address: "Plot No. 12, Lake View Road, Near City Palace, Udaipur - 313001",
  description: "Experience the epitome of luxury at The Grand Palace. Overlooking the serene Lake Pichola, our heritage property offers world-class amenities, authentic Rajasthani architecture, and unparalleled hospitality. Perfect for royalty seeking a modern retreat.",
  price: 6200,
  originalPrice: 15500,
  rating: 4.9,
  reviews: 1240,
  images: [
    "/hotels/palace.png",
    "/hero.png",
    "/hotels/classic-room.png",
    "/hotels/deluxe-room.png",
    "/hotels/beach.png"
  ],
  amenities: [
    { name: "Free WiFi", icon: <Wifi className="h-5 w-5" /> },
    { name: "Breakfast Included", icon: <Coffee className="h-5 w-5" /> },
    { name: "Parking", icon: <Car className="h-5 w-5" /> },
    { name: "AC", icon: <Wind className="h-5 w-5" /> },
    { name: "Safe Stay", icon: <ShieldCheck className="h-5 w-5" /> },
    { name: "TV", icon: <Tv className="h-5 w-5" /> },
  ],
  rooms: [
    { 
      id: "r1", 
      name: "Classic", 
      price: 6200, 
      originalPrice: 15500,
      image: "/hotels/classic-room.png",
      amenities: ["AC", "TV", "WiFi", "Queen Bed", "Attached Washroom"]
    },
    { 
      id: "r2", 
      name: "Deluxe", 
      price: 8900, 
      originalPrice: 22000,
      image: "/hotels/deluxe-room.png",
      amenities: ["AC", "TV", "WiFi", "King Bed", "Mini Fridge", "Bathtub", "City View"]
    },
  ]
};

export default function HotelDetailsPage() {

  return (
    <div className="flex min-h-screen flex-col bg-gray-50/50 w-full max-w-full overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 pb-24">
        {/* Gallery Section */}
        <section className="bg-white border-b">
          <div className="container mx-auto py-6 px-4">
             <div className="grid grid-cols-1 md:grid-cols-12 gap-2 h-[300px] md:h-[450px]">
                <div className="md:col-span-8 relative rounded-xl md:rounded-l-2xl overflow-hidden group">
                   <Image src={MOCK_HOTEL.images[0]} alt={MOCK_HOTEL.name} fill className="object-cover transition-transform group-hover:scale-105 duration-700" />
                   <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
                </div>
                <div className="hidden md:grid md:col-span-4 grid-rows-2 gap-2">
                   <div className="relative rounded-tr-2xl overflow-hidden group">
                      <Image src={MOCK_HOTEL.images[1]} alt={MOCK_HOTEL.name} fill className="object-cover transition-transform group-hover:scale-105 duration-700" />
                      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
                   </div>
                   <div className="grid grid-cols-2 gap-2">
                      <div className="relative overflow-hidden group">
                         <Image src={MOCK_HOTEL.images[2]} alt={MOCK_HOTEL.name} fill className="object-cover transition-transform group-hover:scale-105 duration-700" />
                         <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
                      </div>
                      <div className="relative rounded-br-2xl overflow-hidden group cursor-pointer bg-black/40">
                         <Image src={MOCK_HOTEL.images[3]} alt={MOCK_HOTEL.name} fill className="object-cover opacity-60" />
                         <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">+12 More</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Content & Sidebar */}
        <section className="container mx-auto px-4 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-10">
              {/* Header Info */}
              <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">
                 <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-2">
                       <h1 className="text-3xl font-bold text-gray-800 tracking-tight">{MOCK_HOTEL.name}</h1>
                       <p className="text-gray-500 font-medium leading-relaxed">{MOCK_HOTEL.address}</p>
                       <div className="flex items-center gap-4 pt-2">
                          <button className="text-primary font-bold text-sm hover:underline">Locate on map</button>
                          <div className="h-1 w-1 rounded-full bg-gray-300" />
                          <div className="flex items-center gap-1 text-sm font-bold text-green-600">
                             <CheckCircle2 className="h-4 w-4" /> Couple Friendly
                          </div>
                       </div>
                    </div>
                    <div className="flex flex-col items-center gap-1 bg-[#48944c]/10 p-3 rounded-xl border border-[#48944c]/20">
                       <div className="flex items-center gap-1.5 text-[#48944c] text-xl font-black">
                          {MOCK_HOTEL.rating} <Star className="h-5 w-5 fill-[#48944c]" />
                       </div>
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{MOCK_HOTEL.reviews} Ratings</span>
                    </div>
                 </div>
              </div>

              {/* Amenities */}
              <div className="bg-white p-8 rounded-2xl border shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-8 border-b pb-4">Top Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-4">
                  {MOCK_HOTEL.amenities.map((amenity) => (
                    <div key={amenity.name} className="flex items-center gap-4 group">
                      <div className="p-3 bg-gray-50 rounded-xl text-gray-600 border border-gray-100 group-hover:bg-primary/5 group-hover:text-primary transition-all">
                        {amenity.icon}
                      </div>
                      <span className="text-sm font-bold text-gray-600">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-8 rounded-2xl border shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Description</h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {MOCK_HOTEL.description}
                </p>
              </div>

              {/* Room Categories - THE OYO EXPERIENCE */}
              <div id="rooms" className="space-y-6 scroll-mt-24">
                 <div className="flex items-center justify-between overflow-hidden">
                    <h3 className="text-xl md:text-2xl font-black text-gray-800 uppercase tracking-tight">Select Room</h3>
                    <div className="hidden md:block h-1 bg-primary/10 flex-1 ml-6 rounded-full" />
                 </div>
                
                <div className="space-y-6">
                  {MOCK_HOTEL.rooms.map((room) => (
                    <Card key={room.id} className="rounded-2xl overflow-hidden border shadow-md hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-0">
                         <div className="flex flex-col md:flex-row">
                            {/* Room Image */}
                            <div className="relative w-full md:w-[300px] h-56 md:h-auto overflow-hidden flex-shrink-0">
                               <Image src={room.image} alt={room.name} fill className="object-cover" />
                               <div className="absolute top-4 left-4">
                                  <Badge className="bg-white/90 text-primary border-none backdrop-blur-sm px-3 py-1 font-black text-[10px] uppercase tracking-wider rounded-lg shadow-xl">
                                     {room.name === "Deluxe" ? "Recommended" : "Saver"}
                                  </Badge>
                               </div>
                            </div>
                            
                            {/* Room Details */}
                            <div className="flex-1 p-6 flex flex-col justify-between">
                               <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                     <h4 className="text-2xl font-extrabold text-gray-800">{room.name}</h4>
                                     <div className="flex items-center gap-1 text-xs font-bold text-gray-400">
                                        <User className="h-3 w-3" /> Max {room.name === "Classic" ? "2" : "3"} Guests
                                     </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-2 gap-3">
                                     {room.amenities.map(item => (
                                        <div key={item} className="flex items-center gap-2 text-xs font-bold text-gray-500">
                                           <CheckCircle2 className="h-3 w-3 text-[#48944c]" /> {item}
                                        </div>
                                     ))}
                                  </div>
                               </div>

                               <div className="mt-8 pt-6 border-t border-dashed flex items-center justify-between gap-4">
                                  <div className="flex flex-col">
                                     <div className="flex items-baseline gap-1.5 sm:gap-2">
                                        <span className="text-2xl sm:text-3xl font-black text-gray-900">₹{room.price}</span>
                                        <span className="text-xs sm:text-sm text-gray-400 line-through font-bold">₹{room.originalPrice}</span>
                                     </div>
                                     <span className="text-[9px] sm:text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded w-fit mt-1">
                                        EXTRA SAVINGS
                                     </span>
                                  </div>
                                  <Button className="rounded-xl px-6 sm:px-12 h-12 sm:h-14 text-sm sm:text-lg font-black bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all active:scale-95">
                                     Select
                                  </Button>
                               </div>
                            </div>
                         </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="hidden lg:block lg:col-span-4 self-start sticky top-32">
               <div className="rounded-3xl border bg-white p-8 shadow-2xl space-y-8">
                  <div className="flex items-center justify-between border-b pb-6">
                     <h3 className="text-xl font-bold text-gray-800">Booking Details</h3>
                     <Badge variant="outline" className="text-primary border-primary font-bold">OYO Exclusive</Badge>
                  </div>
                  
                  <div className="space-y-6">
                     <div className="grid grid-cols-2 gap-0 border rounded-2xl overflow-hidden focus-within:ring-2 ring-primary/20 transition-all">
                        <div className="p-4 border-r hover:bg-gray-50 cursor-pointer transition-colors">
                           <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Check-in</label>
                           <div className="text-sm font-extrabold text-gray-800 mt-1">Thu, 25 Apr</div>
                        </div>
                        <div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                           <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Check-out</label>
                           <div className="text-sm font-extrabold text-gray-800 mt-1">Sat, 27 Apr</div>
                        </div>
                     </div>
                     
                     <div className="p-4 border rounded-2xl hover:bg-gray-50 cursor-pointer transition-colors">
                        <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Guests & Rooms</label>
                        <div className="text-sm font-extrabold text-gray-800 mt-1">2 Guests, 1 Room</div>
                     </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-2xl space-y-2">
                     <div className="flex justify-between text-sm">
                        <span className="text-gray-500 font-bold">Total Price (incl. taxes)</span>
                        <span className="text-gray-400 line-through font-bold">₹{MOCK_HOTEL.originalPrice}</span>
                     </div>
                     <div className="flex justify-between items-baseline">
                        <span className="text-3xl font-black text-gray-900">₹{MOCK_HOTEL.price}</span>
                        <span className="text-xs font-bold text-green-600">60% OFF applied</span>
                     </div>
                  </div>

                  <Button className="w-full h-16 text-xl font-black rounded-2xl bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30 group">
                    Continue to Book
                    <Share2 className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                  
                  <div className="flex items-center gap-3 justify-center">
                     <ShieldCheck className="h-5 w-5 text-gray-300" />
                     <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">Secure Payment Guaranteed</p>
                  </div>
               </div>
            </aside>

          </div>
        </section>
      </main>

      {/* Mobile Sticky Booking Bar - Moved up to avoid overlapping with MobileNav */}
      <div className="lg:hidden fixed bottom-[72px] left-0 right-0 bg-white border-t p-4 flex items-center justify-between z-40 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
         <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Price</span>
            <div className="flex items-baseline gap-2">
               <span className="text-2xl font-black text-gray-800">₹{MOCK_HOTEL.price}</span>
               <span className="text-xs text-gray-400 line-through">₹{MOCK_HOTEL.originalPrice}</span>
            </div>
         </div>
         <Button className="px-8 h-12 text-lg font-black rounded-xl shadow-xl shadow-primary/20">
            Continue
         </Button>
      </div>
    </div>
  );
}
