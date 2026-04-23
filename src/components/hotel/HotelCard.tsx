import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HotelCardProps {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  amenities: string[];
}

const HotelCard = ({ id, name, location, price, rating, image, amenities }: HotelCardProps) => {
  const discountedPrice = Math.floor(price * 0.4); // 60% off for OYO feel
  
  return (
    <Card className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col md:flex-row h-auto md:h-[280px] mb-6 w-full max-w-full">
      {/* Image Section */}
      <Link href={`/hotel/${id}`} className="relative w-full md:w-[320px] h-56 md:h-full overflow-hidden flex-shrink-0 cursor-pointer">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
           <Badge className="bg-primary/90 text-white border-none backdrop-blur-sm px-3 py-1 font-bold text-[10px] uppercase tracking-wider rounded-lg shadow-xl">
             StayVago Verified
           </Badge>
           <Badge className="bg-secondary text-white border-none px-3 py-1 font-bold text-[10px] uppercase tracking-wider rounded-lg shadow-xl">
             Best Seller
           </Badge>
        </div>
        {/* Gallery Indicator like OYO */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 bg-black/30 backdrop-blur-md rounded-full border border-white/20">
           {[1,2,3,4].map(i => (
             <div key={i} className={`h-1.5 w-1.5 rounded-full ${i === 1 ? 'bg-primary' : 'bg-white/60'}`} />
           ))}
        </div>
      </Link>
      
      {/* Content Section */}
      <CardContent className="flex-1 p-6 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-2 min-w-0">
            <div className="space-y-1 min-w-0 flex-1">
              <Link href={`/hotel/${id}`}>
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 line-clamp-1 group-hover:text-primary transition-colors cursor-pointer">{name}</h3>
              </Link>
              <p className="text-sm text-gray-400 flex items-center gap-1 font-medium truncate">
                <MapPin className="h-3 w-3 text-secondary flex-shrink-0" /> <span className="truncate">{location}</span>
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <div className="flex items-center gap-1.5 bg-[#48944c] text-white px-2 py-1 rounded-md text-sm font-bold shadow-sm">
                 {rating} <Star className="h-3 w-3 fill-white" />
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase whitespace-nowrap">(1.2k)</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4">
             {amenities.slice(0, 5).map((amenity) => (
               <div key={amenity} className="flex items-center gap-2 text-gray-500">
                  <div className="p-1 bg-gray-50 rounded-md group-hover:bg-primary/5 transition-colors">
                     <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  </div>
                  <span className="text-[11px] font-bold">{amenity}</span>
               </div>
             ))}
             {amenities.length > 5 && <span className="text-[11px] font-bold text-primary">+ {amenities.length - 5} more</span>}
          </div>

          <div className="flex items-center gap-2 bg-accent/30 p-2 rounded-lg w-fit">
             <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
             <span className="text-[11px] font-bold text-primary">Last booked 4 hours ago</span>
          </div>
        </div>
        
        <div className="mt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pt-4 border-t border-gray-100">
          <div className="flex flex-col min-w-0">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 font-sans tracking-tight">₹{discountedPrice}</span>
              <span className="text-xs sm:text-sm text-gray-400 line-through font-medium">₹{price}</span>
              <span className="text-[10px] sm:text-xs font-black text-secondary bg-secondary/10 px-2 py-0.5 rounded">60% OFF</span>
            </div>
            <span className="text-[9px] sm:text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-tighter">Per Room / Night + Taxes</span>
          </div>
          
          <div className="flex gap-2 h-10 sm:h-11 flex-shrink-0">
            <Link href={`/hotel/${id}`} className="hidden md:flex items-center justify-center px-5 border-2 border-gray-100 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-95">
              View Info
            </Link>
            <Link href={`/hotel/${id}`} className="flex-1 sm:flex-none flex items-center justify-center px-4 sm:px-6 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-xs sm:text-sm shadow-xl shadow-primary/20 active:scale-95 transition-all group/btn whitespace-nowrap">
              Book Now
              <ArrowRight className="ml-1 h-3.5 w-3.5 sm:ml-1.5 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
