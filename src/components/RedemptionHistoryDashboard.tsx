import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Star, 
  MessageSquare, 
  ChevronRight, 
  Clock, 
  CheckCircle, 
  BarChart3, 
  ShoppingBag, 
  Gift
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type RedemptionItem = {
  id: string;
  title: string;
  brand: string;
  category: string;
  date: string;
  image: string;
  status: "Active" | "Used" | "Expired";
  feedback?: {
    rating: number;
    hasComment: boolean;
  };
};

type RedemptionHistoryDashboardProps = {
  segment?: string;
  persona?: string;
  onSelectRedemption: (redemption: RedemptionItem) => void;
};

export const RedemptionHistoryDashboard = ({
  segment = "Burgundy",
  persona = "Women",
  onSelectRedemption,
}: RedemptionHistoryDashboardProps) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<"all" | "recent" | "thisMonth">("recent");
  
  // Sample redemption history
  const redemptionHistory: RedemptionItem[] = [
    {
      id: "red1",
      title: "₹500 Discount",
      brand: "Nykaa",
      category: "Shopping",
      date: "June 1, 2025",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      status: "Active",
      feedback: {
        rating: 4,
        hasComment: true,
      },
    },
    {
      id: "red2",
      title: "Free Coffee",
      brand: "Starbucks",
      category: "Dining",
      date: "May 25, 2025",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      status: "Used",
      feedback: {
        rating: 5,
        hasComment: true,
      },
    },
    {
      id: "red3",
      title: "Premium Subscription",
      brand: "Netflix",
      category: "Entertainment",
      date: "May 18, 2025",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      status: "Active",
    },
    {
      id: "red4",
      title: "Airport Lounge Access",
      brand: "Priority Pass",
      category: "Travel",
      date: "May 10, 2025",
      image: "https://images.unsplash.com/photo-1583418007992-a8e33a92e7ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      status: "Expired",
      feedback: {
        rating: 3,
        hasComment: false,
      },
    },
    {
      id: "red5",
      title: "Gift Card",
      brand: "Amazon",
      category: "Shopping",
      date: "May 5, 2025",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      status: "Used",
      feedback: {
        rating: 5,
        hasComment: true,
      },
    },
  ];

  // Filter redemptions based on selected timeframe
  const filteredRedemptions = redemptionHistory.filter((item) => {
    if (selectedTimeframe === "all") return true;
    if (selectedTimeframe === "recent") return true; // In a real app, would filter for recent items
    if (selectedTimeframe === "thisMonth") return item.date.includes("May") || item.date.includes("June");
    return true;
  });

  // Calculate feedback stats
  const feedbackStats = {
    total: redemptionHistory.length,
    withFeedback: redemptionHistory.filter(item => item.feedback).length,
    averageRating: redemptionHistory
      .filter(item => item.feedback)
      .reduce((sum, item) => sum + item.feedback!.rating, 0) / 
      redemptionHistory.filter(item => item.feedback).length,
    topCategory: "Shopping" // In a real app, would calculate this dynamically
  };

  // Generate persona-specific recommendations based on segment and persona
  const getPersonaRecommendations = () => {
    if (segment === "Burgundy") {
      if (persona === "Women") {
        return {
          title: "Luxury Brand Discounts",
          description: "Based on your feedback, we've curated luxury brand offers for you",
          image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        };
      }
      if (persona === "Senior Citizens") {
        return {
          title: "Premium Health Services",
          description: "Exclusive health and wellness offers based on your preferences",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        };
      }
    }
    
    // Default recommendation
    return {
      title: "Personalized Rewards",
      description: "We've selected these offers based on your feedback",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    };
  };

  const recommendation = getPersonaRecommendations();

  return (
    <div className="space-y-6">
      {/* Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white rounded-lg p-4 border shadow-sm"
        >
          <div className="flex items-center mb-2">
            <div className="bg-[#f9f3f6] p-2 rounded-full mr-3">
              <Gift className="h-5 w-5 text-[#97144D]" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Redemptions</p>
              <p className="text-xl font-bold">{feedbackStats.total}</p>
            </div>
          </div>
          <div className="h-1 w-full bg-gray-100 rounded-full">
            <div 
              className="h-1 bg-[#97144D] rounded-full" 
              style={{ width: `${(feedbackStats.withFeedback / feedbackStats.total) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {feedbackStats.withFeedback} with feedback
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-white rounded-lg p-4 border shadow-sm"
        >
          <div className="flex items-center mb-2">
            <div className="bg-[#EBF9F8] p-2 rounded-full mr-3">
              <Star className="h-5 w-5 text-[#12877F]" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Average Rating</p>
              <p className="text-xl font-bold">{feedbackStats.averageRating.toFixed(1)}/5</p>
            </div>
          </div>
          <div className="flex mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star}
                className={`h-4 w-4 ${
                  star <= Math.round(feedbackStats.averageRating) 
                    ? "text-[#12877F] fill-[#12877F]" 
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-white rounded-lg p-4 border shadow-sm"
        >
          <div className="flex items-center mb-2">
            <div className="bg-gray-100 p-2 rounded-full mr-3">
              <ShoppingBag className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Top Category</p>
              <p className="text-xl font-bold">{feedbackStats.topCategory}</p>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <BarChart3 className="h-4 w-4 text-gray-400 mr-1" />
            <p className="text-xs text-gray-500">Based on your feedback and preferences</p>
          </div>
        </motion.div>
      </div>
      
      {/* Persona-based recommendation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="bg-gradient-to-r from-[#97144D]/10 to-[#12877F]/5 rounded-lg overflow-hidden border"
      >
        <div className="md:flex">
          <div className="md:w-2/3 p-5">
            <p className="text-xs text-[#97144D] font-medium mb-1">
              PERSONALIZED FOR {segment.toUpperCase()} {persona.toUpperCase()} SEGMENT
            </p>
            <h3 className="text-lg font-bold mb-2">{recommendation.title}</h3>
            <p className="text-sm text-gray-600 mb-4">
              {recommendation.description}
            </p>
            <button className="text-sm text-[#97144D] font-medium flex items-center">
              Explore recommendations <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="md:w-1/3 h-40 md:h-auto">
            <ImageWithFallback
              src={recommendation.image}
              alt="Personalized recommendation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
      
      {/* Redemption History */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Redemption History</h3>
          <div className="flex space-x-2 text-sm">
            <button 
              className={`px-3 py-1 rounded-full ${
                selectedTimeframe === "recent" 
                  ? "bg-[#97144D] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedTimeframe("recent")}
            >
              Recent
            </button>
            <button 
              className={`px-3 py-1 rounded-full ${
                selectedTimeframe === "thisMonth" 
                  ? "bg-[#97144D] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedTimeframe("thisMonth")}
            >
              This Month
            </button>
            <button 
              className={`px-3 py-1 rounded-full ${
                selectedTimeframe === "all" 
                  ? "bg-[#97144D] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedTimeframe("all")}
            >
              All
            </button>
          </div>
        </div>
        
        <div className="space-y-3">
          {filteredRedemptions.map((redemption) => (
            <RedemptionHistoryItem 
              key={redemption.id}
              redemption={redemption}
              onSelect={() => onSelectRedemption(redemption)}
            />
          ))}
          
          {filteredRedemptions.length === 0 && (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No redemptions found for this timeframe</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

type RedemptionHistoryItemProps = {
  redemption: RedemptionItem;
  onSelect: () => void;
};

const RedemptionHistoryItem = ({ redemption, onSelect }: RedemptionHistoryItemProps) => {
  // Style based on status
  let statusStyle = "bg-green-50 text-green-600";
  if (redemption.status === "Used") {
    statusStyle = "bg-gray-100 text-gray-600";
  } else if (redemption.status === "Expired") {
    statusStyle = "bg-red-50 text-red-600";
  }
  
  return (
    <motion.div 
      whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
      className="bg-white rounded-lg border p-3 flex items-center cursor-pointer"
      onClick={onSelect}
    >
      <div className="w-12 h-12 rounded-md overflow-hidden mr-3 flex-shrink-0">
        <ImageWithFallback
          src={redemption.image}
          alt={redemption.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium truncate">{redemption.title}</h4>
            <p className="text-sm text-gray-600">{redemption.brand} • {redemption.category}</p>
          </div>
          <span className={`text-xs px-2 py-0.5 rounded-full ${statusStyle}`}>
            {redemption.status}
          </span>
        </div>
        
        <div className="flex justify-between items-center mt-1">
          <div className="flex items-center">
            <Clock className="h-3 w-3 text-gray-400 mr-1" />
            <span className="text-xs text-gray-500">{redemption.date}</span>
          </div>
          
          {redemption.feedback ? (
            <div className="flex items-center">
              <div className="flex mr-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    className={`h-3 w-3 ${
                      star <= redemption.feedback!.rating 
                        ? "text-[#97144D] fill-[#97144D]" 
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              {redemption.feedback.hasComment && (
                <MessageSquare className="h-3 w-3 text-[#97144D] ml-1" />
              )}
            </div>
          ) : (
            <button className="text-xs text-[#97144D] font-medium">
              Give Feedback
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};