import { useState, useEffect } from "react";
import { ArrowLeft, Star, Clock, Gift, Users, Shield, Share2, Heart, ExternalLink, CheckCircle, AlertCircle, Info, HelpCircle, ChevronUp, ChevronDown } from "lucide-react";
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
    title: "Get Flat 25% Off",
    subtitle: "Get Flat 25% Off on all Sony LIV Premium packs",
    description: "Explore Sonyliv discounts on Axis Benefits! Save on premium entertainment subscriptions for unlimited streaming of shows and movies. Subscribe now and enjoy your favorites!",
    longDescription: "Sonyliv offers a premium streaming service with a vast library of shows, movies, and sports. Enjoy high-quality entertainment on demand, anytime, anywhere.",
    thingsToNote: [
      "Please use the coupon code at the time of checkout to avail discount",
      "The coupon comes with a validity date and will not apply post expiry",
      "The discount might be applicable only on selected products or for a minimum purchase value",
      "Payment should be made by Bank's card with which you have logged in",
      "There can be a limit on the coupon code usage for each customer. Kindly read the Terms & Conditions to know more"
    ],
    pointsCost: 75000,
    originalValue: 125000,
    pointHeader: "25% off on Sony LIV Premium",
    savings: 50000,
    category: "Entertainment",
    couponCode: "ADNSONY25",
    brand: "Sony LIV",
    availability: "Limited Stock",
    rating: 4.8,
    reviewCount: 156,
    redemptionCount: 423,
    redemptionSteps: [
      "Click on https://www.sonyliv.com/subscription",
      "Choose from SonyLiv Premium Monthly, Six-Monthly or Annual Pack",
      "Apply Coupon Code at the time of checkout",
    ],
    validUntil: "2025-12-31",
    image: "https://etimg.etb2bimg.com/photo/76029910.cms",
    // gallery: [
    //   "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //   "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //   "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //   "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    // ],
    // features: [
    //   "Swiss Made Precision Movement",
    //   "Sapphire Crystal Glass",
    //   "Water Resistant 100m",
    //   "Premium Leather Strap",
    //   "2-Year International Warranty",
    //   "Certificate of Authenticity"
    // ],
    termsAndConditions: [
      "Offer is applicable on 1 month, 6 month and 12 months packs",
      "Offer valid for Burgundy customers only",
      "Offer valid till 31st December 2025",
      "Offer cannot be clubbed with any other offer",
      "Offer can only be availed through the link shared"
    ],

    eligibility: {
      segment: "Cannot be used multiple times",
      redemptionMode: "Can use online",
      clubbable: "Cannot be used with Brand offers"
    },
    tags: ["Premium", "Sony Liv", "Exclusive"],
    relatedRewards: ["premium-jewelry", "luxury-travel", "fine-dining"],
    faq: [
      {
        "question": "What is the best deal I can get using SonyLIV coupon codes?",
        "answer": "Using SonyLIV promo codes, users can save flat 25% on any of the subscription plans."
      },
      {
        "question": "How can I get a promo code for SonyLiv?",
        "answer": "Get SonyLiv promo codes and deals from Bancko, the one-stop savings destination for everything online."
      },
      {
        "question": "How to use SonyLiv coupons?",
        "answer": "Apply the coupon while purchasing a SonyLiv subscription. On the checkout page, find a box where you can enter a coupon code and hit Apply. You can get coupon codes from GrabOn."
      },
      {
        "question": "How to activate promo code on SonyLIV subscription?",
        "answer": "To activate the promo code, you need to login to Sonyliv. On the payment page, choose Gift card/Coupon code, enter the promo code, and then click Redeem."
      },
      {
        "question": "Can a SonyLIV subscription be shared?",
        "answer": "Only the Liv Premium annual and semi-annual plan users can share two screens at the same time."
      }
    ]
  },
  "premium-jewelry": {
    id: "premium-jewelry",
    title: "Flat 25% off on making charges",
    subtitle: "Flat 25% off on making charges Collection on Kalyan Jewellers.",
    description: "Stunning diamond jewelry pieces crafted by master artisans from Kalyan Jewellers.",
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
    image: "https://images.unsplash.com/photo-1652375152241-d3e62ab52b57?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
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
    relatedRewards: ["luxury-watch", "fine-dining", "luxury-travel"],
  }
};

