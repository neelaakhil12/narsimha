"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

const CITIES = [
  "Bangalore",
  "Chennai",
  "Delhi",
  "Gurgaon",
  "Hyderabad",
  "Kolkata",
  "Mumbai",
  "Noida",
  "Pune",
  "All Cities"
];

const LocationBar = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-2 hidden md:block sticky top-[80px] z-40 shadow-sm backdrop-blur-md bg-white/90">
      <div className="container mx-auto px-4 max-w-7xl">
        <ul className="flex items-center space-x-8 overflow-x-auto no-scrollbar py-1">
          {CITIES.map((city) => (
            <li key={city} className="flex-shrink-0">
              <Link 
                href={`/hotel?city=${city.toLowerCase()}`}
                className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-primary transition-all cursor-pointer group relative py-1"
              >
                <span className="relative z-10">{city}</span>
                {city !== "All Cities" && <ChevronDown className="h-3 w-3 text-gray-300 group-hover:text-primary transition-colors" />}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationBar;
