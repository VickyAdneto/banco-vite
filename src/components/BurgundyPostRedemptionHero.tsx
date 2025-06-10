import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Gift, 
  Star, 
  Clock, 
  Award, 
  ChevronRight, 
  TrendingUp, 
  Check, 
  Sparkles,
  Crown,
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Trophy,
  Zap,
  Rocket
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AxisButton } from "./AxisButton";

type BurgundyPostRedemptionHeroProps = {
  userData: {
    name?: string;
    segment?: string;
    availablePoints: number;
    rewardsRedeemed: number;
    memberSince: string; // Format: "Mar 2023"
    redemptionHistory?: {
      lastRedemption: {
        title: string;
        date: string;
        points: number;
        image?: string;
      };
      mostValuable?: {
        title: string;
        date: string;
        points: number;
        image?: string;
      };
    };
    journeyStage: "identification" | "discovery" | "redemption" | "celebration";
  };
  onExploreRewards: () => void;
  onViewHistory: () => void;
};

export const BurgundyPostRedemptionHero = ({
  userData,
  onExploreRewards,
  onViewHistory
}: BurgundyPostRedemptionHeroProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "achievements" | "insights">("overview");
  const [celebrationComplete, setCelebrationComplete] = useState(false);
  
  // Format large numbers with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  // Calculate journey progress as percentage
  const journeyStages = ["identification", "discovery", "redemption", "celebration"];
  const currentStageIndex = journeyStages.indexOf(userData.journeyStage);
  const journeyProgress = ((currentStageIndex + 1) / journeyStages.length) * 100;
  
  // Start animation when component mounts
  useEffect(() => {
    setIsAnimating(true);
    
    // Show celebratory animation after 1 second
    if (userData.journeyStage === "celebration" && !celebrationComplete) {
      const timer = setTimeout(() => {
        setCelebrationComplete(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
    
    // Auto-rotate tabs every 10 seconds
    const tabInterval = setInterval(() => {
      setActiveTab(prev => {
        if (prev === "overview") return "achievements";
        if (prev === "achievements") return "insights";
        return "overview";
      });
    }, 10000);
    
    return () => clearInterval(tabInterval);
  }, [userData.journeyStage, celebrationComplete]);
  
  // Achievements data (dummy)
  const achievements = [
    {
      title: "First Redemption",
      description: "Successfully redeemed your first reward",
      date: "April 12, 2025",
      icon: <Star className="h-5 w-5" />,
      color: "#97144D",
      completed: true
    },
    {
      title: "Burgundy Member",
      description: "Joined the exclusive Burgundy segment",
      date: "February 20, 2025",
      icon: <Crown className="h-5 w-5" />,
      color: "#97144D",
      completed: true
    },
    {
      title: "Points Milestone",
      description: "Earned 5,000+ reward points",
      date: "May 5, 2025",
      icon: <Trophy className="h-5 w-5" />,
      color: "#12877F",
      completed: true
    },
    {
      title: "Consecutive Activity",
      description: "Active for 3 months in a row",
      date: "In progress",
      icon: <Zap className="h-5 w-5" />,
      color: "#594B7E",
      completed: false
    }
  ];
  
  // Insights data (dummy)
  const insights = [
    {
      title: "Most Popular Category",
      value: "Travel",
      description: "60% of your redemptions",
      icon: <Plane className="h-5 w-5" />,
      color: "#97144D"
    },
    {
      title: "Average Redemption",
      value: "2,500 pts",
      description: "Above member average",
      icon: <TrendingUp className="h-5 w-5" />,
      color: "#12877F"
    },
    {
      title: "Redemption Frequency",
      value: "Monthly",
      description: "Better than 75% of members",
      icon: <CalendarClock className="h-5 w-5" />,
      color: "#594B7E"
    }
  ];
  
  // Recent redemptions (dummy)
  const recentRedemptions = [
    {
      title: "Airport Lounge Access",
      date: "May 28, 2025",
      points: 3500,
      image: "https://images.unsplash.com/photo-1583418007992-a8e33a92e7ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
    },
    {
      title: "Premium Dining Voucher",
      date: "May 15, 2025",
      points: 2500,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-[#97144D] to-[#b01d5c] overflow-hidden">
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative elements */}
          <motion.div 
            className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-white opacity-5"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-[-150px] left-[-150px] w-[300px] h-[300px] rounded-full bg-[#12877F] opacity-10"
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          {/* Celebration particles for celebration stage */}
          {userData.journeyStage === "celebration" && (
            <>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  initial={{ 
                    width: Math.random() * 10 + 5, 
                    height: Math.random() * 10 + 5,
                    opacity: 1,
                    x: Math.random() * window.innerWidth,
                    y: window.innerHeight
                  }}
                  animate={{ 
                    y: -100,
                    opacity: 0
                  }}
                  transition={{ 
                    duration: Math.random() * 2 + 1,
                    delay: Math.random() * 3,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 2 + 1
                  }}
                />
              ))}
            </>
          )}
          
          {/* Gift icon patterns in background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-[10%] left-[10%]">
              <Gift className="h-16 w-16 text-white" />
            </div>
            <div className="absolute top-[30%] right-[15%]">
              <Star className="h-10 w-10 text-white" />
            </div>
            <div className="absolute bottom-[20%] left-[25%]">
              <Award className="h-12 w-12 text-white" />
            </div>
          </div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
        
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="md:flex items-center md:space-x-10">
            {/* Left column - text and stats */}
            <div className="md:w-1/2 text-white mb-8 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isAnimating ? 1 : 0, y: isAnimating ? 0 : 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-2">
                  <Trophy className="h-5 w-5 mr-2" />
                  <span className="text-sm font-semibold tracking-wider">BURGUNDY POST-REDEMPTION</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  Congratulations on<br />
                  Your Redemption!
                </h1>
                
                <p className="opacity-90 mb-6 max-w-lg">
                  Welcome to your Burgundy rewards hub, {userData.name || "valued customer"}. 
                  You've unlocked premium benefits and exclusive experiences tailored to your preferences.
                </p>
                
                {/* Stats row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                  >
                    <div className="flex items-start">
                      <div className="rounded-full bg-white/20 p-2 mr-3">
                        <Gift className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm opacity-80">Available Points</p>
                        <div className="text-2xl font-bold">{formatNumber(userData.availablePoints)}</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                  >
                    <div className="flex items-start">
                      <div className="rounded-full bg-white/20 p-2 mr-3">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm opacity-80">Rewards Redeemed</p>
                        <div className="text-2xl font-bold">{userData.rewardsRedeemed}</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                  >
                    <div className="flex items-start">
                      <div className="rounded-full bg-white/20 p-2 mr-3">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm opacity-80">Member Since</p>
                        <div className="text-2xl font-bold">{userData.memberSince}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Celebration animation for celebration stage */}
                {userData.journeyStage === "celebration" && celebrationComplete && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6 border border-white/20"
                  >
                    <div className="flex items-center">
                      <div className="mr-4">
                        <Sparkles className="h-6 w-6 text-yellow-300" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">
                          You've reached the Celebration stage!
                        </p>
                        <p className="text-white/80 text-sm">
                          Unlock special Burgundy benefits and surprise rewards
                        </p>
                      </div>
                      <div>
                        <AxisButton
                          variant="secondary"
                          className="text-xs px-3 py-1.5"
                          onClick={() => {/* Open celebration details */}}
                        >
                          View Perks
                        </AxisButton>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <AxisButton 
                    variant="secondary" 
                    onClick={onExploreRewards}
                    className="flex items-center justify-center"
                  >
                    Explore More Rewards <Rocket className="ml-2 h-4 w-4" />
                  </AxisButton>
                  
                  <AxisButton 
                    variant="outline" 
                    onClick={onViewHistory}
                    className="bg-transparent border-white text-white hover:bg-white/20 flex items-center justify-center"
                  >
                    View Redemption History <ChevronRight className="ml-2 h-4 w-4" />
                  </AxisButton>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Right column - interactive card */}
            <div className="md:w-1/2">
              <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isAnimating ? 1 : 0, x: isAnimating ? 0 : 50 }}
                transition={{ duration: 0.6 }}
              >
                {/* Tabs header */}
                <div className="flex border-b">
                  <TabButton 
                    isActive={activeTab === "overview"} 
                    onClick={() => setActiveTab("overview")}
                  >
                    Journey Overview
                  </TabButton>
                  <TabButton 
                    isActive={activeTab === "achievements"} 
                    onClick={() => setActiveTab("achievements")}
                  >
                    Achievements
                  </TabButton>
                  <TabButton 
                    isActive={activeTab === "insights"} 
                    onClick={() => setActiveTab("insights")}
                  >
                    Member Insights
                  </TabButton>
                </div>
                
                {/* Tab content */}
                <div className="p-5 h-[320px]">
                  <AnimatePresence mode="wait">
                    {activeTab === "overview" && (
                      <motion.div 
                        key="overview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        <div className="mb-6">
                          <h3 className="text-[#97144D] font-bold mb-1">Your Burgundy Rewards Journey</h3>
                          <p className="text-sm text-gray-600">
                            Track your progress through the Axis Bank rewards experience
                          </p>
                        </div>
                        
                        {/* Journey Visualization */}
                        <div className="relative">
                          {/* Progress bar */}
                          <div className="h-2 bg-gray-100 rounded-full w-full mb-8">
                            <motion.div 
                              className="h-2 bg-[#97144D] rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${journeyProgress}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                          
                          {/* Stage markers */}
                          <div className="flex justify-between relative">
                            {journeyStages.map((stage, index) => {
                              const isCompleted = index <= currentStageIndex;
                              const isCurrent = index === currentStageIndex;
                              
                              return (
                                <div key={stage} className="flex flex-col items-center">
                                  <motion.div 
                                    className={`rounded-full p-2 ${
                                      isCompleted 
                                        ? "bg-[#97144D] text-white" 
                                        : "bg-gray-100 text-gray-400"
                                    } ${
                                      isCurrent ? "ring-4 ring-[#97144D]/20" : ""
                                    }`}
                                    initial={{ scale: 0.8, opacity: 0.5 }}
                                    animate={{ scale: isCurrent ? 1.2 : 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                                  >
                                    {index === 0 && <BadgeCheck className="h-5 w-5" />}
                                    {index === 1 && <Search className="h-5 w-5" />}
                                    {index === 2 && <Gift className="h-5 w-5" />}
                                    {index === 3 && <Trophy className="h-5 w-5" />}
                                  </motion.div>
                                  <div className="mt-2 text-center">
                                    <p className={`text-sm font-medium capitalize ${isCurrent ? "text-[#97144D]" : "text-gray-700"}`}>
                                      {stage}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      {index === 0 ? "Verified" : 
                                       index === 1 ? "Explored" : 
                                       index === 2 ? "Redeemed" : 
                                       "Celebrating"}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        
                        {/* Last Redemption */}
                        {userData.redemptionHistory?.lastRedemption && (
                          <div className="mt-8">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Last Redemption</h4>
                            <div className="bg-[#f9f3f6] rounded-lg p-3 flex items-center">
                              <div className="w-12 h-12 rounded-md overflow-hidden mr-3 flex-shrink-0">
                                <ImageWithFallback 
                                  src={userData.redemptionHistory.lastRedemption.image || "https://images.unsplash.com/photo-1583418007992-a8e33a92e7ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"}
                                  alt={userData.redemptionHistory.lastRedemption.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <p className="font-medium">{userData.redemptionHistory.lastRedemption.title}</p>
                                <div className="flex justify-between">
                                  <p className="text-xs text-gray-500">{userData.redemptionHistory.lastRedemption.date}</p>
                                  <p className="text-xs font-medium text-[#97144D]">
                                    {userData.redemptionHistory.lastRedemption.points.toLocaleString()} points
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Next recommended step */}
                        <div className="mt-4 flex items-center justify-between text-sm">
                          <div className="text-gray-500">
                            {userData.journeyStage === "celebration" ? (
                              <span>You've completed the rewards journey!</span>
                            ) : (
                              <span>Continue your rewards journey</span>
                            )}
                          </div>
                          <button className="text-[#97144D] font-medium flex items-center">
                            {userData.journeyStage === "celebration" ? "Start new journey" : "Next steps"} 
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                    
                    {activeTab === "achievements" && (
                      <motion.div 
                        key="achievements"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        <div className="mb-4">
                          <h3 className="text-[#97144D] font-bold mb-1">Your Burgundy Achievements</h3>
                          <p className="text-sm text-gray-600">
                            Track your milestones and earn bonus points
                          </p>
                        </div>
                        
                        <div className="space-y-3 overflow-auto" style={{ maxHeight: '240px' }}>
                          {achievements.map((achievement, index) => (
                            <motion.div
                              key={achievement.title}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                              className={`rounded-lg p-3 flex items-start border ${
                                achievement.completed 
                                  ? "bg-[#f9f3f6]/50 border-[#97144D]/20" 
                                  : "bg-gray-50 border-gray-200"
                              }`}
                            >
                              <div className={`rounded-full p-2 mr-3 flex-shrink-0 ${
                                achievement.completed 
                                  ? `bg-[${achievement.color}] text-white` 
                                  : "bg-gray-200 text-gray-500"
                              }`} style={{ backgroundColor: achievement.completed ? achievement.color : undefined }}>
                                {achievement.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <p className="font-medium">{achievement.title}</p>
                                  {achievement.completed && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: index * 0.1 + 0.3 }}
                                      className="bg-[#97144D] text-white text-xs px-2 py-0.5 rounded-full"
                                    >
                                      +100 pts
                                    </motion.div>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600">{achievement.description}</p>
                                <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        <div className="mt-4 text-center">
                          <button className="text-sm text-[#97144D] font-medium">
                            View all achievements
                          </button>
                        </div>
                      </motion.div>
                    )}
                    
                    {activeTab === "insights" && (
                      <motion.div 
                        key="insights"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-full overflow-auto"
                      >
                        <div className="mb-4">
                          <h3 className="text-[#97144D] font-bold mb-1">Your Redemption Insights</h3>
                          <p className="text-sm text-gray-600">
                            Personalized analytics about your Burgundy membership
                          </p>
                        </div>
                        
                        {/* Insights grid */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {insights.map((insight, index) => (
                            <motion.div
                              key={insight.title}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                              className="bg-gray-50 rounded-lg p-3 text-center"
                            >
                              <div 
                                className="w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2"
                                style={{ backgroundColor: `${insight.color}10`, color: insight.color }}
                              >
                                {insight.icon}
                              </div>
                              <p className="text-sm font-medium mb-1" style={{ color: insight.color }}>{insight.value}</p>
                              <p className="text-xs text-gray-600">{insight.title}</p>
                              <p className="text-xs text-gray-500">{insight.description}</p>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Recent redemptions */}
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Recent Redemptions</h4>
                        <div className="space-y-3">
                          {recentRedemptions.map((redemption, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.15 + 0.3, duration: 0.3 }}
                              className="bg-white border border-gray-100 rounded-lg shadow-sm flex items-center overflow-hidden"
                            >
                              <div className="w-16 h-16 flex-shrink-0">
                                <ImageWithFallback 
                                  src={redemption.image}
                                  alt={redemption.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="p-3 flex-1">
                                <p className="font-medium">{redemption.title}</p>
                                <div className="flex justify-between items-center">
                                  <p className="text-xs text-gray-500">{redemption.date}</p>
                                  <p className="text-xs font-medium text-[#97144D]">
                                    {redemption.points.toLocaleString()} pts
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        <div className="mt-4 flex justify-end">
                          <button className="text-sm text-[#97144D] font-medium flex items-center" onClick={onViewHistory}>
                            View complete history <ChevronRight className="h-4 w-4 ml-1" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom components
const Search = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
);

const Plane = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 4 2 2 4 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
  </svg>
);

// Tab button component
const TabButton = ({ 
  children, 
  isActive, 
  onClick 
}: { 
  children: React.ReactNode; 
  isActive: boolean; 
  onClick: () => void; 
}) => {
  return (
    <button
      className={`px-4 py-3 text-sm font-medium relative ${
        isActive ? "text-[#97144D]" : "text-gray-600 hover:text-gray-800"
      }`}
      onClick={onClick}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeTabPostRedemption"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#97144D]"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </button>
  );
};