"use client";

import Navbar from "@/components/common/Navbar";
import HotelCard from "@/components/hotel/HotelCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";

const MOCK_HOTELS = [
  {
    id: "1",
    name: "The Grand Palace",
    location: "Udaipur, Rajasthan",
    price: 6200,
    rating: 4.9,
    image: "/hotels/palace.png",
    amenities: ["Spa", "Infinite Pool", "Fine Dining", "Lakeside View"],
  },
  {
    id: "2",
    name: "Ocean Breeze Resort",
    location: "South Goa, Goa",
    price: 8900,
    rating: 4.7,
    image: "/hotels/beach.png",
    amenities: ["Beach Access", "Gym", "Bar", "Water Sports"],
  },
  {
    id: "3",
    name: "Himalayan Retreat",
    location: "Manali, Himachal Pradesh",
    price: 3400,
    rating: 4.8,
    image: "/hero.png",
    amenities: ["Mountain View", "Fireplace", "Yoga Center", "Trekking"],
  },
];

export default function HotelSearchPage() {
  const [priceRange, setPriceRange] = useState([2000, 50000]);
  const [showFilters, setShowFilters] = useState(false);
  const searchParams = useSearchParams();
  const cityQuery = searchParams.get("city")?.toLowerCase() || "";

  const filteredHotels = useMemo(() => {
    if (!cityQuery) return MOCK_HOTELS;
    return MOCK_HOTELS.filter(hotel =>
      hotel.location.toLowerCase().includes(cityQuery) ||
      hotel.name.toLowerCase().includes(cityQuery)
    );
  }, [cityQuery]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 bg-primary/5">
        <div className="container mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">

          {/* Mobile Filter Toggle */}
          <div className="flex md:hidden mb-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 rounded-full text-sm"
            >
              <SlidersHorizontal className="h-4 w-4" />
              {showFilters ? "Hide" : "Show"} Filters
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">

            {/* Filters Sidebar — hidden on mobile unless toggled */}
            <aside
              className={`w-full md:w-72 lg:w-80 flex-shrink-0 space-y-8 ${
                showFilters ? "block" : "hidden"
              } md:block`}
            >
              <div className="rounded-3xl bg-background p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold flex items-center">
                    <SlidersHorizontal className="mr-2 h-5 w-5" /> Filters
                  </h3>
                  <button className="text-sm text-secondary hover:underline">
                    Clear all
                  </button>
                </div>

                {/* Price Range */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm">Price Range</h4>
                  <div className="pt-2">
                    <Slider
                      defaultValue={[2000, 50000]}
                      max={100000}
                      step={1000}
                      onValueChange={(val) => setPriceRange(val)}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}+</span>
                  </div>
                </div>

                <div className="border-t my-6" />

                {/* Star Rating */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm">Star Rating</h4>
                  {[5, 4, 3].map((star) => (
                    <div key={star} className="flex items-center space-x-2">
                      <Checkbox id={`star-${star}`} />
                      <label
                        htmlFor={`star-${star}`}
                        className="text-sm font-medium"
                      >
                        {star} Stars
                      </label>
                    </div>
                  ))}
                </div>

                <div className="border-t my-6" />

                {/* Amenities */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm">Amenities</h4>
                  {["WiFi", "AC", "Pool", "Parking", "Spa"].map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox id={amenity} />
                      <label htmlFor={amenity} className="text-sm font-medium">
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-8 rounded-full">
                  Apply Filters
                </Button>
              </div>
            </aside>

            {/* Results Section */}
            <section className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
                <div className="min-w-0">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                    {cityQuery
                      ? `Hotels in ${
                          cityQuery.charAt(0).toUpperCase() + cityQuery.slice(1)
                        }`
                      : "Recommended Hotels"}
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Found {filteredHotels.length} matches for your search
                  </p>
                </div>

                <div className="relative w-full sm:w-64 md:w-80 flex-shrink-0">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or area..."
                    className="pl-10 rounded-full bg-background"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {filteredHotels.length > 0 ? (
                  filteredHotels.map((hotel) => (
                    <HotelCard key={hotel.id} {...hotel} />
                  ))
                ) : (
                  <div className="py-20 text-center space-y-4">
                    <div className="bg-gray-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto">
                      <Search className="h-10 w-10 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      No hotels found in &quot;{cityQuery}&quot;
                    </h3>
                    <p className="text-gray-500">
                      Try searching for a different city or removing filters.
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