function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0)
    return <div className="text-gray-500">No FAQs available.</div>;

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq, idx) => (
        <div key={idx} className="py-3">
          <button
            className="flex w-full items-center justify-between text-left font-semibold text-[#97144D] hover:text-[#7d1041] transition-colors focus:outline-none"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <span className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-[#97144D]" />
              {faq.question}
            </span>
            {openIndex === idx ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === idx ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <div className="text-gray-700 text-sm bg-gray-50 rounded p-3 shadow-inner">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const RewardDetailPage = ({ userData, rewardId, onBack, onRedeem }: RewardDetailPageProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showRedemptionModal, setShowRedemptionModal] = useState(false);
  const [showCouponCode, setShowCouponCode] = useState(false);

  // Scroll to top when this page mounts or rewardId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    // onRedeem(reward.id);
    setShowRedemptionModal(false);
    setShowCouponCode(true);
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
              Back to Benefits
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
                  src={reward.image}
                  alt={reward.title}
                  className="w-full h-96 object-cover rounded-xl"
                />
                {/* <Badge className="absolute top-4 left-4 bg-[#97144D] text-white">
                  {reward.availability}
                </Badge>
                {reward.tags.includes("Limited Edition") && (
                  <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
                    Limited Edition
                  </Badge>
                )} */}
              </div>
              
              {/* Thumbnail Gallery */}
              {/* {reward.gallery.length > 1 && (
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
              )} */}
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
                {/* <div className="flex items-center gap-3 mb-4">
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
                </div> */}
              </div>
              
              {/* Pricing */}
              <div className="bg-gradient-to-r from-[#97144D]/5 to-[#12877F]/5 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-[#97144D]">
                      {reward.pointHeader}
                      {/* {reward.pointsCost.toLocaleString()} Points */}
                    </div>
                    {showCouponCode && (  
                      <div className="bg-green-50 mt-4 border border-green-200 text-green-800 p-4 rounded-lg mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">Coupon Code:</span>
                          <span>{reward.couponCode}</span>
                        </div>
                      </div>
                    )}
                    {/* <div className="text-sm text-gray-600">
                      Worth ₹{reward.originalValue.toLocaleString()}
                    </div> */}
                  </div>
                  {/* <div className="text-right">
                    <div className="text-lg font-semibold text-green-600">
                      Save ₹{reward.savings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      {savingsPercentage}% off
                    </div>
                  </div> */}
                </div>
                
                {/* Points Balance */}
                <div className="mb-4">
                  {/* <div className="flex justify-between text-sm mb-1">
                    <span>Your Points Balance</span>
                    <span className={canRedeem ? "text-green-600" : "text-red-600"}>
                      {userPoints.toLocaleString()} points
                    </span>
                  </div> */}
                  {/* <Progress 
                    value={(userPoints / reward.pointsCost) * 100} 
                    className="h-2"
                  /> */}
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
                {/* <div className="flex items-center gap-2 text-sm">
                  <Gift size={16} className="text-gray-400" />
                  <span>Gift Wrapping Available</span>
                </div> */}
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
            <TabsTrigger value="redemption">Redemption Steps</TabsTrigger>
            <TabsTrigger value="terms">Terms</TabsTrigger>
            <TabsTrigger value="faq">FAQ's</TabsTrigger>
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
                  </CardContent>
                  <CardHeader>
                    <CardTitle>Brand Information</CardTitle>
                  </CardHeader>
                  <CardContent>
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
                      <span className="text-gray-600">Multiple Uses</span>
                      <Badge variant="outline">{reward.eligibility.segment}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Reddemption Mode</span>
                      <span>{reward.eligibility.redemptionMode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Clubbable</span>
                      <span>{reward.eligibility.clubbable}</span>
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

          <TabsContent value="redemption" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Redemption Steps</CardTitle>
                <CardDescription>
                  Detailed steps to redeem this reward
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  {reward.redemptionSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                      <span>{index + 1}. {step}</span>
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

          <TabsContent value="faq" className="mt-6">
            <CardContent>
              <FAQAccordion faqs={reward.faq} />
            </CardContent>
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
                      className="w-full h-full object-cover rounded-t-[10px]"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{relatedReward.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{relatedReward.subtitle}</p>
                    <div className="flex justify-between items-center">
                      {/* <span className="font-bold text-[#97144D]">
                        {relatedReward.pointsCost.toLocaleString()} pts
                      </span> */}
                      <AxisButton variant="outline" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
              {/* <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Points Required</span>
                <span className="font-medium">{reward.pointsCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Your Balance After</span>
                <span className="font-medium">{(userPoints - reward.pointsCost).toLocaleString()}</span>
              </div> */}
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