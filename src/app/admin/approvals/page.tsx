"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  MapPin, 
  Check, 
  X, 
  ExternalLink,
  Calendar,
  User as UserIcon
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const PENDING_HOTELS = [
  {
    id: "3",
    name: "Heritage Villa",
    location: "Jaipur, Rajasthan",
    vendor: "Sanjay Singhania",
    submittedAt: "20 Apr 2026",
    image: "/hero.png",
  },
  {
    id: "4",
    name: "Mountain Mist Lodge",
    location: "Shimla, HP",
    vendor: "Anita Desai",
    submittedAt: "19 Apr 2026",
    image: "/hotels/palace.png",
  }
];

export default function AdminApprovalsPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
         <div>
            <h1 className="text-4xl font-serif font-bold text-slate-900">Pending Approvals</h1>
            <p className="text-slate-500 mt-1 mr-2">Review and approve new hotel listings entering the platform.</p>
         </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {PENDING_HOTELS.map((hotel) => (
          <Card key={hotel.id} className="rounded-3xl border-none shadow-sm overflow-hidden bg-white">
            <CardContent className="p-0 flex flex-col md:flex-row">
               {/* Hotel Image */}
               <div className="md:w-64 h-48 md:h-auto relative">
                  <Image 
                    src={hotel.image} 
                    alt={hotel.name} 
                    fill 
                    className="object-cover" 
                  />
               </div>

               {/* Request Info */}
               <div className="flex-1 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                     <div>
                        <h2 className="text-2xl font-serif font-bold text-slate-900">{hotel.name}</h2>
                        <p className="flex items-center text-slate-500 mt-1">
                          <MapPin className="mr-1 h-3 w-3" /> {hotel.location}
                        </p>
                     </div>
                     <Button variant="ghost" className="text-primary hover:bg-primary/5 rounded-xl">
                        <ExternalLink className="mr-2 h-4 w-4" /> Preview Details
                     </Button>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                           <UserIcon className="h-5 w-5" />
                        </div>
                        <div>
                           <p className="text-[10px] uppercase font-bold text-slate-400">Vendor</p>
                           <p className="text-sm font-bold text-slate-700">{hotel.vendor}</p>
                        </div>
                     </div>
                     <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                           <Calendar className="h-5 w-5" />
                        </div>
                        <div>
                           <p className="text-[10px] uppercase font-bold text-slate-400">Submitted</p>
                           <p className="text-sm font-bold text-slate-700">{hotel.submittedAt}</p>
                        </div>
                     </div>
                     <div className="flex items-center justify-end space-x-3">
                        <Button variant="outline" className="rounded-full px-6 border-red-100 text-red-500 hover:bg-red-50 hover:border-red-200">
                           <X className="mr-2 h-4 w-4" /> Reject
                        </Button>
                        <Button className="rounded-full px-8 bg-green-600 hover:bg-green-700">
                           <Check className="mr-2 h-4 w-4" /> Approve Listing
                        </Button>
                     </div>
                  </div>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {PENDING_HOTELS.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
           <div className="h-24 w-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
              <Check className="h-12 w-12" />
           </div>
           <h2 className="text-2xl font-serif font-bold text-slate-900">All caught up!</h2>
           <p className="text-slate-500 mt-2">There are no pending hotel approvals at the moment.</p>
        </div>
      )}
    </div>
  );
}
