"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Search, 
  MapPin, 
  PlusSquare, 
  ChevronRight, 
  Clock, 
  MoreVertical,
  Navigation,
  MessageSquare
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LocationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (location: string) => void;
}

const LocationDrawer = ({ isOpen, onClose, onSelect }: LocationDrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 z-[101] flex h-[90vh] flex-col rounded-t-[2.5rem] bg-[#F8F9FA] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center space-x-4 px-6 py-6 border-b border-gray-100 bg-white">
              <button onClick={onClose} className="p-2 -ml-2 text-gray-800">
                <ChevronRight className="h-6 w-6 rotate-180" />
              </button>
              <h2 className="text-xl font-bold text-gray-900">Select Your Location</h2>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
              {/* Search Bar */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400 group-focus-within:text-accent transition-colors" />
                </div>
                <Input 
                  placeholder="Search an area or address" 
                  className="h-14 pl-12 rounded-2xl border-gray-200 bg-white text-base shadow-sm focus:ring-accent transition-all"
                />
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-3 gap-4">
                <QuickActionCard 
                  icon={<Navigation className="h-5 w-5 text-orange-500" />}
                  label="Use Current Location"
                />
                <QuickActionCard 
                  icon={<PlusSquare className="h-5 w-5 text-orange-500" />}
                  label="Add New Address"
                />
                <QuickActionCard 
                  icon={<MessageSquare className="h-5 w-5 text-green-500" />}
                  label="Request Address"
                />
              </div>

              {/* Saved Addresses */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest px-2">Saved Addresses</h3>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                  <AddressItem 
                    title="Codtech website..."
                    address="Plot No 81, Near Water Tank Chaitanya Hill, Chaitanya Hills..."
                    distance="6 m"
                    icon={<Navigation className="h-4 w-4" />}
                    selected
                  />
                  <AddressItem 
                    title="Home"
                    address="Plot No 51, Hasthinapuram Central, Hastinapuram Central..."
                    distance="1.9 km"
                    icon={<MapPin className="h-4 w-4" />}
                  />
                  <AddressItem 
                    title="Home"
                    address="105, 4, Hanuman Nagar, Badangpet, Hyderabad, Telan..."
                    distance="1.6 km"
                    icon={<MapPin className="h-4 w-4" />}
                  />
                  <button className="w-full py-4 text-accent font-bold flex items-center justify-center space-x-1 border-t border-gray-50 hover:bg-gray-50 transition-colors">
                    <span>View all</span>
                    <ChevronRight className="h-4 w-4 rotate-90" />
                  </button>
                </div>
              </div>

              {/* Recently Searched */}
              <div className="space-y-4 pb-12">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest px-2">Recently Searched</h3>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                  <RecentItem title="Hari Hara Puram" distance="2.6 km" />
                  <RecentItem title="Hanuman Nagar" distance="1.8 km" />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const QuickActionCard = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <button className="flex flex-col items-center justify-center p-4 bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-accent transition-all text-center space-y-2">
    <div className="p-2 bg-gray-50 rounded-xl">{icon}</div>
    <span className="text-[11px] font-bold leading-tight text-gray-700">{label}</span>
  </button>
);

const AddressItem = ({ title, address, distance, icon, selected }: any) => (
  <div className="flex items-start space-x-4 p-5 hover:bg-gray-50 transition-colors cursor-pointer group">
    <div className="flex flex-col items-center justify-center p-3 bg-gray-100 rounded-xl group-hover:bg-white transition-colors">
      {icon}
      <span className="text-[10px] font-bold mt-1">{distance}</span>
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center space-x-2">
        <h4 className="font-bold text-gray-900 truncate">{title}</h4>
        {selected && (
          <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">SELECTED</span>
        )}
      </div>
      <p className="text-sm text-gray-500 line-clamp-2 mt-1 leading-relaxed">{address}</p>
    </div>
    <button className="p-2 text-gray-400 hover:text-gray-900">
      <MoreVertical className="h-5 w-5" />
    </button>
  </div>
);

const RecentItem = ({ title, distance }: { title: string, distance: string }) => (
  <div className="flex items-center space-x-4 p-5 hover:bg-gray-50 transition-colors cursor-pointer group">
    <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-white transition-colors">
      <Clock className="h-5 w-5 text-gray-500" />
      <span className="text-[10px] font-bold mt-1 text-center block leading-none">{distance}</span>
    </div>
    <div className="flex-1">
      <h4 className="font-bold text-gray-900">{title}</h4>
      <p className="text-xs text-gray-400 mt-0.5">Hyd, Telangana, India</p>
    </div>
  </div>
);

export default LocationDrawer;
