import { useState, useEffect } from "react";
import { ArrowLeft, Star, Clock, Gift, Users, Shield, Share2, Heart, ExternalLink, CheckCircle, AlertCircle, Info } from "lucide-react";
import { AxisButton } from "../components/AxisButton";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Separator } from "../components/ui/separator";
import { motion } from "framer-motion";

type UserData = {
  isLoggedIn: boolean;
  customerId?: string;
  name?: string;
  segment?: string;
  persona?: string;
};

type RewardDetailPageProps = {
  userData: UserData;
  rewardId: string;
  onBack: () => void;
  onRedeem: (rewardId: string) => void;
};

// Mock reward data - in a real app, this would come from an API
const mockRewardData = {
  "luxury-watch": {
    id: "luxury-watch",
    title: "Luxury Swiss Watch Collection",
    subtitle: "Premium Timepieces for Burgundy Members",
    description: "Discover our exclusive collection of Swiss-made luxury watches, featuring renowned brands like Omega, TAG Heuer, and Tissot. Each timepiece represents the pinnacle of craftsmanship and precision engineering.",
    longDescription: "Our Luxury Swiss Watch Collection offers Burgundy segment members access to some of the world's most prestigious timepieces. From classic dress watches to sophisticated sport chronographs, each piece in our collection has been carefully curated to represent the finest in Swiss horological tradition. These watches are not just timekeepers; they are symbols of achievement, precision, and timeless elegance.",
    pointsCost: 75000,
    originalValue: 125000,
    savings: 50000,
    category: "Luxury Goods",
    brand: "Swiss Collection",
    availability: "Limited Stock",
    rating: 4.8,
    reviewCount: 156,
    redemptionCount: 423,
    validUntil: "2024-12-31",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Swiss Made Precision Movement",
      "Sapphire Crystal Glass",
      "Water Resistant 100m",
      "Premium Leather Strap",
      "2-Year International Warranty",
      "Certificate of Authenticity"
    ],
    termsAndConditions: [
      "Valid for Burgundy segment customers only",
      "One redemption per customer per calendar year",
      "Subject to availability at time of redemption",
      "Cannot be combined with other offers",
      "Non-transferable and non-refundable",
      "Delivery within 7-10 business days"
    ],
    eligibility: {
      segment: "Burgundy",
      minBalance: 500000,
      accountAge: 12
    },
    tags: ["Premium", "Swiss Made", "Limited Edition", "Exclusive"],
    relatedRewards: ["premium-jewelry", "luxury-travel", "fine-dining"]
  },
  "premium-jewelry": {
    id: "premium-jewelry",
    title: "Premium Diamond Jewelry",
    subtitle: "Exquisite Diamond Collection",
    description: "Stunning diamond jewelry pieces crafted by master artisans.",
    longDescription: "Our premium diamond jewelry collection features exceptional pieces crafted by renowned jewelers, each piece certified and guaranteed for authenticity.",
    pointsCost: 85000,
    originalValue: 150000,
    savings: 65000,
    category: "Jewelry",
    brand: "Diamond Collection",
    availability: "In Stock",
    rating: 4.9,
    reviewCount: 89,
    redemptionCount: 234,
    validUntil: "2024-12-31",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Certified Diamonds",
      "18K Gold Setting",
      "Professional Appraisal Included",
      "Lifetime Warranty",
      "Custom Sizing Available",
      "Gift Box Included"
    ],
    termsAndConditions: [
      "Valid for Burgundy segment customers only",
      "Professional appraisal certificate included",
      "30-day exchange policy",
      "Insurance recommended",
      "Delivery within 5-7 business days"
    ],
    eligibility: {
      segment: "Burgundy",
      minBalance: 750000,
      accountAge: 18
    },
    tags: ["Certified", "18K Gold", "Premium", "Lifetime Warranty"],
    relatedRewards: ["luxury-watch", "fine-dining", "luxury-travel"]
  }
};

