"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Plus, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Eye
} from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const MOCK_VENDOR_HOTELS = [
  {
    id: "1",
    name: "The Grand Palace",
    location: "Udaipur, Rajasthan",
    status: "Approved",
    rooms: 12,
    todayBookings: 3,
    image: "/hotels/palace.png",
  },
  {
    id: "2",
    name: "Ocean Breeze Resort",
    location: "South Goa, Goa",
    status: "Approved",
    rooms: 24,
    todayBookings: 8,
    image: "/hotels/beach.png",
  },
  {
    id: "3",
    name: "Heritage Villa",
    location: "Jaipur, Rajasthan",
    status: "Pending",
    rooms: 6,
    todayBookings: 0,
    image: "/hero.png",
  }
];

export default function VendorHotelsPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
         <div>
            <h1 className="text-4xl font-serif font-bold text-primary">My Hotels</h1>
            <p className="text-muted-foreground mt-1">Manage and update your property listings.</p>
         </div>
         <Button className="rounded-full px-8 h-12 text-lg">
            <Plus className="mr-2 h-5 w-5" /> Add New Hotel
         </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {MOCK_VENDOR_HOTELS.map((hotel) => (
          <Card key={hotel.id} className="rounded-3xl border-none shadow-sm overflow-hidden bg-background group">
            <CardContent className="p-0 flex flex-col md:flex-row">
               {/* Hotel Image */}
               <div className="md:w-72 h-48 md:h-auto relative overflow-hidden">
                  <Image 
                    src={hotel.image} 
                    alt={hotel.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {hotel.status === 'Pending' && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
                       <Badge variant="outline" className="bg-white/90 text-primary border-none">Awaiting Approval</Badge>
                    </div>
                  )}
               </div>

               {/* Hotel Info */}
               <div className="flex-1 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                     <div>
                        <div className="flex items-center gap-3">
                           <h2 className="text-2xl font-serif font-bold text-primary">{hotel.name}</h2>
                           <Badge className={
                             hotel.status === 'Approved' ? 'bg-green-500/10 text-green-500 hover:bg-green-500/20 border-none' : 
                             'bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 border-none'
                           }>
                             {hotel.status}
                           </Badge>
                        </div>
                        <p className="flex items-center text-muted-foreground mt-1">
                          <MapPin className="mr-1 h-3 w-3" /> {hotel.location}
                        </p>
                     </div>
                     <DropdownMenu>
                       <DropdownMenuTrigger asChild>
                         <Button variant="ghost" size="icon" className="rounded-full"><MoreVertical className="h-5 w-5" /></Button>
                       </DropdownMenuTrigger>
                       <DropdownMenuContent align="end" className="rounded-2xl p-2 min-w-[160px]">
                         <DropdownMenuItem className="rounded-xl cursor-pointer"><Eye className="mr-2 h-4 w-4" /> View Stay</DropdownMenuItem>
                         <DropdownMenuItem className="rounded-xl cursor-pointer"><Edit className="mr-2 h-4 w-4" /> Edit Details</DropdownMenuItem>
                         <DropdownMenuItem className="rounded-xl cursor-pointer text-red-500"><Trash2 className="mr-2 h-4 w-4" /> Delete</DropdownMenuItem>
                       </DropdownMenuContent>
                     </DropdownMenu>
                  </div>

                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                     <div className="p-4 rounded-2xl bg-primary/5">
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Total Rooms</p>
                        <p className="text-xl font-bold text-primary mt-1">{hotel.rooms}</p>
                     </div>
                     <div className="p-4 rounded-2xl bg-primary/5">
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Today&apos;s Bookings</p>
                        <p className="text-xl font-bold text-primary mt-1">{hotel.todayBookings}</p>
                     </div>
                     <div className="col-span-2 flex items-center justify-end space-x-3">
                        <Button variant="outline" className="rounded-full px-6 border-primary/10 hover:bg-primary/5">Manage Rooms</Button>
                        <Button className="rounded-full px-6">View Bookings</Button>
                     </div>
                  </div>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
