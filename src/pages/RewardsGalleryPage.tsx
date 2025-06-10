import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Gift, CreditCard, ShoppingBag, Plane, Utensils, Film, Coffee, Search, CheckCircle } from "lucide-react";
import { CategoryFilter, defaultCategories } from "../components/CategoryFilter";

type RewardsGalleryPageProps = {
  userData: {
    isLoggedIn: boolean;
    name?: string;
  };
  onRewardSelect?: (rewardId: string) => void;
};

export const RewardsGalleryPage = ({ userData, onRewardSelect }: RewardsGalleryPageProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // All rewards data
  const allRewards = [
    {
      id: "1",
      title: "Amazon Gift Voucher",
      description: "₹500 shopping voucher redeemable on Amazon.in",
      pointsRequired: 2500,
      imageSrc: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "shopping"
    },
    {
      id: "2",
      title: "Airport Lounge Access",
      description: "Complimentary access to premium airport lounges",
      pointsRequired: 5000,
      imageSrc: "https://images.unsplash.com/photo-1583418007992-a8e33a92e7ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "travel"
    },
    {
      id: "3",
      title: "Movie Tickets",
      description: "Buy 1 Get 1 Free on movie tickets at select theaters",
      pointsRequired: 1500,
      imageSrc: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "entertainment"
    },
    {
      id: "4",
      title: "Dining Discount",
      description: "20% off at premium restaurants across India",
      pointsRequired: 3000,
      imageSrc: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "dining"
    },
    {
      id: "5",
      title: "Coffee Shop Voucher",
      description: "Free coffee at premium coffee chains",
      pointsRequired: 1000,
      imageSrc: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "dining"
    },
    {
      id: "6",
      title: "Flipkart Voucher",
      description: "₹1000 shopping voucher for Flipkart",
      pointsRequired: 4000,
      imageSrc: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "shopping"
    },
    {
      id: "7",
      title: "Hotel Discount",
      description: "30% off on premium hotel bookings",
      pointsRequired: 6000,
      imageSrc: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "travel"
    },
    {
      id: "8",
      title: "Music Streaming",
      description: "3 months free premium music streaming",
      pointsRequired: 2000,
      imageSrc: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "entertainment"
    }
  ];
  
  // Filter rewards based on category and search query
  const filteredRewards = allRewards
    .filter(reward => {
      // Filter by category
      if (selectedCategory !== "all" && reward.category !== selectedCategory) {
        return false;
      }
      
      // Filter by search query if present
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        return (
          reward.title.toLowerCase().includes(query) ||
          reward.description.toLowerCase().includes(query)
        );
      }
      
      return true;
    });

  return (
    <div className="pt-[88px]">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#97144D] to-[#b01d5c] py-12 px-4">
        <div className="max-w-5xl mx-auto text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Axis Bank Rewards Gallery</h1>
          <p className="text-white/90 max-w-2xl mb-8">
            Discover a world of exclusive benefits and rewards designed for Axis Bank customers. Browse through our collection of vouchers, deals, and premium experiences.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <input
              type="text"
              placeholder="Search rewards..."
              className="w-full py-3 px-5 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/30"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto py-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              icon={<Gift className="h-6 w-6 text-[#97144D]" />}
              value="250+"
              label="Available Rewards"
            />
            <StatCard
              icon={<CreditCard className="h-6 w-6 text-[#97144D]" />}
              value="20K+"
              label="Happy Customers"
            />
            <StatCard
              icon={<CheckCircle className="h-6 w-6 text-[#97144D]" />}
              value="50K+"
              label="Rewards Redeemed"
            />
          </div>
        </div>
      </div>
      
      {/* Category Filter and Reward Grid */}
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Category Filter */}
          <div className="mb-8">
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              variant="default"
            />
          </div>
          
          {/* Rewards Grid */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredRewards.map((reward) => (
                <RewardCard key={reward.id} reward={reward} onSelect={onRewardSelect} />
              ))}
            </div>
            
            {filteredRewards.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Coffee className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium mb-2">No rewards found</h3>
                <p className="text-gray-500">
                  We couldn't find any rewards matching your criteria. Please try a different category or search term.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Reward Card Component
const RewardCard = ({ reward, onSelect }: { reward: any; onSelect?: (rewardId: string) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden hover:shadow-md transition-shadow group">
        <div className="relative h-40">
          <ImageWithFallback 
            src={reward.imageSrc}
            alt={reward.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-0 right-0 bg-[#97144D] text-white text-xs font-medium px-2 py-1 m-2 rounded">
            {reward.pointsRequired.toLocaleString()} pts
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold mb-1">{reward.title}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{reward.description}</p>
          
          <button 
            onClick={() => onSelect?.(reward.id)}
            className="w-full bg-white border border-[#97144D] text-[#97144D] rounded py-1.5 text-sm font-medium hover:bg-[#97144D] hover:text-white transition-colors"
          >
            View Details
          </button>
        </div>
      </Card>
    </motion.div>
  );
};

// Stat Card Component
const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg border border-gray-100">
      <div className="flex-shrink-0 mr-4 bg-[#f9f3f6] p-3 rounded-full">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
};