export const RewardDetailPage = ({ userData, rewardId, onBack, onRedeem }: RewardDetailPageProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showRedemptionModal, setShowRedemptionModal] = useState(false);

  // Scroll to top when this page mounts or rewardId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [rewardId]);
  
  // Get reward data (fallback to luxury-watch if rewardId not found)
  const reward = mockRewardData[rewardId] || mockRewardData["luxury-watch"];
  
  // Mock user points
  const userPoints = 85000;
  const canRedeem = userPoints >= reward.pointsCost;
  
  // Calculate savings percentage
  const savingsPercentage = Math.round((reward.savings / reward.originalValue) * 100);
  
  const handleRedemption = () => {
    if (canRedeem) {
      setShowRedemptionModal(true);
    }
  };
  
  const confirmRedemption = () => {
    onRedeem(reward.id);
    setShowRedemptionModal(false);
  };

  return (
    <div className="pt-[88px] min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            <AxisButton 
              variant="outline" 
              onClick={onBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back to Rewards
            </AxisButton>
            <div className="flex items-center gap-2 ml-auto">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Heart 
                  size={20} 
                  className={isLiked ? "fill-red-500 text-red-500" : "text-gray-400"} 
                />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Share2 size={20} className="text-gray-400" />
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative">
                <ImageWithFallback
                  src={reward.gallery[selectedImageIndex]}
                  alt={reward.title}
                  className="w-full h-96 object-cover rounded-xl"
                />
                <Badge className="absolute top-4 left-4 bg-[#97144D] text-white">
                  {reward.availability}
                </Badge>
                {reward.tags.includes("Limited Edition") && (
                  <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
                    Limited Edition
                  </Badge>
                )}
              </div>
              
              {/* Thumbnail Gallery */}
              {reward.gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {reward.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index 
                          ? "border-[#97144D] ring-2 ring-[#97144D]/20" 
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${reward.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{reward.category}</Badge>
                  <Badge variant="outline">{reward.brand}</Badge>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{reward.title}</h1>
                <p className="text-xl text-gray-600 mb-4">{reward.subtitle}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(reward.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                    <span className="ml-1 font-medium">{reward.rating}</span>
                  </div>
                  <span className="text-gray-500">({reward.reviewCount} reviews)</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{reward.redemptionCount} redeemed</span>
                </div>
              </div>
              
              {/* Pricing */}
              <div className="bg-gradient-to-r from-[#97144D]/5 to-[#12877F]/5 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-[#97144D]">
                      {reward.pointsCost.toLocaleString()} Points
                    </div>
                    <div className="text-sm text-gray-600">
                      Worth ₹{reward.originalValue.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-green-600">
                      Save ₹{reward.savings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      {savingsPercentage}% off
                    </div>
                  </div>
                </div>
                
                {/* Points Balance */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Your Points Balance</span>
                    <span className={canRedeem ? "text-green-600" : "text-red-600"}>
                      {userPoints.toLocaleString()} points
                    </span>
                  </div>
                  <Progress 
                    value={(userPoints / reward.pointsCost) * 100} 
                    className="h-2"
                  />
                  {!canRedeem && (
                    <div className="text-sm text-red-600 mt-1">
                      Need {(reward.pointsCost - userPoints).toLocaleString()} more points
                    </div>
                  )}
                </div>
                
                {/* Redemption Button */}
                <AxisButton
                  variant={canRedeem ? "primary" : "outline"}
                  onClick={handleRedemption}
                  disabled={!canRedeem}
                  className="w-full"
                >
                  {canRedeem ? "Redeem Now" : "Insufficient Points"}
                </AxisButton>
              </div>
              
              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} className="text-gray-400" />
                  <span>Valid until {new Date(reward.validUntil).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield size={16} className="text-gray-400" />
                  <span>Burgundy Exclusive</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Gift size={16} className="text-gray-400" />
                  <span>Gift Wrapping Available</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users size={16} className="text-gray-400" />
                  <span>{reward.redemptionCount}+ Happy Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Detailed Information Tabs */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="terms">Terms</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {reward.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {reward.longDescription}
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                {/* Eligibility */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info size={20} />
                      Eligibility
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Segment</span>
                      <Badge variant="outline">{reward.eligibility.segment}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Min Balance</span>
                      <span>₹{reward.eligibility.minBalance.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Account Age</span>
                      <span>{reward.eligibility.accountAge} months</span>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle>Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {reward.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="features" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Features & Benefits</CardTitle>
                <CardDescription>
                  Detailed features and specifications of this reward
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {reward.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="terms" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle size={20} />
                  Terms & Conditions
                </CardTitle>
                <CardDescription>
                  Please read carefully before redeeming this reward
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {reward.termsAndConditions.map((term, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border-l-4 border-[#97144D] bg-gray-50">
                      <span className="text-[#97144D] font-medium">{index + 1}.</span>
                      <span className="text-gray-700">{term}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Sample reviews */}
                    <div className="space-y-6">
                      {[
                        {
                          name: "Rajesh Kumar",
                          rating: 5,
                          date: "2 weeks ago",
                          comment: "Absolutely stunning timepiece! The quality exceeded my expectations. The delivery was prompt and the packaging was excellent."
                        },
                        {
                          name: "Priya Sharma",
                          rating: 5,
                          date: "1 month ago",
                          comment: "Perfect addition to my collection. The Swiss craftsmanship is evident in every detail. Highly recommended for Burgundy members."
                        },
                        {
                          name: "Amit Patel",
                          rating: 4,
                          date: "2 months ago",
                          comment: "Great value for points spent. The watch looks and feels premium. Only minor issue was the delivery took slightly longer than expected."
                        }
                      ].map((review, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{review.name}</span>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={14}
                                    className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                                  />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Rating Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-[#97144D]">{reward.rating}</div>
                      <div className="flex justify-center items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < Math.floor(reward.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">{reward.reviewCount} reviews</div>
                    </div>
                    
                    {/* Rating breakdown */}
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => {
                        const percentage = stars === 5 ? 75 : stars === 4 ? 20 : stars === 3 ? 3 : stars === 2 ? 1 : 1;
                        return (
                          <div key={stars} className="flex items-center gap-2 text-sm">
                            <span className="w-8">{stars}★</span>
                            <Progress value={percentage} className="flex-1 h-2" />
                            <span className="w-10 text-gray-500">{percentage}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Related Rewards */}
      <div className="bg-white border-t">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reward.relatedRewards.map((relatedId, index) => {
              const relatedReward = mockRewardData[relatedId];
              if (!relatedReward) return null;
              
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={relatedReward.image}
                      alt={relatedReward.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{relatedReward.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{relatedReward.subtitle}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#97144D]">
                        {relatedReward.pointsCost.toLocaleString()} pts
                      </span>
                      <AxisButton variant="outline" size="sm">
                        View Details
                      </AxisButton>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Redemption Confirmation Modal */}
      {showRedemptionModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-6 max-w-md w-full"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#97144D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-[#97144D]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Confirm Redemption</h3>
              <p className="text-gray-600">
                Are you sure you want to redeem this reward?
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{reward.title}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Points Required</span>
                <span className="font-medium">{reward.pointsCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Your Balance After</span>
                <span className="font-medium">{(userPoints - reward.pointsCost).toLocaleString()}</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <AxisButton
                variant="outline"
                onClick={() => setShowRedemptionModal(false)}
                className="flex-1"
              >
                Cancel
              </AxisButton>
              <AxisButton
                variant="primary"
                onClick={confirmRedemption}
                className="flex-1"
              >
                Confirm Redemption
              </AxisButton>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};