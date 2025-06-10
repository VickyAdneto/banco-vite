import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Gift, 
  Rocket, 
  Sparkles, 
  ChevronRight, 
  Check, 
  Star,
  ShoppingBag,
  CreditCard,
  Utensils,
  Plane,
  Film
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AxisButton } from "../components/AxisButton";
import { BurgundyActivationHero } from "../components/BurgundyActivationHero";

type RewardActivationPageProps = {
  userData: {
    isLoggedIn: boolean;
    name?: string;
    segment?: string;
    persona?: string;
  };
  onRewardSelect?: (rewardId: string) => void;
};

export const RewardActivationPage = ({ userData, onRewardSelect }: RewardActivationPageProps) => {
  // State for which game section is active (if any)
  const [activeGameSection, setActiveGameSection] = useState<string | null>(null);
  
  // Dummy user data for the BurgundyActivationHero component
  const enhancedUserData = {
    name: userData.name || "Valued Customer",
    segment: userData.segment || "Burgundy",
    totalPoints: 350,
    totalSavings: 1250,
    currentTier: "Bronze",
    nextTier: "Silver",
    progressPercentage: 70,
    pointsToNextTier: 150,
    memberSince: "January 2025",
    activatedRewards: 3
  };
  
  // Sample activation offers
  const activationOffers = [
    {
      id: "dining",
      title: "Fine Dining Experience",
      description: "Activate 25% off at premium restaurants across India",
      points: 250,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Dining",
      icon: <Utensils className="h-5 w-5" />
    },
    {
      id: "lounge",
      title: "Airport Lounge Access",
      description: "Activate complimentary lounge access at domestic airports",
      points: 500,
      image: "https://images.unsplash.com/photo-1583418007992-a8e33a92e7ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Travel",
      icon: <Plane className="h-5 w-5" />
    },
    {
      id: "shopping",
      title: "Premium Shopping Voucher",
      description: "Activate ₹1000 shopping voucher for luxury brands",
      points: 400,
      image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Shopping",
      icon: <ShoppingBag className="h-5 w-5" />
    },
    {
      id: "movie",
      title: "Premium Movie Experience",
      description: "Activate 2 premium movie tickets at INOX",
      points: 300,
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Entertainment",
      icon: <Film className="h-5 w-5" />
    },
    {
      id: "cashback",
      title: "Credit Card Cashback",
      description: "Activate 5% cashback on your next 5 transactions",
      points: 350,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Financial",
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      id: "wellness",
      title: "Wellness Package",
      description: "Activate premium spa and gym access for a month",
      points: 600,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Lifestyle",
      icon: <Star className="h-5 w-5" />
    }
  ];
  
  // Recently activated rewards
  const recentlyActivated = [
    {
      id: "activated-1",
      title: "Amazon Gift Card",
      date: "May 28, 2025",
      points: 100,
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "activated-2",
      title: "Coffee Shop Voucher",
      date: "May 20, 2025",
      points: 50,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "activated-3",
      title: "Movie Ticket Discount",
      date: "May 15, 2025",
      points: 200,
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];
  
  // Bonus games data
  const bonusGames = [
    {
      id: "wheel",
      title: "Spin the Wheel",
      description: "Spin to win additional rewards and points",
      image: "https://images.unsplash.com/photo-1642483200566-0bf6259d9ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      maxReward: 500
    },
    {
      id: "quiz",
      title: "Financial Quiz",
      description: "Test your financial knowledge to earn bonus points",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      maxReward: 300
    },
    {
      id: "match",
      title: "Match & Earn",
      description: "Match the pairs to unlock surprise rewards",
      image: "https://images.unsplash.com/photo-1659111256866-bef5445be555?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      maxReward: 400
    }
  ];

  return (
    <div className="pt-[88px]">
      {/* Enhanced Burgundy Activation Hero */}
      <BurgundyActivationHero 
        userData={enhancedUserData}
        onActivateMore={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
      />
      
      {/* Activation Offers Section */}
      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#97144D] mb-2">Rewards Ready for Activation</h2>
              <p className="text-gray-600 max-w-2xl">
                Activate these exclusive Burgundy rewards to enjoy premium benefits and experiences tailored for you.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <span className="text-sm font-medium text-gray-500 mr-2">Filter by:</span>
              <select className="px-3 py-2 border border-gray-200 rounded-lg bg-white text-sm">
                <option value="all">All Categories</option>
                <option value="dining">Dining</option>
                <option value="travel">Travel</option>
                <option value="shopping">Shopping</option>
                <option value="entertainment">Entertainment</option>
                <option value="financial">Financial</option>
                <option value="lifestyle">Lifestyle</option>
              </select>
            </div>
          </div>
          
          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activationOffers.map((offer, index) => (
              <ActivationCard 
                key={offer.id}
                offer={offer}
                index={index}
                onSelect={onRewardSelect}
              />
            ))}
          </div>

          {/* Browse More Rewards Button */}
          <div className="flex justify-center mt-8">
            <AxisButton variant="outline" className="px-8 py-2 text-base font-medium">
              Browse More Rewards
            </AxisButton>
          </div>
        </div>
      </div>

      {/* Featured Reward */}
      <div className="bg-white py-10 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#97144D]/10 to-[#12877F]/5 rounded-xl overflow-hidden">
            <div className="md:w-1/2 p-8">
              <div className="inline-block px-3 py-1 bg-[#97144D] text-white text-xs font-medium rounded-full mb-4">
                FEATURED BURGUNDY REWARD
              </div>
              <h2 className="text-2xl font-bold mb-3 text-[#97144D]">
                Private Yacht Experience
              </h2>
              <p className="text-gray-600 mb-6">
                Enjoy an exclusive private yacht experience for you and your family at select coastal destinations. 
                This premium reward includes gourmet catering and a dedicated crew for a memorable day at sea.
              </p>
              
              <div className="flex items-center mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#97144D] h-2.5 rounded-full" style={{ width: "70%" }}></div>
                </div>
                <div className="ml-3 text-sm font-medium text-[#97144D]">17,500 / 25,000 pts</div>
              </div>
              
              <AxisButton variant="primary">
                Learn More
              </AxisButton>
            </div>
            <div className="md:w-1/2">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Private Yacht Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Recently Activated Section */}
      <div className="bg-white py-10 border-t border-b">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#97144D] mb-6">Recently Activated Rewards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentlyActivated.map((reward, index) => (
              <motion.div
                key={reward.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onRewardSelect?.(reward.id)}
              >
                <div className="h-40 relative">
                  <ImageWithFallback 
                    src={reward.image}
                    alt={reward.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-2 px-3">
                    <p className="text-white font-medium">{reward.title}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">{reward.date}</span>
                    <span className="text-sm font-medium text-[#97144D]">{reward.points} points</span>
                  </div>
                  <div className="flex items-center text-[#12877F]">
                    <Check className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">Successfully Activated</span>
                  </div>
                  <button className="mt-3 text-[#97144D] text-sm font-medium flex items-center hover:text-[#b01d5c] transition-colors">
                    View Details <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bonus Games Section */}
      <div className="bg-[#f9f3f6] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#97144D]">Bonus Games & Challenges</h2>
            <p className="text-sm font-medium text-gray-600">Earn up to 1,200 additional points</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bonusGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 relative">
                  <ImageWithFallback 
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-[#97144D] text-white text-xs font-medium px-2 py-1 rounded-full">
                    Up to {game.maxReward} pts
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{game.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{game.description}</p>
                  
                  <AxisButton 
                    variant="outline"
                    onClick={() => setActiveGameSection(game.id)}
                    fullWidth
                  >
                    Play Now
                  </AxisButton>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Games and challenges refresh every month. Complete all three to receive a special achievement badge 
              and bonus reward.
            </p>
            <AxisButton variant="outline" className="mx-auto">
              View Game History
            </AxisButton>
          </div>
        </div>
      </div>
    </div>
  );
};

// Activation Card Component
const ActivationCard = ({ offer, index, onSelect }: { offer: any; index: number; onSelect?: (rewardId: string) => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect?.(offer.id)}
    >
      <div className="relative h-48">
        <ImageWithFallback 
          src={offer.image}
          alt={offer.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        <div className="absolute top-3 left-3">
          <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
            <div className="text-[#97144D] mr-1.5">
              {offer.icon}
            </div>
            <span className="text-xs font-medium text-gray-800">{offer.category}</span>
          </div>
        </div>
        
        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-sm px-2 py-1 rounded-md">
          {offer.points} points
        </div>
      </div>
      
      <div className="p-4 relative">
        <h3 className="font-bold mb-1">{offer.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{offer.description}</p>
        
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : 0 }}
            className="h-0.5 bg-[#97144D] absolute left-0 bottom-0"
            transition={{ duration: 0.3 }}
          />
          
          <button className="text-[#97144D] text-sm font-medium flex items-center hover:text-[#b01d5c] transition-colors">
            View Details <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        
        <AxisButton variant="primary" fullWidth className="mt-3">
          <div className="flex items-center justify-center">
            <Sparkles className="h-4 w-4 mr-2" /> 
            Activate Reward
          </div>
        </AxisButton>
      </div>
    </motion.div>
  );
};